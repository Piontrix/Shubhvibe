import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const slides = [
  { img: "/images/slide1.jpg", text: "✨ ShubhVibe Events ✨" },
  { img: "/images/slide2.jpg", text: "From Bhakti to Barat we make it Divine" },
  { img: "/images/slide3.jpg", text: "🌸 Religious | 💍 Weddings | 🎉 Celebrations" },
];

const Hero = () => {
  return (
    <div id="home" className="w-full h-[80vh] relative">
      <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} loop={true} className="h-full">
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-3xl md:text-5xl font-bold"
              style={{ backgroundImage: `url(${s.img})` }}
            >
              <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">{s.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
