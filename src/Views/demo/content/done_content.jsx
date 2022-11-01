import "./demo_content.css";
import React from "react";

import { Box } from "@mui/material";
import ButtonView from "../../../cdn/base_component/button/buttonview";
const DoneContent = ({ onClickButton }) => {
  return (
    <Box
      sx={{ flexGrow: 1, m: 0 }}
      style={{
        paddingRight: 20,
        paddingTop: 0,
        marginLeft: 20,
        marginTop: 0,
        marginRight: 20,
      }}
    >
      {"Hoàn thành"}
      <ButtonView
        label={"Quay lại"}
        ma={"back"}
        onClick={(ma) => {
          onClickButton(ma);
        }}
      ></ButtonView>
    </Box>
  );
};

export default DoneContent;
