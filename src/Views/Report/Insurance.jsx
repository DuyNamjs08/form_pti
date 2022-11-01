import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
// import BasicTextFields from "../../../components/base_component/textfiled/text_field";
// import { Row, Col, Container } from 'react-bootstrap';
import Header from "../Partial/Header";
import ListReport from "./ListReport";

import Box from "@mui/material/Box";
// import * as STATUS from "../../bussiness/constants/status_code";
import { useDispatch, useSelector } from "react-redux";
import ControllerField from "./controller-field/ControllerField";
// import { useNavigate } from "react-router-dom";

Insurance.propTypes = {
  onSubmit: PropTypes.func,
};

function Insurance(props) {
  const show = useSelector((state) => state.reportSlice.show);
  const [baocao, setBaocao] = React.useState(null);
  console.log("show", show);

  const onChangeData = (values) => {
    console.log("values" , values);
    setBaocao(values);
  };
  return (
    <Box sx={{ flexGrow: 1, m: 0 }}>
      <Header></Header>

      {show && <ControllerField baocao={baocao}/>}
      <ListReport
        onChangeDataBaocao={onChangeData}
        propsdata={{ title: "Báo cáo bảo hiểm", md: "BH" }}
      ></ListReport>
    </Box>
  );
}
export default Insurance;
