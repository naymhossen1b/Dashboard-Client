import { CgProfile } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineTranslate, MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <section className=" flex items-center gap-4">
        <div className="text-3xl hover:cursor-pointer p-1 hover:bg-gray-200 hover:rounded-full">
          <MdOutlineTranslate />
        </div>
        <div className="text-3xl hover:cursor-pointer p-1 hover:bg-gray-200 hover:rounded-full">
          <MdOutlineLightMode />
        </div>
        <div className="text-3xl hover:cursor-pointer p-1 hover:bg-gray-200 hover:rounded-full">
          <IoNotificationsOutline />
        </div>
        <div className="text-3xl hover:cursor-pointer p-1 hover:bg-gray-200 hover:rounded-full">
          <CgProfile />
        </div>
      </section>
    </>
  );
};

export default Navbar;
