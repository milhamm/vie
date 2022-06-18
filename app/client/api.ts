import axios, { AxiosResponse } from "axios";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

export const internalAPI = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

export const headerAuth = (token: string) => {
  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  return {};
};

const onResponseSuccess = (response: AxiosResponse<any, any>) => {
  return response.data;
};

const onResponseError = (error: any) => {
  if (error.response) {
    if (error.response.status === 500) {
      return Promise.reject("Internal Server Error");
    }

    if (error.response.status === 401) {
      return Promise.reject("Unauthorized");
    }

    return Promise.reject(error.response.data);
  }

  return Promise.reject(error);
};

api.interceptors.response.use(onResponseSuccess, onResponseError);

export const fetcher = <T>(url: string, config: any) =>
  api.get<unknown, T>(url, config).then((res) => res);

export const internalFetcher = <T>(url: string, method: string, payload: any) =>
  internalAPI
    .post<unknown, T>("/authRequest", { type: method, url: url, payload })
    .then((res) => res);

export default api;
