// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const passport = require("passport");
// const User = require("../models/User");

// passport.use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: "/api/auth/google/callback",
// }, async (accessToken, refreshToken, profile, done) => {
//   const { email, name } = profile._json;

//   let user = await User.findOne({ email });

//   if (!user) {
//     user = await User.create({
//       fullname: name,
//       email,
//       isVerified: true,
//       password: "", // optional
//       authProvider: "google",
//     });
//   }

//   return done(null, user);
// }));

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   const user = await User.findById(id);
//   done(null, user);
// });
