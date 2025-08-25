import React from "react";

const services = [
  { title: "Jagran", desc: "Spiritual events filled with devotion & bhakti." },
  { title: "Mata Chowki", desc: "Celebrate with divine blessings of Mata Rani Ji." },
];

const Services = () => {
  return (
    <div id="services" className="py-12 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-[#d4af37] mb-8">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
