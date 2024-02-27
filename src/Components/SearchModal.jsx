import { useState } from "react";
import { Input, Modal, Space } from "antd";
import { IoIosSearch } from "react-icons/io";

const SearchModal = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        className="hover:cursor-pointer text-3xl flex items-center gap-5"
        onClick={showModal}
      >
        <IoIosSearch /> <p className=" text-sm">Search</p>
      </div>
      <Modal open={open} title={null} onCancel={handleCancel} footer={null}>
        <Space className="w-full">
          <div>
            <IoIosSearch className=" text-3xl" />
          </div>
          <div>
            <Input
              placeholder="Search..."
              variant="borderless"
              className="w-full"
            />
          </div>
        </Space>
        <hr className=" mt-3 mb-3" />
      </Modal>
    </>
  );
};
export default SearchModal;
