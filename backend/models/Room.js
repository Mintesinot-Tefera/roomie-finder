const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  rent: { type: Number, required: true },
  location: { type: String, required: true },
  amenities: [String],
  availability: { type: String, enum: ["true", "false"], default: "true" },
  images: [String], // URLs or base64
  // images: String, // URLs or base64
 
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

module.exports = mongoose.model("Room", roomSchema);
