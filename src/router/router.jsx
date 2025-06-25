
import {createBrowserRouter} from "react-router";
import RootLayout from "../layouts/RootLayout";

import Home from "../pages/Home/home";
import AuthLayout from "../layouts/AuthLayout";
import LogIn from "../pages/Authenticaion/LogIn";



  export  const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[

        {
            index:true,
             element:<Home></Home>
             
        }
    ]
  },
  {
    path:"/",
    element:<AuthLayout></AuthLayout>,
    children:[
          {
            path:"/logIn",
            element:<LogIn></LogIn>
          }

    ]
  }


]);