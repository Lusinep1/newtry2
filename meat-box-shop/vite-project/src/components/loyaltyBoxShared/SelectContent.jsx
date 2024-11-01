// src/components/loyaltyBoxShared/SelectContent.jsx
import React from "react";

function SelectContent() {
  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <h2 style={styles.heading}>Select content</h2>
        <ul style={styles.list}>
          <li>You have 30 points to choose eco meat and delicacies for!</li>
          <li>Hungry? In the checkout you can add more meat & delicacies.</li>
          <li>You can of course change your choices for the next delivery.</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: "50px",
    width: "100%", // Full width of the screen
    backgroundColor: "#f5f5dc", // Beige background color
    padding: "20px 0", // Vertical padding
  },
  innerContainer: {
    maxWidth: "1200px", // Optional: Limit the width of the content
    margin: "0 auto", // Center content horizontally
    padding: "0 20px", // Add horizontal padding
  },
  heading: {
    fontSize: "28px",
    color: "#4e4e4e",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  list: {
    fontSize: "18px",
    color: "#4e4e4e",
    lineHeight: "1.6",
  },
};

export default SelectContent;
