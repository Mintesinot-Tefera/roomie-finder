// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// exports.registerUser = async (req, res) => {
//   const { fullname, email, password } = req.body;
//   const hashed = await bcrypt.hash(password, 10);
//   const user = new User({ fullname, email, password: hashed });
//   await user.save();
//   res.status(201).json({ message: "User registered" });
// };

// exports.loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (!user) return res.status(404).json({ error: "User not found" });

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

//   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
//   res.json({ token, fullname: user.fullname });
// };
