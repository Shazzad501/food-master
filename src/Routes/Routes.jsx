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
import AddItem from "../Pages/Dashboard/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/Dashboard/ManageItem";
import Payment from "../Pages/Dashboard/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome";

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
      // normal user route
      {
        path: 'user-home',
        element: <PrivateRoute><UserHome/></PrivateRoute>
      },
      {
        path: 'cart',
        element: <PrivateRoute><Cart/></PrivateRoute>
      },
      {
        path: 'payment',
        element: <PrivateRoute><Payment/></PrivateRoute>
      },
      {
        path: 'payment-history',
        element: <PrivateRoute><PaymentHistory/></PrivateRoute>
      },

      // admin routes
      {
        path: 'admin-home',
        element: <PrivateRoute><AdminRoute><AdminHome/></AdminRoute></PrivateRoute>
      },
      {
        path: 'add-item',
        element: <PrivateRoute><AdminRoute><AddItem/></AdminRoute></PrivateRoute>
      },
      {
        path: 'manage-item',
        element: <PrivateRoute><AdminRoute><ManageItem/></AdminRoute></PrivateRoute>
      },
      {
        path: 'all-users',
        element: <PrivateRoute><AdminRoute><AllUsers/></AdminRoute></PrivateRoute>
      }
    ]
  }
]);

export default router;