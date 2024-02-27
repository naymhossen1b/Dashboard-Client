import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Dashboard from "../Dashboard/Dashboard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default Router;
