// src/pages/GrillBox.jsx
import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Alert,
} from "@mui/material";

const stockholmZipCodes = ["11111", "22222", "33333"];

const GrillBox = () => {
  const [zipCode, setZipCode] = useState("");
  const [validZip, setValidZip] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState("");
  const [disableAddToCart, setDisableAddToCart] = useState(true);
  const [invalidZipMessage, setInvalidZipMessage] = useState("");

  const { addToCart } = useContext(CartContext);

  const today = new Date();
  const deliveryDates = Array.from({ length: 5 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + 4 + i);
    const day = date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
    return `${day}, ${date.getFullYear()} - ${
      i % 2 === 0 ? "12-6 pm" : "2-10 pm"
    }`;
  });

  const handleZipCodeCheck = () => {
    const trimmedZip = zipCode.trim();
    if (stockholmZipCodes.includes(trimmedZip)) {
      setValidZip(true);
      setInvalidZipMessage("");
    } else {
      setValidZip(false);
      setInvalidZipMessage(
        "We don't deliver to that address. Please try another ZIP code."
      );
    }
  };

  const handleDateChange = (event) => {
    setDeliveryDate(event.target.value);
    setDisableAddToCart(false);
  };

  const grillboxItem = {
    id: 3,
    name: "6 kg Grillbox",
    price: 100, // Assuming price is 100, adjust as necessary
  };

  const handleAddToCart = () => {
    addToCart(grillboxItem);
    setDisableAddToCart(true);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          padding: "20px",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/images/grillbox.jpg"
          alt="Grill Box"
          sx={{
            width: { xs: "100%", md: "50%" },
            marginRight: { md: "20px" },
            marginBottom: { xs: "20px", md: "0" },
          }}
        />

        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", marginBottom: "20px", color: "#396119" }}
          >
            Your Perfect Grill Box
          </Typography>
          <Typography
            variant="h5"
            sx={{ marginBottom: "10px", color: "#396111" }}
          >
            6 kg
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: "20px", color: "#555555" }}
          >
            Enjoy a selection of the finest cuts for your perfect barbecue.
          </Typography>

          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
          >
            <TextField
              label="ZIP code"
              variant="outlined"
              value={zipCode}
              onChange={(e) => {
                setZipCode(e.target.value);
                setValidZip(false);
                setDisableAddToCart(true);
                setInvalidZipMessage("");
              }}
              sx={{
                flex: 1,
                marginRight: "10px",
                "& .MuiInputBase-root": {
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleZipCodeCheck}
              sx={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                height: "56px",
                backgroundColor: "#4A3626",
                "&:hover": {
                  backgroundColor: "#5a4936",
                },
              }}
            >
              Show Delivery Date
            </Button>
          </Box>

          {invalidZipMessage && (
            <Alert severity="error" sx={{ marginBottom: "10px" }}>
              {invalidZipMessage}
            </Alert>
          )}

          {validZip && (
            <FormControl fullWidth sx={{ marginBottom: "20px" }}>
              <InputLabel>Select Delivery Date</InputLabel>
              <Select
                value={deliveryDate}
                onChange={handleDateChange}
                label="Select Delivery Date"
              >
                {deliveryDates.map((date, index) => (
                  <MenuItem key={index} value={date}>
                    {date}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          <Button
            variant="contained"
            color="warning"
            disabled={!deliveryDate || disableAddToCart}
            fullWidth
            sx={{
              fontSize: "16px",
              padding: "12px",
              backgroundColor: disableAddToCart ? "#7A7A7A" : "#4A3626",
            }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default GrillBox;
