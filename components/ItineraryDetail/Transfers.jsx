import { FaCarSide, FaCheck } from "react-icons/fa";
import { IoArrowForwardSharp } from "react-icons/io5";

// Reusable data arrays
const TRANSFERS = [1, 2];
const AMENITIES = [
  "15,000 Sq ft",
  "Free WiFi",
  "Pool Access",
  "Breakfast Included",
];
const OFFERINGS = [
  "Air Conditioning",
  "24/7 Support",
  "Free Cancellation",
  "Mobile Check-in",
];

export default function Transfers() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-left">
        Transfers
      </h1>

      <div className="flex flex-col gap-6 max-w-4xl">
        {TRANSFERS.map((_, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-2xl border border-[#032125] border-opacity-10 p-4 sm:p-[12px] space-y-4"
          >
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-gray-900">
                  2N in Pattaya @ Glow Pattaya
                </h2>
                <div className="inline-flex items-center bg-gradient-to-r from-[#FF3131] to-[#FF914D] px-3 py-1 rounded-full text-white text-sm">
                  <span>Fri, 17 Jan → Sun, 21 Jan</span>
                </div>
              </div>
              <button
                className="flex items-center gap-2 self-start border border-gray-200 px-6 sm:px-10 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                aria-label="Select sedan vehicle type"
              >
                <span className="text-gray-700">Sedan</span>
                <IoArrowForwardSharp className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row gap-4 p-4 bg-[#F8F8F8] rounded-xl">
              <div className="w-full md:w-[240px] flex-shrink-0">
                <div className="w-full h-[95px] bg-black rounded-xl" />
              </div>

              <div className="flex-1 px-2 sm:px-4">
                {/* Amenities */}
                <div className="flex flex-wrap gap-3 sm:gap-6 mb-4">
                  {[
                    "bg-[#31C48D] bg-opacity-40",
                    "bg-[#F5E9FE]",
                    "bg-[#FFD4B9]",
                    "bg-[#E3EEFF]",
                  ].map((color, i) => (
                    <span
                      key={i}
                      className={`${color} px-2.5 py-1 sm:py-2 text-[10px] sm:text-xs text-[#1E1E1E] rounded-full flex items-center gap-x-1`}
                    >
                      <img
                        src="/icons/Square Meters.png"
                        alt="icon"
                        className="w-3 h-3 sm:w-4 sm:h-4"
                      />{" "}
                      15,000 Sq ft
                    </span>
                  ))}
                </div>

                {/* Offerings */}
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-x-6 text-xs text-[#0D0D0D]">
                  {OFFERINGS.map((offer, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-green-500">
                        <FaCheck className="w-3 h-3" />
                      </span>
                      <span>{offer}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
