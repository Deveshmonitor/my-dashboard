// components/SidebarMenu.js
import React from "react";
import { FaTachometerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <div className="h-full w-64 bg-yellow-500 text-gray-100 flex flex-col">
      <div className="p-4 flex items-center justify-between text-xl text-black tracking-wider font-bold">
        Dashboard{" "}
        <span>
          <FaTachometerAlt size={20} />
        </span>
      </div>
      <nav className="flex-1 px-2 py-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-4 font-extrabold py-2 mt-2 text-sm rounded-lg hover:bg-gray-700 ${
              isActive ? "bg-gray-700" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/Catalog"
          className={({ isActive }) =>
            `block px-4 font-extrabold py-2 mt-2 text-sm rounded-lg hover:bg-gray-700 ${
              isActive ? "bg-gray-700" : ""
            }`
          }
        >
          Catalogs
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `block px-4 font-extrabold py-2 mt-2 text-sm rounded-lg hover:bg-gray-700 ${
              isActive ? "bg-gray-700" : ""
            }`
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `block px-4 font-extrabold py-2 mt-2 text-sm rounded-lg hover:bg-gray-700 ${
              isActive ? "bg-gray-700" : ""
            }`
          }
        >
          Settings
        </NavLink>
        <NavLink
          to="/l"
          className={({ isActive }) =>
            `block px-4 font-extrabold py-2 mt-2 text-sm rounded-lg hover:bg-gray-700 ${
              isActive ? "bg-gray-700" : ""
            }`
          }
        >
          Logout
        </NavLink>
      </nav>
    </div>
  );
};

export default SidebarMenu;
