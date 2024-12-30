import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/Menu/OurMenu";
import Error from "../Pages/Error";
import Order from "../Pages/FoodOrder/Order";

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
      }
    ]
  },
]);

export default router;