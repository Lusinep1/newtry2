import React from "react";
import Button from "./Button"; // Assuming you have a Button component
import styles from "./LoyaltyBoxSmall.module.css";

const ProductCard = ({ product, onAddProduct }) => {
  return (
    <div className={styles.productCard}>
      <img
        src={product.image}
        alt={product.name}
        className={styles.productImage}
      />
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productWeight}>
        {product.weight} - {product.points} points
      </p>
      <Button onClick={() => onAddProduct(product)} text="Add to Cart" />
    </div>
  );
};

export default ProductCard;
