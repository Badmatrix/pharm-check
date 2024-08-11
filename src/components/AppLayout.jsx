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
    // <div className={`grid   h-screen `}>
    <div
      className={`h-screen  ${isOpenToggle ? "grid grid-cols-[14rem,1fr] grid-rows-[auto,1fr]" : ""}`}
    >
      <Header isOpenToggle={isOpenToggle} toggleSidebar={toggleSidebar} />
      <SideBar isOpenToggle={isOpenToggle} toggleSidebar={toggleSidebar} />
      <main className=" overflow-scroll overflow-x-hidden">
        <div className=" px-3">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
