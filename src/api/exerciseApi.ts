import axiosInstance from "./axiosInstance";
import {GetAllByMuscleGroupFilter} from "../../musculate-app";

const BASE_PATH = '/hierarchy/exercise'

export default {
    async getAllByMuscleGroupId (id:number, filter: GetAllByMuscleGroupFilter ){
        const response = await axiosInstance.post(`${BASE_PATH}/all/${id}` ,filter);
        return response.data
    }
}
