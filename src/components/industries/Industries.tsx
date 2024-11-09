'use client';

import React, { useEffect } from 'react';

const Industries: React.FC = () => {
  // Adding scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.industry-card');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('animate-fadeIn');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-700">
          Industries We Serve
        </h2>
        
        {/* Industry Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md text-center industry-card">
            <h3 className="text-lg sm:text-xl font-semibold text-indigo-600">Telecommunications</h3>
          </div>

          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md text-center industry-card">
            <h3 className="text-lg sm:text-xl font-semibold text-indigo-600">Banking & Finance</h3>
          </div>

          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md text-center industry-card">
            <h3 className="text-lg sm:text-xl font-semibold text-indigo-600">Public Sector</h3>
          </div>

          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md text-center industry-card">
            <h3 className="text-lg sm:text-xl font-semibold text-indigo-600">Healthcare & Pharmaceutical</h3>
          </div>

          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md text-center industry-card">
            <h3 className="text-lg sm:text-xl font-semibold text-indigo-600">Retail & CPG</h3>
          </div>

          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md text-center industry-card">
            <h3 className="text-lg sm:text-xl font-semibold text-indigo-600">Manufacturing</h3>
          </div>

          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md text-center industry-card">
            <h3 className="text-lg sm:text-xl font-semibold text-indigo-600">Education & E-Learning</h3>
          </div>

          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md text-center industry-card">
            <h3 className="text-lg sm:text-xl font-semibold text-indigo-600">Transportation & Logistics</h3>
          </div>

          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md text-center industry-card">
            <h3 className="text-lg sm:text-xl font-semibold text-indigo-600">Energy & Utilities</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
