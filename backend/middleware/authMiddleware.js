// // middleware/authMiddleware.js
// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//   // Get token from "Authorization: Bearer <token>"
//   const authHeader = req.headers.authorization;
//   const token = authHeader?.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ message: "Access denied. No token provided." });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Add user payload to req object
//     next(); // Go to the next middleware/controller
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid or expired token." });
//   }
// };

// module.exports = authMiddleware;




// const jwt = require("jsonwebtoken");

// const protect = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "Unauthorized. No token provided." });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Attach user data to request
//     next(); // Continue to the next middleware/route
//   } catch (err) {
//     res.status(401).json({ message: "Unauthorized. Invalid or expired token." });
//   }
// };

// module.exports = protect;




const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id };
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
