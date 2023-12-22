import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://task-management-a8-server-828aprsaa-habibur-rahmans-projects.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;