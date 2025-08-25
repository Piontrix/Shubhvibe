import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import logo from "../assets/ShubhVibeLogo.png";

const Navbar = () => {
  const menuItems = ["Home", "About", "Services", "Portfolio", "Contact"];
  const [active, setActive] = useState("Home"); // default active
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-[#d4af37] px-6 py-4 flex justify-between items-center shadow-md fixed top-0 left-0 z-50">
      {/* Logo */}
      <Link
        to="home" // this should match the id of your Hero section
        smooth={true}
        duration={500}
        offset={-80}
        className="flex items-center gap-3 cursor-pointer"
      >
        <img src={logo} alt="ShubhVibe Events" className="w-12 h-12" />
        <span className="text-xl font-semibold">ShubhVibe Events</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        {menuItems.map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
            spy={true}
            offset={-200}
            onSetActive={() => setActive(item)}
            className={`cursor-pointer transition ${
              active === item ? "text-white border-b-2 border-[#d4af37]" : "hover:text-white"
            }`}
          >
            {item}
          </Link>
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
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              spy={true}
              offset={-200}
              onSetActive={() => {
                setActive(item);
                setMenuOpen(false); // close after click
              }}
              className={`cursor-pointer transition text-lg ${
                active === item ? "text-white border-b-2 border-[#d4af37]" : "hover:text-white"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
