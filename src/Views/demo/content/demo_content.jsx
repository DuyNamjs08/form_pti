import "./demo_content.css";
import React, { useState, useEffect } from "react";

import BasicTextFields from "../../../cdn/base_component/textfiled/text_field";
import { Box, Grid } from "@mui/material";

import ComboBox from "../../../cdn/base_component/combobox/combo_box";
import BasicDatePicker from "../../../cdn/base_component/date_picker/date_picker";
import Checkbox from "../../../cdn/base_component/checkbox/checkbox";
import ButtonView from "../../../cdn/base_component/button/buttonview";
import BaseDataGrid from "../../../cdn/base_component/data_grid/data_grid";

const DemoContent = ({ datas, onClick, onChangeValue }) => {
  var views = [];
  var buttons = [];
  const [value, setValue] = useState(null);
  useEffect(() => {
    var object = {};
    for (let index = 0; index < datas.length; index++) {
      if (datas[index].loai === "checkbox") {
        object[datas[index].ma] = datas[index].chon === "C" ? true : false;
      }
    }
    setValue(object);
  }, []);
  const handleOnChange = (value, ma) => {
    onChangeValue(value, ma);
  };
  for (let index = 0; index < datas.length; index++) {
    if (datas[index].loai === "rows") {
      views.push(
        <RenderView
          data={datas[index].content}
          onChangeValue={(value, ma) => {
            handleOnChange(value, ma);
          }}
        ></RenderView>
      );
    }
    if (datas[index].loai === "button") {
      buttons.push(
        <ButtonView
          label={datas[index].tieude}
          ma={datas[index].ma}
          onClick={(ma) => {
            onClick(ma);
          }}
        ></ButtonView>
      );
    }
    if (datas[index].loai === "checkbox") {
      views.push(
        <Grid
          item
          xs={datas[index].xs}
          sm={datas[index].sm}
          md={datas[index].md}
          key={index}
        >
          <Checkbox
            label={datas[index].tieude}
            isCheck={datas[index].chon === "C" ? true : false}
            ma={datas[index].ma}
            onChange={(status, ma) => {
              datas[index].chon = status === true ? "C" : "K";
              setValue({ ...value, [ma]: status });
            }}
          ></Checkbox>
        </Grid>
      );

      if (datas[index].chon === "C") {
        views.push(
          <RenderView
            data={datas[index].content}
            onChangeValue={(value, ma) => {
              handleOnChange(value, ma);
            }}
          ></RenderView>
        );
      }
    }
    if (datas[index].loai === "label") {
      views.push(
        <Grid
          item
          xs={datas[index].xs}
          sm={datas[index].sm}
          md={datas[index].md}
        >
          <div style={{ display: "flex", marginLeft: 8, marginTop: 10 }}>
            <p style={{ fontSize: 20 }}>{datas[index].tieude}</p>
          </div>
        </Grid>
      );
    }
    if (datas[index].loai === "grid") {
      views.push(
        // <Grid
        //   item
        //   xs={datas[index].xs}
        //   sm={datas[index].sm}
        //   md={datas[index].md}
        // >
        <div style={{ width: "100%" }}>
          <BaseDataGrid
            datas={datas[index].content}
            headers={datas[index].header}
          ></BaseDataGrid>
        </div>
        // </Grid>
      );
    }
  }
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
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 2, sm: 4, md: 12 }}
      >
        {views}
      </Grid>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 2, sm: 4, md: 12 }}
        justifyContent="flex-end"
      >
        {buttons}
      </Grid>
    </Box>
  );
};

const RenderView = ({ data, onChangeValue }) => {
  // eslint-disable-next-line array-callback-return
  return data.map((item, index) => {
    if (item.loai === "text") {
      return (
        <Grid item xs={item.xs} sm={item.sm} md={item.md} key={index}>
          <BasicTextFields
            label={item.tieude}
            // textAlign={"left"}
            isUppercase={false}
            disabled={item.edit === "C" ? false : true}
            isNonAccentVietnamese={false}
            // keyboard={"text"}
            isAction={false}
          />
        </Grid>
      );
    }
    if (item.loai === "number") {
      return (
        <Grid item xs={item.xs} sm={item.sm} md={item.md} key={index}>
          <BasicTextFields
            label={item.tieude}
            // textAlign={"left"}
            keyboard="number"
            textAlign="right"
            isUppercase={false}
            disabled={item.edit === "C" ? false : true}
            isNonAccentVietnamese={false}
            // keyboard={"text"}
            isAction={false}
          />
        </Grid>
      );
    }
    if (item.loai === "money") {
      return (
        <Grid item xs={item.xs} sm={item.sm} md={item.md} key={index}>
          <BasicTextFields
            label={item.tieude}
            // textAlign={"left"}
            keyboard="money"
            textAlign="right"
            isUppercase={false}
            disabled={item.edit === "C" ? false : true}
            isNonAccentVietnamese={false}
            // keyboard={"text"}
            isAction={false}
          />
        </Grid>
      );
    }
    if (item.loai === "select") {
      return (
        <Grid item xs={item.xs} sm={item.sm} md={item.md} key={index}>
          <ComboBox
            id={item.ma}
            data={item.list}
            initValue={
              item.list === null || item.list.length === 0 ? null : item.list[0]
            }
            isSearch={item.tim === "C" ? true : false}
            label={item.tieude}
            onChange={(value) => {
              onChangeValue(value, item.ma);
            }}
          ></ComboBox>
        </Grid>
      );
    }
    if (item.loai === "date") {
      return (
        <Grid item xs={item.xs} sm={item.sm} md={item.md} key={index}>
          <BasicDatePicker
            label={item.tieude}
            isValidate={false}
          ></BasicDatePicker>
        </Grid>
      );
    }
  });
};

export default DemoContent;
