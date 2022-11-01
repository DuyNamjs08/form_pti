import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";

export default function SelectLabels({ label, onChange, options, initValue, id }) {
  const [content, setContent] = React.useState(initValue);

  const handleChange = (event) => {
    console.log(event.target);
    setContent(event.target.value);

    onChange(event, event.target.value);
  };

  return (

    // <Box sx={{ flexGrow: 1 }}>
    <FormControl sx={{ m: 1 }} style={{ width: "100%" }}>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={id}
        autoWidth={false}
        value={content}
        label={label}
        onChange={handleChange}
        style={{ width: "100%" }}
      >
        {options.map((option, index) => (
          <MenuItem value={option} name={option.label}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    // </Box>
  );
}
