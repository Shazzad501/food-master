import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
};

export default MainLayout;