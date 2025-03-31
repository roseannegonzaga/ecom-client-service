import api from '@/api/index.js';

const {http} = api;

export default {
    baseUrl: import.meta.env.VITE_APP_AUTH_SERVICE_URL,
    url: "api/products",
    http,

    getProducts() {
        return this.http(this.baseUrl).post(this.url);

    }
}