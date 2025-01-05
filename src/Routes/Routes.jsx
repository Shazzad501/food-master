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
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers";

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
        path: '/menu',
        element: <OurMenu/>
      },
      {
        path: '/order',
        element: <PrivateRoute><Order/></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <SignUp/>
      }
    ]
  },
  {
    path: 'dashboard',
    element:<Dashboard/>,
    errorElement: <Error/>,
    children:[
      {
        path: 'cart',
        element: <PrivateRoute><Cart/></PrivateRoute>
      },

      // admin routes
      {
        path: 'all-users',
        element: <AllUsers/>
      }
    ]
  }
]);

export default router;