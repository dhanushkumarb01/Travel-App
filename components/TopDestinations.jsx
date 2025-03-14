"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import DestinationCard from "./DestinationCard";

const destinations = [
  {
    id: 1,
    title: "The Ultimate 7-Day Vietnam Tour Package",
    nights: "6N/7D",
    date: "12 Jan",
    airport: "Delhi Airport",
    price: "INR 45,000",
    image: "https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "The Ultimate 7-Day Vietnam Tour Package",
    nights: "6N/7D",
    date: "12 Jan",
    airport: "Delhi Airport",
    price: "INR 45,000",
    image: "https://images.pexels.com/photos/1456293/pexels-photo-1456293.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "The Ultimate 7-Day Vietnam Tour Package",
    nights: "6N/7D",
    date: "12 Jan",
    airport: "Delhi Airport",
    price: "INR 45,000",
    image: "https://images.pexels.com/photos/1287455/pexels-photo-1287455.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    title: "The Ultimate 7-Day Vietnam Tour Package",
    nights: "6N/7D",
    date: "12 Jan",
    airport: "Delhi Airport",
    price: "INR 45,000",
    image: "https://images.pexels.com/photos/1430671/pexels-photo-1430671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    title: "The Ultimate 7-Day Vietnam Tour Package",
    nights: "6N/7D",
    date: "12 Jan",
    airport: "Delhi Airport",
    price: "INR 45,000",
    image: "https://images.pexels.com/photos/28843925/pexels-photo-28843925/free-photo-of-overwater-bungalows-at-sunrise-in-maldives.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    title: "The Ultimate 7-Day Vietnam Tour Package",
    nights: "6N/7D",
    date: "12 Jan",
    airport: "Delhi Airport",
    price: "INR 45,000",
    image: "https://images.pexels.com/photos/1724430/pexels-photo-1724430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 7,
    title: "The Ultimate 7-Day Vietnam Tour Package",
    nights: "6N/7D",
    date: "12 Jan",
    airport: "Delhi Airport",
    price: "INR 45,000",
    image: "https://images.pexels.com/photos/5785084/pexels-photo-5785084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function TopDestinations() {
  const swiperRef = useRef(null);

  return (
    <div className="max-w-7xl mx-auto sm:py-20 pt-40 pb-8 relative ">
      <div className="flex justify-between items-center sm:px-0 px-4">
        <div className="text-start sm:space-y-2.5 space-y-1">
          <h2 className="text-[36px] font-bold text-[#0A0A0A]">
            Top Destinations
          </h2>
          <p className="text-[#0A0A0A] sm:text-[16px] text-sm">
            Handpicked Getaways for Every Traveler
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <button
            className=" bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition-all hidden lg:flex"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaChevronLeft />
          </button>
          <button
            className=" bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition-all hidden lg:flex"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="relative sm:pt-32 pt-16">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 3.5 },
            1536: { slidesPerView: 5 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={false}
        >
          {destinations?.map((destination) => (
            <SwiperSlide key={destination.id}>
              <DestinationCard destination={destination} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
