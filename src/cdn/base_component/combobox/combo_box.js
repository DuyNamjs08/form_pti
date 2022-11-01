import * as React from "react";
import { Box } from "@mui/material";
import SelectLabels from "./select_drop_box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import { useDispatch, useSelector } from 'react-redux'


export default function ComboBox({
  label,
  id,
  isSearch,
  onChange,
  data,
  // initValue,
}) {
  // const nhom = useSelector((state) => state.reportSlice.nhom)
  // const dispatch = useDispatch()
  // const [value, setValue] = React.useState('');
  // const [inputValue, setInputValue] = React.useState(
  //   initValue == null ? "" : initValue.label ?? ""
  // );
  const handleChange = (event) => {
    onChange(event.target.value);
    console.log("event.target.value" , event.target.value);
  };
  if (!isSearch) {
    return (
      <Box sx={{ flexGrow: 1 }} style={{ width: "100%" }}>
        <SelectLabels
          label={label}
          onChange={handleChange}
          options={data}
          id={id}
          style={{ width: "100%" }}
        ></SelectLabels>
      </Box>
    );
  }
  return (
    <Box sx={{ minWidth: 160, display: "flex", alignItems: "center" }}>
      <FormControl
        fullWidth
        style={{ background: "#fff" }}
        size="small "
      >
        <InputLabel size="small" id="demo-simple-select-label">
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label={label}
          onChange={handleChange}
          size="small"
        >
          {
            data ? data.map((item, index) => (
              <MenuItem
                key={index} value={item.MA}>{item.TEN}</MenuItem>
            )) :
              <MenuItem value=''></MenuItem>
          }
        </Select>
      </FormControl>
    </Box>
  );
}

