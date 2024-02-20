const express = require("express");
const router = express.Router();

// Users routes
// Users list
router.get("/", (req, res) => {
  res.send("Users List: []");
});

// Create new user route
router.get("/new", (req, res) => {
  // I just learned by myself that you can create HTML elements using the send method like the input below
  res.send("Create New User: <input />");
});

module.exports = router;
