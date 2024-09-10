const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  const { userId, selectedFish, totalPoints, address } = req.body;

  try {
    const newOrder = new Order({
      userId,
      selectedFish,
      totalPoints,
      address,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to place order." });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("userId", "email"); // Populate user details
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders." });
  }
};
