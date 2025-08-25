// import React from "react";
// import { Link } from "react-scroll";
// import logo from "../assets/ShubhVibeLogo.png";

// const Navbar = () => {
//   const menuItems = ["Home", "About", "Services", "Portfolio", "Contact"];

//   return (
//     <nav className="w-full bg-black text-[#d4af37] px-6 py-4 flex justify-between items-center shadow-md fixed top-0 left-0 z-50">
//       {/* Logo */}
//       <div className="flex items-center gap-3">
//         <img src={logo} alt="ShubhVibe Events" className="w-12 h-12" />
//         <span className="text-xl font-semibold">ShubhVibe Events</span>
//       </div>

//       {/* Menu */}
//       <div className="hidden md:flex gap-6">
//         {menuItems.map((item) => (
//           <Link
//             key={item}
//             to={item.toLowerCase()} // matches section id
//             smooth={true}
//             duration={500}
//             spy={true}
//             offset={-200} // adjust for navbar height
//             activeClass="text-white border-b-2 border-[#d4af37]"
//             className="cursor-pointer hover:text-white transition"
//           >
//             {item}
//           </Link>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/ShubhVibeLogo.png";

const Navbar = () => {
  const menuItems = ["Home", "About", "Services", "Portfolio", "Contact"];
  const [active, setActive] = useState("Home"); // default active item

  return (
    <nav className="w-full bg-black text-[#d4af37] px-6 py-4 flex justify-between items-center shadow-md fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="ShubhVibe Events" className="w-12 h-12" />
        <span className="text-xl font-semibold">ShubhVibe Events</span>
      </div>

      {/* Menu */}
      <div className="hidden md:flex gap-6">
        {menuItems.map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()} // matches section id
            smooth={true}
            duration={500}
            spy={true}
            offset={-200}
            onSetActive={() => setActive(item)} // update active section
            className={`cursor-pointer transition ${
              active === item ? "text-white border-b-2 border-[#d4af37]" : "hover:text-white"
            }`}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
