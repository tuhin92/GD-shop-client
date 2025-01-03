import { createBrowserRouter } from "react-router-dom";
import Main_layout from "../Layout/Main_layout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main_layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: 'products',
          element: <Products/>
        },
        {
          path: 'about',
          element: <About/>
        },
        {
          path: 'contact',
          element: <Contact/>
        },
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'register',
          element: <Register/>
        }
      ]
    },
  ]);