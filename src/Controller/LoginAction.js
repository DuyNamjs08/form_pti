import { unwrapResult } from "@reduxjs/toolkit";
// import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import * as STATUS from "../constants/status_code";
import { useDispatch } from "react-redux";
import { loginController } from "../cdn/utils/userSlice";
import Login from "../Views/Home/Login";
import { useNavigate } from "react-router-dom";
LoginAction.propTypes = {
  closeDialog: PropTypes.func,
};

function LoginAction(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const { enqueueSnackbar } = useSnackbar();

  //   const showNoti = (message, variant) => {
  //     enqueueSnackbar(message, { variant: variant });
  //   };

  const handleSubmit = async (values) => {
    try {
      const action = loginController(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log("cakkk daoidn");

      if (user.code === STATUS.SUCCESS) {
        navigate("/insurance");
      } else {
        alert(user.message);
      }
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
      console.log(user);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div>
      <Login onSubmit={handleSubmit} />
    </div>
  );
}

export default LoginAction;
