const express = require("express");
const router = express.Router();
const { createRoom, getRoom,
    getSingleRoom,
    updateRoom, deleteRoom } = require("../controllers/roomController");

const authMiddleware = require("../middleware/authMiddleware");

const upload = require("../utils/upload"); // multer config (single image)




router.post("/", authMiddleware, upload.array("images", 5), createRoom); // POST /api/rooms
// router.post("/", authMiddleware, upload.single("image"), createRoom); // POST /api/rooms
router.get("/landlord", authMiddleware, getRoom); // GET /api/rooms



// Edit-specific routes
router.get("/:id", authMiddleware, getSingleRoom);
router.put("/:id", authMiddleware, updateRoom);

router.delete('/:id', authMiddleware, deleteRoom);



module.exports = router;