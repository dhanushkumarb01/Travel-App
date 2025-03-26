"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function DestinationCard({ destination }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/itinerary-detail/${destination.id}`);
  };

  return (
    <div 
      className="relative group cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative h-[450px] w-full overflow-hidden rounded-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={destination.image}
          alt={destination.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = "https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        
        {destination.discount && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
            {destination.discount}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 p-6 text-white w-full">
        <h3 className="text-3xl font-bold mb-4">{destination.title}</h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/plane.png" alt="Flight" className="w-5 h-5" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/hotel.png" alt="Hotel" className="w-5 h-5" />
          </span>
          <span>{destination.description}</span>
        </div>
        <button className="w-full py-2 px-4 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300">
          Explore
        </button>
      </div>
    </div>
  );
}