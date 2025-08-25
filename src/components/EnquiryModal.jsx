import React, { useState } from "react";

const EnquiryModal = ({ onClose }) => {
  const [form, setForm] = useState({ name: "", phone: "", type: "", date: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert("Name and Phone Number are required!");
      return;
    }
    console.log("Enquiry submitted:", form);
    alert("Thank you for enquiring! We’ll contact you soon.");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-black">
          ✖
        </button>
        <h2 className="text-2xl font-bold text-center mb-4 text-[#d4af37]">Enquiry Form</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <select name="type" value={form.type} onChange={handleChange} className="w-full border p-2 rounded">
            <option value="">Select Event Type</option>
            <option value="Jagran">Jagran</option>
            <option value="Mata Chowki">Mata Chowki</option>
            <option value="Birthday">Birthday Party</option>
          </select>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-[#d4af37] text-black font-semibold py-2 rounded hover:bg-black hover:text-[#d4af37] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
