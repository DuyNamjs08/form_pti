import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./app/css/app.css";
import { BrowserRouter } from "react-router-dom";
import "./app/css/index.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./cdn/utils/store";

// ReactDOM.render(
//   <React.StrictMode>

//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
