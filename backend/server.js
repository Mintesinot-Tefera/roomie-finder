// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/users', require('./routes/userRoutes'));
// // Add more routes (rooms, roommates) later

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     app.listen(process.env.PORT, () =>
//       console.log(`Server running on http://localhost:${process.env.PORT}`)
//     );
//   })
//   .catch((err) => console.error(err));



require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();


// const notFoundHandler = require("./middlewares/notFoundHandler");
// app.use(notFoundHandler);

// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000", // ✅ frontend origin
    credentials: true,              // ✅ allow cookies to be sent
  })
);
app.use(express.json());

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/dashboard", require("./routes/dashboardRoutes"));
app.use("/api/user", require("./routes/userRoutes"));


const roomRoutes = require("./routes/roomRoutes");
app.use("/api/rooms", roomRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));






// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const session = require("express-session");
// const passport = require("passport");
// const connectDB = require("./config/db");

// require("./config/passport"); // 👈 Import passport config

// const app = express();
// connectDB();

// // Middleware
// app.use(cors({
//   origin: "http://localhost:3000",
//   credentials: true,
// }));
// app.use(express.json());

// app.use(session({
//   secret: "roomiefinder-secret",
//   resave: false,
//   saveUninitialized: false,
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// // Routes
// app.use("/api/auth", require("./routes/authRoutes"));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
