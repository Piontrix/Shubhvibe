import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const phone = import.meta.env.VITE_PHONE_NUMBER;

const Footer = () => {
  return (
    <footer className="bg-black text-[#d4af37] py-6 text-center relative">
      <p>© {new Date().getFullYear()} ShubhVibe Events. All rights reserved.</p>

      {/* Floating Call & WhatsApp */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3">
        {/* Call Button */}
        <a
          href={`tel:+${phone}`}
          className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <Phone size={22} />
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/+${phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <FaWhatsapp size={22} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
