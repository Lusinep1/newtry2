import React from "react";
import ProductCard from "./ProductCard";
import styles from "./LoyaltyBoxSmall.module.css";

const ProductGrid = ({ products, onAddProduct }) => {
  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddProduct={onAddProduct}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
