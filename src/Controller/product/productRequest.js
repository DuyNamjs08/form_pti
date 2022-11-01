import { createAsyncThunk } from "@reduxjs/toolkit";
import productAPI from "./productAPI";
// import StorageKeys from "../../constants/storage-keys";
import * as ACTION from "../../constants/actions";

export const initView = createAsyncThunk(ACTION.INITVIEW, async (payload) => {
  //call api to register
  const response = await productAPI.khoidong(payload);
  //save data to local storage
  //   localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  //   localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  return response;
});
export const hangxe = createAsyncThunk(ACTION.HANGXE, async (payload) => {
  //call api to register
  const response = await productAPI.hangxe(payload);
  //save data to local storage
  //   localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  //   localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  return response;
});
