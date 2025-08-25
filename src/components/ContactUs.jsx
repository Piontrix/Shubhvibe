import React, { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", phone: "", type: "", date: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert("Name and Phone Number are required!");
      return;
    }
    console.log("Contact form submitted:", form);
    alert("Thank you! We will get back to you soon.");
    setForm({ name: "", phone: "", type: "", date: "" });
  };

  return (
    <div id="contact" className="py-12 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-[#d4af37] mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
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
          className="w-full bg-[#d4af37] text-black font-semibold py-2 rounded hover:bg-black hover:text-[#d4af37] transition cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
