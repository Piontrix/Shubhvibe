import React from "react";
import logo from "../assets/ShubhVibeLogo.png";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center text-center px-6">
      <img src={logo} alt="ShubhVibe Events" className="w-56 mb-6 drop-shadow-lg" />
      <h1 className="text-4xl md:text-5xl font-bold text-black">ShubhVibe Events</h1>
      <p className="mt-3 text-lg md:text-xl italic text-gray-700">From Bhakti to Barat, we make it Divine ✨</p>
      <p className="mt-6 text-xl text-[#d4af37]">🌸 Coming Soon 🌸</p>

      {/* Buttons */}
      <div className="mt-8 flex gap-6">
        <a
          href="tel:+919876543210"
          className="px-5 py-2 rounded-lg border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition"
        >
          📞 Call Us
        </a>
        <a
          href="https://wa.me/919876543210"
          className="px-5 py-2 rounded-lg border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;
