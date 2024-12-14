import api from "../configs/api.js";

const getBills = () => api.get("/");

const getBill = (id) => api.get(`/${id}`);

const createBill = (data) => api.post("/", { ...data });

export { getBills, getBill, createBill };
