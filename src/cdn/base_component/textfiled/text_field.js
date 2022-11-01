import React from "react";
import PropTypes from "prop-types";
import IMaskInput from "imask";
import NumberFormat from "react-number-format";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import RegexTextField from "./regex_text_field";
// import { MDBInput, MDBInputGroup, MDBBtn } from 'mdb-react-ui-kit';
import {
  FormControl,
  FormHelperText,
  IconButton,
  OutlinedInput,
  InputLabel,

} from "@mui/material";
// keyboard loại bàn phím: number,text, email,tel = phone,number,url,textarea
// money loại tiền : "+" / "-"
//textAlign = left,right,center
function BasicTextFields({
  isRequired,
  isMultiline,
  keyboard = "text",
  initValue,
  label,
  id,
  money,
  onChange,
  isNonAccentVietnamese,
  isAction,
  textAlign = "left",
  isUppercase,
  disabled = false
}) {
  // const [value, setvalue] = useState(initValue ?? "");
  // const handleChangeValue = event => {
  //   if (isNonAccentVietnamese) {
  //     event.target.value = toNonAccentVietnamese(event.target.value);
  //     if (isUppercase) {
  //       event.target.value = event.target.value.toUpperCase();
  //     }
  //   }

  //   const result = event.target.value

  //   setvalue(result);
  // };
  const [data, setData] = React.useState({
    content: initValue,
    error: false,
    contentError: "",
    numberformat: "",
  });
  const handleChange = (event) => {
    setData({
      ...data,
      content: event.target.value,
      // error: event.target.value.length < 10 ? false : true,
      // contentError: event.target.value.length < 10 ? "" : "Bạn chưa nhập đúng",
      // [event.target.name]: event.target.value,
    });
    onChange(event.target.value);
  };
  const handleAction = (event) => { };
  switch (keyboard) {
    case "money":
      return (
        <FormControl
          sx={{
            m: 1, flexGrow: 1
          }}
          variant="outlined"
          style={{ width: "100%" }}
          disabled={disabled}
        >
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <OutlinedInput
            sx={{
              padding: 0,
              paddingRight: isAction === true ? 0 : 2,
            }}
            id={id}
            name="numberformat"
            label={label}
            // type={values.showPassword ? "text" : "password"}
            inputProps={{ style: { textAlign: textAlign } }}
            value={data.content}
            inputComponent={
              money === "+" ? MoneyFormatCustom : NumberFormatCustom
            }
            onChange={handleChange}
            endAdornment={
              isAction === true ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    backgroundColor: "#E1E8EB",
                    height: 55,
                    width: 40,
                    padding: 10,
                    border: "0px solid green",
                    marginLeft: 10,
                  }}
                >
                  <IconButton
                    color="default"
                    aria-label="action"
                    onClick={handleAction}
                    onMouseDown={handleAction}
                  // edge="end"
                  >
                    <NavigateNextIcon />
                  </IconButton>
                </div>
              ) : (
                  <div></div>
                )
            }
          />
          <FormHelperText
            required={isRequired}
            error={data.error}
            children={data.contentError}
          ></FormHelperText>
        </FormControl>

      );

    case "number":
      return (
        <FormControl
          sx={{
            m: 1, flexGrow: 1
          }}
          variant="outlined"
          style={{ width: "100%" }}
          disabled={disabled}
        >
          <InputLabel required={isRequired} error={data.error}>
            {label}
          </InputLabel>
          <OutlinedInput
            sx={{
              padding: 0,
              flexGrow: 1,
              paddingRight: isAction === true ? 0 : 2,
              maxWidth: "xl",
            }}
            error={data.error}
            required={isRequired}
            multiline={isMultiline}
            value={data.content}
            type={keyboard}
            id={id}
            label={label}
            variant="outlined"
            inputProps={{
              inputMode: "numeric",
              pattern: "[09]*",
              style: { textAlign: textAlign },
            }}
            helperText={data.contentError}
            onChange={handleChange}
            endAdornment={
              isAction === true ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    backgroundColor: "#E1E8EB",
                    height: 55,
                    width: 40,
                    padding: 10,
                    border: "0px solid green",
                    marginLeft: 10,
                  }}
                >
                  <IconButton
                    color="default"
                    arialabel="action"
                    onClick={handleAction}
                    onMouseDown={handleAction}
                  // edge="end"
                  >
                    <NavigateNextIcon />
                  </IconButton>
                </div>
              ) : (
                  <div></div>
                )
            }
          />
          <FormHelperText
            required={isRequired}
            error={data.error}
            children={data.contentError}
          ></FormHelperText>
        </FormControl>

      );
    default:
      if (isNonAccentVietnamese === true) {
        return (
          <RegexTextField
            isRequired={isRequired}
            isMultiline={isMultiline}
            keyboard={keyboard}
            initValue={initValue}
            label={label}
            disabled={disabled}
            money={money}
            onChange={onChange}
            isUppercase={isUppercase}
            textAlign={textAlign}
            isAction={isAction}
          ></RegexTextField>
        );
      } else {
        return (

          <FormControl
            sx={{
              m: 1, flexGrow: 1
            }}
            variant="outlined"
            style={{ width: "100%" }}
            disabled={disabled}
          >
            <InputLabel required={isRequired} error={data.error} >
              {label}
            </InputLabel>
            <OutlinedInput
              sx={{
                paddingRight: isAction === true ? 0 : 2,

              }}

              error={data.error}
              required={isRequired}
              multiline={isMultiline}
              value={data.content}
              type={keyboard}

              id="outlinedbasic"
              label={label}
              variant="outlined"
              inputProps={{
                style: {
                  textTransform: isUppercase === true ? "uppercase" : "",
                  textAlign: textAlign,
                },
              }}
              helperText={data.contentError}
              onChange={handleChange}
              // inputComponent={
              //   isNonAccentVietnamese === true
              //     ? MoneyFormatCustom
              //     : NumberFormatCustom
              // }
              endAdornment={
                isAction === true ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                      backgroundColor: "#E1E8EB",
                      height: 55,
                      width: 40,
                      padding: 10,
                      border: "0px solid green",
                      marginLeft: 10,
                    }}
                  >
                    <IconButton
                      color="default"
                      arialabel="action"
                      onClick={handleAction}
                      onMouseDown={handleAction}
                    // edge="end"
                    >
                      <NavigateNextIcon />
                    </IconButton>
                  </div>
                ) : (
                    <div></div>
                  )
              }
            />
            <FormHelperText
              style={{ width: "100%" }}
              required={isRequired}
              error={data.error}
              children={data.contentError}
            ></FormHelperText>
          </FormControl>

        );
      }
  }
}
export default BasicTextFields;

// function toNonAccentVietnamese(str) {
//   str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
//   str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
//   str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
//   str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
//   str = str.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
//   str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
//   str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
//   str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
//   str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
//   str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
//   str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
//   str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
//   str = str.replace(/Đ/g, "D");
//   str = str.replace(/đ/g, "d");
//   // Some system encode vietnamese combining accent as individual utf8 characters
//   str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
//   str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
//   return str;
// }

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 0000000"
      definitions={{
        "#": /[09]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});
TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const MoneyFormatCustom = React.forwardRef(function NumberFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;
  const withValueLimit = ({ floatValue, value }) => {
    console.log(other.name);
    if (value === "") {
      return false;
    }
    if (floatValue >= 0 || floatValue === undefined) {
      return true;
    }
    return false;
  };
  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isAllowed={withValueLimit}
      thousandSeparator
      isNumericString
    // prefix="$"
    />
  );
});

MoneyFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;
  // const withValueLimit = ({ floatValue, value }) => {
  //   if (value === "") {
  //     return false;
  //   }
  //   if (floatValue >= 0 || floatValue === undefined) {
  //     return true;
  //   }
  //   return false;
  // };
  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      // isAllowed={withValueLimit}
      thousandSeparator
      isNumericString
    // prefix="$"
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
