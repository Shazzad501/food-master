import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const axiosPublic = useAxiosPublic()
  // const [menu, setMenu] = useState([])

  // useEffect(()=>{
  //   axios.get('https://food-master-server.vercel.app/menu')
  //   .then(res => setMenu(res.data))
  // }, [])

  const {data: menu=[], refetch} = useQuery({
    queryKey: ['menu'],
    queryFn: async()=>{
     const res = await axiosPublic.get('/menu')
     return res.data;
    }
  })
  return [menu, refetch]
};

export default useMenu;