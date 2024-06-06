import axiosInstance from "./axiosInstance";

const BASE_PATH = 'user/current-user'

export default {
    async getUserId   ()  {
        const response = await axiosInstance.get(`${BASE_PATH}`);
        return response.data
    }
}