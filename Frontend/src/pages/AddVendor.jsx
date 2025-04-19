import React, { useState } from 'react';
import { Star, Upload, Camera, Clock, X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AddVendor = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = new FormData();
    data.append('name', formData.name);
    data.append('location', formData.pincode);


    data.append('cuisine', formData.cuisine);
    data.append('peak', formData.peakHours);


    // Create a review object with ratings
    const reviewData = {
      waterSafety: formData.waterSafety,
      ingredientQuality: formData.ingredientQuality,
      cleanliness: formData.cleanliness,
      taste: formData.taste
    };
    
    // Append the review data as JSON string
    data.append('review', JSON.stringify(reviewData));
    
    if (formData.image) {
      data.append('image', formData.image);
    }
  
    if (formData.menuPdf) {
      data.append('menuPdf', formData.menuPdf);
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/vendors', {
        method: 'POST',
        body: data
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Vendor added successfully:', result);
        // Optional: Reset form or show success toast
      } else {
        const error = await response.json();
        console.error('Failed to add vendor:', error);
        // Optional: Show error message to user
      }
    } catch (err) {
      console.error('Error while adding vendor:', err);
      // Optional: Show error message to user
    }
  };
  


  const [formData, setFormData] = useState({
    name: '',
    pincode: '',
    cuisine: '',
    waterSafety: 0,
    ingredientQuality: 0,
    cleanliness: 0,
    taste: 0,
    peakHours: '',
    image: null,
    menuPdf: null
  });

  const [imagePreview, setImagePreview] = useState(null);

  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle rating changes
  const handleRatingChange = (category, rating) => {
    setFormData({
      ...formData,
      [category]: rating
    });
  };

  // Handle file uploads
  const handleFileUpload = (e, fileType) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        [fileType]: file
      });
      
      if(fileType === 'image' && file.type.includes('image')) {
        const reader = new FileReader();
        reader.onload = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const removeFile = (fileType) => {
    if (fileType === 'image') {
      setImagePreview(null);
    }
    setFormData({
      ...formData,
      [fileType]: null
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   // Add your API call here to send data to the backend
  // };

  // Star rating component
  const StarRating = ({ name, value, onChange }) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(name, star)}
            className="focus:outline-none mr-1"
          >
            <Star
              size={24}
              className={star <= value ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
    <Header/>
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-orange-500 p-4 text-white">
        <h2 className="text-xl font-bold">Add New Vendor</h2>
        <p className="text-sm text-orange-100">Fill in the details to add a new food vendor</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-5 space-y-6">
        {/* Basic Information Section */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 border-b border-gray-200 pb-2">
            Basic Information
          </h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vendor Name*
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
              placeholder="Enter vendor name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pincode*
            </label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
              placeholder="Enter area pincode"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cuisine Type*
            </label>
            <input
              type="text"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
              placeholder="e.g., Italian, Indian, Chinese"
              required
            />
          </div>
        </div>

        {/* Media Section */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 border-b border-gray-200 pb-2">
            Media
          </h3>
          
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Vendor Image
            </label>
            
            {imagePreview ? (
              <div className="relative mb-3">
                <img 
                  src={imagePreview} 
                  alt="Vendor preview" 
                  className="w-full h-40 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => removeFile('image')}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition-all">
                <label className="cursor-pointer w-full flex flex-col items-center">
                  <Camera size={40} className="text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500">Upload Vendor Image</span>
                  <span className="text-xs text-gray-400 mt-1">Click to browse files</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'image')}
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>

          {/* Menu PDF Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Menu PDF
            </label>
            
            {formData.menuPdf ? (
              <div className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-200">
                <div className="flex-1 truncate">
                  <span className="text-sm font-medium">{formData.menuPdf.name}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile('menuPdf')}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  <X size={18} />
                </button>
              </div>
            ) : (
              <label className="flex items-center justify-center px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition-all">
                <Upload size={20} className="mr-2 text-gray-500" />
                <span className="text-sm text-gray-700">Upload Menu PDF</span>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => handleFileUpload(e, 'menuPdf')}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </div>

        {/* Hygiene Ratings Section */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 border-b border-gray-200 pb-2">
            Hygiene Ratings
          </h3>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Water Safety</span>
                <StarRating 
                  name="waterSafety" 
                  value={formData.waterSafety} 
                  onChange={handleRatingChange} 
                />
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Ingredient Quality</span>
                <StarRating 
                  name="ingredientQuality" 
                  value={formData.ingredientQuality} 
                  onChange={handleRatingChange} 
                />
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Cleanliness</span>
                <StarRating 
                  name="cleanliness" 
                  value={formData.cleanliness} 
                  onChange={handleRatingChange} 
                />
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Taste</span>
                <StarRating 
                  name="taste" 
                  value={formData.taste} 
                  onChange={handleRatingChange} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Peak Hours */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-800 border-b border-gray-200 pb-2">
            Business Hours
          </h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Peak Hours
            </label>
            <div className="relative">
              <input
                type="text"
                name="peakHours"
                value={formData.peakHours}
                onChange={handleInputChange}
                placeholder="e.g., 12:00 PM - 2:00 PM, 7:00 PM - 9:00 PM"
                className="w-full p-3 pl-10 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
              />
              <Clock className="absolute top-3 left-3 text-gray-400" size={20} />
            </div>
            <p className="text-xs text-gray-500 mt-1">Enter the busiest hours for this vendor</p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 transition duration-200"
          >
            Add Vendor
          </button>
        </div>

      <div>
        xercitationem error molestias, labore sequi sit?
      </div>
      <Footer/>
      </form>
    </div>
    
   
    </>
  );
};

export default AddVendor;