// src/components/Footer.jsx
import React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1B7D49",
        color: "#ffffff",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {/* Links Section */}
      <Box sx={{ display: "flex", gap: "40px" }}>
        {[
          {
            title: "MEAT BOXES",
            items: [
              "The regular customer box",
              "The everyday box",
              "Try on the box",
              "The chicken box",
              "The premium box",
              "See all meat boxes",
            ],
          },
          {
            title: "THE MEAT GUIDE",
            items: [
              "Recipe",
              "Tips for the grill master",
              "All about slow cooking",
              "Become a master of roasting meat",
              "Succeeds with meat in the oven",
            ],
          },
          {
            title: "THE FARM SOCIETY",
            items: [
              "This is the Farm Society",
              "Our farms",
              "Our food artisans",
              "Why eco?",
            ],
          },
          {
            title: "CONTACT",
            items: [
              "Contact us",
              "Frequently asked questions",
              "Privacy Policy",
              "Terms of purchase",
              "Cookie settings",
              "My account",
              "For restaurants & schools",
              "Press",
              "Work with us",
            ],
          },
        ].map((section, index) => (
          <Box key={index}>
            <Typography variant="h6" sx={{ marginBottom: "15px" }}>
              {section.title}
            </Typography>
            {section.items.map((item, idx) => (
              <Typography
                key={idx}
                variant="body2"
                sx={{ marginBottom: "8px" }}
              >
                <Link
                  href="#"
                  underline="hover"
                  sx={{
                    color: "#ffffff",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {item}
                </Link>
              </Typography>
            ))}
          </Box>
        ))}
      </Box>

      {/* Newsletter Section */}
      <Box
        sx={{
          marginLeft: "auto",
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "300px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#006400", marginBottom: "15px" }}
        >
          Please sign up for our newsletter!
        </Typography>
        <Box
          component="form"
          sx={{ display: "flex", width: "100%", gap: "10px" }}
          noValidate
          autoComplete="off"
        >
          <TextField
            placeholder="Email address"
            fullWidth
            variant="outlined"
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "4px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#cccccc",
                },
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#e46b1c",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "#cc5b17",
              },
            }}
          >
            SEND
          </Button>
        </Box>
        {/* Logos or additional info can be placed below */}
        <Box sx={{ marginTop: "15px" }}>
          <img
            src="/images/krav-eu.png"
            alt="Krav Logo"
            style={{ width: "250px", marginRight: "10px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
