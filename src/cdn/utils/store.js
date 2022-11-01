import userReducer from "./userSlice";
import callApiLogin from '../../Actions/LoginActions'
import reportSlice from '../../Actions/ReportAction'

const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  user: userReducer,
  callApiLogin:callApiLogin,
  reportSlice:reportSlice
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
