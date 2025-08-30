import React from "react";
import LightGallery from "lightgallery/react";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const categories = [
  {
    name: "Jagran",
    images: [
      { src: "/images/jagran1.jpg", thumb: "/images/jagran1.jpg" },
      { src: "/images/jagran2.jpg" },
      { src: "/images/jagran3.jpg" },
    ],
  },
  {
    name: "Mata Chowki",
    images: [
      { src: "/images/chowki1.jpg", thumb: "/images/chowki1.jpg" },
      { src: "/images/chowki2.jpg" },
      { src: "/images/chowki3.jpg" },
    ],
  },
  {
    name: "Wedding",
    images: [
      { src: "/images/wedding1.jpg", thumb: "/images/wedding1.jpg" },
      { src: "/images/wedding2.jpg" },
      { src: "/images/wedding3.jpg" },
    ],
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio" className="py-12 text-center">
      <h1 className="text-3xl font-bold text-[#d4af37] ">Portfolio</h1>
      <div className="flex flex-wrap justify-center gap-6 py-10">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/20 
             text-yellow-500 p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition-transform"
          >
            <h2 className="text-xl font-bold mb-3">{cat.name}</h2>

            {/* <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]} elementClassNames="cursor-pointer" download={false}> */}
            <LightGallery
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
              elementClassNames="cursor-pointer"
              download={false}
              mode="lg-fade"
              closable={true}
              fullScreen={true}
            >
              {cat.images.map((img, i) => (
                <a
                  key={i}
                  href={img.src}
                  className={i === 0 ? "block" : "hidden"} // show only first thumbnail
                >
                  <img
                    src={img.thumb || img.src}
                    alt={cat.name}
                    className="w-48 h-32 object-cover rounded-lg shadow-md"
                  />
                </a>
              ))}
            </LightGallery>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
