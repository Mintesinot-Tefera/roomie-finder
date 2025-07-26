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

exports.getRoom = async (req, res) => {
  try {
    const landlordId = req.user.id; // from token middleware
    const rooms = await Room.find({ createdBy: landlordId }).sort({ createdAt: -1 });
    res.status(200).json(rooms);
  } catch (error) {
    console.error("Error fetching landlord rooms:", error);
    res.status(500).json({ message: "Failed to fetch rooms" });
  }
};


// router.get("/my-rooms", verifyToken, async (req, res) => {
//   try {
//     const rooms = await Room.find({ createdBy: req.user.id }).sort({ createdAt: -1 });
//     res.json({ rooms });
//   } catch (err) {
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// });