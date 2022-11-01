// import StorageKeys from "../constants/storage-keys";
// import axiosClient from "./axiosClient";

// const userApi = {
//     register(data) {
//         const url = 'register/';
//         return axiosClient.post(url, data);
//     },
//     login(data) {
//         const url = '/api/token/';
//         return axiosClient.post(url, data);
//     },
//     async getUser(params) {
//         const newParams = { ...params }
//         const accessToken = localStorage.getItem(StorageKeys.access)
//         const url = `users/`;
//         const response = await axiosClient.get(url, {
//             params: { ...newParams },
//             headers: {
//                 Authorization: `Bearer ${accessToken}`
//             }
//         });
//         return response
//     },
//     async getProfile(params) {
//         const newParams = { ...params }
//         const accessToken = localStorage.getItem(StorageKeys.access)
//         const response = await axiosClient.get(`/detail/`, {
//             params: { ...newParams },
//             headers: {
//                 Authorization: `Bearer ${accessToken}`
//             }
//         })
//         return response
//     },
// }

// export default userApi

import axiosClient from "./axiosClient";
import * as API_URL from "../../constants/api_url";
import {Fs_LOGIN_F1} from "../../constants/ApiRequest/login_api";

const userApi = {
  register(data) {
    const url = "/auth/local/register";
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = API_URL.DOMAIN + Fs_LOGIN_F1
    return axiosClient.post(url, data);
  },
};

export default userApi;
