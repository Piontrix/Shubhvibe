import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import MadeWithLove from "./components/MadeWithLove";
import EnquiryModal from "./components/EnquiryModal";

// Pages
import ScrollToTop from "./components/ScrollToTop";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import ExperiencesPage from "./Pages/ExperiencesPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <ScrollToTop />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services-portfolio" element={<ExperiencesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        {/* Sticky Footer Section */}
        <div className="mt-auto">
          <Footer />
          {/* <MadeWithLove /> */}
        </div>
        {showModal && <EnquiryModal onClose={() => setShowModal(false)} />}
      </div>
    </Router>
  );
}

export default App;
