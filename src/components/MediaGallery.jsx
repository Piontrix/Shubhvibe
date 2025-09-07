import React from "react";
import { Play } from "lucide-react";

const mediaItems = [
  { src: "/images/event1.jpg", alt: "Event 1", link: "/images/event1.jpg", isPlayable: false },
  { src: "/images/event1.jpg", alt: "Event 1", link: "/images/event1.jpg", isPlayable: false },
  { src: "/images/event2.jpg", alt: "Event 2", link: "https://instagram.com/reel/xyz", isPlayable: true },
  { src: "/images/event3.jpg", alt: "Event 3", link: "/images/event3.jpg", isPlayable: false },
  { src: "/images/event4.jpg", alt: "Event 4", link: "https://youtube.com/watch?v=abc", isPlayable: true },
];

const MediaGallery = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#d4af37]">Our Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-w-6xl mx-auto">
        {mediaItems.map((item, i) => (
          <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="relative block">
            <div className="overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            {item.isPlayable && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 p-4 rounded-full">
                  <Play className="w-10 h-10 text-white" />
                </div>
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

export default MediaGallery;
