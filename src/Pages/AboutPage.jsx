import React from "react";
import AboutUs from "../components/AboutUs";
import AboutSection from "../components/AboutSection";
import Timeline from "../components/timelineEvents";
import ContactUs from "../components/ContactUs";

const AboutPage = () => {
  return (
    <>
      <AboutUs />
      <AboutSection />
      <Timeline />
      <ContactUs />
    </>
  );
};

export default AboutPage;
