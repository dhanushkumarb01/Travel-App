import React, { useState } from "react";

const Form2 = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="space-y-6 pt-6">
     
      <div className="bg-white sm:p-6 p-4 rounded-2xl">
        <div className="flex sm:flex-row flex-col justify-between sm:items-center">
          <h2 className="text-lg font-semibold text-[#1A1A1A]">
            Payment terms
          </h2>
          <p className="sm:text-2xl text-xl font-bold text-[#1A1A1A]">
            ₹87,368 <span className="text-sm font-medium text-gray-500">/2 persons</span>
          </p>
        </div>
        <p className="text-gray-600 text-sm mt-2">
          Total cost includes TCS and taxes <br /> dated on 10 Jan, 2025
        </p>

        {/* Payment Details Table */}
        <div className="mt-4 border rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 text-gray-600 text-sm">
              <tr>
                <th className="text-left px-4 py-3">Details</th>
                <th className="text-right px-4 py-3">Amount</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              <tr className="border-t">
                <td className="px-4 py-3">2 Adults</td>
                <td className="px-4 py-3 text-right">₹41,368 x 2</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">TCS</td>
                <td className="px-4 py-3 text-right">₹4500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <div className="bg-white sm:p-6 p-4 rounded-2xl">
        <h2 className="text-lg font-semibold text-[#1A1A1A]">Cancellation Policy</h2>

        
        <div className="mt-4 border rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 text-gray-600 text-sm">
              <tr>
                <th className="text-left px-4 py-3">Time of Cancellation</th>
                <th className="text-right px-4 py-3">Cancellation Fee</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              <tr className="border-t">
                <td className="px-4 py-3">10 Jan - 15 Jan</td>
                <td className="px-4 py-3 text-right">₹83,207</td>
              </tr>
            </tbody>
          </table>
        </div>

        
        <p className="text-gray-600 text-sm mt-4">
          Total vacation cost: <span className="font-semibold text-black">₹83,207</span>, 
          TCS: <span className="font-semibold text-black">₹4,161</span>
        </p>
      </div>

     
      <div className="p-4 rounded-xl bg-[#ECEFFC] ">
        <div className="max-w-2xl flex items-center gap-3">
        <input
          type="checkbox"
          id="agree"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="w-5 h-5 border-gray-400 rounded-md focus:ring focus:ring-[#FF914D]"
        />
        <label htmlFor="agree" className="text-sm text-gray-700 leading-tight">
          I acknowledge that I have fully read and agree upon the alerts, cancellation,
          and payment terms mentioned above.
        </label>
        </div>
      </div>
    </div>
  );
};

export default Form2;
