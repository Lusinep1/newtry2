// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null); // Store token

  // Optionally persist the user session and token
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
    }
  }, []);

  // Function to log in and store user and token
  const loginUser = async (credentials) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        credentials
      );
      const { user, token } = response.data;

      setUser(user);
      setToken(token);
      localStorage.setItem("user", JSON.stringify(user)); // Store in localStorage
      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Login failed: ", error.response?.data || error.message);
    }
  };

  // Log out function to clear user session and token
  const logoutUser = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
