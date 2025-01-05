import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Shared/Loading';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {
  const {user, loading}= useAuth()
  const location = useLocation();
  if(loading){
    return <Loading/>
  }
  if(user && user?.email){
    return children;
  }
  return <Navigate state={{from:location}} to='/login'></Navigate>;
};

export default PrivateRoute;