"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  const images = [
    "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/9482129/pexels-photo-9482129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/9482132/pexels-photo-9482132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3601420/pexels-photo-3601420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/9215867/pexels-photo-9215867.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/9080954/pexels-photo-9080954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1450372/pexels-photo-1450372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className="relative max-w-7xl mx-auto mt-6 sm:px-0 px-4">
      <div className="relative overflow-hidden rounded-lg shadow-lg ">
        <div className="sm:aspect-[20/9] aspect-[20/12]">
          <img
            src={images[currentIndex]}
            alt="Bali Tour"
            className=" w-full h-full object-cover object-center rounded-xl"
          />
        </div>
        <button
          onClick={prevSlide}
          className="absolute sm:left-4 left-2 top-1/2 transform -translate-y-1/2 bg-white sm:p-2 p-1 rounded-full shadow-lg"
        >
          <FaChevronLeft className="text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute sm:right-4 right-2 top-1/2 transform -translate-y-1/2 bg-white sm:p-2 p-1 rounded-full shadow-lg"
        >
          <FaChevronRight className="text-gray-700" />
        </button>
      </div>

      <div className="flex justify-center sm:space-x-2 space-x-1 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-16 sm:h-12 h-10 rounded-lg shadow-md border-2 ${
              index === currentIndex
                ? "border-orange-500"
                : "border-transparent"
            }`}
            style={{
              backgroundImage: `url(${images[index]})`,
              backgroundSize: "cover",
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
