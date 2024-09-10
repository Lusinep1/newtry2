// src/components/Breadcrumb.jsx
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home"; // Using Material-UI icon for the home icon

function Breadcrumb() {
  return (
    <nav style={{ padding: "20px 0", fontSize: "24px", color: "#333" }}>
      <Link
        to="/"
        style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}
      >
        <HomeIcon
          style={{
            verticalAlign: "middle",
            marginRight: "5px",
            color: "green",
          }}
        />
        Home
      </Link>
      <span style={{ margin: "0 5px" }}> &gt; </span>
      <span>Loyal customer box-start</span>
    </nav>
  );
}

export default Breadcrumb;
