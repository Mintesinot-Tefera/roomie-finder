const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
  // Common fields for all users
  fullname: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role:     { type: String, enum: ["admin", "landlord", "seeker"], default: "seeker" },
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String },

  // Optional: profile image and bio
  profileImage: { type: String },
  bio:          { type: String },

  // Admin-specific (no extra fields for now, handled by role)
  
  // Landlord-specific
  companyName:  { type: String },        // optional for landlords
  officePhone:  { type: String },
  landlordRating: { type: Number, default: 0 },

  // Seeker-specific
  gender:  { type: String, enum: ["Male", "Female"] },
  age:     { type: Number },
  budget:  { type: Number },
  location: { type: String },

  // Notifications or flags (optional)
  isSuspended: { type: Boolean, default: false },
  flagged:     { type: Boolean, default: false },

}, { timestamps: true });userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};




module.exports = mongoose.model("User", userSchema);





// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   fullname: String,
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   gender: String,
//   age: Number,
//   budget: Number,
//   location: String,
//   bio: String,
//   imageUrls: [String],
//   role: { type: String, default: "user" },
//   isVerified: { type: Boolean, default: false },
//   verificationToken: String,
// }, { timestamps: true });

// module.exports = mongoose.model("User", userSchema);

