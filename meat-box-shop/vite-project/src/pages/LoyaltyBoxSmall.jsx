// src/pages/LoyaltyBoxSmall.jsx
import React, { useState, useContext } from "react";
import ProgressBar from "../components/ProgressBar";
import BackButton from "../components/BackButton";
import SelectContent from "../components/SelectContent";
import ProductList from "../components/ProductList";
import PointsTracker from "../components/PointsTracker";
import MyChoices from "../components/MyChoices";
import GoAheadButton from "../components/GoAheadButton";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

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
  const { user } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const maxPoints = 30;

  const handleAddProduct = (product) => {
    if (!user) {
      console.error("You must be logged in to add products to the cart.");
      return;
    }

    if (totalPoints + product.points <= maxPoints) {
      setSelectedProducts([...selectedProducts, product]);
      setTotalPoints(totalPoints + product.points);
    } else {
      console.error("Cannot exceed maximum points for the box.");
    }
  };

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

  const handleGoAheadClick = () => {
    if (!user || !user.name) {
      console.error("User information is missing or invalid.");
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            width: "65%",
          }}
        >
          {fishProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#fff",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
              <h3 style={{ margin: "10px 0", fontSize: "1.2rem" }}>
                {product.name}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#777" }}>
                {product.weight} - {product.points} points
              </p>
              <button
                style={{
                  backgroundColor: "orange",
                  border: "none",
                  color: "white",
                  padding: "10px 15px",
                  fontSize: "1rem",
                  cursor: "pointer",
                  borderRadius: "0 0 8px 8px",
                  transition: "background-color 0.3s ease",
                }}
                onClick={() => handleAddProduct(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div
          style={{
            width: "30%",
            padding: "20px",
            backgroundColor: "#f7f7f7",
            border: "1px solid #ccc",
            borderRadius: "8px",
            height: "fit-content",
          }}
        >
          <MyChoices selectedProducts={selectedProducts} />
          <PointsTracker currentPoints={totalPoints} maxPoints={maxPoints} />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <GoAheadButton
              active={totalPoints === maxPoints}
              onClick={handleGoAheadClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoyaltyBoxSmall;
