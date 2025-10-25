import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ExtraSectionCarousel({ items = [] }) {
  return (
    <section className="my-10">
      <h3 className="text-2xl font-semibold mb-4">Popular Skills</h3>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {items.map((it) => (
          <SwiperSlide key={it.id}>
            <div className="p-4 bg-white rounded-lg shadow">
              <img src={it.image} alt={it.name} className="w-full h-40 object-cover rounded" />
              <h4 className="mt-2 font-semibold">{it.name}</h4>
              <p className="text-sm">{it.category}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
