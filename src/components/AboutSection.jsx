import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Animation variants
const variants = {
  left: { hidden: { opacity: 0, x: -100 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } },
  right: { hidden: { opacity: 0, x: 100 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } },
  top: { hidden: { opacity: 0, y: -100 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } },
  bottom: {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  },
};

const AboutSection = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <motion.div variants={variants.left} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ShubhVibe – Premier Event Planner in Delhi NCR
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-yellow-400 mb-6"></div>

          <p className="text-gray-700 mb-4">
            At ShubhVibe, we specialize in curating unforgettable experiences that make your celebrations stress-free
            and spectacular. Whether you need a professional team for birthdays, weddings, or grand functions – we bring
            creativity, devotion, and perfection to every occasion.
          </p>
          <p className="text-gray-700 mb-6">
            From stunning décor to seamless coordination, our expert planners guarantee flawless execution and
            unforgettable memories. Trust ShubhVibe to turn your special day into a timeless celebration.
          </p>

          <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition">
            Book Now
          </button>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <motion.img
            src="/images/jagran1.jpg"
            alt="Event Setup"
            className="rounded-lg shadow-md object-cover w-full h-48"
            variants={variants.top}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          />
          <motion.img
            src="/images/jagran2.jpg"
            alt="Stage Decor"
            className="rounded-lg shadow-md object-cover w-full h-48"
            variants={variants.top}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          />
          <motion.img
            src="/images/chowki1.jpg"
            alt="Lighting Setup"
            className="rounded-lg shadow-md object-cover w-full h-48"
            variants={variants.bottom}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          />
          <motion.img
            src="/images/wedding1.jpg"
            alt="Wedding Celebration"
            className="rounded-lg shadow-md object-cover w-full h-48"
            variants={variants.bottom}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
