import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "My Orders", path: "/my-orders" },
  ];

  return (
    <div className="fixed top-16 left-0 w-full bg-white border-b border-[#E5E7EB] dark:border-slate-700 z-40 dark:bg-slate-800 ">
      <div className="max-w-[90%] mx-auto overflow-x-auto scrollbar-hide">
        <ul className="flex gap-6 lg:gap-10 py-4 min-w-max">
          {navLinks.map((item) => (
            <li
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              key={item.path}
              className="whitespace-nowrap "
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4F46E5] dark:text-indigo-400 font-semibold"
                    : "text-[#111827] font-semibold hover:text-[#4F46E5] transition-colors dark:text-slate-50"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavLinks;
