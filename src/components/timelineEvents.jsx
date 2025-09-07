import React, { useEffect, useState, useRef } from "react";
import { Calendar, Star, Sparkles, Target } from "lucide-react";

const timelineEvents = [
  {
    title: "A Vision Takes Shape",
    description:
      "Eventalist and Decor was born from a passion for crafting extraordinary events. With a keen eye for detail and a creative approach, we set out to redefine event planning.",
    date: "2024",
    subtext: "Wedding Planner with experts",
    icon: <Calendar className="w-5 h-5 text-green-500" />,
  },
  {
    title: "Crafting Unique Experiences",
    description:
      "We specialize in weddings, corporate events, private parties, and more. Our team is dedicated to turning ideas into reality with creativity and precision.",
    date: "April 2025",
    subtext: "New Place for Camping",
    icon: <Sparkles className="w-5 h-5 text-pink-500" />,
  },
  {
    title: "Building Towards Excellence",
    description:
      "While we are in the early stages, we are actively working on exciting projects and collaborations. Our commitment to quality and client satisfaction drives us forward.",
    date: "September 2025",
    subtext: "Around The World",
    icon: <Star className="w-5 h-5 text-yellow-500" />,
  },
  {
    title: "Future Vision",
    description:
      "We aim to become a leading name in event planning, known for luxury, innovation, and impeccable service. The journey has just begun, and we can’t wait to bring extraordinary events to life!",
    date: "Jan 2026",
    subtext: "New Start of Winter Life",
    icon: <Target className="w-5 h-5 text-purple-500" />,
  },
];

const Timeline = () => {
  const [lineHeight, setLineHeight] = useState(0);
  const wrapperRef = useRef(null);
  const lastDotRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current || !lastDotRef.current) return;

      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const lastDotRect = lastDotRef.current.getBoundingClientRect();

      const windowHeight = window.innerHeight;
      const totalHeight = lastDotRect.top - wrapperRect.top; // distance till last dot

      // Scroll progress relative to wrapper
      const scrollProgress = Math.min(
        1,
        Math.max(0, (windowHeight - wrapperRect.top) / (wrapperRect.height + windowHeight))
      );

      const newHeight = Math.min(scrollProgress * wrapperRect.height, totalHeight);
      setLineHeight(newHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#d4af37]">Our Journey – Eventalist and Decor</h2>

      <div ref={wrapperRef} id="timeline-wrapper" className="relative max-w-4xl mx-auto">
        {/* Full gray line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

        {/* Scroll progress red line */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#d4af37] transition-all duration-300"
          style={{ height: `${lineHeight}px` }}
        ></div>

        <div className="space-y-16 relative z-10">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-start ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              {/* Event Card */}
              <div className="w-1/2 px-6">
                <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition">
                  <div className="flex items-center gap-2 mb-2">
                    {event.icon}
                    <h3 className="font-semibold text-lg text-[#d4af37]">{event.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{event.description}</p>
                  <div className="mt-3 text-sm text-blue-600 font-medium">
                    {event.date} – {event.subtext}
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div
                ref={index === timelineEvents.length - 1 ? lastDotRef : null}
                className="absolute left-1/2 transform -translate-x-1/2 bg-white border-2 border-[#d4af37] w-8 h-8 rounded-full flex items-center justify-center"
              >
                {event.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
