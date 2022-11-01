import PropTypes from "prop-types";
import React from "react";
import ActionView from "../../Views/demo/ActionView/action_view.Component";
import InforCall from "../../Views/demo/InforCall/infor_call.Component";
import { mappingContentList } from "./mappping_value";
import Box from "@mui/material/Box";
import StepComponent from "../../Views/demo/Step/step.Component";
import DemoContent from "../../Views/demo/content/demo_content";
import DoneContent from "../../Views/demo/content/done_content";
import HeaderInfor from "../../Views/demo/header_infor";
import "./CarInsurace.Component.css";

CarInsurace.propTypes = {
  onSubmit: PropTypes.func,
};

function CarInsurace({ props, data }) {
  var step = 0;
  var dataJson = data;
  const [dataView, setDataView] = React.useState({
    activeStep: step,
    contentView: null,
    dataJson: data,
  });

  if (dataJson === null || dataJson === undefined) {
    return <div></div>;
  }

  const handleClick = (ma) => {
    if (ma === "next") {
      handleNext(ma);
    }
    if (ma === "back") {
      handleBack(ma);
    }
  };
  const onChangeValue = (value, ma) => {
    if (ma === "HANG_XE") {
      var json = mappingContentList(dataJson, "HIEU_XE", [
        { id: 1, label: "EL" },
        { id: 2, label: "CL" },
      ]);
      dataJson = json;
      setDataView({
        contentView:
          step === dataJson.steps.length - 1 ? (
            <DoneContent
              onClickButton={(ma) => {
                handleClick(ma);
              }}
            ></DoneContent>
          ) : (
            <DemoContent
              step={step}
              datas={dataJson.steps[step].contens}
              onChangeValue={(value, ma) => {
                onChangeValue(value, ma);
              }}
              onClick={(ma) => {
                handleClick(ma);
              }}
            ></DemoContent>
          ),
        activeStep: step,
        dataJson: json,
      });
    }
  };
  const handleNext = () => {
    if (step === dataJson.steps.length - 1) {
      return;
    }
    step = step + 1;
    setDataView({
      activeStep: step,
      contentView:
        step === dataJson.steps.length - 1 ? (
          <DoneContent
            onClickButton={(ma) => {
              handleClick(ma);
            }}
          ></DoneContent>
        ) : (
          <DemoContent
            key={step}
            datas={dataJson.steps[step].contens}
            onChangeValue={(value, ma) => {
              onChangeValue(value, ma);
            }}
            onClick={(ma) => {
              handleClick(ma);
            }}
          ></DemoContent>
        ),
    });
  };
  const handleStep = (index) => {
    step = index;

    setDataView({
      activeStep: step,
      contentView:
        step === dataJson.steps.length - 1 ? (
          <DoneContent
            onClickButton={(ma) => {
              handleClick(ma);
            }}
          ></DoneContent>
        ) : (
          <DemoContent
            key={step}
            datas={dataJson.steps[step].contens}
            onClick={(ma) => {
              handleClick(ma);
            }}
            onChangeValue={(value, ma) => {
              onChangeValue(value, ma);
            }}
          ></DemoContent>
        ),
    });
  };
  const handleBack = () => {
    if (step === 0) {
      return;
    }
    step = step - 1;
    setDataView({
      activeStep: step,
      contentView: (
        <DemoContent
          key={step}
          datas={dataJson.steps[step].contens}
          onClick={(ma) => {
            handleClick(ma);
          }}
          onChangeValue={(value, ma) => {
            onChangeValue(value, ma);
          }}
        ></DemoContent>
      ),
    });

    console.log("dsddasd" + dataView.activeStep);
  };

  return (
    <Box sx={{ flexGrow: 1, m: 0 }}>
      <InforCall infor={dataJson.infor}></InforCall>
      <div className="" id="mainContent">
        <div id="UPa_ct">
          <div className="replace-el" style={{ height: 0 }}>
            <ActionView
              actions={dataJson.action}
              tien={dataJson.infor.tien}
            ></ActionView>
            <HeaderInfor datas={dataJson.header}></HeaderInfor>
            <StepComponent
              datas={dataJson.steps}
              stepAction={dataView.activeStep}
              onClick={(index) => {
                handleStep(index);
              }}
            ></StepComponent>
            {/* <FormComponent></FormComponent> */}
            {dataView.contentView == null ? (
              <DemoContent
                key={step}
                datas={dataJson.steps[step].contens}
                onClick={(ma) => {
                  handleClick(ma);
                }}
                onChangeValue={(value, ma) => {
                  onChangeValue(value, ma);
                }}
              ></DemoContent>
            ) : (
              dataView.contentView
            )}
          </div>
        </div>
      </div>
      {/* <FooterComponent></FooterComponent> */}
    </Box>
  );
}
export default CarInsurace;
