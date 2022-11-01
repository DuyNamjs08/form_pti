import React from "react";
import "./controller-field.css";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import InputCard from "./InputCard";
import CardItem from "./CardItem";
import { useDispatch, useSelector } from "react-redux";
import { hidden } from "../../../Actions/ReportAction";
import SelectCard from "./SelectCard";


function ControllerField({baocao}) {
  console.log('baocao:' , baocao);
  const dataController = useSelector(
    (state) => state.reportSlice.dataController
  );
  const dataDrop = useSelector((state) => state.reportSlice.dataDrop);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div className="card-container">
      <Container className="card-main">
        <div className="card-header-container">
          <p className="card-text">
            Báo cáo nhanh tổng hợp tình hình bồi thường theo nghiệp vụ Dơn Vị :
            Admin
          </p>
          <i
            onClick={() => dispatch(hidden(false))}
            className="fa-solid fa-xmark"
          ></i>
        </div>
        <Container className="card-main-contents">
          <Grid style={{ padding: 0, margin: 0 }} container spacing={2}>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Từ ngày"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => (
                    <TextField size="small" {...params} fullWidth />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Đến ngày"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => (
                    <TextField size="small" {...params} fullWidth />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <InputCard xs={12} sm={6} md={3} label={"Mã đơn vị"} />
            <InputCard xs={12} sm={6} md={3} label={"Mã NV"} />
            {dataController
              ? dataController.map((item) => {
                  if (item.KIEU_DL === "SC") {
                    return (
                      <InputCard key={item.MA} label={item.TEN} md={item.COL} />
                    );
                  } else if (item.KIEU_DL === "L") {
                    return (
                      <SelectCard
                        key={item.MA}
                        dataDrop={dataDrop}
                        ma={item.MA}
                        label={item.TEN}
                        md={item.COL}
                      />
                    );
                  } else if (item.KIEU_DL === "NG") {
                    return (
                      <InputCard key={item.MA} label={item.TEN} md={item.COL} />
                    );
                  } else if (item.KIEU_DL === "SF") {
                    return (
                      <InputCard key={item.MA} label={item.TEN} md={item.COL} />
                    );
                  } else if (item.KIEU_DL === "NK") {
                    return (
                      <InputCard key={item.MA} label={item.TEN} md={item.COL} />
                    );
                  }
                })
              : ""}
          </Grid>
          <CardItem baocao={baocao}/>
          <Grid className="controller-button" container spacing={2}>
            <Button variant="contained" color="success">
              <i className="fa-regular fa-pen-to-square"></i>
              Xem trước
            </Button>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}

export default ControllerField;
