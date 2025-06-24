// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// ////////


// const crypto = require("crypto");
// const sendEmail = require("../utils/sendEmail");

// const verificationToken = crypto.randomBytes(32).toString("hex");
// const verificationUrl = `http://localhost:3000/verify-email?token=${verificationToken}`;

// await User.create({ ...userInfo, verificationToken });
// await sendEmail({
//   to: email,
//   subject: "Verify your RoomieFinder Email",
//   html: `<a href="${verificationUrl}">Click to verify your account</a>`,
// });


// ////////
// exports.register = async (req, res) => {
//   const { fullname, email, password } = req.body;

//   try {
//     const exists = await User.findOne({ email });
//     if (exists) return res.status(400).json({ message: "User already exists" });

//     const hashed = await bcrypt.hash(password, 10);
//     const newUser = await User.create({ fullname, email, password: hashed });
//     res.status(201).json({ message: "Registered", user: newUser });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
//     res.json({ token, user: { id: user._id, fullname: user.fullname, email: user.email } });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };




const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

exports.register = async (req, res) => {
  const { fullname, email, password } = req.body;

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
      isVerified: false,
      verificationToken,
    });

    // Send verification email
    // const verificationUrl = `http://localhost:3000/verify-email?token=${verificationToken}`;
    // http://localhost:5000/api/auth/verify-email?token=abcdef123456
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

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check if email is verified
    if (!user.isVerified) {
      return res.status(403).json({ message: "Please verify your email before logging in." });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    // Create JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({
      token,
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
