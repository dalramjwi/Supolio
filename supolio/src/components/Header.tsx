import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="relative flex justify-start pt-2.5">
      <div className="absolute top-[45%] w-full bg-tab-dark h-[55%] z-0 rounded-t-2xl"></div>
      <nav className="relative z-10 flex gap-0 pl-8">
        <NavLink
          to="/main"
          className={({ isActive }) =>
            isActive
              ? "bg-tab-green text-black font-bold px-10 py-4 rounded-t-2xl z-20 shadow-lg border border-black -ml-2"
              : "bg-tab-gray text-black px-10 py-4 rounded-t-2xl z-10 border border-black -ml-2"
          }
        >
          main
        </NavLink>
        <NavLink
          to="/info"
          className={({ isActive }) =>
            isActive
              ? "bg-tab-green text-black font-bold px-10 py-4 rounded-t-2xl z-20 shadow-lg border border-black -ml-2"
              : "bg-tab-gray text-black px-10 py-4 rounded-t-2xl z-10 border border-black -ml-2"
          }
        >
          info
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) =>
            isActive
              ? "bg-tab-green text-black font-bold px-10 py-4 rounded-t-2xl z-20 shadow-lg border border-black -ml-2"
              : "bg-tab-gray text-black px-10 py-4 rounded-t-2xl z-10 border border-black -ml-2"
          }
        >
          project
        </NavLink>
      </nav>
      <div className="absolute bottom-0 w-full border-t border-black" />
    </header>
  );
};

export default Header;
