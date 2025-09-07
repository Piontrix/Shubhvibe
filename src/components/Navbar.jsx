import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/ShubhVibeLogo.png";

const Navbar = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services & Portfolio", path: "/services-portfolio" },
    { name: "Contact Us", path: "/contact" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-[#d4af37] px-6 py-4 flex justify-between items-center shadow-md fixed top-0 left-0 z-50">
      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-3 cursor-pointer">
        <img src={logo} alt="ShubhVibe Events" className="w-12 h-12" />
        <span className="text-xl font-semibold">ShubhVibe Events</span>
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `cursor-pointer transition ${isActive ? "text-white border-b-2 border-[#d4af37]" : "hover:text-white"}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        {menuOpen ? (
          <X size={28} onClick={() => setMenuOpen(false)} className="cursor-pointer text-[#d4af37]" />
        ) : (
          <Menu size={28} onClick={() => setMenuOpen(true)} className="cursor-pointer text-[#d4af37]" />
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-[#d4af37] flex flex-col items-center py-6 space-y-4 md:hidden shadow-lg">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `cursor-pointer transition text-lg ${
                  isActive ? "text-white border-b-2 border-[#d4af37]" : "hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
