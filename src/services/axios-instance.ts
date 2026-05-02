import axios from "axios";

const BASE_URL = "/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "accept": "application/json",
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true"
  },
  
});

export default axiosInstance;
