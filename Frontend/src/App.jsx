import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/Homepage'
import AddVendor from './pages/AddVendor'
import Map from './pages/Map'
import Yourreviews from './pages/Yourreviews'
import Newcomers from './pages/Newcomers'
import VendorDetailsPage from './pages/VendorDetailsPage'
import { useUser, SignUp,SignIn, } from '@clerk/clerk-react'
import Onboarding from './pages/Onboarding'


const App = () => {
  
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/add-vendor" element={<AddVendor />} />
          <Route path="/map" element={<Map/>} />
          <Route path="/yourreviews" element={<Yourreviews/>} />
          <Route path="/newcomers" element={<Newcomers/>} />
          <Route path="/vendor-details" element={<VendorDetailsPage />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App