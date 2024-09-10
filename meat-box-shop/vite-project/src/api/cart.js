// src/api/cart.js
import axios from "axios";

// Function to add a product to the cart
export const addProductToCart = async (product, token) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/cart/add", // Backend endpoint
      { product },
      { headers: { Authorization: `Bearer ${token}` } } // Token for auth
    );
    return response.data;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};
