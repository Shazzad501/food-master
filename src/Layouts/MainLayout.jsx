import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const MainLayout = () => {
  const location = useLocation()
  const loginPage = location.pathname.includes('login')
  return (
    <div>
      { loginPage || <Navbar/>}
      <Outlet></Outlet>
      { loginPage || <Footer/>}
    </div>
  );
};

export default MainLayout;