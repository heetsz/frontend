import React, { useState } from "react";
import { MapPin, Clock, Star, ChevronLeft, Share2, Heart, ArrowRight, X } from "lucide-react";

const VendorDetailsPage = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewFormData, setReviewFormData] = useState({
    rating: 5,
    text: "",
  });
  
  // Vendor details
  const vendor = {
    name: "Mohammed's Kebabs",
    rating: 4.7,
    reviewCount: 1,
    address: "Mohammed Ali Road, Mumbai",
    hours: "5:00 PM - 1:00 AM",
    description: "Serving mouth-watering kebabs for over 30 years. Our seekh kebabs and chicken tikka are local favorites.",
    hygiene: {
      overall: 4.7,
      cleanliness: 4.0,
      ingredientQuality: 4.8,
      waterSafety: 3.9
    },
    specialties: ["Seekh Kebab", "Chicken Tikka", "Mutton Kebab"]
  };

  // Reviews data
  const reviews = [
    {
      id: 1,
      user: "Ahmed K.",
      avatar: "A",
      date: "2023-06-05",
      rating: 5.0,
      text: "The kebabs are absolutely divine! Juicy and perfectly spiced.",
      isVerified: true
    },
    // More reviews can be added here
  ];

  const handleBack = () => {
    alert("Going back to previous page");
  };

  const handleShare = () => {
    alert("Sharing this vendor");
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleViewAllReviews = () => {
    alert("Viewing all reviews");
  };

  const handleWriteReview = () => {
    setShowReviewForm(true);
  };
  
  const handleCloseReviewForm = () => {
    setShowReviewForm(false);
    // Reset form data
    setReviewFormData({
      rating: 5,
      text: ""
    });
  };
  
  const handleReviewInputChange = (e) => {
    const { name, value } = e.target;
    setReviewFormData({
      ...reviewFormData,
      [name]: value
    });
  };
  
  const handleRatingChange = (rating) => {
    setReviewFormData({
      ...reviewFormData,
      rating
    });
  };
  
  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log("Review submitted:", reviewFormData);
    alert("Review submitted successfully!");
    handleCloseReviewForm();
  };

  return (
    <div className={`flex flex-col min-h-screen bg-gray-50 relative ${showReviewForm ? 'overflow-hidden' : ''}`}>
      {/* Main content container with conditional blur */}
      <div className={`${showReviewForm ? 'filter blur-sm transition-all' : ''}`}>
        {/* Vendor Image */}
        <div className="relative w-full h-56 bg-gray-300">
          {/* Placeholder for the kebab image */}
          <img 
            src="/api/placeholder/400/320" 
            alt="Kebabs on grill" 
            className="w-full h-full object-cover"
          />
          
          {/* Overlay buttons */}
          <div className="absolute top-4 left-4">
            <button 
              onClick={handleBack} 
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute top-4 right-4 flex space-x-2">
            <button 
              onClick={handleShare} 
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
            >
              <Share2 size={18} />
            </button>
            <button 
              onClick={handleToggleFavorite} 
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
            >
              <Heart size={18} className={isFavorite ? "fill-red-500 text-red-500" : ""} />
            </button>
          </div>
        </div>

        {/* Vendor Info Card */}
        <div className="bg-white rounded-t-3xl -mt-6 relative z-10 flex-1 overflow-hidden">
          <div className="p-5">
            {/* Name and Rating */}
            <h1 className="text-xl font-bold text-gray-800">{vendor.name}</h1>
            
            <div className="flex items-center mt-1">
              <div className="flex items-center text-yellow-500">
                <Star size={16} className="fill-yellow-500" />
                <span className="ml-1 font-medium">{vendor.rating}</span>
              </div>
              <span className="text-sm text-gray-500 ml-1">({vendor.reviewCount} review)</span>
            </div>
            
            {/* Address */}
            <div className="flex items-center mt-3 text-gray-600">
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">{vendor.address}</span>
            </div>
            
            {/* Hours */}
            <div className="flex items-center mt-1 text-gray-600">
              <Clock size={16} className="mr-1" />
              <span className="text-sm">{vendor.hours}</span>
            </div>
            
            {/* About Section */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800">About</h2>
              <p className="mt-1 text-sm text-gray-600">{vendor.description}</p>
            </div>
            
            {/* Hygiene Ratings */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800">Hygiene Ratings</h2>
              
              <div className="flex mt-3">
                {/* Overall Score */}
                <div className="w-16 h-16 rounded-full border-4 border-green-100 flex items-center justify-center mr-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600">{vendor.hygiene.overall}</div>
                    <div className="text-xs text-gray-500">Hygiene Score</div>
                  </div>
                </div>
                
                {/* Individual Ratings */}
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Cleanliness</span>
                    <div className="flex items-center">
                      <Star size={14} className="text-yellow-500 fill-yellow-500" />
                      <span className="ml-1 text-sm">{vendor.hygiene.cleanliness}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Ingredient Quality</span>
                    <div className="flex items-center">
                      <Star size={14} className="text-yellow-500 fill-yellow-500" />
                      <span className="ml-1 text-sm">{vendor.hygiene.ingredientQuality}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Water Safety</span>
                    <div className="flex items-center">
                      <Star size={14} className="text-yellow-500 fill-yellow-500" />
                      <span className="ml-1 text-sm">{vendor.hygiene.waterSafety}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Specialties */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800">Specialties</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {vendor.specialties.map((specialty, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Reviews */}
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">Reviews</h2>
                <button 
                  onClick={handleViewAllReviews}
                  className="text-sm text-red-500 font-medium flex items-center"
                >
                  View all ({reviews.length})
                </button>
              </div>
              
              {/* Review Items */}
              <div className="mt-3 space-y-4">
                {reviews.map(review => (
                  <div key={review.id} className="border-b pb-4 border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                          {review.avatar}
                        </div>
                        <div className="ml-2">
                          <div className="flex items-center">
                            <span className="font-medium text-sm">{review.user}</span>
                            {review.isVerified && (
                              <span className="ml-2 text-xs px-1.5 py-0.5 bg-green-100 text-green-700 rounded">Verified</span>
                            )}
                          </div>
                          <div className="flex items-center text-xs text-gray-500">
                            <Star size={12} className="text-yellow-500 fill-yellow-500 mr-1" />
                            <span>{review.rating}</span>
                            <span className="mx-1">•</span>
                            <span>{new Date(review.date).toLocaleDateString('en-US', { year: '2-digit', month: '2-digit', day: '2-digit' })}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{review.text}</p>
                  </div>
                ))}
              </div>
              
              {/* Write Review Button */}
              <button 
                onClick={handleWriteReview}
                className="w-full mt-4 py-3 bg-red-500 text-white rounded-lg font-medium flex items-center justify-center"
              >
                <Star size={18} className="mr-2" />
                Write a Review
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Review Form Modal */}
      {showReviewForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center">
          <div className="bg-white rounded-t-2xl w-full max-w-md animate-slide-up">
            <div className="p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Write a Review</h3>
                <button onClick={handleCloseReviewForm} className="p-1">
                  <X size={20} />
                </button>
              </div>
              
              <form onSubmit={handleSubmitReview}>
                {/* Star Rating */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Rating
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingChange(star)}
                        className="focus:outline-none"
                      >
                        <Star 
                          size={24} 
                          className={`${reviewFormData.rating >= star 
                            ? "text-yellow-500 fill-yellow-500" 
                            : "text-gray-300"}`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Review Text */}
                <div className="mb-4">
                  <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Review
                  </label>
                  <textarea
                    id="reviewText"
                    name="text"
                    rows={4}
                    value={reviewFormData.text}
                    onChange={handleReviewInputChange}
                    placeholder="Share your experience with this vendor..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>
                
                {/* Photo Upload Option */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Add Photos (Optional)
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label htmlFor="photoUpload" className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <p className="mb-1 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                      </div>
                      <input id="photoUpload" type="file" className="hidden" accept="image/*" multiple />
                    </label>
                  </div>
                </div>
                
                {/* Hygiene Rating (Optional) */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Hygiene Ratings (Optional)
                  </h4>
                  
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="cleanliness" className="block text-sm text-gray-600 mb-1">Cleanliness</label>
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={`cleanliness-${star}`}
                            type="button"
                            className="focus:outline-none"
                          >
                            <Star size={16} className="text-gray-300" />
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="ingredientQuality" className="block text-sm text-gray-600 mb-1">Ingredient Quality</label>
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={`ingredient-${star}`}
                            type="button"
                            className="focus:outline-none"
                          >
                            <Star size={16} className="text-gray-300" />
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="waterSafety" className="block text-sm text-gray-600 mb-1">Water Safety</label>
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={`water-${star}`}
                            type="button"
                            className="focus:outline-none"
                          >
                            <Star size={16} className="text-gray-300" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-red-500 text-white rounded-lg font-medium"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorDetailsPage;