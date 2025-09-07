import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Statistics from "../components/Statistics";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Clients from "../components/Clients";
import MediaGallery from "../components/MediaGallery";
import Timeline from "../components/timelineEvents";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Statistics />
      <Services />
      <Portfolio />
      <Clients />
      <MediaGallery />
      <Timeline />
      <ContactUs />
    </>
  );
};

export default Home;
