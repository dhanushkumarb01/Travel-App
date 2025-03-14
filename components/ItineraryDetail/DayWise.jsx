import React from "react";

const ItineraryCard = ({ day, highlight, descriptions }) => {
  return (
    <div className="w-full bg-white rounded-2xl border border-opacity-10 sm:p-6 p-4 relative">
      
      <div className="flex items-center gap-x-3 border-b pb-6 border-opacity-10 mb-6">
        <button className="px-6 py-3 text-white rounded-lg bg-gradient-to-r from-[#FF3131] to-[#FF914D] sm:text-base text-sm">
          {day}
        </button>
        <h3 className="text-xl font-normal text-[#000929]">{highlight}</h3>
      </div>

     
      <div className="relative">
        {descriptions?.map((description, idx) => (
          <div key={idx} className="relative flex gap-x-4">
            
            <div
              className={`absolute left-0 top-0 flex w-6 justify-center ${
                idx === descriptions.length - 1 ? 'h-6' : 'h-full'
              }`}
            >
              {/* <div className="w-px bg-gray-200" /> */}
              <div className="w-px border-l border-dashed border-[#FF507A]" />
            </div>

           
            <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
              <div className="h-5 w-5 bg-gradient-to-r from-[#FF3131] to-[#FF914D] rounded-full flex items-center justify-center">
                <div className="h-2 w-2 bg-white rounded-full" />
              </div>
            </div>

           
            <div className="flex-auto pb-6">
              <p className="text-[#4D525F]">{description}</p>
              {idx === 0 && (
                <img
                  src="https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg"
                  alt="Highlight"
                  className="w-full h-[280px] object-cover object-center rounded-lg mt-4"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DayWise = () => {
  const itinerary = [
    {
      day: "Day 1-2",
      highlight: "Highlight-1",
      descriptions: [
        "Embark on an unforgettable journey with our carefully crafted itinerary...",
        "Discover the majestic Handra Gate and the iconic Tanah Lot temple...",
        "Continue your journey with visits to the sacred Uluwatu Temple..."
      ]
    },
    {
        day: "Day 3-4",
        highlight: "Highlight-2"
      },
  ];

  return (
    <div className="mx-auto max-w-7xl sm:space-y-8 space-y-6 sm:px-0 px-4 pb-8">
      <h2 className="sm:text-3xl text-2xl font-bold">Day wise Itinerary</h2>
      <div className="max-w-4xl space-y-4">
        {itinerary?.map((item, index) => (
          <ItineraryCard
            key={index}
            day={item.day}
            highlight={item.highlight}
            descriptions={item.descriptions}
          />
        ))}
      </div>
    </div>
  );
};

export default DayWise;