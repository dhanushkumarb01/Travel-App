"use client";
import React from "react";
import {
  FaHotel,
  FaStar,
  FaArrowLeft,
  FaArrowRight,
  FaGoogle,
} from "react-icons/fa";
import { MdOutlineKingBed } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function TopPackages({ trips = [] }) {
  return (
    <section className="max-w-7xl mx-auto sm:py-32 py-20 sm:px-0 px-4">
      <div className="text-[#0A0A0A] sm:space-y-2.5 space-y-1">
        <h2 className="text-3xl font-bold text-[32px]">Available Packages</h2>
        <p className="text-[#0A0A0A] text-sm sm:text-[16px]">
          Handpicked Getaways for Every Traveler
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6 sm:pt-16 pt-12">
        <div className="sm:col-span-3 col-span-12 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-medium">Price</h3>
            <div className="space-y-2.5">
              {[
                "Below ₹ 100k",
                "Below ₹ 150k",
                "Below ₹ 200k",
                "Above ₹ 200k",
              ].map((price, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5 appearance-none border border-[#ff3132] rounded-sm checked:bg-[#ff3132] checked:border-[#ff3132] focus:ring-1 focus:ring-[#ff3132]"
                  />
                  <span className="text-[#4D525F] text-[16px]">{price}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-medium">Star Rating</h3>
            <div className="space-y-2">
              {[3, 4, 5].map((star) => (
                <label key={star} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5 appearance-none border border-[#ff3132] rounded-sm checked:bg-[#ff3132] checked:border-[#ff3132] focus:ring-1 focus:ring-[#ff3132]"
                  />
                  <span className="text-[#4D525F] text-[16px]">
                    {star} Star
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="sm:col-span-9 col-span-12">
          {trips.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-xl text-gray-600">No packages found for your selection.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {trips.map((trip) => (
                <div
                  key={trip._id}
                  className="bg-white border border-[#FF507A] p-[10px] rounded-lg border-opacity-25 flex flex-col sm:flex-row"
                >
                  {/* Package Image */}
                  <div className="w-full sm:w-[388px] h-[200px] sm:h-auto">
                    <img
                      src={trip.images[0]?.url || "https://images.pexels.com/photos/3601420/pexels-photo-3601420.jpeg"}
                      alt={trip.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  {/* Package Info */}
                  <div className="sm:px-4 px-1 flex-1 sm:space-y-2 space-y-3 pt-3 sm:pt-0">
                    <h3 className="text-2xl font-medium">{trip.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-gray-600 text-sm">
                      <span className="flex items-center gap-x-2.5 font-medium">
                        <FaStar className="text-[#4D525F]" />
                        {trip.destinationType}
                      </span>
                      <span className="flex items-center gap-x-1 font-medium">
                        <MdOutlineKingBed className="text-[#4D525F]" />
                        {trip.destinationCountry}
                      </span>
                    </div>

                    {/* Duration */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs text-[#1E1E1E] px-5 py-2 rounded-full bg-[#31C48D] flex items-center gap-x-1.5">
                        {trip.duration.days} Days, {trip.duration.nights} Nights
                      </span>
                    </div>

                    {/* Season */}
                    <div className="space-y-1.5 pt-1">
                      <h5 className="text-xs text-[#4D525F]">SEASON:</h5>
                      <p className="text-[14px] text-[#4D525F] font-medium">
                        {trip.destinationSeason}
                      </p>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex flex-row justify-end gap-2.5 items-center pt-2 border-t border-[#E8EAF8]">
                      <p className="text-[18px] font-bold text-[#21242C]">
                        ₹{trip.pricing?.valuePack || "Contact for price"}
                      </p>
                      <span>/ couple</span>
                      <button className="bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white sm:text-base text-sm font-semibold sm:px-6 px-4 py-2 rounded-lg">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}