import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-700 via-purple-500 to-red-500 text-white p-4">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <NavLink to="/">
          <span className="text-2xl md:text-3xl font-bold ">
            Contacts Management Neutron
          </span>
        </NavLink>
        <ul className="flex items-center gap-8">
          <li>
            <NavLink to="/add-contacts">
              <button className="bg-[#88AB8E]">Add Contacts</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-contacts">
              <button>All Contacts</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
