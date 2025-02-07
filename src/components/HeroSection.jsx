import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white relative py-12 md:py-20 px-4">
      <div className="flex justify-center">
        <div className="flex items-center border border-red-500 text-red-500 rounded-full px-4 py-2 space-x-2 bg-red-50 text-xs sm:text-sm flex-wrap text-center">
          <span className="border border-red-500 px-3 py-1 rounded-full font-medium">New feature</span>
          <span className="font-medium">Check out the team dashboard →</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 mt-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          Beautiful analytics to grow smarter
        </h2>
        <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
          Trusted by over 4,000 startups.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <button className="px-6 py-2 border border-gray-400 text-gray-700 rounded-full flex items-center space-x-2 hover:bg-gray-100 shadow-md justify-center">
            <div className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded-full">
              <svg className="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-4.596-2.65A1 1 0 009 9.083v5.834a1 1 0 001.156.986l4.596-2.65a1 1 0 000-1.72z" />
              </svg>
            </div>
            <span className="font-medium">Demo</span>
          </button>
          <button className="px-6 py-2 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 shadow-md">
            Sign up
          </button>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <img 
          src="./assets/image 1.png" 
          alt="Main UI Display" 
          className="rounded-lg shadow-lg w-full max-w-4xl sm:w-3/4 lg:w-full"
        />
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600 text-lg font-medium">Join 4,000+ companies already growing</p>
        <div className="mt-4 flex justify-center flex-wrap gap-6 sm:gap-8">
          <div className="flex flex-col items-center">
            <img src="./assets/Logomark.png" alt="Boltshift" className="h-8 sm:h-10" />
            <span className="mt-2 text-gray-700 font-bold text-sm sm:text-base">Boltshift</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="./assets/Logomark (1).png" alt="Lightbox" className="h-8 sm:h-10" />
            <span className="mt-2 text-gray-700 font-bold text-sm sm:text-base">Lightbox</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="./assets/Logomark (2).png" alt="FeatherDev" className="h-8 sm:h-10" />
            <span className="mt-2 text-gray-700 font-bold text-sm sm:text-base">FeatherDev</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="./assets/Logomark (3).png" alt="Spherule" className="h-8 sm:h-10" />
            <span className="mt-2 text-gray-700 font-bold text-sm sm:text-base">Spherule</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="./assets/Logomark (4).png" alt="GlobalBank" className="h-8 sm:h-10" />
            <span className="mt-2 text-gray-700 font-bold text-sm sm:text-base">GlobalBank</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="./assets/Logomark (5).png" alt="Nietzsche" className="h-8 sm:h-10" />
            <span className="mt-2 text-gray-700 font-bold text-sm sm:text-base">Nietzsche</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
