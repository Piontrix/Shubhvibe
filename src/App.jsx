import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import EnquiryModal from "./components/EnquiryModal";
import Navbar from "./components/Navbar";
import MadeWithLove from "./components/MadeWithLove";
import AboutSection from "./components/AboutSection";
import Statistics from "./components/Statistics";
import Clients from "./components/Clients";
import MediaGallery from "./components/MediaGallery";
import Timeline from "./components/timelineEvents";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 5000); // popup after 5 sec
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <AboutSection />
        <AboutUs />
        <Statistics />
        <Services />
        <Portfolio />
        <Clients />
        <MediaGallery />
        <Timeline />
        <ContactUs />
        <Footer />
        <MadeWithLove />
        {showModal && <EnquiryModal onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
}

export default App;
