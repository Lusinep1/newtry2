// src/components/Navbar.jsx
import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItemCount } = useContext(CartContext);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        borderBottom: "1px solid #ddd",
        padding: "20px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{
            cursor: "pointer",
            color: "black",
            fontSize: "24px",
            fontWeight: "bold",
            textDecoration: "none",
            flexGrow: 1,
          }}
          onClick={() => navigate("/")}
        >
          Köttlådan
        </Typography>

        {/* Centered Navbar Items */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexGrow: 2,
            gap: "40px", // Adjust spacing between items
          }}
        >
          <Typography
            sx={{
              cursor: "pointer",
              color: "black",
              fontWeight: "700",
              fontSize: "16px",
              "&:hover": {
                color: "#2E7D32",
              },
            }}
            onClick={() => navigate("/fish-boxes")}
          >
            FISH BOXES
          </Typography>
          <Typography
            sx={{
              cursor: "pointer",
              color: "black",
              fontWeight: "700",
              fontSize: "16px",
              "&:hover": {
                color: "#2E7D32",
              },
            }}
            onClick={() => navigate("/fish-guide")}
          >
            THE FISH GUIDE
          </Typography>
          <Typography
            sx={{
              cursor: "pointer",
              color: "black",
              fontWeight: "700",
              fontSize: "16px",
              "&:hover": {
                color: "#2E7D32",
              },
            }}
            onClick={() => navigate("/about")}
          >
            ABOUT US
          </Typography>
          <Typography
            sx={{
              cursor: "pointer",
              color: "black",
              fontWeight: "700",
              fontSize: "16px",
              "&:hover": {
                color: "#2E7D32",
              },
            }}
            onClick={() => navigate("/contact")}
          >
            CONTACT
          </Typography>
        </Box>

        {/* Cart and Account Icons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            size="large"
            aria-label={`show ${cartItemCount} new items`}
            color="inherit"
            onClick={() => navigate("/cart")}
            sx={{ color: "black" }}
          >
            <Badge badgeContent={cartItemCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={() => navigate("/account")}
            sx={{ color: "black" }}
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
