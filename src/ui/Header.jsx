import { FaBars } from "react-icons/fa";

export default function Header({ isOpenToggle, toggleSidebar }) {
  return (
    <div className=" bg-primary-100  py-4 px-2">
      <button
        onClick={toggleSidebar}
        className={`p-4 text-white bg-primary-100 fixed top-0 left-0 ${isOpenToggle ? "ml-56" : ""}`}
      >
        <FaBars size={24} />
      </button>
      <p>header</p>
    </div>
  );
}
