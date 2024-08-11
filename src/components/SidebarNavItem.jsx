import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SidebarNavItem({ item, activeSubMenu, toggleSubMenu, index }) {
  return (
    <li>
      <button
        className="text-white w-full text-left py-1 px-3 flex justify-between items-center"
        onClick={() => toggleSubMenu(index)}
      >
        <span className="flex items-center">
          {item.icon} {/* Icon displayed here */}
          <span className="ml-2">{item.name}</span>
        </span>

        <span>
          {activeSubMenu === index ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {activeSubMenu === index && (
        <ul className="pl-4 text-black bg-[#f2f2f2] transition-transform duration-300 ease-in-out transform">
          {item.subItems.map((subItem, subIndex) => (
            <li key={subIndex} className="py-2 pl-8">
              <Link to={subItem.path} className="">
                {subItem.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
