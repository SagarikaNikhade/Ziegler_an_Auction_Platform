import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const userType = localStorage.getItem('userType');
  const Token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    alert("Sign In Again!!")
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          OurAirCraft
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/login" className="text-white">
            Login
          </Link>
          <Link to="/signup" className="text-white">
            Sign Up
          </Link>
          {userType == "seller" && Token &&(
          <Link to="/add" className="text-white">
            Aircraft
          </Link>
          )}
          <Link to="/get" className="text-white">
              ShowAllAircraft
          </Link>
          {Token && ( 
            <span className="text-white cursor-pointer" onClick={handleLogout}>
              Logout
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
