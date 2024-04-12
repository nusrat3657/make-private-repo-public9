import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Details from "../Details/Details";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../pages/UserProfile/UserProfile";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/estates.json')
        },
        {
            path: '/estates/:id',
            element: <PrivateRoute><Details></Details></PrivateRoute>,
            loader: () => fetch('../estates.json')
        },
        {
            path: '/update',
            element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
            path: '/contact',
            element: <ContactUs></ContactUs>
        },
        {
            path: '/user',
            element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/error',
            element: <ErrorPage></ErrorPage>
        }
      ]
    },
  ]);

export default router;