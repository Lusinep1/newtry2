// src/pages/LoyaltyBoxGreat.jsx
import React from "react";
import ProgressBar from "../components/loyaltyBoxShared/ProgressBar";
import BackButton from "../components/loyaltyBoxShared/BackButton";
import SelectContent from "../components/loyaltyBoxShared/SelectContent";

function LoyaltyBoxGreat() {
  return (
    <div>
      <BackButton />
      <ProgressBar step={2} />
      <SelectContent />
    </div>
  );
}

export default LoyaltyBoxGreat;
