const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: String,
  age: Number,
  budget: Number,
  location: String,
  bio: String,
  imageUrls: [String],
  role: { type: String, default: "user" },
  isVerified: { type: Boolean, default: false },
  verificationToken: String,
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
