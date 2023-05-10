import axios, { AxiosRequestConfig } from "axios";

const request = axios.create({
  baseURL: "/api",
});

// 请求拦截器
// Add a request interceptor
request.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// 响应拦截器
// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // 统一处理接口响应错误
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default async <T = any>(config: AxiosRequestConfig) => {
  const res = await request(config);
  debugger;
  return res.data as T;
};
