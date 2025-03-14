"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlane, FaHotel } from "react-icons/fa";

export default function FixedDepartures({ title, description, destinations }) {
  return (
    <div className="max-w-7xl mx-auto sm:py-16 py-8">
      {/* Section Header */}
      <div className="text-start sm:space-y-2.5 space-y-1 sm:px-0 px-4">
        <h2 className="text-[36px] font-bold text-[#0A0A0A]">{title}</h2>
        <p className="text-[#0A0A0A] sm:text-[16px] text-sm">{description}</p>
      </div>

      {/* Swiper Carousel */}
      <div className="relative sm:pt-10 pt-8">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3.5 },
          }}
          navigation={false}
        >
          {destinations.map((destination) => (
            <SwiperSlide key={destination.id}>
              <div className="relative rounded-[12px] overflow-visible shadow-lg">
                {/* Triangle for Discount */}
                {destination.discount && (
                  <span className="absolute top-11 -left-3 w-0 h-0 z-[-10] border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-[#010009]"></span>
                )}

                {/* Image */}
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-[369.11px] object-cover rounded-[12px]"
                />

                {/* Discount Badge */}
                {destination.discount && (
                  <span className="absolute top-3 -left-3 bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white px-4 py-2 text-xs font-semibold rounded-r-lg rounded-tl-lg shadow-md flex items-center z-10">
                    {destination.discount}
                  </span>
                )}

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 rounded-[12px]">
                  <h3 className="text-white text-3xl font-bold">
                    {destination.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-white mt-2">
                    <FaPlane className="text-lg" />
                    <FaHotel className="text-lg" />
                    <span>{destination.description}</span>
                  </div>

                  {/* Explore Button */}
                  <button className="mt-4 border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all">
                    Explore
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
