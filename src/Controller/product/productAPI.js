import axiosClient from "../../cdn/utils/axiosClient";

import * as URL from "../../constants/api_url";

const ProductApi = {
  khoidong(data) {
    const url = URL.DOMAINTEST + URL.KHOIDONG;
    return axiosClient.post(url, data);
  },
  hangxe(data) {
    const url = URL.DOMAINTEST + URL.HANGXE;
    return axiosClient.post(url, data);
  },
};

export default ProductApi;
