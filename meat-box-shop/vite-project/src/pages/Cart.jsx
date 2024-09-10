// src/pages/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  return (
    <div style={styles.container}>
      <h2>{user ? `Welcome, ${user.name}!` : "Your Shopping Cart"}</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul style={styles.list}>
          {cart.map((item) => (
            <li key={item.id} style={styles.item}>
              <span>{item.name}</span>
              <span>
                {item.quantity} x ${item.price ? item.price.toFixed(2) : "0.00"}
              </span>
              <button
                style={styles.removeButton}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <button style={styles.button}>Proceed to Checkout</button>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 0",
  },
  removeButton: {
    marginLeft: "10px",
    padding: "5px 10px",
    cursor: "pointer",
    color: "white",
    backgroundColor: "red",
    border: "none",
    borderRadius: "5px",
  },
  button: {
    padding: "10px 20px",
    marginTop: "20px",
    cursor: "pointer",
  },
};

export default Cart;
