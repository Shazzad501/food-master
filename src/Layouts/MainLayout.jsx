import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const MainLayout = () => {
  const location = useLocation()
  const loginSingUpPage = location.pathname.includes('login') || location.pathname.includes('signup')
  return (
    <div>
      { loginSingUpPage || <Navbar/>}
      <Outlet></Outlet>
      { loginSingUpPage || <Footer/>}
    </div>
  );
};

export default MainLayout;