import React from "react";

const MyChoices = ({ selectedProducts }) => {
  return (
    <div className="my-choices">
      <h3>My Choices</h3>
      <ul>
        {selectedProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.weight} ({product.points} poäng)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyChoices;
