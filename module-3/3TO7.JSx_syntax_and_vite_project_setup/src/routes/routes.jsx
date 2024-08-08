import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layout/MainLayout";
import Login from "../page/login";
import ErrorRoute from "../page/ErrorRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<ErrorRoute/>,
      children: [
        { path: "/", element: <App /> },
        // { path: "/login", element: <Login /> },
        { path: "/login", element: <App /> },
        { path: "/register", element: <App /> },
      ],
    },
  ]);
  export default router;
