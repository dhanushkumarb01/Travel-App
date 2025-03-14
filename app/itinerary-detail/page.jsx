'use client'
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

const ItineraryDetail = () => {
 

  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
      <TopHeader/>
      <Carousel/>
      <Overview/>
      <Summary/>
      <Pricing/>
     <Stay/>
     <Transfers />
     <DayWise />
    </div>
    <Footer/>
    </>
  );
};

export default ItineraryDetail;
