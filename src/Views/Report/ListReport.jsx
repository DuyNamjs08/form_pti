import ComboBox from "../../cdn/base_component/combobox/combo_box";
// import BasicTextFields from "../../cdn/base_component/textfiled/text_field";
import BaseDataGrid from "../../cdn/base_component/data_grid/data_grid";
import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  visible,
  listBC,
  requestController,
  requestDrop,
} from "../../Actions/ReportAction";

import {
  InitView,
  ListSubGroup,
  ListCode,
  ListCodeTemplate,
  RenderController,
} from "../../Actions/ReportAction";
var isInitView = false;
function ListReport({ props, propsdata, onChangeDataBaocao }) {
  const dispatch = useDispatch();
  const grid1Ref = React.createRef();
  const grid2Ref = React.createRef();
  const [data, setData] = React.useState({
    nhom: [],
    pnhom: [],
    nhomSelect: null,
    pnhomSelect: null,
    dataGrlke: null,
    dataGrdk: null,
  });
  // const [pnhom, setPNhom] = React.useState([]);

  const requestInitView = async (values) => {
    try {
      const action = InitView(values);
      const resultAction = await dispatch(action);
      const response = unwrapResult(resultAction);
      // console.log(response);
      if (response.code === "000") {
        setData({
          ...data,
          nhom: response.data.nhom,
          nhomSelect: response.data.nhom[0].MA,
          pnhomSelect: response.data.pnhom[0].MA,
          pnhom: response.data.pnhom,
        });
        // setPNhom(response.data.pnhom);
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const requestListSubGroup = async (value) => {
    try {
      const values = {
        data: JSON.stringify({ md: "BH", nhom: value, sl: "D" }),
      };
      const resultAction = await dispatch(ListSubGroup(values));
      console.log("requestListSubGroup", values);
      const response = unwrapResult(resultAction);
      if (response.code === "000") {
        setData({
          ...data,
          nhomSelect: value,
          pnhom: response.data.pnhom,
        });
        grid1Ref.current.loadGridView([]);
        grid2Ref.current.loadGridView([]);
        // setPNhom(response.data.pnhom);
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const requestListCode = async (value) => {
    try {
      const values = {
        data: JSON.stringify({ md: "BH", nhom: data.nhomSelect, pnhom: value }),
      };
      console.log("response values", values);
      const action = ListCode(values);
      const resultAction = await dispatch(action);
      const response = unwrapResult(resultAction);
      // console.log("response ListCode", response);
      if (response.code === "000") {
        setData({
          ...data,
          dataGrlke: response.data,
        });
        grid1Ref.current.loadGridView(response.data);
        grid2Ref.current.loadGridView([]);
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const requestListCodeTemplate = async (value) => {
    try {
      const action = ListCodeTemplate({
        data: JSON.stringify({
          ma: value.MA,
          ten: value.MA,
          dong: "8",
          sl: "D",
        }),
      });
      const resultAction = await dispatch(action);
      const response = unwrapResult(resultAction);
      console.log("response Grid2", response.data.lst_mau);
      if (response.code === "000") {
        setData({
          ...data,
          dataGrdk: response.data.lst_mau,
        });

        grid2Ref.current.loadGridView(response.data.lst_mau);
        RequestController(response.data.lst_mau[0]);
        onChangeDataBaocao(response.data.lst_mau);
        // setTimeout(() => {
        //   dispatch(listBC(response.data.lst_mau));
        // }, 1000);
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const RequestController = async (value) => {
    try {
      const action = RenderController({
        data: JSON.stringify({ ma_bc: value.MA, ten: value.TEN_RP }),
      });
      const resultAction = await dispatch(action);
      const response = unwrapResult(resultAction);
      console.log("handleController:", response);
      if (response.code === "000") {
        dispatch(requestController(response.data.ds_dk));
        dispatch(requestDrop(response.data.ds_dk_lst));
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    // send HTTP request
    // save response to variable
    // console.log(propsdata.md);
    if (!isInitView) {
      isInitView = true;
      requestInitView({ data: JSON.stringify({ md: propsdata.md }) });
      if (data.nhomSelect) {
        requestListCode("");
      }
    }
  }, [data.nhomSelect]);
  // console.log(pnhom);
  return (
    <Grid
      container
      spacing={{ xs: 1, md: 1 }}
      columns={{ xs: 2, sm: 4, md: 12 }}
    >
      <Grid item xs={12} sm={12} md={12}>
        {propsdata.title}
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        <ComboBox
          id={"nhom"}
          data={data.nhom}
          isSearch={true}
          label={"Nhóm"}
          onChange={(value) => requestListSubGroup(value)}
        ></ComboBox>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        <ComboBox
          id={"pnhom"}
          data={data.pnhom}
          isSearch={true}
          label={"Phân nhóm"}
          onChange={(value) => requestListCode(value)}
        ></ComboBox>
      </Grid>
      <Grid item xs={4} sm={4} md={4}></Grid>
      <Grid item xs={8} sm={8} md={8}>
        <BaseDataGrid
          ref={grid1Ref}
          onItemClick={(value) => requestListCodeTemplate(value)}
          datas={data.dataGrlke ? data.dataGrlke : Gr_lke}
          headers={GR_Heder_LK}
        ></BaseDataGrid>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        <BaseDataGrid
          ref={grid2Ref}
          onItemClick={(value) => RequestController(value)}
          datas={data.dataGrdk ? data.dataGrdk : Gr_lke}
          headers={GR_Heder_LK}
        ></BaseDataGrid>
        <Stack
          spacing={2}
          direction="row"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px 0 ",
          }}
        >
          <Button
            style={{ display: "flex", alignItems: "center" }}
            variant="contained"
            onClick={() => dispatch(visible(true))}
          >
            <i
              style={{ marginRight: 8 }}
              className="fa-regular fa-pen-to-square"
            ></i>
            Chọn xem
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
export default ListReport;

const GR_Heder_LK = [
  {
    field: "MA",
    headerName: "ID",
    flex: 1,
    sortable: false,
    disableColumnFilter: true,
    disableColumnMenu: true,
    disableColumnSelector: true,
    hide: true,
  },
  {
    field: "TEN",
    headerName: "Tên báo cáo",
    flex: 12,
    width: 100,
    // renderCell: (params) => {
    //   return (
    //     <p
    //       style={{ cursor: "pointer" }}
    //       onClick={() => console.log("Tên báo cáo")}
    //     >
    //       {params.row.TEN}
    //     </p>
    //   );
    // },
    sortable: false,
    disableColumnFilter: true,
    disableColumnMenu: true,
    disableColumnSelector: true,
    headerAlign: "center",
    hide: false,
  },
];

var Gr_lke = [
  {
    MA: "",
    TEN: "",
    loai: "",
    edit: "K",
  },
  {
    MA: "",
    TEN: "",
    loai: "",
    edit: "K",
    hide: true,
  },
  {
    MA: "",
    TEN: "",
    loai: "",
    edit: "K",
    hide: true,
  },
  {
    MA: "",
    TEN: "",
    loai: "",
    edit: "K",
    hide: true,
  },
];

// var content_lke = [
//   {
//     ten: "ten",
//     ma: "ma",
//     ddan: "ddan",
//     nhom: "ddan",
//   },
//   {
//     ten: "",
//     ma: "",
//     ddan: "",
//     nhom: "",
//   },
//   {
//     ten: "ten",
//     ma: "ma",
//     ddan: "ddan",
//     nhom: "ddan",
//   },
// ];

// var Gr_dk = [
//   {
//     file: "ten",
//     ten: "Tên",
//     loai: "text",
//     edit: "K",
//   },
//   {
//     file: "kieu_in",
//     ten: "",
//     loai: "text",
//     edit: "K",
//     hide: true,
//   },
//   {
//     file: "ten_rp",
//     ten: "",
//     loai: "text",
//     edit: "K",
//     hide: true,
//   },
// ];

// var content_dk = [
//   {
//     ten: "",
//     kieu_in: "",
//     ten_rp: "",
//   },
//   {
//     ten: "",
//     kieu_in: "",
//     ten_rp: "",
//   },
//   {
//     ten: "",
//     kieu_in: "",
//     ten_rp: "",
//   },
// ];
