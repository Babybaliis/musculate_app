import axiosInstance from "./axiosInstance";

const BASE_PATH = '/hierarchy/muscle-group'

export default {
    async getAll   ()  {
        const response = await axiosInstance.get(`${BASE_PATH}/all`);
        return response.data
    }
}


