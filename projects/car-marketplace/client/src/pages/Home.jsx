import React, { useState, useEffect } from 'react';
import { UserButton } from '@clerk/clerk-react';
import axios from 'axios';
import './ChatbotStyles.css';
import { useUser } from "@clerk/clerk-react";

const exists = localStorage.getItem("userExists") === "true";

const getAllCars = async () => {
  const response = await axios.get("http://localhost:5000/cars");
  return response.data;
};


import ChatComponent from './ChatComponent.jsx';
// Car Card Component
const CarCard = ({ car }) => (
  <div className="bg-white rounded-md shadow-md p-4 flex items-center justify-between">
    <div>
      <h2 className="text-lg font-semibold text-gray-800">{car.name}</h2>
      <p className="text-sm text-gray-600">{car.model} ({car.year})</p>
    </div>
    <div className="text-xl font-bold text-indigo-600">${car.price.toLocaleString()}</div>
  </div>
);

// Home Component
const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carData = await getAllCars();
        setCars(carData);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchCars();
  }, []);
  
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Car Marketplace</h1>
        {exists && <h1 className = "bg-red-100 rounded-md px-2 py-2 mx-2 my-2">welcome back</h1> }
        <div className = "bg-black w-15 h-10 rounded-full px-1.5 py-1">
            <UserButton />
        </div>
      </header>


      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.name + car.model + car.year} car={car} />
          ))}
        </div>
      </main>

      {/* <ChatBot /> */}
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Welcome to Mustang 🚗</h1>
          <ChatComponent/>
      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Your Car Marketplace
      </footer>
    </div>
  );
};

export default Home;
