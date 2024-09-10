import React, { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [selectedMeats, setSelectedMeats] = useState([]);

  return (
    <ShopContext.Provider
      value={{ selectedBox, setSelectedBox, selectedMeats, setSelectedMeats }}
    >
      {children}
    </ShopContext.Provider>
  );
};
