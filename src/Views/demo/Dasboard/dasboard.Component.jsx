import PropTypes from "prop-types";
import React from "react";
// import BasicTextFields from "../../../components/base_component/textfiled/text_field";
// import { Row, Col, Container } from 'react-bootstrap';
// import Navbar from "../../navBar";
// import ActionView from "../ActionView/action_view.Component";
// import InforCall from "../InforCall/infor_call.Component";
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import Container from '@mui/material/Container';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
// import Paper from '@mui/material/Paper';
// import Grid from "@mui/material/Grid";
// import StepComponent from "../Step/step.Component";
// import FormComponent from "../inforForm/Form.Component";
// import DemoContent from "../content/demo_content";
// import HeaderInfor from "../header_infor";
// import FooterComponent from "../Footer/footer.Component";
import "./dasboard.Component.css";
import Product from "../../CarInsurance/Product";

DashboardForm.propTypes = {
  onSubmit: PropTypes.func,
};
function DashboardForm(props) {
  // const [value, setValue] = React.useState(data[0].label);
  // const [inputValue, setInputValue] = React.useState('');
  // {
  /* <Container maxWidth="sm" color={"#000"}>{datas.steps[0].content.map((data) => <BasicTextFields label={data.tieude} textAlign={"left"} isUppercase={false} isNonAccentVietnamese={true} keyboard={"number"} isAction={false} />)}</Container> */
  // }
  return (
    <Box sx={{ flexGrow: 1, m: 0 }}>
      {/* <Navbar></Navbar>
      <InforCall infor={dataJson.infor}></InforCall>
      <div class="" id="mainContent">
        <div id="UPa_ct">
          <div class="replace-el" style={{ height: 0 }}> */}
      {/* <ActionView
              actions={dataJson.action}
              tien={dataJson.infor.tien}
            ></ActionView>
            <HeaderInfor data={data} datas={dataJson.header}></HeaderInfor>
            <StepComponent></StepComponent>
            {/* <FormComponent></FormComponent> */}
      {/* <DemoContent datas={dataJson.steps[0].contens}></DemoContent> */}
      {/* </div>
        </div>
      </div> */}
      {/* <FooterComponent></FooterComponent> */}
      <Product></Product>
    </Box>
  );
}
export default DashboardForm;
