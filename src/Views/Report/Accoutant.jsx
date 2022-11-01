import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Header from "../Partial/Header";
import ListReport from "./ListReport"

import Box from "@mui/material/Box";
// import * as STATUS from "../../bussiness/constants/status_code";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

Accoutant.propTypes = {
  onSubmit: PropTypes.func,
};

function Accoutant(props) {
 
      
  return (
    <Box sx={{ flexGrow: 1, m: 0 }}>
      <Header></Header>
      <ListReport propsdata={{ title: "Báo cáo kế toán", "md": "KT"}} ></ListReport>
    </Box>
  );
}
export default Accoutant;