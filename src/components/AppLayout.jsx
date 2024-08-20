import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "../ui/Header";
import { useState } from "react";

export default function AppLayout() {
  const [isOpenToggle, setIsOpenToggle] = useState(false);
  const toggleSidebar = () => {
    setIsOpenToggle(!isOpenToggle);
  };

  return (
    <div className={`flex`}>
      <div
        className={`${isOpenToggle === true ? "hidden " : "md:w-[35%] lg:w-[18%] hidden md:flex"} transition-all duration-300 `}
      >
        <SideBar />
      </div>

      <div
        className={`${isOpenToggle === true ? "w-full  bg-gray-100  " : "w-[100%] md:[65%] lg:w-[82%]  bg-gray-100"} transition-all duration-300 `}
      >
        <Header isOpenToggle={isOpenToggle} toggleSidebar={toggleSidebar} />
        <Outlet />
      </div>
    </div>
  );
}
