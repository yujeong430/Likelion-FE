import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'http://43.201.228.85',
  withCredentials: true,
});