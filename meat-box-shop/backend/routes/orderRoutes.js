const express = require("express");
const { createOrder, getOrders } = require("../controllers/orderController");

const router = express.Router();

router.post("/", createOrder); // POST /api/orders to place a new order
router.get("/", getOrders); // GET /api/orders to fetch all orders (admin)

module.exports = router;
