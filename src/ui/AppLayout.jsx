import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div className="flex">
      <div className="w-[15%] ">
        <SideBar />
      </div>
      <div className="flex flex-col w-[85%] bg-background">
      <Header />
        <Outlet />
      </div>
    </div>
  );
}
