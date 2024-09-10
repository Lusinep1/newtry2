// src/pages/Account.jsx
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

function Account() {
  const { user, logoutUser } = useContext(AuthContext);
  const { cartItems = [], removeFromCart } = useContext(CartContext); // Ensure cartItems is an array

  if (!user) {
    return (
      <div style={styles.container}>
        <h2>You are not logged in</h2>
        <p>Please log in to view your account details.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>Welcome to Your Account, {user.name}!</h2>
      <p>Here you can view and edit your account details.</p>

      <h3>Your Cart</h3>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.weight} - {item.points} points
              <button onClick={() => removeFromCart(item.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No items in your cart</p>
        )}
      </ul>

      <button onClick={logoutUser}>Logout</button>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
};

export default Account;
