import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6 md:px-20 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-red-500">Zysk</h1>

      
      <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-blue-600">Home</a>
        <div className="relative group">
          <a href="#" className="hover:text-blue-600 flex items-center">
            Products <span className="ml-1">▼</span>
          </a>
        </div>
        <div className="relative group">
          <a href="#" className="hover:text-blue-600 flex items-center">
            Resources <span className="ml-1">▼</span>
          </a>
        </div>
        <a href="#" className="hover:text-blue-600">Pricing</a>
      </nav>

      
      <div className="flex items-center space-x-4">
        <img 
          src="./assets/Avatar.png" 
          alt="User Avatar" 
          className="w-10 h-10 rounded-full border border-gray-300 object-cover"
        />

      
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

    
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">Products</a></li>
            <li><a href="#" className="hover:text-blue-600">Resources</a></li>
            <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
