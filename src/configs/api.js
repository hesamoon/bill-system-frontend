import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Authorization": `Bearer ${import.meta.env.VITE_RAILWAY_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export default api;
