import axios from "axios";
import { interceptors } from "node_modules/axios/index.cjs";

export default {
    http(baseUrl){
        const http = axios.create({ baseURL: baseUrl})

        http:interceptors.request.use((config) => {
            const token = JSON.parse(localStorage.getItem('"auth"'));

            config.headers.Accept = "application/json";
            config.headers.Authorization = 'Bearer ${token.access_token}';

            return config;
        });

        return http;
    },
};