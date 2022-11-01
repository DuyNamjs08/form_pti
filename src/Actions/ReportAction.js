import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as ACTION from "../constants/actions";
import ReportController from "../Controller/ReportController";

export const InitView = createAsyncThunk(ACTION.REPORT_KD, async (payload) => {
  //call api to register
  const response = await ReportController.Register(payload);
  //save data to local storage
  //   localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  //   localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  return response;
});
export const ListSubGroup = createAsyncThunk(ACTION.REPORT_GROUP, async (payload) => {
  //call api to register
  const response = await ReportController.ListSubGroup(payload);
  //save data to local storage
  //   localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  //   localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  return response;
});
export const ListCode = createAsyncThunk(ACTION.REPORT_GROUP, async (payload) => {
  //call api to register
  const response = await ReportController.ListCode(payload);
  //save data to local storage
  //   localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  //   localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  return response;
});
export const ListCodeTemplate = createAsyncThunk(ACTION.REPORT_GROUP, async (payload) => {
  //call api to register
  const response = await ReportController.ListCodeTemplate(payload);
  //save data to local storage
  //   localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  //   localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  return response;
});
export const RenderController = createAsyncThunk(ACTION.REPORT_GROUP, async (payload) => {
  //call api to register
  const response = await ReportController.ReportCondition(payload);
  //save data to local storage
  //   localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  //   localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  return response;
});

const reportSlice = createSlice({
  name: 'listCode',
  initialState: {
    show: false,
    templateBC: null,
    dataController: null,
    dataDrop: null
  },
  reducers: {
    visible: (state, action) => {
      state.show = action.payload
    },
    hidden: (state, action) => {
      state.show = action.payload
    },
    listBC: (state, action) => {
      state.templateBC = action.payload
    },
    requestController: (state, action) => {
      state.dataController = action.payload
    },
    requestDrop: (state, action) => {
      state.dataDrop = action.payload
    },
  }

})

const { reducer, actions } = reportSlice
export const { visible, hidden, requestController, requestDrop, listBC } = actions
export default reducer