import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Dashboard from "../Dashboard/Dashboard";
import Error from "../Components/Error";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);

export default Router;
