import './Form.Component.css';
import React from "react";
import Grid from '@mui/material/Grid';
import BasicTextFields from "../../../cdn/base_component/textfiled/text_field";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { SvgIcon } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const data = [
  {
    id: 1,
    label: 'Doanh nghiệp'
  },
  {
    id: 2,
    label: 'Cá nhân'
  },
  {
    id: 3,
    label: 'Hành chính sự nghiệp'
  },
  {
    id: 4,
    label: 'Liên doanh nước ngoài'
  },
];

const data2 = [
  {
    id: 1,
    label: 'Khác'
  },
  {
    id: 2,
    label: 'Chủ xe'
  }
];

const data3 = [
  {
    id: 1,
    label: 'Xe đã qua sử dụng'
  },
  {
    id: 2,
    label: 'Xe mới chưa lưu hành'
  }
];
const FormComponent = () => {
  const [valueData, setValue] = React.useState(data[0].label);
  const [inputValue, setInputValue] = React.useState('');


  //Date
  const [valueDate, setValueDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleChange = (newValue) => {
    setValueDate(newValue);
  };

  //
  const [valueData2, setValueData2] = React.useState(data2[0].label);
  const [inputValueData2, setInputValueData2] = React.useState('');

  //
  const [valueData3, setValueData3] = React.useState(data3[0].label);
  const [inputValueData3, setInputValueData3] = React.useState('');
  return (
    <div class="tab-content min-height-65 active grid" id="UPa_ct1">
      <div class="show">
        <div class="show-form">
          <div class="item">
            <div class="row mt-0 mt-md-3 mt-lg-3">
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={3} md={3} >
                  <BasicTextFields
                    label={"Tên bên mua bảo hiểm *"}
                    textAlign={"left"}
                    isUppercase={false}
                    isNonAccentVietnamese={true}
                    keyboard={"number"}
                    isAction={false}
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3} >
                  <Autocomplete
                    style={{ marginTop: 8, transform: "translateX(10px)" }}
                    id="controlled"
                    value={valueData}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                      setInputValue(newInputValue);
                    }}
                    options={data}
                    renderInput={(params) => <TextField {...params} label="Lựa chọn đơn vị bảo hiểm" />}
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3} >
                  <BasicTextFields
                    label={"Mã thuế/CMND *"}
                    textAlign={"left"}
                    isUppercase={false}
                    isNonAccentVietnamese={true}
                    keyboard={"number"}
                    isAction={false}
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3} >
                  <BasicTextFields
                    label={"Số CIF Khách hàng"}
                    textAlign={"left"}
                    isUppercase={false}
                    isNonAccentVietnamese={true}
                    keyboard={"number"}
                    isAction={false}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={12} md={12} >
                  <BasicTextFields
                    label={"Địa chỉ *"}
                    textAlign={"left"}
                    isUppercase={false}
                    isNonAccentVietnamese={true}
                    keyboard={"number"}
                    isAction={false}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={6} md={6} >
                  <BasicTextFields
                    label={"Số DKKD"}
                    textAlign={"left"}
                    isUppercase={false}
                    isNonAccentVietnamese={true}
                    keyboard={"number"}
                    isAction={false}
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3} >
                  <BasicTextFields
                    label={"Đại diện"}
                    textAlign={"left"}
                    isUppercase={false}
                    isNonAccentVietnamese={true}
                    keyboard={"number"}
                    isAction={false}
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3} >
                  <BasicTextFields
                    label={"Chức vụ"}
                    textAlign={"left"}
                    isUppercase={false}
                    isNonAccentVietnamese={true}
                    keyboard={"number"}
                    isAction={false}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={3} md={3} >
                  <BasicTextFields
                    label={"Tên chủ xe *"}
                    textAlign={"left"}
                    isUppercase={false}
                    isNonAccentVietnamese={true}
                    keyboard={"number"}
                    isAction={false}
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3} >
                  <BasicTextFields
                    label={"Số điện thoại *"}
                    textAlign={"left"}
                    isUppercase={false}
                    isNonAccentVietnamese={true}
                    keyboard={"number"}
                    isAction={false}
                  />
                </Grid>
                <Grid item xs={2} sm={6} md={6} >
                  <BasicTextFields
                    label={"Email *"}
                    textAlign={"left"} a
                    isUppercase={false}
                    isNonAccentVietnamese={true}
                    keyboard={"number"}
                    isAction={false}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={3} md={3} >
                  <BasicTextFields
                    label={"Tên bên mua bảo hiểm *"}
                    textAlign={"left"}
                    isUppercase={false}
                    isNonAccentVietnamese={true}
                    keyboard={"number"}
                    isAction={false}
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3} >
                  <Grid container columns={{ xs: 2, sm: 8, md: 12 }} style={{ transform: "translate(8px,8px)" }}>
                    <Grid item sm={10} md={10} >
                      <LocalizationProvider dateAdapter={AdapterDateFns} >
                        <DesktopDatePicker
                          label="Date desktop"
                          inputFormat="MM/dd/yyyy"
                          value={valueDate}
                          onChange={handleChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item sm={2} md={2} >
                      <button class="btn-list-input" title='BẢNG NHẬP DANH SÁCH SỐ HỢP ĐỒNG TÍN DỤNG'><SvgIcon component={ChevronRightIcon} inheritViewBox /></button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={2} sm={3} md={3} >
                  <BasicTextFields
                    label={"Thời hạn vay(tháng)"}
                    textAlign={"left"}
                    isUppercase={false}
                    isNonAccentVietnamese={true}
                    keyboard={"number"}
                    isAction={false}
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3} >
                  <BasicTextFields
                    label={"Tài khoản trích phí"}
                    textAlign={"left"}
                    isUppercase={false}
                    isNonAccentVietnamese={true}
                    keyboard={"number"}
                    isAction={false}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={3} md={3} >
                  <FormControl fullWidth sx={{ m: 1 }} style={{ backgroundColor: 'white' }} >
                    <InputLabel htmlFor="outlined-adornment-amount">Mã cán bộ *</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value="CAPDONKTTT"
                      label="CAPDONKTTT"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={2} sm={3} md={3} >
                  <FormControl fullWidth sx={{ m: 1 }} style={{ backgroundColor: 'white' }} >
                    <InputLabel htmlFor="outlined-adornment-amount">Tên cán bộ *</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value="CAP DON KTTT"
                      label="CAP DON KTTT"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={2} sm={3} md={3} >
                  <BasicTextFields
                    label={"Email cán bộ Ngân hàng"}
                    textAlign={"left"}
                    isUppercase={false}
                    isNonAccentVietnamese={true}
                    keyboard={"number"}
                    isAction={false}
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3} >
                  <BasicTextFields
                    label={"Dư nợ khoản vay(VND)"}
                    textAlign={"left"}
                    isUppercase={false}
                    isNonAccentVietnamese={true}
                    keyboard={"number"}
                    isAction={false}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={3} md={3} >
                  <Autocomplete
                    style={{ marginTop: 8, transform: "translateX(10px)" }}
                    id="controlled"
                    value={valueData2}
                    onChange={(event, newValue) => {
                      setValueData2(newValue);
                    }}
                    inputValue={inputValueData2}
                    onInputChange={(event, newInputValue) => {
                      setInputValueData2(newInputValue);
                    }}
                    options={data2}
                    renderInput={(params) => <TextField {...params} label="Đối tượng thụ hưởng" />}
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3} >
                  <BasicTextFields

                    label={"Mã thụ hưởng "}
                    textAlign={"left"}
                    isUppercase={false}
                    isNonAccentVietnamese={true}
                    keyboard={"number"}
                    isAction={false}
                  />
                </Grid>
                <Grid item xs={2} sm={6} md={6} >
                  <BasicTextFields
                    label={"Người thụ hưởng"}
                    textAlign={"left"} a
                    isUppercase={false}
                    isNonAccentVietnamese={true}
                    keyboard={"number"}
                    isAction={false}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={12} md={12} >
                  <BasicTextFields
                    label={"Địa chỉ thụ hưởng"}
                    textAlign={"left"}
                    isUppercase={false}
                    isNonAccentVietnamese={true}
                    keyboard={"number"}
                    isAction={false}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={3} md={3} >
                  <BasicTextFields
                    label={"Biển xe *"}
                    textAlign={"left"}
                    isUppercase={false}
                    isNonAccentVietnamese={true}
                    keyboard={"number"}
                    isAction={false}
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3} >
                  <BasicTextFields
                    label={"Số khung *"}
                    textAlign={"left"}
                    isUppercase={false}
                    isNonAccentVietnamese={true}
                    keyboard={"number"}
                    isAction={false}
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3} >
                  <BasicTextFields
                    label={"Số máy *"}
                    textAlign={"left"}
                    isUppercase={false}
                    isNonAccentVietnamese={true}
                    keyboard={"number"}
                    isAction={false}
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3} >
                  <Autocomplete
                    style={{ marginTop: 8, transform: "translateX(10px)" }}
                    id="controlled"
                    value={valueData3}
                    onChange={(event, newValue) => {
                      setValueData3(newValue);
                    }}
                    inputValueData3={inputValueData3}
                    onInputChange={(event, newInputValue) => {
                      setInputValueData3(newInputValue);
                    }}
                    options={data3}
                    renderInput={(params) => <TextField {...params} label="Tính chất" />}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={12} md={12} style={{ paddingLeft: "1.8rem" }}>
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Thông tin người nhận hóa đơn (Nếu có phát hành)"
                    labelPlacement="end"
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <button class="btn-next me-4" type='button'>Tiếp theo</button>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;

// const inforFormComponent = ()=>{
//     return (
//         <Box class="tab-content min-height-65 active" id="UPa_ct1">
//             <div >
//                 <p>adasd</p>
//             </div>
//         </Box>
//     );
// }

// export default ;

