import axios from "axios";
import axiosClient from "../cdn/utils/axiosClient";
import * as API_URL from "../constants/api_url";
import * as LOGIN from "../constants/ApiRequest/login_api_new";

const LoginController = {
  loginKD(email) {
    const url = API_URL.DOMAINTEST + LOGIN.API_LOGIN_KD;
    return axiosClient.post(url, {
      "data": JSON.stringify({ 'dns': '', 'email': email, 'loai': 'D' })
    });
  },
  loginSelect(email) {
    const url = API_URL.DOMAINTEST + LOGIN.API_LOGIN_SELECT;
    return axiosClient.post(url, {
      "data": JSON.stringify({ 'dns': 'b_dns', 'email': email, 'loai': 'N' })
    });
  },
  loginUser(payload) {
    const url = API_URL.DOMAINTEST + LOGIN.API_LOGIN;
    return axiosClient.post(url, {
      "data": JSON.stringify({ 'md': 'BH', 'dns': payload.maDonvi, 'llogin': 'C', 'ma_dvi': payload.maDonvi, 'email': payload.email, 'ma_nsd': payload.maNsd, 'pas': payload.password, 'bctd': 'false', 'semail': 'false' })
    });
  },
}

export default LoginController