import React from "react";

const ProductList = ({
  products,
  onAddProduct,
  onRemoveProduct,
  selectedProducts,
}) => {
  return (
    <div className="product-list">
      {products.map((product) => {
        const isSelected = selectedProducts.some(
          (item) => item.id === product.id
        );
        return (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.weight}</p>
            <p>{product.points} poäng</p>
            {isSelected ? (
              <button onClick={() => onRemoveProduct(product.id)}>
                Remove
              </button>
            ) : (
              <button onClick={() => onAddProduct(product)}>Add</button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
