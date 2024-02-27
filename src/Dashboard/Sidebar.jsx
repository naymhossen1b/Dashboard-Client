import { useState } from "react";
import { Drawer, Space } from "antd";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SearchModal from "../Components/SearchModal";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <section className="border w-full rounded-md px-5 py-4 flex items-center justify-between">
        <Space className=" flex items-center">
          <div
            onClick={showDrawer}
            className="text-3xl p-1 hover:bg-gray-200 hover:rounded-full"
          >
            <HiMiniBars3BottomLeft />
          </div>
          <div>
            <SearchModal />
          </div>
        </Space>
        <Space>
          <Navbar />
        </Space>
      </section>
      <Drawer
        title="EIA"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        extra={
          <Space>
            <div
              onClick={onClose}
              className="text-2xl hover:cursor-pointer p-1 hover:bg-gray-200 hover:rounded-full"
            >
              <RxCross2 />
            </div>
          </Space>
        }
      >
        <div className="">
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </Drawer>
    </>
  );
};
export default Sidebar;
