import axios from "axios";
import { API_URL } from "./CONSTANTS";

export const getPublicRequest = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    // Authorization:``
    "Content-Type": "application/json",
  },
});
export const getPrivateRequest = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    // Authorization:``
    "Content-Type": "application/json",
  },
});
