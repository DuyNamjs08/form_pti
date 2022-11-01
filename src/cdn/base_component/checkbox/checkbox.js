import * as React from "react";
import Box from "@mui/material/Box";
// import FormLabel from '@mui/material/FormLabel';
import FormControl from "@mui/material/FormControl";
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from "@mui/material/Checkbox";

export default function Checkboxes({ isCheck, label, onChange, ma }) {
  const [state, setState] = React.useState({
    check: isCheck,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    onChange(event.target.checked, ma);
  };

  return (
    <Box sx={{ display: "flex" }} style={{ paddingLeft: 6 }}>
      <FormControl variant="standard">
        <FormControlLabel
          control={
            <Checkbox
              checked={state.check}
              onChange={handleChange}
              name="check"
            />
          }
          label={label}
        />
      </FormControl>
    </Box>
  );
}
