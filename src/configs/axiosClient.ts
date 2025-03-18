import { ERROR_MESSAGES } from "@/constants/error-messages";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://frontend-test-api.digitalcreative.cn/",
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.code === "ECONNABORTED" && error.message.includes("timeout")) {
      return Promise.reject(new Error(ERROR_MESSAGES.ECONNABORTED));
    }

    if (error.response && error.response.status === 500) {
      return Promise.reject(new Error(ERROR_MESSAGES.INTERNAL_SERVER_ERROR));
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
