const express = require("express");
const { register, login } = require("../controllers/authController");
const router = express.Router();
const User = require("../models/User");
// const passport = require("passport");
// const jwt = require("jsonwebtoken");



router.post("/register", register);
router.post("/login", login);


// router.get("/verify-email", async (req, res) => {
//   const { token } = req.query;
//   const user = await User.findOne({ verificationToken: token });

//   if (!user) return res.status(400).send("Invalid token");

//   user.isVerified = true;
//   user.verificationToken = undefined;
//   await user.save();

//   res.send("Email verified successfully!");
// });




// Email verification route
router.get("/verify-email", async (req, res) => {
    const { token } = req.query;

    try {
        const user = await User.findOne({ verificationToken: token });

        if (!user) {
            return res.status(400).send("Invalid or expired token.");
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        await user.save();

        // Redirect to frontend confirmation page
        res.redirect("http://localhost:3000/verify-success");
    } catch (err) {
        console.error("Verification error:", err);
        res.status(500).send("Internal Server Error");
    }
});




// // Start Google Login
// router.get("/google", passport.authenticate("google", {
//     scope: ["profile", "email"]
// }));

// // Google Callback
// router.get("/google/callback", passport.authenticate("google", {
//     failureRedirect: "http://localhost:3000/signin"
// }), (req, res) => {
//     // Generate token
//     const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

//     // Redirect to frontend with token
//     res.redirect(`http://localhost:3000?token=${token}`);
// });

module.exports = router;









