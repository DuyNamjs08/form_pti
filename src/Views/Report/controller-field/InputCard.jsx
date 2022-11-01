import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

function InputCard({ label, xs, sm, md }) {
  return (
    <Grid  item xs={xs} sm={sm} md={md} style={{ background: "#fff" }}>
      <TextField
        size="small"
        fullWidth
        id="outlined-basic"
        label={label}
        variant="outlined"
      />
    </Grid>
  );
}

export default InputCard;
