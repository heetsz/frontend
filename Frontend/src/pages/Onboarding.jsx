import React, { useState, useRef, useEffect } from "react";
import { MapPin, Star, Navigation, Clock, ShieldCheck } from "lucide-react";

import { Link } from "react-router-dom";

const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef(null);
  
  // Onboarding content slides
  const slides = [
    {
      title: "Discover Local Street Food",
      description: "Find the best street food stalls near your location with just a few taps",
      icon: <MapPin size={48} />,
      color: "bg-orange-500",
      image: "🍲"
    },
    {
      title: "Hygiene Ratings",
      description: "Make informed choices with our transparent hygiene rating system",
      icon: <ShieldCheck size={48} />,
      color: "bg-green-500",
      image: "🍔"
    },
    {
      title: "Easy Navigation",
      description: "Get directions to your favorite food stalls with our built-in navigation",
      icon: <Navigation size={48} />,
      color: "bg-blue-500",
      image: "🥡"
    },
    {
      title: "Peak Hours",
      description: "Know when it's busy and avoid the crowds with our peak hours feature",
      icon: <Clock size={48} />,
      color: "bg-purple-500",
      image: "🌮"
    },
    {
      title: "Community Reviews",
      description: "Read and share experiences with our vibrant community of food lovers",
      icon: <Star size={48} />,
      color: "bg-yellow-500",
      image: "🍕"
    }
  ];

  // Handle scroll events to update active slide
  const handleScroll = () => {
    if (slidesRef.current) {
      const scrollPosition = slidesRef.current.scrollLeft;
      const slideWidth = slidesRef.current.clientWidth;
      const newSlide = Math.round(scrollPosition / slideWidth);
      
      if (newSlide !== currentSlide) {
        setCurrentSlide(newSlide);
      }
    }
  };

  // Scroll to slide programmatically when indicator is clicked
  const scrollToSlide = (index) => {
    if (slidesRef.current) {
      const slideWidth = slidesRef.current.clientWidth;
      slidesRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
    }
  };

  // Skip onboarding and go to main app
  const handleSkip = () => {
    // Navigate to signup page when user skips onboarding
    window.location.href = "/signup";
    // Alternative using React Router:
    // navigate("/signup");
  };

  // Get started - called after viewing all slides or when button is clicked
  const handleGetStarted = () => {
    // In a real app, this would navigate to the main app or login screen
    window.location.href = "/signup";
  };

  // Add scroll event listener
  useEffect(() => {
    const slidesContainer = slidesRef.current;
    if (slidesContainer) {
      slidesContainer.addEventListener('scroll', handleScroll);
      return () => slidesContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="flex flex-col h-screen bg-orange-50">
      {/* Skip button */}
      <div className="absolute top-4 right-4 z-10">
        <button 
          onClick={handleSkip}
          className="text-sm font-medium text-gray-600 hover:text-gray-800"
        >
          Skip
        </button>
      </div>
      
      {/* Slides container */}
      <div 
        ref={slidesRef} 
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide h-full" 
        style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className="flex flex-col flex-shrink-0 w-full h-full snap-center"
          >
            {/* Content */}
            <div className="flex flex-col items-center justify-center px-6 h-full">
              {/* Illustration/Logo */}
              <div className={`mb-8 w-40 h-40 ${slide.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                {slide.icon}
              </div>
              
              {/* Food illustration */}
              <div className="text-6xl mb-6">{slide.image}</div>
              
              {/* Text content */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {slide.title}
              </h2>
              <p className="text-center text-gray-600 max-w-xs">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Indicator dots */}
      <div className="flex justify-center space-x-2 mt-auto mb-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-orange-500 w-6' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Action buttons */}
      {currentSlide === slides.length - 1 && <div className="px-6 pb-10">
        <button
          onClick={handleGetStarted}
          className="w-full bg-orange-500 text-white py-3.5 rounded-xl font-semibold shadow-md hover:bg-orange-600 transition duration-300 flex items-center justify-center"
        >
          <Link to = "/signup">Get Started</Link>
        </button>
      </div>}
      
      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Onboarding;