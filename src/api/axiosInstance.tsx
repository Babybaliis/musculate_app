import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {BASE_URL} from "@env";
import {TokenRefreshRequest} from "../../musculate-app";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

const refreshToken = async (refreshToken?: string) => {
    const response = await axiosInstance.post('/refresh-token', {
        refreshToken
    } as TokenRefreshRequest);
    return response.data.accessToken;
};

axiosInstance.interceptors.request.use(async (config) => {
    const accessToken =await AsyncStorage.getItem('accessToken');
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response.status === 403) {
            const newAccessToken = await refreshToken();
            if (newAccessToken) {
                await AsyncStorage.setItem('accessToken', newAccessToken);
                return axiosInstance(error.config);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
