import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaChevronDown, FaChevronUp, FaTachometerAlt, FaUserMd, FaUserInjured, FaHospital, FaCalendarAlt, FaClipboardList, FaCogs, FaUsers, FaMoneyBill, FaBell } from 'react-icons/fa';
import Logo from "../assets/logo.png";
import Doctor from "../assets/doctor.jpg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };
  const navItems = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />, // Dashboard icon
      subItems: [
        { name: "Dashboard", path: "/dashboard" },
      ]
    },
    {
      name: "Doctor",
      icon: <FaUserMd />, // Doctor icon
      subItems: [
        { name: "Add Doctor", path: "/doctor/add" },
        { name: "Manage Doctors", path: "/doctor/manage" },
        { name: "Doctor Profile", path: "/doctor/profile" }
      ]
    },
    {
      name: "Patient",
      icon: <FaUserInjured />, // Patient icon
      subItems: [
        { name: "Add Patient", path: "/patient/add" },
        { name: "Manage Patients", path: "/patient/manage" },
        { name: "Patient History", path: "/patient/history" }
      ]
    },
    {
      name: "Department",
      icon: <FaHospital />, // Department icon
      subItems: [
        { name: "Add Department", path: "/department/add" },
        { name: "Manage Departments", path: "/department/manage" }
      ]
    },
    {
      name: "Doctor Schedule",
      icon: <FaCalendarAlt />, // Schedule icon
      subItems: [
        { name: "View Schedule", path: "/schedule/view" },
        { name: "Manage Schedule", path: "/schedule/manage" }
      ]
    },
    {
      name: "Appointment",
      icon: <FaClipboardList />, // Appointment icon
      subItems: [
        { name: "New Appointment", path: "/appointment/new" },
        { name: "Manage Appointments", path: "/appointment/manage" }
      ]
    },
    {
      name: "Reports",
      icon: <FaClipboardList />, // Reports icon
      subItems: [
        { name: "Monthly Reports", path: "/reports/monthly" },
        { name: "Annual Reports", path: "/reports/annual" },
        { name: "Custom Reports", path: "/reports/custom" }
      ]
    },
    {
      name: "Settings",
      icon: <FaCogs />,
      subItems: [
        { name: "General Settings", path: "/settings/general" },
        { name: "Privacy Settings", path: "/settings/privacy" },
        { name: "Notification Settings", path: "/settings/notifications" }
      ]
    },
    {
      name: "Users",
      icon: <FaUsers />, // Users icon
      subItems: [
        { name: "Add User", path: "/users/add" },
        { name: "Manage Users", path: "/users/manage" },
        { name: "User Roles", path: "/users/roles" }
      ]
    },
    {
      name: "Billing",
      icon: <FaMoneyBill />, // Billing icon
      subItems: [
        { name: "Invoice", path: "/billing/invoice" },
        { name: "Payment Methods", path: "/billing/payment-methods" },
        { name: "Transaction History", path: "/billing/transactions" }
      ]
    },
    {
      name: "Notifications",
      icon: <FaBell />, // Notifications icon
      subItems: [
        { name: "New Notification", path: "/notifications/new" },
        { name: "Manage Notifications", path: "/notifications/manage" }
      ]
    }
  ];


  return (
    <div className="flex h-full ">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`p-4 text-white bg-[#009efa] fixed top-0 left-0 ${isOpen ? 'ml-64' : 'ml-5'}`}
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-[#009efa] transition-transform duration-100 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 h-full `}
      >
        <div className="py-4 h-full flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-[#aaa] scrollbar-track-[#009efa]">
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
                <li key={index}>
                  <button
                    className="text-white w-full text-left py-2 px-3 flex justify-between items-center"
                    onClick={() => toggleSubMenu(index)}
                  >
                    <span className="flex items-center">
                      {item.icon} {/* Icon displayed here */}
                      <span className="ml-2">{item.name}</span>
                    </span>


                    <span>{activeSubMenu === index ? <FaChevronUp /> : <FaChevronDown />}</span>
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
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
