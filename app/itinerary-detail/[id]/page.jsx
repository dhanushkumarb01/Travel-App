"use client";

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Carousel from '@/components/ItineraryDetail/Carousel';
import DayWise from '@/components/ItineraryDetail/DayWise';
import Overview from '@/components/ItineraryDetail/Overview';
import Pricing from '@/components/ItineraryDetail/Pricing';
import Stay from '@/components/ItineraryDetail/Stay';
import Summary from '@/components/ItineraryDetail/Summary';
import TopHeader from '@/components/ItineraryDetail/TopHeader';
import Transfers from '@/components/ItineraryDetail/Transfers';

export default function ItineraryDetail({ params }) {
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Overview");

  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const response = await fetch(`/api/trips/${params.id}`);
        const data = await response.json();
        
        if (data.trip) {
          setTrip(data.trip);
        }
      } catch (error) {
        console.error('Error fetching trip details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchTripDetails();
    }
  }, [params.id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!trip) {
    return <div className="min-h-screen flex items-center justify-center">Trip not found</div>;
  }

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <>
            <Overview trip={trip} />
            <Summary itinerary={trip.itinerary} />
            <Pricing pricing={trip.pricing} />
          </>
        );
      case "Itinerary":
        return (
          <>
            <DayWise itinerary={trip.itinerary} />
            <Pricing pricing={trip.pricing} />
          </>
        );
      case "Inclusions":
        return (
          <>
            <Stay stays={trip.stays} />
            <Transfers transfers={trip.transfers} />
          </>
        );
      case "Reviews":
        return (
          <div className="max-w-7xl mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold mb-6">Reviews</h2>
            {trip.reviews && trip.reviews.length > 0 ? (
              <div className="space-y-6">
                {trip.reviews.map((review, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold">{review.name}</h3>
                        <p className="text-gray-600 text-sm">{review.date}</p>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-${
                              i < review.rating ? "yellow" : "gray"
                            }-400`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No reviews yet.</p>
            )}
          </div>
        );
      case "Terms & Conditions":
        return (
          <div className="max-w-7xl mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold mb-6">Terms & Conditions</h2>
            <div className="prose max-w-none">
              {trip.termsAndConditions ? (
                <div dangerouslySetInnerHTML={{ __html: trip.termsAndConditions }} />
              ) : (
                <p className="text-gray-600">Terms and conditions not available.</p>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <TopHeader 
          title={trip.title} 
          type={trip.destinationType}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          duration={trip.duration}
        />
        <Carousel images={trip.images} />
        {renderContent()}
      </div>
      <Footer />
    </>
  );
}