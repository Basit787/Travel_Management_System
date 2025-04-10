import axios from "axios";
import { BASE_URL } from "./endpoints";
import { toast } from "react-toastify";
import { getToken } from "../helpers/user.helper";

const ApiInstance = axios.create({
  baseURL: BASE_URL,
});

ApiInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    toast.error("Request Failed");
    return Promise.reject(error);
  },
);

ApiInstance.interceptors.response.use(
  (response) => {
    if (!response.data) {
      toast.error("No data received");
      return Promise.reject(new Error("No data received"));
    }
    return response;
  },
  (error) => {
    if (!error.response) {
      toast.error("Network Error: Please check your connection");
    } else {
      switch (error.response.status) {
        case 400:
          toast.error("Bad Request");
          break;
        case 401:
          toast.error("Unauthorized");
          break;
        case 403:
          toast.error("Forbidden");
          break;
        case 404:
          toast.error("Not Found");
          break;
        case 500:
          toast.error("Internal Server Error");
          break;
        default:
          toast.error("Something went wrong");
      }
    }
    return Promise.reject(error);
  },
);

export default ApiInstance;
