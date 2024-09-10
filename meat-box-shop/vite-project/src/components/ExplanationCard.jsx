// src/components/ExplanationCard.jsx
import React from "react";

function ExplanationCard() {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>This is how the Loyalty Box works</h2>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <strong>Choose the size of the box</strong>
          <p>
            How much meat do you want to buy? The different sizes give a
            different number of points to choose meat and delicacies for.
          </p>
        </li>
        <li style={styles.listItem}>
          <strong>Fill the box with Swedish meat and food crafts</strong>
          <p>
            Take your pick from the range of fresh Swedish organic meat and
            delicacies such as Swedish charcuterie and cheese. Always the best
            of the season!
          </p>
        </li>
        <li style={styles.listItem}>
          <strong>Choose how often you want to receive the box</strong>
          <p>
            No binding period. You can pause your box until the week before
            delivery.
          </p>
        </li>
      </ol>
    </div>
  );
}

const styles = {
  card: {
    padding: "20px",
    backgroundColor: "#f5f5dc", // Matching the beige background
    borderRadius: "8px",
    textAlign: "left", // Align text to the left
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "40px",
  },
  title: {
    fontSize: "28px", // Slightly larger font size
    marginBottom: "20px", // More space between title and content
    color: "#4e4e4e",
    fontWeight: "bold",
  },
  list: {
    paddingLeft: "20px", // Indentation for the list
    listStyleType: "decimal",
    color: "#4e4e4e",
  },
  listItem: {
    fontSize: "18px",
    marginBottom: "20px", // Space between list items
  },
};

export default ExplanationCard;
