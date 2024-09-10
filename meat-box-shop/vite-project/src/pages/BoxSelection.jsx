import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function BoxSelection() {
  const { selectedBox, setSelectedBox, selectedMeats, setSelectedMeats } =
    useContext(ShopContext);

  const handleBoxSelect = (box) => {
    setSelectedBox(box);
  };

  const handleMeatSelect = (meat) => {
    setSelectedMeats([...selectedMeats, meat]);
  };

  return (
    <div>
      <h1>Select Your Box</h1>
      {/* Example box selection */}
      <button onClick={() => handleBoxSelect("small")}>Small Box</button>
      <button onClick={() => handleBoxSelect("medium")}>Medium Box</button>
      <button onClick={() => handleBoxSelect("large")}>Large Box</button>

      {/* Example meat selection */}
      <button onClick={() => handleMeatSelect("chicken")}>Add Chicken</button>
      <button onClick={() => handleMeatSelect("beef")}>Add Beef</button>

      <div>
        <h2>Selected Box: {selectedBox}</h2>
        <h2>Selected Meats: {selectedMeats.join(", ")}</h2>
      </div>
    </div>
  );
}

export default BoxSelection;
