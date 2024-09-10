// src/components/HeaderSection.jsx
import React from "react";
import ProgressBar from "./ProgressBar";

function HeaderSection({ currentStep }) {
  return (
    <div style={styles.headerContainer}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>
          Buy an organic meat subscription from Swedish farms with careful
          animal husbandry.
        </h1>
        <p style={styles.subtitle}>
          Enjoy tasty meat from the farm to your kitchen - an opportunity to
          choose the best for both the taste buds and the animals.
        </p>
      </div>
      <ProgressBar step={currentStep} />
    </div>
  );
}

const styles = {
  headerContainer: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  textContainer: {
    width: "50%",
    marginBottom: "50px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "18px",
    color: "#666",
  },
};

export default HeaderSection;
