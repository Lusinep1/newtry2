// src/components/PointsTracker.jsx
import React from "react";

const PointsTracker = ({ currentPoints, maxPoints }) => {
  return (
    <div className="points-tracker">
      <p>
        {currentPoints} out of {maxPoints} points used
      </p>
    </div>
  );
};

export default PointsTracker;
