import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaUserMd,
  FaUserInjured,
  FaHospital,
  FaCalendarAlt,
  FaClipboardList,
  FaCogs,
  FaUsers,
  FaMoneyBill,
  FaBell,
  FaBars,
} from "react-icons/fa";
import Logo from "../assets/logo.png";
import Doctor from "../assets/doctor.jpg";
import SidebarNavItem from "./SidebarNavItem";

const Sidebar = ({ isOpenToggle, toggleSidebar }) => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };
  const navItems = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />, // Dashboard icon
      subItems: [{ name: "Dashboard", path: "/dashboard" }],
    },
    {
      name: "Doctor",
      icon: <FaUserMd />, // Doctor icon
      subItems: [
        { name: "Add Doctor", path: "/doctor/add" },
        { name: "Manage Doctors", path: "/doctor/manage" },
        { name: "Doctor Profile", path: "/doctor/profile" },
      ],
    },
    {
      name: "Patient",
      icon: <FaUserInjured />, // Patient icon
      subItems: [
        { name: "Add Patient", path: "/patient/add" },
        { name: "Manage Patients", path: "/patient/manage" },
        { name: "Patient History", path: "/patient/history" },
      ],
    },
    {
      name: "Department",
      icon: <FaHospital />, // Department icon
      subItems: [
        { name: "Add Department", path: "/department/add" },
        { name: "Manage Departments", path: "/department/manage" },
      ],
    },
    {
      name: "Doctor Schedule",
      icon: <FaCalendarAlt />, // Schedule icon
      subItems: [
        { name: "View Schedule", path: "/schedule/view" },
        { name: "Manage Schedule", path: "/schedule/manage" },
      ],
    },
    {
      name: "Appointment",
      icon: <FaClipboardList />, // Appointment icon
      subItems: [
        { name: "New Appointment", path: "/appointment/new" },
        { name: "Manage Appointments", path: "/appointment/manage" },
      ],
    },
    {
      name: "Reports",
      icon: <FaClipboardList />, // Reports icon
      subItems: [
        { name: "Monthly Reports", path: "/reports/monthly" },
        { name: "Annual Reports", path: "/reports/annual" },
        { name: "Custom Reports", path: "/reports/custom" },
      ],
    },
    {
      name: "Settings",
      icon: <FaCogs />,
      subItems: [
        { name: "General Settings", path: "/settings/general" },
        { name: "Privacy Settings", path: "/settings/privacy" },
        { name: "Notification Settings", path: "/settings/notifications" },
      ],
    },
    {
      name: "Users",
      icon: <FaUsers />, // Users icon
      subItems: [
        { name: "Add User", path: "/users/add" },
        { name: "Manage Users", path: "/users/manage" },
        { name: "User Roles", path: "/users/roles" },
      ],
    },
    {
      name: "Billing",
      icon: <FaMoneyBill />, // Billing icon
      subItems: [
        { name: "Invoice", path: "/billing/invoice" },
        { name: "Payment Methods", path: "/billing/payment-methods" },
        { name: "Transaction History", path: "/billing/transactions" },
      ],
    },
    {
      name: "Notifications",
      icon: <FaBell />, // Notifications icon
      subItems: [
        { name: "New Notification", path: "/notifications/new" },
        { name: "Manage Notifications", path: "/notifications/manage" },
      ],
    },
  ];

  return (
    <div
      className={`row-span-full shadow-sm shadow-grayDark bg-primary-200 inset-0  transition-transform duration-300 ease-in-out transform  ${
        isOpenToggle ? "translate-x-0  lg:block" : "-translate-x-full hidden"
      }`}
    >
      {/* Sidebar Toggle Button */}
      

      <div className={`  `}>
        <div className="py-4 h-full flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-grayDark scrollbar-track-primary-100">
          <h2 className="text-lg w-32 mx-auto">
            <img src={Logo} alt="Logo" />
          </h2>
          <div className="flex items-center flex-col justify-center mt-4">
            <img src={Doctor} className="rounded-full w-12 h-12" alt="Doctor" />
            <h3 className="text-white">Dr. Samuel</h3>
            <p className="text-gray-200">Admin</p>
          </div>

          {/* Navigation */}
          <nav className="flex-grow mx-0 mt-4">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <SidebarNavItem
                  key={index}
                  index={index}
                  item={item}
                  activeSubMenu={activeSubMenu}
                  toggleSubMenu={toggleSubMenu}
                />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
