const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

exports.register = async (req, res) => {
  const { fullname, email, password, role } = req.body;

  try {
    // Check if user exists
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");

    // Create user with isVerified: false
    const newUser = await User.create({
      fullname,
      email,
      password: hashedPassword,
      role: role || "seeker", // default to "seeker" if not provided
      isVerified: false,
      verificationToken,
    });

    // Send verification email
    const verificationUrl = `http://localhost:5000/api/auth/verify-email?token=${verificationToken}`;

    await sendEmail({
      to: email,
      subject: "Verify your RoomieFinder Email",
      html: `<p>Click the link below to verify your email:</p>
             <a href="${verificationUrl}">${verificationUrl}</a>`,
    });

    res.status(201).json({
      message: "Registration successful. Please check your email to verify your account.",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find user
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // Check if email is verified
//     if (!user.isVerified) {
//       return res.status(403).json({ message: "Please verify your email before logging in." });
//     }

//     // Validate password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//     // Create JWT token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

//     res.status(200).json({
//       token,
//       user: {
//         id: user._id,
//         fullname: user.fullname,
//         email: user.email,
//         role: user.role,
//         isVerified: user.isVerified,
//       },
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };




exports.login = async (req, res) => {
  const { email, password } = req.body;

  // 1. Authenticate user
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // 2. Generate token
  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  // 3. Set token in httpOnly cookie
  res.cookie("token", token, {
    httpOnly: true,
    // secure: true,
    secure: process.env.NODE_ENV === "production", // only over HTTPS in prod  
    sameSite: "strict",
    maxAge: 1 * 1 * 5 * 60 * 1000, // 7 days
  });

  // 4. Send user info without token
  res.status(200).json({
    message: "Login successful",
    user: {
      id: user._id,
      fullname: user.fullname,
      email: user.email,
      role: user.role,
      isVerified: user.isVerified,
    },
  });
};





exports.verifyEmail = async (req, res) => {
  const { token } = req.query;

  try {
    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return res.status(400).send("Invalid or expired token.");
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    res.redirect("http://localhost:3000/verify-success"); // Frontend success page
  } catch (err) {
    console.error("Verification error:", err);
    res.status(500).send("Internal Server Error");
  }
};


exports.logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};
