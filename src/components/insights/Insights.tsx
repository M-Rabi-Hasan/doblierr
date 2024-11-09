'use client';

import React, { useEffect } from 'react';

const Insights: React.FC = () => {
  // Adding scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.insight-card');
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
    <section className="py-16 bg-gray-50 text-gray-800" id="insights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
          Insights
        </h2>

        {/* Insights Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md text-center insight-card">
            <h3 className="text-lg sm:text-xl font-semibold">Case Studies</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Discover how our cloud solutions transform businesses.
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md text-center insight-card">
            <h3 className="text-lg sm:text-xl font-semibold">Newsroom</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Stay informed with the latest cloud industry news and achievements.
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md text-center insight-card">
            <h3 className="text-lg sm:text-xl font-semibold">Whitepapers / EBooks</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Access in-depth research on cloud innovation and best practices.
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md text-center insight-card">
            <h3 className="text-lg sm:text-xl font-semibold">Blogs</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Read articles about the latest trends and insights in cloud technology.
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md text-center insight-card">
            <h3 className="text-lg sm:text-xl font-semibold">Webinars</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Join live sessions on cloud strategy and emerging technologies.
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md text-center insight-card">
            <h3 className="text-lg sm:text-xl font-semibold">Podcasts</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Listen to experts discuss cloud solutions and future advancements.
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md text-center insight-card">
            <h3 className="text-lg sm:text-xl font-semibold">Infographics</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Visualize cloud adoption statistics and key benefits.
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md text-center insight-card">
            <h3 className="text-lg sm:text-xl font-semibold">Customer Testimonials</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Hear from clients about their experiences with our cloud solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
