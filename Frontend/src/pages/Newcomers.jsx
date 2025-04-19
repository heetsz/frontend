import React, { useState } from 'react';
import { MapPin, Star, Clock, Search, Info, Award, Heart, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Newcomers = () => {
  const [activeTab, setActiveTab] = useState('popular');
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const [favorites, setFavorites] = useState([]);
  
  const toggleFavorite = (locationName) => {
    if (favorites.includes(locationName)) {
      setFavorites(favorites.filter(name => name !== locationName));
    } else {
      setFavorites([...favorites, locationName]);
    }
  };
  
  const streetFoodLocations = {
    popular: [
      {
        name: "Juhu Chowpatty",
        description: "Famous for pav bhaji and beach-side snacks",
        rating: 4.8,
        timings: "4PM-12AM",
        mustTry: ["Pav Bhaji", "Bhel Puri"],
        area: "Juhu",
        reviews: 324,
        specialBadge: "Popular"
      },
      {
        name: "Mohammed Ali Road",
        description: "Iconic street with amazing kebabs",
        rating: 4.7,
        timings: "6PM-2AM",
        mustTry: ["Seekh Kebabs", "Phirni"],
        area: "South Mumbai",
        reviews: 287,
        specialBadge: "Local"
      },
      {
        name: "Elco Market",
        description: "Popular for chaat in Bandra",
        rating: 4.6,
        timings: "11AM-11PM",
        mustTry: ["Pani Puri", "Dahi Puri"],
        area: "Bandra",
        reviews: 256,
        specialBadge: "New"
      }
    ],
    local: [
      {
        name: "Khau Galli",
        description: "Hidden gem with local varieties",
        rating: 4.5,
        timings: "5PM-1AM",
        mustTry: ["Sandwich", "Vada Pav"],
        area: "Ghatkopar",
        reviews: 189,
        specialBadge: "Gem"
      },
      {
        name: "Carter Road",
        description: "Oceanfront food stalls",
        rating: 4.4,
        timings: "5PM-12AM",
        mustTry: ["Corn Bhel", "Kulfi"],
        area: "Bandra West",
        reviews: 212,
        specialBadge: "View"
      },
      {
        name: "Sardar Pav Bhaji",
        description: "Known for buttery pav bhaji",
        rating: 4.9,
        timings: "11AM-1AM",
        mustTry: ["Cheese Pav Bhaji"],
        area: "Tardeo",
        reviews: 347,
        specialBadge: "Must"
      }
    ],
    veg: [
      {
        name: "Swati Snacks",
        description: "Authentic Gujarati street food",
        rating: 4.7,
        timings: "11:30AM-11PM",
        mustTry: ["Panki", "Pav Bhaji"],
        area: "Tardeo",
        reviews: 276,
        specialBadge: "Auth"
      },
      {
        name: "Kailash Parbat",
        description: "Known for chaats",
        rating: 4.5,
        timings: "11AM-11PM",
        mustTry: ["Chaat", "Chole"],
        area: "Multiple",
        reviews: 231,
        specialBadge: "Chain"
      },
      {
        name: "Guru Kripa",
        description: "Famous for samosa",
        rating: 4.6,
        timings: "7AM-11PM",
        mustTry: ["Samosa", "Jalebi"],
        area: "Sion",
        reviews: 205,
        specialBadge: "Brkfst"
      }
    ],
    nonveg: [
      {
        name: "Bademiya",
        description: "Iconic kebab place",
        rating: 4.8,
        timings: "7PM-3AM",
        mustTry: ["Seekh Kebab", "Chicken Tikka"],
        area: "Colaba",
        reviews: 312,
        specialBadge: "Late"
      },
      {
        name: "Haji Ali Juice",
        description: "Famous for juices",
        rating: 4.5,
        timings: "10AM-12AM",
        mustTry: ["Strawberry", "Sitafal"],
        area: "Haji Ali",
        reviews: 248,
        specialBadge: "Fresh"
      },
      {
        name: "Noor Mohammadi",
        description: "Known for Chicken Sanju Baba",
        rating: 4.6,
        timings: "11:30AM-1:30AM",
        mustTry: ["Chicken Sanju", "Nihari"],
        area: "Mohammed Ali Rd",
        reviews: 268,
        specialBadge: "Celeb"
      }
    ]
  };

  return (
    <>
    <Header/>
    <div className="bg-gradient-to-b from-rose-50 to-red-100 min-h-screen p-2">
      {/* Welcome Modal */}
      {showWelcomeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2">
          <div className="bg-white rounded-xl shadow-xl p-4 max-w-xs w-full">
            <div className="bg-red-600 -mt-4 -mx-4 mb-4 rounded-t-xl p-3 text-white text-center">
              <h2 className="text-lg font-bold">Welcome to Mumbai Food Explorer!</h2>
            </div>
            <p className="text-red-800 text-sm mb-3">You're about to discover Mumbai's vibrant street food scene!</p>
            
            <div className="bg-red-50 p-3 rounded-lg mb-3 text-sm">
              <h3 className="font-bold text-red-800 flex items-center"><Info size={14} className="mr-1" /> Quick Tips:</h3>
              <ul className="mt-1 space-y-1 text-red-700">
                <li className="flex items-start text-xs">
                  <span className="mr-1 text-red-600">•</span>
                  <span>Save favorites with the heart icon</span>
                </li>
                <li className="flex items-start text-xs">
                  <span className="mr-1 text-red-600">•</span>
                  <span>Look for badges for special spots</span>
                </li>
              </ul>
            </div>
            
            <button 
              onClick={() => setShowWelcomeModal(false)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium w-full"
            >
              Start Exploring!
            </button>
          </div>
        </div>
      )}

      <div className="max-w-sm mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-red-600">Mumbai Street Food</h1>
          <p className="text-sm text-red-800">Discover authentic Mumbai flavors!</p>
          
          {/* Progress tracker */}
          <div className="mt-2 bg-white rounded-full p-1 shadow-md">
            <div className="flex items-center justify-center">
              <span className="text-red-800 text-xs">Food Journey:</span>
              <div className="w-24 bg-red-100 rounded-full h-2 mx-2">
                <div className="bg-red-600 h-2 rounded-full" style={{width: `${Math.min(favorites.length * 10, 100)}%`}}></div>
              </div>
              <span className="text-red-600 text-xs font-bold">{favorites.length}/10</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg mb-4">
          <div className="p-3 bg-red-600 text-white">
            <h2 className="text-lg font-bold flex items-center"><MapPin className="mr-1" size={16} /> Street Food Map</h2>
          </div>
          
          <div className="p-2 bg-red-100">
            <div className="bg-white rounded-lg p-1 flex items-center shadow-md">
              <Search size={16} className="text-red-500 ml-1" />
              <input 
                type="text" 
                placeholder="Search food or area..." 
                className="w-full p-1 outline-none text-red-800 text-sm" 
              />
            </div>
          </div>
          
          <div className="flex border-b border-red-200 text-xs">
            <button 
              onClick={() => setActiveTab('popular')}
              className={`px-2 py-2 font-medium flex-1 ${activeTab === 'popular' ? 'bg-red-500 text-white' : 'text-red-700'}`}
            >
              Popular
            </button>
            <button 
              onClick={() => setActiveTab('local')}
              className={`px-2 py-2 font-medium flex-1 ${activeTab === 'local' ? 'bg-red-500 text-white' : 'text-red-700'}`}
            >
              Local
            </button>
            <button 
              onClick={() => setActiveTab('veg')}
              className={`px-2 py-2 font-medium flex-1 ${activeTab === 'veg' ? 'bg-red-500 text-white' : 'text-red-700'}`}
            >
              Veg
            </button>
            <button 
              onClick={() => setActiveTab('nonveg')}
              className={`px-2 py-2 font-medium flex-1 ${activeTab === 'nonveg' ? 'bg-red-500 text-white' : 'text-red-700'}`}
            >
              Non-Veg
            </button>
          </div>

          <div className="p-3">
            <div className="space-y-3">
              {streetFoodLocations[activeTab].map((location, index) => (
                <div key={index} className="bg-red-50 rounded-lg p-3 shadow-sm relative">
                  {/* Special badge */}
                  {location.specialBadge && (
                    <div className="absolute -top-1 -right-1 bg-red-600 text-white px-2 py-0.5 rounded-full text-xs font-bold flex items-center shadow-md">
                      <Award size={10} className="mr-0.5" />
                      {location.specialBadge}
                    </div>
                  )}
                  
                  <div className="flex justify-between items-start">
                    <h3 className="text-base font-bold text-red-800">{location.name}</h3>
                    <button 
                      onClick={() => toggleFavorite(location.name)}
                      className={`p-1 rounded-full ${favorites.includes(location.name) ? 'text-red-600' : 'text-red-300'}`}
                    >
                      <Heart size={16} fill={favorites.includes(location.name) ? "currentColor" : "none"} />
                    </button>
                  </div>
                  
                  <p className="text-red-700 text-xs flex items-center">
                    <MapPin size={10} className="mr-0.5" /> {location.area}
                  </p>
                  <p className="text-red-600 text-xs my-1">{location.description}</p>
                  
                  <div className="flex items-center mb-1 text-xs">
                    <Star className="text-yellow-500 mr-0.5" size={12} fill="currentColor" />
                    <span className="text-red-800">{location.rating}</span>
                    <span className="mx-1 text-red-400">•</span>
                    <Clock className="text-red-500 mr-0.5" size={12} />
                    <span className="text-red-700">{location.timings}</span>
                    <span className="mx-1 text-red-400">•</span>
                    <MessageSquare className="text-red-500 mr-0.5" size={12} />
                    <span className="text-red-700">{location.reviews}</span>
                  </div>
                  
                  <div>
                    <p className="text-red-800 text-xs font-medium">Must Try:</p>
                    <div className="flex flex-wrap gap-1">
                      {location.mustTry.map((item, i) => (
                        <span key={i} className="bg-red-200 text-red-800 px-1.5 py-0.5 rounded-full text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Guide */}
        <div className="bg-white rounded-xl shadow-lg mb-4">
          <div className="p-2 bg-red-700 text-white">
            <h2 className="text-sm font-bold flex items-center">
              <Info size={12} className="mr-1" /> Mumbai Food Lingo
            </h2>
          </div>
          <div className="p-2 grid grid-cols-2 gap-2 text-xs">
            <div className="bg-red-50 p-2 rounded-lg">
              <p className="font-bold text-red-800">Vada Pav</p>
              <p className="text-red-600">Potato fritter in a bun</p>
            </div>
            <div className="bg-red-50 p-2 rounded-lg">
              <p className="font-bold text-red-800">Pav Bhaji</p>
              <p className="text-red-600">Mashed veg with bread</p>
            </div>
          </div>
        </div>

        <div className="bg-red-600 text-white rounded-xl p-3 shadow-lg mb-4 text-xs">
          <h2 className="text-sm font-bold mb-1">Quick Tips</h2>
          <ul className="space-y-1">
            <li className="flex items-start">
              <span className="mr-1 font-bold">•</span>
              <span>Best time: 5 PM - 10 PM</span>
            </li>
            <li className="flex items-start">
              <span className="mr-1 font-bold">•</span>
              <span>Look for crowded stalls - better food!</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <button className="bg-white border-2 border-red-600 text-red-600 px-4 py-2 rounded-lg text-sm font-medium shadow-md">
            View Full Map
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Newcomers;