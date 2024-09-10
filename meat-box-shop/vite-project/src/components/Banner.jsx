// src/components/Banner.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "450px",
        backgroundImage: "url(/images/banner.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: { xs: "0 20px", md: "0 50px" },
        boxSizing: "border-box",
      }}
    >
      {/* Text Content */}
      <Box sx={{ maxWidth: "50%", color: "white" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", fontSize: { xs: "24px", md: "36px" } }}
        >
          Perfect glow today again?
        </Typography>
        <Typography
          variant="h6"
          sx={{ marginBottom: 2, fontSize: { xs: "14px", md: "18px" } }}
        >
          Selected grill details from our range of fresh organic meat
        </Typography>
        <Button
          variant="contained"
          color="warning"
          sx={{
            fontWeight: "bold",
            padding: { xs: "8px 16px", md: "10px 20px" },
          }}
          onClick={() => navigate("/grill-box")}
        >
          ORDER THE GRILL BOX
        </Button>
      </Box>

      {/* Price Sticker */}
      <Box
        sx={{
          position: "absolute",
          right: { xs: "20px", md: "50px" },
          top: { xs: "20px", md: "50px" },
          backgroundColor: "#f57c00",
          color: "white",
          borderRadius: "50%",
          width: { xs: "70px", md: "100px" },
          height: { xs: "70px", md: "100px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: { xs: "16px", md: "20px" },
          fontWeight: "bold",
          transform: "rotate(15deg)",
        }}
      >
        1349 SEK
      </Box>
    </Box>
  );
};

export default Banner;
