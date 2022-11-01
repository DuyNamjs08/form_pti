import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import {
  LoginInit,
  LoginSelected,
  LoginUser,
} from "../../Actions/LoginActions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const theme = createTheme();

export default function Login() {
  // const loginKD = useSelector((state) => state.callApiLogin.loginKD);
  const ma_nsd = useSelector((state) => state.callApiLogin.ma_nsd);
  console.log("ma_nsd:", ma_nsd);
  // console.log("ma_nsd:", loginKD);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [donvi, setDonvi] = useState(null);
  const [maDonvi, setMaDonvi] = useState(null);
  const [maNsd, setMaNsd] = useState(null);
  console.log("maDonvi", maDonvi);
  console.log("maNsd", maNsd);

  const handleCall = async (email) => {
    try {
      const result = await dispatch(LoginInit(email));
      const respones = unwrapResult(result);
      console.log("respones::::", respones);
      if (respones.code === "400") {
        alert(respones.message);
        // setDonvi(null);
      } else if (respones.code === "000") {
        setDonvi(respones.data);
        setMaDonvi(respones.data.ma_dvi);
        setMaNsd(respones.data.ma_nsd);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (email) {
      handleCall(email);
    }
  }, [email]);

  const schema = yup.object().shape({
    email: yup.string().email().required("email is required"),
    password: yup.string().min(6).max(32).required("password is required"),
    donvi: yup.string().required("required"),
    ma_nsd: yup.string().required("required"),
  });
  const defaultValues = {
    firstName: "bill",
    lastName: "luo",
    email: "bluebill1049@hotmail.com",
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "bill",
      filters: "12",
    },
    resolver: yupResolver(schema),
  });
  const SubmitForm = async (data) => {
    try {
      console.log("data", data);
      reset();
      const result = await dispatch(LoginUser({ ...data, maDonvi, maNsd }));
      const respones = unwrapResult(result);
      if (respones.code === "000") {
        localStorage.setItem("token", respones.data);
        navigate("/insurance");
      } else {
        alert(respones.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="login-container">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(SubmitForm)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              {...register("email")}
              margin="normal"
              onBlur={(e) => setEmail(e.target.value)}
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
            />
            <Typography className="login__error" gutterBottom>
              {errors.email?.message}
            </Typography>
            <Box sx={{ minWidth: 160 }}>
              <FormControl fullWidth sx={{ mt: 1, minWidth: 400 }}>
                <InputLabel id="demo-simple-select-label">Đơn vị</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="donvi"
                  {...register("donvi", { required: "This is required !" })}
                  onChange={(e) =>
                    setValue("donvi", e.target.value, {
                      shouldValidate: false,
                    })
                  }
                  label="Đơn vị"
                >
                  {donvi ? (
                    donvi.ds_dns.map((item) => (
                      <MenuItem
                        key={item.TEN}
                        onClick={() => dispatch(LoginSelected(email))}
                        value={item.TEN}
                      >
                        {item.TEN}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value=""></MenuItem>
                  )}
                </Select>
              </FormControl>
            </Box>
            <Typography className="login__error" gutterBottom>
              {errors.donvi?.message}
            </Typography>
            <Box sx={{ minWidth: 160 }}>
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel id="demo-simple-select-label">Mã nsd</InputLabel>
                <Select
                  defaultValue
                  labelId="demo-simple-select-label"
                  id="ma_nsd"
                  label="Mã nsd"
                  {...register("ma_nsd")}
                  onChange={(e) =>
                    setValue("ma_nsd", e.target.value, {
                      shouldValidate: false,
                    })
                  }
                >
                  {ma_nsd ? (
                    ma_nsd.data.ds_nsd.map((item, index) => (
                      <MenuItem key={index} value={item.MA}>
                        {item.MA}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value=""></MenuItem>
                  )}
                </Select>
              </FormControl>
            </Box>
            <Typography className="login__error" gutterBottom>
              {/* {errors.ma_nsd?.message} */}
            </Typography>
            <TextField
              {...register("password")}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <Typography className="login__error" gutterBottom>
              {errors.password?.message}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
