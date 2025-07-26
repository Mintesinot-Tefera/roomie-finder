const express = require("express");
const router = express.Router();
const { createRoom, getRoom } = require("../controllers/roomController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createRoom); // POST /api/rooms
router.get("/landlord", authMiddleware, getRoom); // GET /api/rooms


module.exports = router;