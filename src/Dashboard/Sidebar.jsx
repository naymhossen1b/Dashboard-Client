import { useState } from "react";
import { Drawer, Space } from "antd";
import { IoReorderThreeSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

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
      <Space className="border w-full rounded-md px-5 py-4">
        <div
          onClick={showDrawer}
          className="text-3xl hover:bg-gray-200 hover:rounded-full"
        >
          <IoReorderThreeSharp />
        </div>
      </Space>
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
              className="text-2xl hover:cursor-pointer hover:bg-gray-200 hover:rounded-full"
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
