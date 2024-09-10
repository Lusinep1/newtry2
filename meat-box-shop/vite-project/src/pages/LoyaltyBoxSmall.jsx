// // src/pages/LoyaltyBoxSmall.jsx
// import React from "react";
// import ProgressBar from "../components/ProgressBar";
// import BackButton from "../components/BackButton";
// import SelectContent from "../components/SelectContent";

// src/pages/LoyaltyBoxSmall.jsx
import React, { useState, useContext } from "react";
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
    image: "/images/salmon.png",
  },
  {
    id: 2,
    name: "Tuna",
    weight: "about 1 kg",
    points: 9,
    image: "/images/tuna.png",
  },
  {
    id: 3,
    name: "Cod",
    weight: "about 1 kg",
    points: 7,
    image: "/images/cod.png",
  },
  {
    id: 4,
    name: "Mackerel",
    weight: "about 1 kg",
    points: 3,
    image: "/images/mackerel.png",
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
    <div className="loyalty-box">
      <div className="product-list">
        <ProductList
          products={fishProducts}
          onAddProduct={handleAddProduct}
          onRemoveProduct={handleRemoveProduct}
          selectedProducts={selectedProducts}
        />
      </div>
      <div className="sidebar">
        <MyChoices selectedProducts={selectedProducts} />
        <PointsTracker currentPoints={totalPoints} maxPoints={maxPoints} />
        <GoAheadButton
          active={totalPoints === maxPoints}
          onClick={handleGoAheadClick}
        />
      </div>
    </div>
  );
};

export default LoyaltyBoxSmall;
