const Room = require("../models/Room");

exports.createRoom = async (req, res) => {
  const { title, description, rent, location, amenities, availability, images } = req.body;

  try {
    const room = await Room.create({
      title,
      description,
      rent,
      location,
      amenities,
      availability,
      images,
      createdBy: req.user.id, // comes from auth middleware
    });

    res.status(201).json({ message: "Room created successfully", room });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
