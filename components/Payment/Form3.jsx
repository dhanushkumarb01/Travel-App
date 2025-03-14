import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaUsers,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Form3 = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="space-y-6 pt-6">
      <div className="flex sm:flex-row flex-col items-start gap-4">
      <div className="bg-white p-4 rounded-2xl shadow-sm max-w-full sm:max-w-[600px] w-full space-y-4">
          {/* Personal Details */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-[#333848]">
              Personal Details
            </h2>
            <div className="border rounded-xl p-6 space-y-6">
              <div className="flex flex-wrap justify-between gap-3 sm:gap-0">
                <div className="flex items-center gap-x-2">
                  <FaUser className="text-[#FF3131]" />
                  <span className="text-sm text-[#4D525F]">
                    Rajdeep Sarkar, PERSON 2
                  </span>
                </div>
                <div className="flex items-center gap-x-2">
                  <FaEnvelope className="text-[#FF3131]" />
                  <span className="text-sm text-[#4D525F] truncate">
                    rajdeepsarkar794@gmail.com
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap justify-between gap-3 sm:gap-0">
                <div className="flex items-center gap-x-2">
                  <FaPhone className="text-[#FF3131]" />
                  <span className="text-sm text-[#4D525F]">06003568105</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <FaUsers className="text-[#FF3131]" />
                  <span className="text-sm text-[#4D525F]">2 Travelers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-[#1A1A1A]">
              Payment Details
            </h2>

            <div className="mt-4 border rounded-xl overflow-x-auto">
              <table className="w-full min-w-[300px]">
                <thead className="bg-gray-100 text-gray-600 text-sm">
                  <tr>
                    <th className="text-left px-4 py-3">Details</th>
                    <th className="text-right px-4 py-3">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  <tr className="border-t">
                    <td className="px-4 py-3">Trip Cost</td>
                    <td className="px-4 py-3 text-right">₹41,368 x 2</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">TCS / GST</td>
                    <td className="px-4 py-3 text-right">₹4500</td>
                  </tr>
                  <tr className="border-t font-semibold">
                    <td className="px-4 py-3">Total Cost</td>
                    <td className="px-4 py-3 text-right">₹87,368</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>


        <div className="flex-1 space-y-4">
          <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[#FF3131] to-[#FF914D]">
            <div className="bg-white rounded-2xl flex justify-between">
              <div className="p-6 space-y-3">
                <div>
                  <h2 className="text-[18px] font-semibold bg-gradient-to-r from-[#FF3131] to-[#FF914D] bg-clip-text text-transparent">
                    Romantic Bali Getaway:
                  </h2>

                  <p className="text-[18px] font-semibold bg-gradient-to-r from-[#FF3131] to-[#FF914D] bg-clip-text text-transparent">
                    Ubud, Kuta & Timeless Adventures
                  </p>
                </div>

                <p className="text-sm font-medium text-[#4E4E4E]">
                  15 Jan 2025 - 21 Jan 2025
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white flex items-center justify-center px-4 rounded-tr-2xl rounded-br-2xl text-sm font-medium">
                1N - 2D
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-lg font-semibold text-[#1A1A1A]">
              Duration & Details
            </h2>

            <div className="mt-4 flex flex-col space-y-3 text-gray-700">
              <div className="flex items-center gap-3">
                <FaClock className="text-[#FF3131]" />
                <span className="text-sm font-normal">
                  <span className="font-medium">Duration:</span> 6 Nights & 7
                  Days
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#FF3131]" />
                <span className="text-sm font-normal">
                  <span className="font-medium">Places to Visit:</span> 3N Ubud
                  + 3N Kuta
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[#ECEFFC] flex items-start gap-3">
            <input
              type="checkbox"
              id="agree"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="mt-1 w-5 h-5 border-gray-400 rounded-md focus:ring focus:ring-[#FF914D]"
            />
            <label
              htmlFor="agree"
              className="text-sm text-gray-700 leading-tight"
            >
              I acknowledge that I have fully read and agree upon the alerts,
              cancellation, and payment terms mentioned above.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form3;
