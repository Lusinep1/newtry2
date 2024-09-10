// src/components/HeroSection.jsx
import React from "react";

function HeroSection({ imageUrl, title, subtitle, quote, author }) {
  const sectionStyle = {
    position: "relative",
    color: "#fff",
    textAlign: "left",
  };

  const overlayStyle = {
    position: "absolute",
    top: "50%",
    left: "5%",
    transform: "translateY(-50%)",
    zIndex: 2,
  };

  const imageStyle = {
    width: "100%",
    height: "90vh",
  };

  return (
    <div style={sectionStyle}>
      <img src={imageUrl} alt="Hero Background" style={imageStyle} />
      <div style={overlayStyle}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>{title}</h1>
        <p style={{ fontSize: "18px", marginTop: "10px" }}>{subtitle}</p>
        <p style={{ fontSize: "16px", fontStyle: "italic", marginTop: "20px" }}>
          "{quote}"
        </p>
        <p style={{ fontSize: "14px", fontWeight: "bold" }}>- {author}</p>
      </div>
    </div>
  );
}

export default HeroSection;
