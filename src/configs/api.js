import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Authorization": "Bearer 7fb412bd-a074-4daf-9a4b-02138771d3b6",
    "Content-Type": "application/json",
  },
});

export default api;
