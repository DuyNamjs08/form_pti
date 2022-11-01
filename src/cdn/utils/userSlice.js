import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "./userApi";
import StorageKeys from "../../constants/storage-keys";
import * as ACTION from "../../constants/actions";

export const register = createAsyncThunk(ACTION.REGISTER, async (payload) => {
  //call api to register
  const data = await userApi.register(payload);
  //save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  return data.user;
});

export const loginController = createAsyncThunk(ACTION.LOGIN, async (payload) => {
  //call api to register
  const response = await userApi.login({
    data: JSON.stringify(payload),
    encrypt: "K",
  });
  //save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, response.token);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(response.data));
  console.log(response);
  return response;
});

const userSlice = createSlice({
  name: ACTION.USER,
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    settings: {},
  },
  reducers: {
    logout(state) {
      //clear local storage
      state.current = {};
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);
    },
  },
  extraReducers: {
    //'user/register/fulfilled': () => {}
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },

    [loginController.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
