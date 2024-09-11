import axios from "axios";
import { BASE_URL } from ".";

const api = axios.create({
    baseURL: BASE_URL
});

api.interceptors.request.use(async config => {
    const token = sessionStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;