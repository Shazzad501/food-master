import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Loading from "../Pages/Shared/Loading";

const AdminRoute = ({children}) => {
  const {user, loading} = useAuth()
  const [isAdmin, isAdminLoading] = useAdmin()
  const location = useLocation();

  if(loading || isAdminLoading){
    return <Loading/>
  }
  if(user && isAdmin){
    return children;
  }
  return <Navigate state={{from:location}} to='/login'></Navigate>;;
};

export default AdminRoute;