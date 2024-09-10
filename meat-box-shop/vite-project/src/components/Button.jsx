// src/components/Button.jsx
import React from "react";

function Button({
  children,
  onClick,
  href,
  variant = "contained",
  color = "warning",
  sx = {},
}) {
  const baseStyles = {
    display: "inline-block",
    fontWeight: "bold",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "16px",
    padding: "10px 20px",
    cursor: "pointer",
    border: "none", // Remove any border
    outline: "none", // Remove the default focus outline
    transition: "box-shadow 0.3s ease", // Smooth transition for focus state
    ...sx,
  };

  const containedStyles = {
    backgroundColor: color === "warning" ? "#f68b1e" : "#4e4e4e",
    color: "#fff",
  };

  const styles =
    variant === "contained"
      ? { ...baseStyles, ...containedStyles }
      : baseStyles;

  const Element = href ? "a" : "button";

  return (
    <Element
      href={href}
      onClick={onClick}
      style={styles}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e55b13")}
      onMouseOut={(e) =>
        (e.currentTarget.style.backgroundColor =
          containedStyles.backgroundColor)
      }
      onFocus={(e) =>
        (e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0, 123, 255, 0.5)")
      } // Add custom focus box-shadow
      onBlur={(e) => (e.currentTarget.style.boxShadow = "none")} // Remove the box-shadow when focus is lost
    >
      {children}
    </Element>
  );
}

export default Button;
