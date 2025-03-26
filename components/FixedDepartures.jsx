"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import DestinationCard from "./DestinationCard";

export default function TopDestinations() {
  const swiperRef = useRef(null);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('/api/trips');
        const data = await response.json();
        
        if (!data.trips || !Array.isArray(data.trips)) {
          console.error('Invalid data format received:', data);
          return;
        }

        const formattedDestinations = data.trips.map(trip => ({
          id: trip._id,
          title: trip.title.toUpperCase(),
          description: trip.duration ? `Flight + ${trip.duration.nights} nights` : 'Flight + Hotel',
          discount: "Up to 50% off",
          image: Array.isArray(trip.images) && trip.images.length > 0
            ? trip.images[0]
            : "https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg"
        }));

        setDestinations(formattedDestinations);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) {
    return <div className="max-w-7xl mx-auto py-20 text-center">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* First Fixed Departures Section */}
      <div className="sm:py-20 pt-40 pb-8 relative">
        <div className="flex justify-between items-center sm:px-0 px-4">
          <div className="text-start">
            <h2 className="text-4xl font-bold text-black mb-2">Fixed Departures</h2>
            <p className="text-gray-600 text-lg">
              Handpicked Getaways for Every Traveler
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <button
              className="bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition-all hidden lg:flex"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FaChevronLeft />
            </button>
            <button
              className="bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition-all hidden lg:flex"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
        
        <div className="relative sm:pt-32 pt-16">
          {destinations.length > 0 ? (
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3.2 },
                1280: { slidesPerView: 3.5 },
                1536: { slidesPerView: 4 },
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              navigation={false}
            >
              {destinations.map((destination) => (
                <SwiperSlide key={destination.id}>
                  <DestinationCard destination={destination} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="text-center py-10">No destinations available</div>
          )}
        </div>
      </div>

      {/* Second Fixed Departures Section */}
      <div className="sm:py-20 pt-40 pb-8 relative">
        <div className="flex justify-between items-center sm:px-0 px-4">
          <div className="text-start">
            <h2 className="text-4xl font-bold text-black mb-2">Speciality Tours</h2>
            <p className="text-gray-600 text-lg">
              Handpicked Getaways for Every Traveler
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <button
              className="bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition-all hidden lg:flex"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FaChevronLeft />
            </button>
            <button
              className="bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition-all hidden lg:flex"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
        
        <div className="relative sm:pt-32 pt-16">
          {destinations.length > 0 ? (
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3.2 },
                1280: { slidesPerView: 3.5 },
                1536: { slidesPerView: 4 },
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              navigation={false}
            >
              {destinations.map((destination) => (
                <SwiperSlide key={destination.id}>
                  <DestinationCard destination={destination} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="text-center py-10">No destinations available</div>
          )}
        </div>
      </div>
    </div>
  );
}