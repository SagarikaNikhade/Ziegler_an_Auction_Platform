// LandingPage.js
import React from 'react';
import AircraftModel from './AircraftModel';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform!</h1>
      <p className="text-lg text-gray-700 mb-8">Discover amazing 3D products in our auction.</p>
      <AircraftModel />
    </div>
  );
};

export default LandingPage;
