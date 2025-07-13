const express = require("express");
const router = express.Router();

// Root route
router.get("/", (req, res) => {
  res.send("API is running. Go to /professional to see the professional data.");
});

module.exports = router;
