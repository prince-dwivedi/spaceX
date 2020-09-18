import axios from 'axios';
import config from "../config";

const api = axios.create({
    baseURL: config.spacex.APIURL,
    headers: {
        'Content-Type': 'application/json',
    }
});
api.interceptors.request.use(
    (config) => {        
        
        return config;
    },
    (error) => {        
        return Promise.reject(error);
    },
);
api.interceptors.response.use(
    (response) => {        
        return response.data;
    },
    (error) => {        
        const generic_error = 'Something went wrong.';
        if (error.response && error.response.data) {
            if (typeof error.response.data === 'string') {
                const newData = {
                    error: generic_error,
                    info: error.response.data,
                };
                return Promise.reject(newData);
            }
            return Promise.reject(error.response);
        }        
        return Promise.reject(error.message);
    },
);
export default api;