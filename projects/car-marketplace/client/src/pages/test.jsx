import React, { use, useEffect, useState } from "react";
import { Search, Clock, Home, Star } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";



const HomePage = () => {
  const navigate = useNavigate();
  const foodCategories = [
    { name: "Chinese", emoji: "🥡", color: "bg-red-100" },
    { name: "Chaat", emoji: "🍲", color: "bg-green-100" },
    { name: "Punjabi", emoji: "🍛", color: "bg-yellow-100" },
    { name: "South Indian", emoji: "🥘", color: "bg-blue-100" },
    { name: "Fast Food", emoji: "🍔", color: "bg-purple-100" },
    { name: "Desserts", emoji: "🍨", color: "bg-pink-100" },
  ];

  const [nearbyStalls, setNearbyStalls] = useState([]);

  useEffect(() => {
    const fetchStalls = async () => {
      try {
        const response = await axios.get("http://localhost:5000/vendors");
        const data = Array.isArray(response.data.vendors) ? response.data.vendors : [];
        setNearbyStalls(data);
      } catch (error) {
        console.error("Error fetching stalls:", error);
        setNearbyStalls([]);
      }
    };

    fetchStalls();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-orange-50 pb-16">
      {/* Header */}
      <NavBar/>

      {/* Food Categories */}
      <div className="mt-4">
        <div className="px-4 mb-3">
          <h2 className="font-bold text-base">What's your mood today?</h2>
        </div>
        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex px-4 space-x-4 pb-2">
            {foodCategories.map((category, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center shadow-sm`}>
                  <span className="text-2xl">{category.emoji}</span>
                </div>
                <p className="mt-2 text-xs font-medium text-gray-700">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nearby Stalls */}
      <div className="px-4 mt-6">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-base">Stalls Nearby</h2>
          <span className="text-xs text-orange-600 font-medium">See all</span>
        </div>
      </div>

      <div className="px-4 mt-3 space-y-3">
        {nearbyStalls.length > 0 ? (
          nearbyStalls.map((stall, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="flex">
                <div className="w-24 h-24 bg-orange-100 flex items-center justify-center">
                  {stall.image?.startsWith("http") ? (
                    <img
                      src={stall.image}
                      alt={stall.name}
                      className="object-cover w-full h-full rounded-xl"
                    />
                  ) : (
                    <span className="text-4xl">{stall.image || "🍽️"}</span>
                  )}
                </div>
                <div className="p-3 flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-gray-800">{stall.name}</h3>
                    <div className="flex items-center bg-green-100 px-2 py-0.5 rounded text-xs text-green-700 font-medium">
                      <Star className="h-3 w-3 mr-1 fill-green-500 text-green-500" />
                      {stall.rating.toFixed(1)}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{stall.cuisine}</p>
                  <div className="flex justify-between items-center mt-2">
                    {/* <span className="text-xs text-gray-600">{stall.distance || "500m away"}</span> */}
                    <div className="flex items-center text-xs text-orange-600">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{stall.peakHours || "4 PM - 6 PM"}</span>
                    </div>
                  </div>
                  <button
                    className="mt-2 text-xs text-white bg-orange-500 px-3 py-1 rounded-full font-medium"
                    onClick={() => alert(`Viewing ${stall.name}`)}
                  >
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-sm text-gray-500 mt-4">No stalls found nearby.</p>
        )}
      </div>

      {/* Popular Section */}
      <div className="px-4 mt-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold text-base">Popular Street Food</h2>
          <span className="text-xs text-orange-600 font-medium">See all</span>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t flex justify-around text-xs py-3 z-10">
        {[
          { label: "Home", icon: <Home className="h-5 w-5" />, active: true },
          { label: "Map", icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20.25L3.75 17.1V4.41l5.25 2.85m0 12.99L15 17.1m-6 3.15V7.26M15 17.1l5.25-2.85V4.41l-5.25 2.85M15 17.1V7.26M15 7.26L9 4.41" />
              </svg>
            )
          },
          { label: "Add Vendor", icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            )
          },
          { label: "Recommendations", icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5V6m0 12v1.5m-7.5-7.5H6m12 0h1.5M6.75 6.75l1.06 1.06M16.19 16.19l1.06 1.06M6.75 17.25l1.06-1.06M16.19 7.81l1.06-1.06" />
              </svg>
            )
          },
          { label: "Newcomers", icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5c4.28 0 7.75 3.47 7.75 7.75S16.28 20 12 20s-7.75-3.47-7.75-7.75S7.72 4.5 12 4.5zM9.75 9h4.5m-4.5 3h4.5" />
              </svg>
            )
          },
        ].map(({ label, icon, active }) => (
          <button
            key={label}
            className={`flex flex-col items-center ${active ? "text-orange-600" : "text-gray-400"}`}
            onClick={() => navigate(`/${label.toLowerCase().replace(" ", "")}`)}
          >
            {icon}
            <span className="mt-1">{label}</span>
          </button>
        ))}
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
