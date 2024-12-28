import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
};

export default MainLayout;