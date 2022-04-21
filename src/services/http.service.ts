import axios from "axios";
import queryString from "query-string";

export type HttpQuery = {
  [key: string]: any;
  filter?: { [key: string]: any };
  page?: { size: number; number: number };
  sort?: string;
  includes?: string;
};

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

http.interceptors.request.use(async (config) => {
  // Handle before call API
  return config;
});

http.interceptors.response.use(
  (response) => {
    if (response) {
      return response;
    }
  },
  (error) => {
    throw error;
  }
);

export default http;
