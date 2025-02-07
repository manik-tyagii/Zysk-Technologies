import React from "react";

const Testimonial = () => {
  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 flex flex-col items-center text-center">
      
      <div className="flex items-center space-x-2">
        <img
          src="./assets/syphus.png"
          alt="Sisyphus Logo"
          className="w-6 h-6 sm:w-8 sm:h-8"
        />
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Sisyphus</h2>
      </div>

      
      <p className="mt-4 text-xl sm:text-2xl leading-relaxed font-semibold text-gray-900 max-w-3xl">
        We’ve been using Untitled to kick start every new project and can’t imagine working without it.
      </p>

      
      <div className="mt-6 flex flex-col items-center">
        <img
          src="./assets/cywho.png"
          alt="Candice Wu"
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border border-gray-300"
        />
        <h3 className="mt-2 text-lg sm:text-xl font-semibold text-gray-900">Candice Wu</h3>
        <p className="text-gray-500 text-sm sm:text-base">Product Manager, Sisyphus</p>
      </div>
    </section>
  );
};

export default Testimonial;
