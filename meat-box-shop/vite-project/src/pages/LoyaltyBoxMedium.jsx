// src/pages/LoyaltyBoxMedium.jsx
import React from "react";
import ProgressBar from "../components/ProgressBar";
import BackButton from "../components/BackButton";
import SelectContent from "../components/SelectContent";

function LoyaltyBoxMedium() {
  return (
    <div>
      <BackButton />
      <ProgressBar step={2} />
      <SelectContent />
    </div>
  );
}

export default LoyaltyBoxMedium;