import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Jagran",
    desc: "Spiritual nights filled with devotion, soulful bhajans, and divine atmosphere that bring peace and positivity.",
    img: "/images/jagran.jpg",
  },
  {
    title: "Mata Chowki",
    desc: "Celebrate with divine blessings of Mata Rani Ji, creating a devotional environment full of energy and grace.",
    img: "/images/mata-chowki.jpg",
  },
  {
    title: "Khatu Shyam Kirtan",
    desc: "Experience soulful kirtans dedicated to Khatu Shyam Ji, uniting devotees with music, prayers, and devotion.",
    img: "/images/khatu-shyam.jpg",
  },
  {
    title: "Balaji Kirtan",
    desc: "Invoke divine blessings with powerful Balaji kirtans that fill the atmosphere with energy and positivity.",
    img: "/images/balaji.jpg",
  },
  {
    title: "Wedding Events",
    desc: "From décor to planning, make your wedding day truly memorable with seamless arrangements and stunning themes.",
    img: "/images/wedding.jpg",
  },
  {
    title: "Birthday Parties",
    desc: "Add joy and elegance to birthdays with creative themes, décor, and fun-filled celebrations for all ages.",
    img: "/images/birthday.jpg",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#d4af37] mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img src={s.img} alt={s.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#d4af37] mb-3">{s.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
