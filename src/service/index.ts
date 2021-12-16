import KoreaRequest from "./request";
import { BASE_URL } from "./request/config";

export const request = new KoreaRequest({
  baseURL: BASE_URL,
  timeout: 10000,
  interceptors: {
    requestInterceptors: (config) => {
      const token = "";
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    },
  },
});
