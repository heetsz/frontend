import Header from '@/components/Header';
import React from 'react';
import Footer from '../components/Footer'
import MapWithPincode from '@/components/MapWith';
const Map = () => {
  return (
      <>
      <Header/>
    <div className="w-screen h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h2 className="mb-4">FIND YOUR NEARBY STALLS HERE....</h2>
      {/* Placeholder for the map */}
      {/* You can replace the div below with your Map component */}
      <MapWithPincode/>
     
      <Footer/>
    </div>
    </>
  );
};

export default Map;