import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/menu')
    .then(res => setMenu(res.data))
  }, [])
  return [menu]
};

export default useMenu;