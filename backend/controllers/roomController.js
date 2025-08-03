const Room = require("../models/Room");

exports.createRoom = async (req, res) => {
  // const { title, description, rent, location, amenities, availability, images } = req.body;

  try {

    const {
      title,
      description,
      rent,
      location,
      amenities,
      availability,
    } = req.body;

    // const images = req.files.map(
    //   (file) => `${req.protocol}://${req.get("host")}/uploads/${file.filename}`
    // );

    const images = req.files.map((file) => {
      return `${req.protocol}://${req.get("host")}/uploads/${file.filename}`;
    });


    console.log("Request body:", req.body);
    console.log("Request files:", req.files);


    const room = await Room.create({
      title,
      description,
      rent: Number(rent),
      location,
      amenities: Array.isArray(amenities) ? amenities : [amenities],
      amenities,
      availability,
      images,
      createdBy: req.user.id,

    });

    // const room = await Room.create({
    //   title,
    //   description,
    //   rent,
    //   location,
    //   amenities,
    //   availability,
    //   images: `/uploads/${req.file.filename}`, // store image path
    //   createdBy: req.user.id, // comes from auth middleware
    // });

    res.status(201).json({ message: "Room created successfully", room });
  } catch (err) {
    console.error("Room creation error:", err);
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


// GET /api/rooms/:id
exports.getSingleRoom = async (req, res) => {
  try {
    const room = await Room.findOne({
      _id: req.params.id,
      createdBy: req.user.id, // ensure the room belongs to this landlord
    });

    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.status(200).json(room);
  } catch (error) {
    console.error("Error fetching room:", error);
    res.status(500).json({ message: "Failed to fetch room" });
  }
};


// PUT /api/rooms/:id
exports.updateRoom = async (req, res) => {
  try {
    const updatedRoom = await Room.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.id },
      req.body,
      { new: true }
    );

    if (!updatedRoom) {
      return res.status(404).json({ message: "Room not found or not authorized" });
    }

    res.status(200).json({ message: "Room updated successfully", room: updatedRoom });
  } catch (error) {
    console.error("Error updating room:", error);
    res.status(500).json({ message: "Failed to update room" });
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