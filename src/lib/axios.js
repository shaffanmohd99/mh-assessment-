import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const request = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export default request;
