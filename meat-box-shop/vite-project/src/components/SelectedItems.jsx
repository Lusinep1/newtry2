// src/components/SelectedItems.jsx
import React from "react";

function SelectedItems({ selectedFish }) {
  return (
    <div className="selected-items">
      <h4>My Choices</h4>
      <ul>
        {selectedFish.map((fish, index) => (
          <li key={index}>
            {fish.name} - {fish.weight} kg ({fish.points} points)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectedItems;
