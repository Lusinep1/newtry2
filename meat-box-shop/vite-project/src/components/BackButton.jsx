// src/components/BackButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        backgroundColor: "transparent",
        border: "none",
        color: "#333",
        fontWeight: "bold",
        fontSize: "16px",
        cursor: "pointer",
        margin: "20px",
      }}
    >
      &lt; Back
    </button>
  );
}

export default BackButton;
