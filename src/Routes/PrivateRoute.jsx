import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Shared/Loading';

const PrivateRoute = ({children}) => {
  const {user, loading}= useContext(AuthContext);
  const location = useLocation();
  if(loading){
    return <Loading/>
  }
  if(user && user?.email){
    return children;
  }
  return <Navigate state={{from:location}} to='/login' replace></Navigate>;
};

export default PrivateRoute;