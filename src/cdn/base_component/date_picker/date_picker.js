import * as React from "react";
import {
  Box,
  OutlinedInput,
  TextField,
  InputLabel,
  FormControl,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
export default function BasicDatePicker({
  label,
  isValidate = true,
  inputFormat = "dd/MM/yyyy",
  initValue,
}) {
  const [value, setValue] = React.useState(initValue ?? new Date());
  console.log(initValue);
  return isValidate === false ? (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
        style={{ width: "100%" }}
        inputFormat={inputFormat}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <Box sx={{ flexGrow: 1 }} style={{ width: "100%" }}>
            <FormControl
              sx={{ m: 1 }}
              style={{ width: "100%" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined">{label}</InputLabel>
              <OutlinedInput
                sx={{
                  padding: 0,
                  paddingRight: 2,
                  paddingLeft: 2,
                }}
                style={{ textAlign: "center" }}
                ref={inputRef}
                inputProps={{ ...inputProps }}
                id="outlined-adornment-password"
                name="numberformat"
                label={label}
                endAdornment={InputProps?.endAdornment}
                value={value}
              />
            </FormControl>
          </Box>
        )}
      />
    </LocalizationProvider>
  ) : (
    <Box sx={{ flexGrow: 1, m: 1 }} style={{ width: "100%" }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack>
          <DatePicker
            label={label}
            value={value}
            inputFormat={inputFormat}
            style={{ textAlign: "center" }}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            fullWidth
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </Box>
  );
  //   const [value, setValue] = React.useState(null);

  //   return (
  //     <LocalizationProvider dateAdapter={AdapterDateFns}>
  //       <DatePicker
  //         // disableOpenPicker={true}
  //         disableFuture={true}
  //         disablePast={true}
  //         label="Basic example"
  //         value={value}
  //         onChange={(newValue) => {
  //           setValue(newValue);
  //         }}
  //         renderInput={(params) => <TextField {...params} />}
  //       />
  //     </LocalizationProvider>
  //   );
}
