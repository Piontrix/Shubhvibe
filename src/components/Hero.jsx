import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/images/hero-bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        className="relative z-10 max-w-3xl px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg mb-4 font-light tracking-wide">
          Crafting unforgettable memories with elegance & devotion
        </p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Your Moments ✨ <br /> Our Devotion ❤️
        </h1>
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-lg font-semibold shadow-lg hover:scale-105 transition cursor-pointer"
          >
            Book Your Event
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
