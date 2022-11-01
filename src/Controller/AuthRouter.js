import { makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import LoginAction from "./LoginAction";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 50),
  },
}));

AuthRouter.propTypes = {};

function AuthRouter(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  // const loginInUser = useSelector((state) => state.user.current);
  const token = useSelector((state) => state.callApiLogin.token);
  // const isLoggedIn = !!loginInUser.id;
  if (token) {
    // navigate("/dashboard");
  }
  return (
    <div className={classes.root}>
      <LoginAction />
    </div>
  );
}

export default AuthRouter;
