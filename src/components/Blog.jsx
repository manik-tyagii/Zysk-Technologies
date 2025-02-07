import React from "react";

const Blog = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
       
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <div>
            <p className="text-red-500 font-semibold">Our blog</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Latest blog posts
            </h2>
            <p className="mt-2 text-gray-600 text-sm sm:text-lg max-w-3xl">
              Tools and strategies modern teams need to help their companies grow.
            </p>
          </div>
          <button className="mt-4 sm:mt-0 px-6 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600">
            View all posts
          </button>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
         
          <div className="bg-white">
            <img src="./assets/11.png" alt="UX review presentations" className="w-full rounded-lg object-cover" />
            <p className="text-red-500 font-semibold mt-4">Design</p>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
              UX review presentations 
              <span className="ml-2 text-black">
                <img src="./assets/arrow.png" alt='Arrow' className="w-5 h-5 ml-2" />
              </span>
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              How do you create compelling presentations that wow your colleagues and impress your managers?
            </p>
            <div className="flex items-center mt-4 space-x-2">
              <img src="./assets/2.png" alt="Olivia Rhye" className="w-6 h-6 rounded-full" />
              <div>
                <span className="text-gray-900 font-medium block text-sm sm:text-base">Olivia Rhye</span>
                <span className="text-gray-500 text-xs sm:text-sm">20 Jan 2024</span>
              </div>
            </div>
          </div>

        
          <div className="bg-white">
            <img src="./assets/22.png" alt="Migrating to Linear 101" className="w-full rounded-lg object-cover" />
            <p className="text-red-500 font-semibold mt-4">Product</p>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
              Migrating to Linear 101 
              <span className="ml-2 text-black">
                <img src="./assets/arrow.png" alt='Arrow' className="w-5 h-5 ml-2" />
              </span>
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.
            </p>
            <div className="flex items-center mt-4 space-x-2">
              <img src="./assets/42.png" alt="Phoenix Baker" className="w-6 h-6 rounded-full" />
              <div>
                <span className="text-gray-900 font-medium block text-sm sm:text-base">Phoenix Baker</span>
                <span className="text-gray-500 text-xs sm:text-sm">19 Jan 2024</span>
              </div>
            </div>
          </div>

       
          <div className="bg-white">
            <img src="./assets/33.png" alt="Building your API stack" className="w-full rounded-lg object-cover" />
            <p className="text-red-500 font-semibold mt-4">Software Engineering</p>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
              Building your API stack 
              <span className="ml-2 text-black">
                <img src="./assets/arrow.png" alt='Arrow' className="w-5 h-5 ml-2" />
              </span>
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.
            </p>
            <div className="flex items-center mt-4 space-x-2">
              <img src="./assets/43.png" alt="Lana Steiner" className="w-6 h-6 rounded-full" />
              <div>
                <span className="text-gray-900 font-medium block text-sm sm:text-base">Lana Steiner</span>
                <span className="text-gray-500 text-xs sm:text-sm">18 Jan 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
