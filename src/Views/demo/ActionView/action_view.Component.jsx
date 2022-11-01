import { Box, Button, Input } from "@mui/material";
import Card from "react-bootstrap/Card";
import "./action_view.component.css";

const ActionViewComponent = ({ actions, tien }) => {
  var result = [];

  for (let index = 0; index < actions.length; index++) {
    result.push(
      <Action
        value={actions[index].ten}
        icon={actions[index].icon}
        name={"btn-toolbar_des"}
        index={index}
      ></Action>
    );
  }
  return (
    <Card>
      <Box sx={{ flexGrow: 1, m: 0 }}>
        <div class="tool-bar d-flex align-items-center pb-md-2 pt-md-3 flex-wrap bg-white mgl-10 mrl-10">
          <div class="d-flex align-items-center flex-grow-1 pt-6 ps-6 flex-wrap">
            {result}
          </div>
          <div>
            <FormPurchase tien={tien}></FormPurchase>
          </div>
        </div>
      </Box>
    </Card>
  );
};

const Action = ({ value, icon, name, index }) => {
  return (
    <div class="d-flex">
      <Button
        variant="outlined"
        key={index}
        style={{ cursor: "pointer", border: "none", marginRight: 3 }}
        className={`${index > 2 ? name : ""}`}
      >
        <img
          src={icon}
          style={{ width: 20, height: 25, marginRight: 5 }}
          alt=""
        />{" "}
        {value}
      </Button>
    </div>
  );
};

const FormPurchase = ({ tien }) => {
  return (
    <div class="d-flex align-items-center currency mg-bt">
      <p class="text-uppercase pe-2 mg-bt">TIỀN THANH TOÁN</p>
      <p class="text-uppercase pe-2 money">
        <span class="pe-1" id="span_tong_ttoan">
          <Input
            placeholder="0"
            disabled={true}
            value={tien}
            style={{ width: 150, height: 24, marginLeft: 5 }}
          />
          <label id="l_ttoan" class="fw-bold"></label>
        </span>
      </p>
      <span class="dvi">VND</span>
    </div>
  );
};

export default ActionViewComponent;
