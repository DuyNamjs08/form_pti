import React from "react";
import Grid from "@mui/material/Grid";
import SelectCard from "./SelectCard";

function CardItem({baocao}) {
  return (
    <>
      <Grid container style={{ padding: 0, margin: 0 }} spacing={2}>
        <SelectCard xs={12} sm={6} md={3} label={"LHBH"} />
        <SelectCard xs={12} sm={6} md={3} label={"Nhóm BH"} />
        <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}></Grid>
        <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}></Grid>
      </Grid>
      <Grid container style={{ padding: 0, margin: 0 }} spacing={2}>
        <SelectCard  dataDrop={baocao} xs={12} sm={6} md={6} label={"Mẫu BC"} />
        <SelectCard xs={12} sm={6} md={6} label={"Kiểu xem"} />
      </Grid>
    </>
  );
}

export default CardItem;
