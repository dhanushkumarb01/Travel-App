import { FaBed, FaPlaneDeparture } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";

export default function DestinationCard({ destination }) {
  
  return (
    <div className="bg-white shadow-lg rounded-lg border relative overflow-visible">
     
     <span className="absolute top-11 -left-3 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-[#010009]"></span>


      <div className="relative">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-56 object-cover rounded-t-lg"
        />

        <span className="absolute top-3 -left-3 bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white px-4 py-2 text-xs font-semibold rounded-r-lg rounded-tl-lg shadow-md flex items-center">
          ✧˖° POPULAR
        </span>

        {/* Price Badge - Moved Outside */}
        <span className="absolute top-3 right-3 bg-[#FFB154] text-white border border-white px-4 py-2 text-xs font-semibold rounded-full shadow-md">
          Starts {destination.price}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="font-normal text-[#000929] text-[24px]">
          {destination.title}
        </h3>
        <div className="mt-4 flex justify-between text-gray-500 text-sm">
          <div className="flex items-center space-x-2">
            <FaBed className="text-red-500" />
            <span>{destination.nights}</span>
          </div>
          <div className="flex items-center space-x-2">
            <IoCalendarOutline className="text-red-500" />
            <span>{destination.date}</span>
          </div>
        </div>
        <div className="mt-2 flex items-center space-x-2 text-gray-500 text-sm">
          <FaPlaneDeparture className="text-red-500" />
          <span>{destination.airport}</span>
        </div>
      </div>
    </div>
  );
}
