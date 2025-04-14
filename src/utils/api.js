import axios from 'axios';
const API_KEY = '7659fd736798c40b04b299de';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;

const api = axios.create({ baseURL: BASE_URL });

api.interceptors.response.use(null, async (error) => {
    const config = error.config;
    if (!config || config.__retryCount >= 3) {
        return Promise.reject(error);
    }

    config.__retryCount = config.__retryCount || 0;
    config.__retryCount += 1;

    return new Promise((resolve) => {
        setTimeout(() => resolve(api(config)), 1000);
    });
});

export default api;
