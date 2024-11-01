// src/pages/LoyaltyBoxSmall.jsx
import React, { useState, useContext } from "react";
import ProgressBar from "../components/loyaltyBoxShared/ProgressBar";
import BackButton from "../components/loyaltyBoxShared/BackButton";
import SelectContent from "../components/loyaltyBoxShared/SelectContent";
import ProductGrid from "../components/ProductGrid";
import Sidebar from "../components/Sidebar";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

// Hardcoded list of fish products
const fishProducts = [
  {
    id: 1,
    name: "Salmon",
    weight: "about 1 kg",
    points: 11,
    image: "/images/salmon.jpg",
  },
  {
    id: 2,
    name: "Tuna",
    weight: "about 1 kg",
    points: 9,
    image: "/images/tuna.jpg",
  },
  {
    id: 3,
    name: "Cod",
    weight: "about 1 kg",
    points: 7,
    image: "/images/cod.jpg",
  },
  {
    id: 4,
    name: "Mackerel",
    weight: "about 1 kg",
    points: 3,
    image: "/images/mackerel.jpg",
  },
];

const LoyaltyBoxSmall = () => {
  const { user } = useContext(AuthContext); // User authentication context
  const { addToCart } = useContext(CartContext); // Cart management context
  const [selectedProducts, setSelectedProducts] = useState([]); // State for selected products
  const [totalPoints, setTotalPoints] = useState(0); // State for total points
  const maxPoints = 30; // Maximum points allowed

  // Function to add a product, if within point limits and if not already added
  const handleAddProduct = (product) => {
    if (!user) {
      alert("You must be logged in to add products to the cart.");
      return;
    }

    if (selectedProducts.find((p) => p.id === product.id)) {
      alert("Product is already added to the selection.");
      return;
    }

    if (totalPoints + product.points <= maxPoints) {
      setSelectedProducts([...selectedProducts, product]);
      setTotalPoints(totalPoints + product.points);
    } else {
      alert("Cannot exceed maximum points for the box.");
    }
  };

  // Function to remove a product and update total points
  const handleRemoveProduct = (productId) => {
    const updatedProducts = selectedProducts.filter(
      (product) => product.id !== productId
    );
    const removedProduct = selectedProducts.find(
      (product) => product.id === productId
    );

    if (removedProduct) {
      setSelectedProducts(updatedProducts);
      setTotalPoints(totalPoints - removedProduct.points);
    }
  };

  // Function to handle the "Go Ahead" button click, adding products to cart
  const handleGoAheadClick = () => {
    if (!user || !user.name) {
      alert("User information is missing or invalid.");
      return;
    }

    selectedProducts.forEach((product) => {
      if (product && product.name) {
        addToCart(product);
      }
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <ProgressBar step={2} />
      <BackButton />
      <SelectContent />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <ProductGrid products={fishProducts} onAddProduct={handleAddProduct} />
        <Sidebar
          selectedProducts={selectedProducts}
          totalPoints={totalPoints}
          maxPoints={maxPoints}
          onGoAheadClick={handleGoAheadClick}
          onRemoveProduct={handleRemoveProduct}
        />
      </div>
    </>
  );
};

export default LoyaltyBoxSmall;
