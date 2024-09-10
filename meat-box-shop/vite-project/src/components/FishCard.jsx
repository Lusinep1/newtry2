// src/components/FishCard.jsx
import React from "react";

function FishCard({ fish, onAdd }) {
  return (
    <div className="fish-card">
      <h3>{fish.name}</h3>
      <p>{fish.weight} kg</p>
      <p>{fish.points} points</p>
      <button onClick={() => onAdd(fish)}>Add to Selection</button>
    </div>
  );
}

export default FishCard;
