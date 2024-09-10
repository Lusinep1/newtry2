import React from "react";

const GoAheadButton = ({ active, onClick }) => {
  return (
    <button
      className={`go-ahead-button ${active ? "active" : "inactive"}`}
      onClick={onClick}
      disabled={!active}
    >
      GO AHEAD
    </button>
  );
};

export default GoAheadButton;
