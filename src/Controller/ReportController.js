import axiosClient from "../cdn/utils/axiosClient";
import * as API_URL from "../constants/api_url";
import * as ReportApiUrl from "../constants/ApiRequest/report_api";

const ReportController = {
  Register(data) {
    const url = API_URL.DOMAINTEST + ReportApiUrl.F_KD;
    return axiosClient.post(url, data);
  },
  ListSubGroup(data) {
    const url = API_URL.DOMAINTEST + ReportApiUrl.F_MA_PNHOM_LKE;
    return axiosClient.post(url, data);
  },
  ListCode(data) {
    const url = API_URL.DOMAINTEST + ReportApiUrl.F_MA_LKE;
    return axiosClient.post(url, data);
  },
  ListCodeTemplate(data) {
    const url = API_URL.DOMAINTEST + ReportApiUrl.F_MA_CT_LKE;
    return axiosClient.post(url, data);
  },
  ReportCondition(data) {
    const url = API_URL.DOMAINTEST + ReportApiUrl.F_MA_DK_BC_DK;
    return axiosClient.post(url, data);
  },
  ReportExport(data) {
    const url = API_URL.DOMAINTEST + ReportApiUrl.F_XLBC_NH;
    return axiosClient.post(url, data);
  },
};

export default ReportController;
