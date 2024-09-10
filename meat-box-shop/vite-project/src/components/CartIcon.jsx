import React from "react";
import { Link } from "react-router-dom";

function CartIcon() {
  const cartItems = 3; // This should eventually come from a global state or context

  return (
    <div style={styles.cartIcon}>
      <Link to="/cart">
        🛒
        {cartItems > 0 && <span style={styles.cartCount}>{cartItems}</span>}
      </Link>
    </div>
  );
}

const styles = {
  cartIcon: {
    position: "relative",
    fontSize: "24px",
  },
  cartCount: {
    position: "absolute",
    top: "-10px",
    right: "-10px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "14px",
  },
};

export default CartIcon;
