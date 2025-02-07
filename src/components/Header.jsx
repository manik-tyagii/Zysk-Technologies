import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6 md:px-20 flex items-center">
      <h1 className="text-2xl font-bold text-red-500">Zysk</h1>

      <nav className="hidden md:flex space-x-6 text-gray-700 font-medium ml-6">
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

      <div className="flex items-center space-x-4 ml-auto">
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
    </header>
  );
};

export default Header;
