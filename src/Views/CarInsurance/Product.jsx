import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
// import BasicTextFields from "../../../components/base_component/textfiled/text_field";
// import { Row, Col, Container } from 'react-bootstrap';
import Navbar from "../navBar";

import Box from "@mui/material/Box";
import "./Product.Component.css";
import CarInsurace from "../../sdk/bhhd/CarInsurace";
import { unwrapResult } from "@reduxjs/toolkit";
// import * as STATUS from "../../bussiness/constants/status_code";
import { useDispatch } from "react-redux";
import { initView, hangxe } from "../../Controller/product/productRequest";
import { mappingContentList } from "../../sdk/bhhd/mappping_value";
// import { useNavigate } from "react-router-dom";

Product.propTypes = {
  onSubmit: PropTypes.func,
};

function Product(props) {
  const dispatch = useDispatch();
  const [data, setDataJon] = useState(null);
  const requestInitView = async (values) => {
    try {
      // const action = initView(values);
      // const resultAction = await dispatch(action);
      // const response = unwrapResult(resultAction);

      // if (response.data.steps.length > 0) {
      // const hangeAction = hangxe(values);
      // const resultHangxeAction = await dispatch(hangeAction);
      // const dataHangxe = unwrapResult(resultHangxeAction);

      // dataJson = mappingContentList(dataJson, "HANG_XE", dataHangxe.data);

      // }
      setDataJon(dataJson);
      // if (data.code === STATUS.SUCCESS) {
      // } else {
      //   alert(data.message);
      // }
      // const { closeDialog } = props;
      // if (closeDialog) {
      //   closeDialog();
      // }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    // send HTTP request
    // save response to variable
    requestInitView();
  }, []);
  return (
    <Box sx={{ flexGrow: 1, m: 0 }}>
      <Navbar></Navbar>
      <CarInsurace data={data}></CarInsurace>
    </Box>
  );
}
export default Product;
const data = [
  {
    id: 1,
    label: "(000)-Văn phòng",
  },
  {
    id: 2,
    label: "(0001)-Thủ đô",
  },
  {
    id: 3,
    label: "(0002)-Thống nhất",
  },
  {
    id: 4,
    label: "(0003)-TP.Hồ Chí Minh",
  },
];
const dataJson = {
  infor: {
    ten: "Lê Duy Huy",
    phone: "0972795635",
    ten_form: "Xe cơ giới",
    tien: "10,000,000",
  },
  action: [
    {
      ma: "SC",
      ten: "Sao chép",
      icon: "/common/filter_none_24px.svg",
    },
    {
      ma: "OCR",
      ten: "OCR",
      icon: "/common/orc.svg",
    },
    {
      ma: "FILE",
      ten: "File đính kèm",
      icon: "/common/upload_24px.svg",
    },
    {
      ma: "XE",
      ten: "Upload ảnh xe",
      icon: "/common/upload_24px.svg",
    },
    {
      ma: "XEM",
      ten: "Xem biểu mẫu",
      icon: "/common/local_printshop_24px.svg",
    },
    {
      ma: "DUYET",
      ten: "Duyệt/Submit",
      icon: "/common/local_printshop_24px.svg",
    },
    {
      ma: "TT",
      ten: "Thanh toán",
      icon: "/common/local_printshop_24px.svg",
    },
  ],
  header: [
    {
      ma: "",
      loai: "rows",
      chon: "C",
      content: [
        {
          tieude: "Lựa chọn đơn vị bảo hiểm",
          ma: "DVI_SL",
          loai: "select",
          tim: "K",
          edit: "C",
          list: data,
          agile: "left",
          content: "(000)-Văn phòng",
          ma_chon: 1,
          xs: 2,
          sm: 8,
          md: 4,
        },
        {
          tieude: "Kiểu hợp đồng",
          ma: "kieu_hd",
          loai: "text",
          agile: "left",
          tim: "K",
          edit: "K",
          content: "",
          ma_chon: null,
          xs: 2,
          sm: 8,
          md: 4,
        },
        {
          tieude: "Số hợp đồng gốc",
          ma: "so_hd_g",
          loai: "text",
          agile: "left",
          tim: "K",
          edit: "K",
          content: "",
          ma_chon: null,
          xs: 2,
          sm: 8,
          md: 4,
        },
        {
          tieude: "Ngày nhập",
          ma: "NGAY_HT",
          loai: "label",
          agile: "left",
          tim: "K",
          edit: "K",
          content: "14/02/2021",
          ma_chon: null,
          xs: 2,
          sm: 8,
          md: 4,
        },
        {
          tieude: "Số HD/GDN",
          ma: "so_hd",
          loai: "label",
          agile: "left",
          tim: "K",
          edit: "K",
          content: "",
          ma_chon: null,
          xs: 2,
          sm: 8,
          md: 4,
        },
        {
          tieude: "Trạng thái",
          ma: "ttrang",
          loai: "label",
          agile: "left",
          tim: "K",
          edit: "K",
          content: "Đang trình",
          ma_chon: null,
          xs: 2,
          sm: 8,
          md: 4,
        },
      ],
    },
  ],
  steps: [
    {
      ten: "Thông tin",
      action: "C",
      ma: "step1",
      contens: [
        {
          ma: "",
          loai: "rows",
          chon: "C",
          tieude: "",
          content: [
            {
              tieude: "Bên mua bảo hiểm",
              ma: "TEN_DN",
              loai: "text",
              tim: "K",
              edit: "C",
              list: data,
              agile: "left",
              content: "(000)-Văn phòng",
              ma_chon: 1,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Nhóm danh nghiệp",
              ma: "nhom",
              loai: "select",
              list: data,
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Mã thuế",
              ma: "MA_THUE",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Số CIF KH",
              ma: "so_cif",
              loai: "text",
              tim: "K",
              edit: "C",
              list: data,
              agile: "left",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Địa chỉ",
              ma: "DCHI",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Số ĐKKD",
              ma: "so_dkkd",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Người đại diện",
              ma: "dd_dn",
              loai: "text",
              tim: "K",
              edit: "C",
              list: data,
              agile: "left",
              content: "",
              ma_chon: 1,
              xs: 2,
              sm: 8,
              md: 6,
            },
            {
              tieude: "Chức vụ",
              ma: "cvu_dn",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Tên chủ xe",
              ma: "TEN",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Điện thoại",
              ma: "PHONE",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Email",
              ma: "EMAIL",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Hợp đồng tín dụng",
              ma: "SO_HD_KENH",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Ngày giải ngân",
              ma: "NGAY_GN",
              loai: "date",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Thời hạn vay",
              ma: "HAN_VAY",
              loai: "nummber",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Cán bộ QL",
              ma: "MA_DAO",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Tên cán bộ QL",
              ma: "TEN_DAO",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Email ngân hàng",
              ma: "email_nhang",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Tiền vay",
              ma: "tien_vay",
              loai: "nummber",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Loại thụ hưởng",
              ma: "loai_th",
              loai: "select",
              agile: "left",
              tim: "K",
              edit: "C",
              list: data,
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Người thụ hưởng",
              ma: "nguoi_th",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Địa chỉ người thụ hưởng",
              ma: "dchi_nguoi_th",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Biển xe",
              ma: "bien_xe",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Số khung",
              ma: "so_khung",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Số máy",
              ma: "so_may",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
          ],
        },
        {
          ma: "hd_khac",
          loai: "checkbox",
          chon: "C",
          tieude: "Thông tin người nhận hóa đơn (Nếu có phát hành)",
          xs: 12,
          sm: 12,
          md: 12,
          content: [
            {
              tieude: "Người nhận",
              ma: "ten_hd_nn",
              loai: "text",
              tim: "K",
              edit: "C",
              list: data,
              agile: "left",
              content: null,
              ma_chon: 1,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Số điện thoại",
              ma: "dt_hd_nn",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Công ty",
              ma: "cty_hd_nn",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 6,
            },
            {
              tieude: "Địa chỉ",
              ma: "dchi_hd_nn",
              loai: "text",
              tim: "K",
              edit: "C",
              list: data,
              agile: "left",
              content: "",
              ma_chon: 1,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Địa chỉ",
              ma: "dchi_hd_nn",
              loai: "text",
              tim: "K",
              edit: "C",
              list: data,
              agile: "left",
              content: "",
              ma_chon: 1,
              xs: 2,
              sm: 8,
              md: 4,
            },
          ],
        },
        {
          loai: "button",
          tieude: "Tiếp theo",
          ma: "next",
        },
      ],
    },
    {
      ten: "Tính phí",
      action: "C",
      ma: "step2",
      contens: [
        {
          ma: "",
          loai: "rows",
          chon: "C",
          tieude: "",
          content: [
            {
              tieude: "Hãng xe",
              ma: "HANG_XE",
              loai: "select",
              tim: "K",
              edit: "C",
              list: [],
              agile: "left",
              content: "(000)-Văn phòng",
              ma_chon: 1,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Hiệu xe",
              ma: "HIEU_XE",
              loai: "select",
              list: [],
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Năm sản xuất",
              ma: "NAM_SAN_XUAT",
              loai: "number",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Kinh doanh",
              ma: "KINH_DOANH",
              loai: "select",
              tim: "K",
              edit: "C",
              list: [
                { ma: "C", label: "Có" },
                { ma: "K", label: "Không" },
              ],
              agile: "left",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Loại xe",
              ma: "LOAI_XE",
              loai: "select",
              list: [
                { ma: 1, label: "Xe con chở người" },
                { ma: 2, label: "Xe đầu kéo" },
              ],
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Số chổ ngồi",
              ma: "SO_CHO_NGOI",
              loai: "number",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Số người được bảo hiểm",
              ma: "NGUOI_DUOC_BH",
              loai: "number",
              tim: "K",
              edit: "C",
              list: data,
              agile: "left",
              content: "",
              ma_chon: 1,
              xs: 2,
              sm: 8,
              md: 6,
            },
            {
              tieude: "Trọng tải(Tấn)",
              ma: "TRONG_TAI",
              loai: "number",
              agile: "left",
              tim: "K",
              edit: "K",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Tên chủ xe",
              ma: "TEN",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Điện thoại",
              ma: "PHONE",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Email",
              ma: "EMAIL",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Hợp đồng tín dụng",
              ma: "SO_HD_KENH",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Ngày giải ngân",
              ma: "NGAY_GN",
              loai: "date",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Thời hạn vay",
              ma: "HAN_VAY",
              loai: "nummber",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Cán bộ QL",
              ma: "MA_DAO",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Tên cán bộ QL",
              ma: "TEN_DAO",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Email ngân hàng",
              ma: "email_nhang",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Tiền vay",
              ma: "tien_vay",
              loai: "nummber",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Loại thụ hưởng",
              ma: "loai_th",
              loai: "select",
              agile: "left",
              tim: "K",
              edit: "C",
              list: data,
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Người thụ hưởng",
              ma: "nguoi_th",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Địa chỉ người thụ hưởng",
              ma: "dchi_nguoi_th",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Biển xe",
              ma: "bien_xe",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Số khung",
              ma: "so_khung",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Số máy",
              ma: "so_may",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 2,
            },
          ],
        },
        {
          ma: "hd_khac",
          loai: "checkbox",
          chon: "C",
          tieude: "Thông tin người nhận hóa đơn (Nếu có phát hành)",
          xs: 12,
          sm: 12,
          md: 12,
          content: [
            {
              tieude: "Người nhận",
              ma: "ten_hd_nn",
              loai: "text",
              tim: "K",
              edit: "C",
              list: data,
              agile: "left",
              content: null,
              ma_chon: 1,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Số điện thoại",
              ma: "dt_hd_nn",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Công ty",
              ma: "cty_hd_nn",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 6,
            },
            {
              tieude: "Địa chỉ",
              ma: "dchi_hd_nn",
              loai: "text",
              tim: "K",
              edit: "C",
              list: data,
              agile: "left",
              content: "",
              ma_chon: 1,
              xs: 2,
              sm: 8,
              md: 4,
            },
          ],
        },
        {
          ma: "hd_khac3",
          loai: "checkbox",
          chon: "C",
          tieude: "Thông tin người nhận hóa đơn (Nếu có phát hành)",
          xs: 12,
          sm: 12,
          md: 12,
          content: [
            {
              tieude: "Người nhận",
              ma: "ten_hd_nn",
              loai: "text",
              tim: "K",
              edit: "C",
              list: data,
              agile: "left",
              content: null,
              ma_chon: 1,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Số điện thoại",
              ma: "dt_hd_nn",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Công ty",
              ma: "cty_hd_nn",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 6,
            },
            {
              tieude: "Địa chỉ",
              ma: "dchi_hd_nn",
              loai: "text",
              tim: "K",
              edit: "C",
              list: data,
              agile: "left",
              content: "",
              ma_chon: 1,
              xs: 2,
              sm: 8,
              md: 4,
            },
          ],
        },
        {
          ma: "hd_khac1",
          loai: "checkbox",
          chon: "C",
          tieude: "Thông tin người nhận hóa đơn (Nếu có phát hành)",
          xs: 12,
          sm: 12,
          md: 12,
          content: [
            {
              tieude: "Người nhận",
              ma: "ten_hd_nn",
              loai: "text",
              tim: "K",
              edit: "C",
              list: data,
              agile: "left",
              content: null,
              ma_chon: 1,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Số điện thoại",
              ma: "dt_hd_nn",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Công ty",
              ma: "cty_hd_nn",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 6,
            },
            {
              tieude: "Địa chỉ",
              ma: "dchi_hd_nn",
              loai: "text",
              tim: "K",
              edit: "C",
              list: data,
              agile: "left",
              content: "",
              ma_chon: 1,
              xs: 2,
              sm: 8,
              md: 4,
            },
          ],
        },
        {
          ma: "hd_khac2",
          loai: "checkbox",
          chon: "C",
          tieude: "Thông tin người nhận hóa đơn (Nếu có phát hành)",
          xs: 12,
          sm: 12,
          md: 12,
          content: [
            {
              tieude: "Người nhận",
              ma: "ten_hd_nn",
              loai: "text",
              tim: "K",
              edit: "C",
              list: data,
              agile: "left",
              content: null,
              ma_chon: 1,
              xs: 2,
              sm: 8,
              md: 2,
            },
            {
              tieude: "Số điện thoại",
              ma: "dt_hd_nn",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 4,
            },
            {
              tieude: "Công ty",
              ma: "cty_hd_nn",
              loai: "text",
              agile: "left",
              tim: "K",
              edit: "C",
              content: "",
              ma_chon: null,
              xs: 2,
              sm: 8,
              md: 6,
            },
            {
              tieude: "Địa chỉ",
              ma: "dchi_hd_nn",
              loai: "text",
              tim: "K",
              edit: "C",
              list: data,
              agile: "left",
              content: "",
              ma_chon: 1,
              xs: 2,
              sm: 8,
              md: 4,
            },
          ],
        },
        {
          ma: "lable",
          loai: "label",
          chon: "C",
          tieude: "Các Điều khoản bổ sung của bảo hiểm vật chất",
          xs: 12,
          sm: 12,
          md: 12,
        },
        {
          ma: "grid",
          loai: "grid",
          chon: "C",
          tieude: "",
          xs: 12,
          sm: 12,
          md: 12,
          header: [
            {
              file: "ma",
              ten: "Mã",
              loai: "text",
              edit: "C",
              width: 100,
              description: "Giải thích header",
            },
            {
              file: "phuphi",
              ten: "Phụ phí",
              loai: "number",
              edit: "C",
              description: "Giải thích header",
            },
            {
              file: "phi",
              ten: "Phí",
              loai: "number",
              edit: "C",
              description: "Giải thích header",
            },
            {
              file: "ten",
              ten: "Tên",
              loai: "text",
              edit: "C",
              description: "Giải thích header",
            },
           
          
          ],
          content: [
            {
              ma: "ABC",
              phuphi: 100000,
              phi: 1000000,
              ten: "Không trừ khấu hao",
              ngay: new Date(),
              // quocgia: null,
            },
            {
              ma: "ABC",
              phuphi: 100000,
              phi: 1000000,
              ten: "Không trừ khấu hao",
              ngay: new Date(),
              // quocgia: null,
            },
            {
              ma: "ABC",
              phuphi: 100000,
              phi: 1000000,
              ten: "Không trừ khấu hao",
              ngay: new Date(),
              // quocgia: null,
            },
            {
              ma: "ABC",
              phuphi: 100000,
              phi: 1000000,
              ten: "Không trừ khấu hao",
              ngay: new Date(),
              // quocgia: null,
            },
          ],
        },
        {
          loai: "button",
          tieude: "Quay lại",
          ma: "back",
        },
        {
          loai: "button",
          tieude: "Tiếp theo",
          ma: "next",
        },
      ],
    },
    {
      ten: "Hoàn thành",
      action: "C",
      ma: "HT",
      contens: [
        {
          loai: "button",
          tieude: "Quay lại",
          ma: "back",
        },
        {
          loai: "button",
          tieude: "Thanh toán",
          ma: "HT",
        },
      ],
    },
  ],
};
