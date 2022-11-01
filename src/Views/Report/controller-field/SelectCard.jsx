import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";

function SelectCard({ label,xs , sm , md ,ma,dataDrop }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid  item xs={xs} sm={sm} md={md} style={{ background: "#fff" }}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel size="small" id="demo-simple-select-label">
            {label}
          </InputLabel>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label={label}
            onChange={handleChange}
          >
            {dataDrop ? dataDrop.map((item)=>{
              if(item.MA_DK === ma){
               return  <MenuItem  key={item.MA} value={item.MA}>{item.TEN}</MenuItem>
              }
            }) : <MenuItem value={30}>hello</MenuItem>}
          </Select>
        </FormControl>
      </Box>
    </Grid>
  );
}

export default SelectCard;
