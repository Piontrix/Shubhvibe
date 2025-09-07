import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { value: 75, suffix: "+", label: "Happy Clients" },
  { value: 150, suffix: "+", label: "Successful Events" },
  { value: 91, suffix: "%", label: "Customer Satisfaction" },
];

const Statistics = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#d4af37]">
              <CountUp start={0} end={stat.value} duration={2.5} suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
            </h2>
            <p className="mt-2 text-gray-700 text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
