const express = require("express");
const router = express.Router();

// Mock cart data
router.get("/", (req, res) => {
  res.json({
    items: [
      { id: 1, name: "Product 1", quantity: 1 },
      { id: 2, name: "Product 2", quantity: 2 },
    ],
  });
});

module.exports = router;
