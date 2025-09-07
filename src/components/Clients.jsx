import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const clients = [
  { img: "/images/client1.png", name: "Hydro Projects Pvt. Ltd." },
  { img: "/images/client2.png", name: "Prominent Fibres" },
  { img: "/images/client3.png", name: "ABC Industries" },
  { img: "/images/client4.png", name: "XYZ Enterprises" },
  { img: "/images/client5.png", name: "Global Tech" },
];

const Clients = () => {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#d4af37]">Our Clients</h2>

      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="max-w-5xl mx-auto"
      >
        {clients.map((c, i) => (
          <SwiperSlide key={i} className="flex justify-center items-center transition-all duration-500">
            <img src={c.img} alt={c.name} className="client-logo" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Logo carousel styling */}
      <style>{`
        .swiper-slide {
          opacity: 0.5;
          transform: scale(0.85);
          transition: all 0.5s ease;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .swiper-slide-active {
          opacity: 1 !important;
          transform: scale(1.1) !important;
        }
        .swiper-slide-next,
        .swiper-slide-prev {
          opacity: 0.7;
          transform: scale(0.95);
        }
        .client-logo {
          width: 180px;  /* consistent width */
          height: 120px; /* consistent height */
          object-fit: contain;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.1));
        }
      `}</style>
    </section>
  );
};

export default Clients;
