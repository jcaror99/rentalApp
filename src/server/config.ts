import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: String(process.env.BACKEND_URL),
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
