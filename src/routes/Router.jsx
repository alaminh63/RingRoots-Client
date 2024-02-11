import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import UserDetails from "@/Pages/UserDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/userDetails/:id",
        element: <UserDetails />,
      },
    ],
  },
]);

export default Router;
