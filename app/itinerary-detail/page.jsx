'use client';

import { useEffect, useState } from 'react';
import Footer from "@/components/Footer";
import Carousel from "@/components/ItineraryDetail/Carousel";
import DayWise from "@/components/ItineraryDetail/DayWise";
import Overview from "@/components/ItineraryDetail/Overview";
import Pricing from "@/components/ItineraryDetail/Pricing";
import Stay from "@/components/ItineraryDetail/Stay";
import Summary from "@/components/ItineraryDetail/Summary";
import TopHeader from "@/components/ItineraryDetail/TopHeader";
import Transfers from "@/components/ItineraryDetail/Transfers";
import Navbar from "@/components/Navbar";

const ItineraryDetail = ({ params }) => {
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const response = await fetch(`/api/trips/${params.id}`);
        if (!response.ok) {
          throw new Error('Trip not found');
        }
        const data = await response.json();
        setTrip(data.trip);
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

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <TopHeader title={trip.title} type={trip.destinationType} />
        <Carousel images={trip.images} />
        <Overview trip={trip} />
        <Summary itinerary={trip.itinerary} />
        <Pricing pricing={trip.pricing} />
        <Stay stays={trip.stays} />
        <Transfers />
        <DayWise itinerary={trip.itinerary} />
      </div>
      <Footer />
    </>
  );
};

export default ItineraryDetail;