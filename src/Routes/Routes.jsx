import { createBrowserRouter } from "react-router-dom";
import Main_layout from "../Layout/Main_layout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main_layout/>,
    },
  ]);