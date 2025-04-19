import React from "react";
import { MapPin, Clock, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'


const HomePage = () => {
  // Category data
  const categories = [
    { id: "all", name: "All", active: true },
    { id: "vegetarian", name: "Vegetarian", active: false },
    { id: "non-vegetarian", name: "Non-Vegetarian", active: false },
    { id: "snacks", name: "Snacks", active: false }
  ];
  // Fetch top rated vendors data from API
  const [topVendors, setTopVendors] = React.useState([]);
  const [nearbyOptions, setNearbyOptions] = React.useState([]);

  React.useEffect(() => {
    // Fetch top rated vendors
    fetch('http://localhost:5000/api/vendors/top-rated')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setTopVendors(data);
        // You can also use the first few items as nearby options
      })
      .catch(error => {
        console.error('Error fetching top vendors:', error);
        // Set fallback data in case of error
        setTopVendors([
          {
            id: 1,
            name: "Mohammed's Kebabs",
            rating: 4.7,
            hygiene: 4.6,
            description: "Serving mouth-watering kebabs for over 30 years.",
            address: "Mohammed Ali Road, Mumbai",
            hours: "5:00 PM - 1:00 AM",
            image: "/api/placeholder/400/240"
          },
          {
            id: 2, 
            name: "Gupta's Vada Pav",
            rating: 4.5,
            hygiene: 4.2,
            description: "Authentic Mumbai vada pav with special chutney.",
            address: "Dadar West, Mumbai",
            hours: "8:00 AM - 10:00 PM",
            image: "/api/placeholder/400/240"
          }
        ]);
      });
  }, []);

  React.useEffect(() => {
    // Fetch nearby vendors
    // Replace '1234567890' with actual user's phone number from auth context or state
    const userPhoneNumber = '1652497137'; // This should come from authentication
    
    fetch(`http://localhost:5000/api/users/nearbyVendors/${userPhoneNumber}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setNearbyOptions(data);
      })
      .catch(error => {
        console.error('Error fetching nearby vendors:', error);
        // Set fallback data in case of error
        setNearbyOptions([
          {
            id: 1,
            name: "Sharma's Pav Bhaji",
            rating: 4.5,
            hygiene: 4.2,
            image: "/api/placeholder/120/120"
          },
          {
            id: 2,
            name: "Mohammed's Kebabs",
            rating: 4.7,
            hygiene: 4.6,
            image: "/api/placeholder/120/120"
          },
          {
            id: 3,
            name: "Gupta's Vada Pav",
            rating: 4.5,
            hygiene: 4.2,
            image: "/api/placeholder/120/120"
          },
          {
            id: 4,
            name: "Chinese Corner",
            rating: 4.3,
            hygiene: 4.0,
            image: "/api/placeholder/120/120"
          }
        ]);
      });
  }, []);



  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header/>              
      
      <div className="flex-1 pb-16">
        {/* Categories */}
        <div className="px-4 mb-6">
          <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap ${
                  category.active 
                    ? "bg-red-500 text-white" 
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Top Rated Vendors */}
        <div className="px-4 mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-gray-800">Top Rated Vendors</h2>
            <button className="text-sm text-red-500">See all &gt;</button>
          </div>
          
          <div className="space-y-4">
            {topVendors.map(vendor => (
              <div key={vendor.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-40 bg-gray-200 relative">
                  <img 
                    src={vendor.image} 
                    alt={vendor.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <div className="flex justify-between items-start">
                    <Link to='/vendor-details'>
                  
                    <h3 className="font-semibold text-gray-800">{vendor.name}</h3>
                    </Link>
                    <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-md flex items-center">
                      {vendor.cuisine}
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-1">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium ml-1">{vendor.rating}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{vendor.description}</p>
                  
                  <div className="mt-2 flex items-center text-xs text-gray-500">
                    <MapPin size={12} className="mr-1" />
                    <span>{vendor.location}</span>
                  </div>
                  
                  <div className="mt-1 flex items-center text-xs text-gray-500">
                    <Clock size={12} className="mr-1" />
                    <span>8 p.m. - 12 a.m.</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Nearby Street Food */}
        <div className="px-4 mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-gray-800">Nearby Food Options</h2>
            <button className="text-sm text-red-500">View Map</button>
          </div>
          
          <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
            {nearbyOptions.map(option => (
              <div key={option.id} className="min-w-[140px] bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-24 bg-gray-200">
                  <img 
                    src={option.image} 
                    alt={option.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2">
                  <h3 className="font-medium text-sm truncate">{option.name}</h3>
                  <div className="flex items-center mt-1">
                    <Star size={12} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-medium ml-1">{option.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      
        
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;