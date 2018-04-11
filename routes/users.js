const express = require("express");
const router = express.Router();

// Register
router.get("/register", (req, res, next) => {
  res.send("REGISTER");
});

// Authentication
router.post("/authentication", (req, res, next) => {
  res.send("AUTHENTICATION");
});

// Profile
router.get("/profile", (req, res, next) => {
  res.send("PROFILE");
});

// Validate
router.get("/validate", (req, res, next) => {
  res.send("VALIDATE");
});

module.exports = router;
