import * as React from "react";
import Box from "@mui/material/Box";
import { Fab } from "@mui/material";

export default function ButtonView({ label, onClick, ma }) {
  const handleClick = (event) => {
    onClick(ma);
  };
  return (
    <Box sx={{ display: "flex" }} style={{ paddingLeft: 6 }}>
      <Fab
        variant="extended"
        size="medium"
        color="primary"
        aria-label="add"
        sx={{ mr: 1 }}
        onClick={handleClick}
      >
        {label}
      </Fab>
    </Box>
  );
}
