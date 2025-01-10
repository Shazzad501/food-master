import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
})
const useAxiosSecure = () => {
  const {logoutUser} = useAuth()
  const navigate = useNavigate()


  // request interceptor to  add authorization header for every secure call into the api
  axiosSecure.interceptors.request.use(function(config){
    const token = localStorage.getItem('access-token')
    // console.log('request stoped by interceptors. Before addin token', token)
    config.headers.authorization = `Bearer ${token}`
    return config;
  }, function(error){
    return Promise.reject(error)
  });

  // respons interceptor for 401 and 403 
  axiosSecure.interceptors.response.use((res)=>{
    return res;
  },async(error)=>{
    const status = error.response.status;
    // console.log('Status from interceptor', status)

    // for log out the user and move the user to the login page 
    if(status === 401 || status === 403){
      await logoutUser();
      navigate('/login')
    }
    return Promise.reject(error)
  })
  return axiosSecure;
};

export default useAxiosSecure;