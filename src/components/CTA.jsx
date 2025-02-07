import React from "react";

const CTA = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 text-center px-4 sm:px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          Start your free trial
        </h2>
        <p className="mt-3 text-gray-600 text-base sm:text-lg">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <button className="px-6 py-2 border border-gray-400 text-gray-700 rounded-lg font-medium hover:bg-gray-100">
            Learn more
          </button>
          <button className="px-6 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
