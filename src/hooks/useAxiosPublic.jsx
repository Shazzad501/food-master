import axios from "axios";

const axiosPublic = axios.create({
  baseURL: 'https://food-master-server.vercel.app',
})
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;