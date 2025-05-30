"use client";

import { useAuth } from '@/context/AuthContext';
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { Menu, X, ChevronDown, ChevronUp, User, LogOut } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const router = useRouter();
  const { user, logout } = useAuth();

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const domesticItems = [
    { label: "Mountains", href: "/packages?type=mountain" },
    { label: "Beaches", href: "/packages?type=beach" },
    { label: "Desert Safari", href: "/packages?type=desert" },
  ];

  const internationalItems = [
    { label: "Europe Tour", href: "/packages?country=Europe" },
    { label: "Asia Tour", href: "/packages?country=Asia" },
    { label: "America Tour", href: "/packages?country=America" },
  ];

  const seasonalItems = [
    { label: "Winter Specials", href: "/packages?season=Winter" },
    { label: "Summer Break", href: "/packages?season=Summer" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0 md:px-2">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-2xl font-bold">
              👜 Logo
            </span>
          </Link>

          <div className="hidden sm:flex space-x-8">
            <DropdownMenu
              title="Domestic Trips"
              items={domesticItems}
              className="text-[#000929] text-[14px] hover:text-orange-500 font-playfair"
            />
            <DropdownMenu
              title="International Trips"
              items={internationalItems}
              className="text-[#000929] text-[14px] hover:text-orange-500 font-playfair"
            />
            <DropdownMenu
              title="Fixed Departures"
              items={seasonalItems}
              className="text-[#000929] text-[14px] hover:text-orange-500 font-playfair"
            />
            <Link
              href="#"
              className="text-gray-700 text-[14px] hover:text-orange-500 font-playfair"
            >
              Speciality Tours
            </Link>
          </div>

          {/* Desktop Navigation Buttons */}
          <div className="sm:flex hidden space-x-4">
            {user ? (
              <>
                <button 
                  onClick={() => router.push('/user-profile')}
                  className="px-[24px] py-[12px] border-2 border-[#E0DEF7] rounded-lg text-[#000929] hover:bg-gray-100 flex items-center gap-2"
                >
                  <User size={18} />
                  Profile
                </button>
                <button 
                  onClick={handleLogout}
                  className="px-[24px] py-[12px] text-white rounded-lg bg-gradient-to-r from-[#FF3131] to-[#FF914D] flex items-center gap-2"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => router.push('/login')}
                  className="px-[24px] py-[12px] border-2 border-[#E0DEF7] rounded-lg text-[#000929] hover:bg-gray-100"
                >
                  Login
                </button>
                <button 
                  onClick={() => router.push('/signup')}
                  className="px-[24px] py-[12px] text-white rounded-lg bg-gradient-to-r from-[#FF3131] to-[#FF914D]"
                >
                  Sign up
                </button>
              </>
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="flex sm:hidden items-center gap-2">
            {user ? (
              <>
                <button 
                  onClick={() => router.push('/user-profile')}
                  className="px-4 py-2 border-2 border-[#E0DEF7] rounded-lg text-[#000929] hover:bg-gray-100 text-sm flex items-center gap-1"
                >
                  <User size={16} />
                  Profile
                </button>
                <button 
                  onClick={handleLogout}
                  className="px-4 py-2 text-white rounded-lg bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-sm flex items-center gap-1"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => router.push('/login')}
                  className="px-4 py-2 border-2 border-[#E0DEF7] rounded-lg text-[#000929] hover:bg-gray-100 text-sm"
                >
                  Login
                </button>
                <button 
                  onClick={() => router.push('/signup')}
                  className="px-4 py-2 text-white rounded-lg bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-sm"
                >
                  Sign up
                </button>
              </>
            )}
            <button
              className="p-2 rounded-md text-gray-700 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-start p-2">
            <div className="w-full">
              <button
                onClick={() => toggleDropdown("Domestic")}
                className="w-full text-left flex justify-between items-center px-4 py-2 text-gray-700 hover:text-orange-500"
              >
                Domestic Trips
                {openDropdown === "Domestic" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openDropdown === "Domestic" && (
                <div className="pl-6 py-2 space-y-2">
                  {domesticItems.map((item) => (
                    <Link 
                      key={item.label}
                      href={item.href}
                      className="block text-gray-600 hover:text-orange-500"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="w-full">
              <button
                onClick={() => toggleDropdown("International")}
                className="w-full text-left flex justify-between items-center px-4 py-2 text-gray-700 hover:text-orange-500"
              >
                International Trips
                {openDropdown === "International" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openDropdown === "International" && (
                <div className="pl-6 py-2 space-y-2">
                  {internationalItems.map((item) => (
                    <Link 
                      key={item.label}
                      href={item.href}
                      className="block text-gray-600 hover:text-orange-500"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="w-full">
              <button
                onClick={() => toggleDropdown("Seasonal")}
                className="w-full text-left flex justify-between items-center px-4 py-2 text-gray-700 hover:text-orange-500"
              >
                Fixed Departures
                {openDropdown === "Seasonal" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openDropdown === "Seasonal" && (
                <div className="pl-6 py-2 space-y-2">
                  {seasonalItems.map((item) => (
                    <Link 
                      key={item.label}
                      href={item.href}
                      className="block text-gray-600 hover:text-orange-500"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#"
              className="w-full px-4 py-2 text-gray-700 hover:text-orange-500 text-left"
            >
              Speciality Tours
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}