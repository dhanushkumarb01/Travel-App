import BlogSection from "@/components/Blog";
import FixedDepartures from "@/components/FixedDepartures";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import PackagesHeroSection from "@/components/PackagesHeroSection";
import TopPackages from "@/components/TopPackages";
import React from "react";

const Packages = () => {
  const destinationsData = [
    {
      id: 1,
      title: "ICELAND.",
      image:
        "https://images.pexels.com/photos/163037/london-street-phone-cabin-163037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Flight + 4 nights",
      discount: "Up to 50% off",
    },
    {
      id: 2,
      title: "Explore our Seoul",
      image:
        "https://images.pexels.com/photos/2915957/pexels-photo-2915957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "200 hotels, 345 local flights and 234 bus providers",
      discount: "",
    },
    {
      id: 3,
      title: "CUBA.",
      image:
        "https://images.pexels.com/photos/8430379/pexels-photo-8430379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Flight + 4 nights",
      discount: "Up to 50% off",
    },
    {
      id: 4,
      title: "Explore our Seoul",
      image:
        "https://images.pexels.com/photos/20816826/pexels-photo-20816826/free-photo-of-view-of-a-harbor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "200 hotels, 345 local flights and 234 bus providers",
      discount: "",
    },
  ];

  return (
    <div>
      <Navbar />
      <PackagesHeroSection />
      <TopPackages />
      <Gallery />
      <BlogSection />
      <FixedDepartures
        title="Fixed Departures"
        description="Handpicked Getaways for Every Traveler"
        destinations={destinationsData}
      />
      <Footer />
    </div>
  );
};

export default Packages;
