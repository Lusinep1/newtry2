// src/components/LoyaltyBoxCard.jsx
import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function LoyaltyBoxCard({ size, price, people, weight, description }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (size === "Small") {
      navigate("/loyaltybox-small");
    } else if (size === "Between") {
      navigate("/loyaltybox-medium");
    } else if (size === "Great") {
      navigate("/loyaltybox-great");
    }
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{size}</h2>
      <p style={styles.people}>{people} people</p>
      <p style={styles.weight}>about {weight} kg</p>
      <p style={styles.description}>{description}</p>
      <p style={styles.price}>SEK {price}</p>
      <Button
        variant="contained"
        color="warning"
        sx={{ padding: "10px 20px" }}
        onClick={handleButtonClick}
      >
        Choose {size}
      </Button>
    </div>
  );
}

const styles = {
  card: {
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  people: {
    fontSize: "16px",
    color: "#666",
  },
  weight: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "10px",
  },
  description: {
    fontSize: "14px",
    color: "#888",
    marginBottom: "20px",
  },
  price: {
    fontSize: "20px",
    color: "green",
    marginBottom: "15px",
    fontWeight: "bold",
  },
};

export default LoyaltyBoxCard;
