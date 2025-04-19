import React from 'react';
import { Star, ThumbsUp, Edit, Clock, Award } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Yourreviews = () => {
  const reviews = [
    {
      restaurantName: "Mohammed's Kebabs",
      rating: 5.0,
      date: "2023-09-05",
      likes: 32,
      image: "/api/placeholder/60/60",
      isTopPick: true
    },
    {
      restaurantName: "Sharma's Pav Bhaji",
      rating: 5.0,
      date: "2023-08-15",
      likes: 24,
      image: "/api/placeholder/60/60"
    },
    {
      restaurantName: "Sharma's Pav Bhaji",
      rating: 4.0,
      date: "2023-07-22",
      likes: 12,
      image: "/api/placeholder/60/60"
    },
    {
      restaurantName: "Gupta's Vada Pav",
      rating: 5.0,
      date: "2023-06-18",
      likes: 18,
      image: "/api/placeholder/60/60"
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<Star key={i} size={14} className="text-yellow-500" fill="currentColor" />);
    }
    return stars;
  };

  return (
    <>
    <Header/>
    <div className="bg-gray-100 min-h-screen p-3">
      <div className="max-w-sm mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 p-4">
            <h1 className="text-white font-bold text-xl">My Reviews</h1>
          </div>
          
          {/* Enhanced Stats Section */}
          <div className="flex border-b border-gray-200 bg-red-50">
            <div className="flex-1 text-center py-3 border-r border-red-100">
              <div className="text-red-600 font-bold text-xl">6</div>
              <div className="text-red-500 text-xs font-medium">Reviews</div>
            </div>
            <div className="flex-1 text-center py-3 border-r border-red-100">
              <div className="text-red-600 font-bold text-xl">112</div>
              <div className="text-red-500 text-xs font-medium">Likes</div>
            </div>
            <div className="flex-1 text-center py-3">
              <div className="text-red-600 font-bold text-xl">4.5</div>
              <div className="text-red-500 text-xs font-medium">Avg. Rating</div>
            </div>
          </div>
          
          <div className="p-3">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-gray-800">Recent Reviews</h2>
              <div className="text-xs text-red-600 font-medium">See All</div>
            </div>
            
            <div className="space-y-3">
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className={`border-b border-gray-200 pb-3 last:border-0 last:pb-0 ${index === 0 ? 'bg-red-50 -mx-3 px-3 py-2 rounded-md' : ''}`}
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 mr-3 relative">
                      <img 
                        src={review.image} 
                        alt={review.restaurantName}
                        className="w-full h-full object-cover rounded-md shadow-sm"
                      />
                      {review.isTopPick && (
                        <div className="absolute -top-1 -right-1 bg-red-600 rounded-full p-0.5 shadow-md">
                          <Award size={10} className="text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-gray-800">{review.restaurantName}</h3>
                        <span className="text-xs text-red-400 flex items-center">
                          <Clock size={10} className="mr-0.5" />
                          {review.date}
                        </span>
                      </div>
                      
                      <div className="flex items-center mt-1">
                        {renderStars(review.rating)}
                        <span className="ml-1 text-gray-700 text-sm font-medium">{review.rating}</span>
                      </div>
                      
                      <div className="flex justify-between mt-2">
                        <button className="flex items-center text-red-500 text-xs">
                          <ThumbsUp size={12} className="mr-0.5" fill="currentColor" />
                          {review.likes}
                        </button>
                        <button className="flex items-center text-gray-400 text-xs">
                          <Edit size={12} className="mr-0.5" />
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Updated Activity Summary with review stats */}
          <div className="p-3 bg-red-50 border-t border-red-100">
            <div className="flex justify-between text-xs text-red-600">
              <span>Total Places Reviewed: <b>6</b></span>
              <span>This Month: <b>2 reviews</b></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Yourreviews;