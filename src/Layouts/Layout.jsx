import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard/Sidebar";

const Layout = () => {
  return (
    <div className=" w-11/12 mx-auto overflow-hidden py-5">
      <Sidebar />
      <div className="py-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
