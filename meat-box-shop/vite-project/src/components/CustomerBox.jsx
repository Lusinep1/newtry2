// src/components/CustomerBox.jsx
import React from "react";
import Button from "./Button"; // Import the Button component

function CustomerBox() {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src="/images/customerbox.jpg"
          alt="The regular customer box"
          style={styles.image}
        />
      </div>
      <div style={styles.textContainer}>
        <h2 style={styles.title}>The regular customer box</h2>
        <p style={styles.description}>
          Subscribe to our most popular meat box and enjoy everyday food and
          select details only for subscribers. From the farm to your home.
        </p>
        <ul style={styles.features}>
          <li style={styles.featureItem}>✔️ You choose the content</li>
          <li style={styles.featureItem}>✔️ Organic & KRAV-labelled</li>
          <li style={styles.featureItem}>✔️ No binding period</li>
        </ul>
        <p style={styles.price}>Fr. SEK 1,395</p>
        {/* Replace the anchor tag with the new Button component */}
        <Button variant="contained" color="warning" href="/loyaltybox-start">
          READ MORE
        </Button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    maxWidth: "1200px",
    margin: "20px auto",
  },
  imageContainer: {
    flex: "1 1 50%",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
  textContainer: {
    flex: "1 1 50%",
    marginLeft: "30px",
  },
  title: {
    fontSize: "40px",
    color: "#4e4e4e",
  },
  description: {
    fontSize: "24px",
    color: "#4e4e4e",
  },
  features: {
    listStyleType: "none",
    padding: "0",
  },
  featureItem: {
    fontSize: "16px",
    color: "#4e4e4e",
    marginBottom: "5px",
  },
  price: {
    fontSize: "22px",
    color: "green",
    marginBottom: "15px",
    fontWeight: "bold",
  },
};

export default CustomerBox;
