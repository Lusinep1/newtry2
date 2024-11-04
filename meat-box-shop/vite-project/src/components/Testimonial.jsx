// src/components/Testimonial.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const Testimonial = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        // backgroundColor: "#fafafa",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          flex: 1,
          textAlign: "left",
          paddingRight: "40px",
          maxWidth: "500px", // Limit text width
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "400",
            color: "#4a4a4a",
            fontStyle: "italic",
            lineHeight: "1.6",
            fontSize: "1.4rem", // Adjust font size
          }}
        >
          "Pigs should be able to do what they enjoy. Like taking a mud bath and
          having access to grass.”
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#e46b1c",
            marginTop: "15px",
            fontSize: "1.1rem", // Adjust font size
          }}
        >
          Ollie Linder
        </Typography>
        <Typography sx={{ color: "#e46b1c", fontSize: "0.95rem" }}>
          Pig and beef farmer, Åsbergby farm
        </Typography>
      </Box>
      <Box
        component="img"
        src="/images/mard.jpg" // Image path
        alt="Person"
        sx={{
          width: "180px", // Adjust size
          height: "180px", // Adjust size
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default Testimonial;
