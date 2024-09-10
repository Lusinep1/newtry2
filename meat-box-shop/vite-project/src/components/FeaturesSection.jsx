// src/components/FeaturesSection.jsx
import React from "react";

function FeaturesSection() {
  return (
    <div style={styles.container}>
      <div style={styles.item}>
        <span style={styles.checkmark}>✔️</span>
        <span>Organic chicken and grass-fed meat</span>
      </div>
      <div style={styles.item}>
        <span style={styles.checkmark}>✔️</span>
        <span>From Swedish farms</span>
      </div>
      <div style={styles.item}>
        <span style={styles.checkmark}>✔️</span>
        <span>Home delivery to your door</span>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-evenly", // Evenly distribute the items across the container
    alignItems: "center",
    flexWrap: "wrap",
    maxWidth: "100%",
    margin: "20px auto",
    padding: "0 20px",
  },
  item: {
    display: "flex",
    alignItems: "center",
    margin: "10px",
    textAlign: "center",
    fontSize: "18px",
  },
  checkmark: {
    marginRight: "8px",
    color: "green",
  },
};

export default FeaturesSection;
