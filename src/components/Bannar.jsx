
"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import tiles1 from "../assets/tiles-1.jpg";
import tiles2 from "../assets/tiles-2.jpg";
import tiles3 from "../assets/tiles-3.jpg";
import tiles4 from "../assets/tiles-4.jpg";

const Banner = () => {
  const slides = [
    { id: 1, img: tiles1, title: "Luxury Marble Tiles", desc: "Experience the elegance of premium marble for your dream home." },
    { id: 2, img: tiles2, title: "Modern Ceramic Collection", desc: "Durable and stylish ceramic tiles for every corner." },
    { id: 3, img: tiles3, title: "Exotic Floor Patterns", desc: "Unique designs that redefine your living space aesthetics." },
    { id: 4, img: tiles4, title: "Premium Wall Textures", desc: "Transform your walls with our exclusive textured tiles." },
  ];

  return (
    <div className="w-full h-[500px] md:h-[700px] relative">
      <Swiper
        spaceBetween={0}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="max-w-4xl px-6 text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight uppercase">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                    {slide.desc}
                  </p>
                  <div className="flex gap-4 justify-center">
                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20">
                      Explore Collection
                    </button>
                    <button className="px-8 py-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 font-bold rounded-full transition-all">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;