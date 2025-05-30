import axios from "axios";
const URL = import.meta.env.VITE_API_URL;

const httpClient = axios.create({
  baseURL: URL,
  headers: {
    Accept: "application/json",
  },
});

export default httpClient;
