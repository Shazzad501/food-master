import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/Menu/OurMenu";
import Error from "../Pages/Error";
import Order from "../Pages/FoodOrder/Order";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'menu',
        element: <OurMenu/>
      },
      {
        path: 'order',
        element: <Order/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'signup',
        element: <SignUp/>
      }
    ]
  },
]);

export default router;