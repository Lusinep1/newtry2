import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ZipCodeChecker = () => {
  const [zipCode, setZipCode] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckZipCode = () => {
    const zip = parseInt(zipCode.replace(/\s/g, ""), 10);
    if (zip >= 10000 && zip <= 19999) {
      setMessage(`Yes! We deliver to ${zipCode}!`);
    } else if (isNaN(zip)) {
      setMessage("Please enter a valid number.");
    } else {
      setMessage(`Unfortunately, we do not deliver to ${zipCode} yet.`);
    }
  };

  const handleReset = () => {
    setZipCode("");
    setMessage("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 4,
      }}
    >
      <Typography sx={{ marginBottom: 2, fontWeight: "bold" }}>
        Can we deliver to your home?
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          label="ZIP code"
          variant="outlined"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          sx={{ width: "250px", fontWeight: "bold" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleCheckZipCode}
                  sx={{
                    fontWeight: "bold",
                    height: "56px",
                    borderRadius: 0,
                    borderTopRightRadius: "4px",
                    borderBottomRightRadius: "4px",
                  }}
                >
                  TEST
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      {message && (
        <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
          <Typography
            sx={{ fontWeight: "bold", color: "green", marginRight: 2 }}
          >
            {message}
          </Typography>
          <IconButton onClick={handleReset}>
            <CloseIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default ZipCodeChecker;
