'use client';

import React, { useEffect } from 'react';

const Services: React.FC = () => {
  // Adding scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.service-card');
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
    <section className="py-16 bg-gradient-to-b from-blue-50 to-blue-100 text-gray-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-blue-800">
          Our Services
        </h2>

        {/* Service Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Digital Services */}
          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md service-card">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-700">Digital</h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-700">
              <li>Digital Consulting & Strategy</li>
              <li>Digital Commerce</li>
              <li>Business Applications</li>
            </ul>
          </div>

          {/* Cloud Services */}
          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md service-card">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-700">Cloud</h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-700">
              <li>Cloud Operations & Migration</li>
              <li>Cloud Applications</li>
              <li>Development & Integrations</li>
              <li>Managed Services</li>
            </ul>
          </div>

          {/* Data & AI Services */}
          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md service-card">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-700">Data & AI</h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-700">
              <li>Data Modernization</li>
              <li>Advanced Analytics</li>
              <li>Connected Intelligence</li>
              <li>Data Management</li>
              <li>Generative AI</li>
            </ul>
          </div>

          {/* Security Services */}
          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md service-card">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-700">Security</h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-700">
              <li>Cloud Security</li>
              <li>Identity & Access Management</li>
              <li>Data Protection</li>
              <li>Risk Assessment</li>
            </ul>
          </div>

          {/* DevOps Services */}
          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md service-card">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-700">DevOps</h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-700">
              <li>Continuous Integration & Deployment</li>
              <li>Infrastructure as Code</li>
              <li>Monitoring & Performance</li>
              <li>Automation Solutions</li>
            </ul>
          </div>

          {/* Consulting Services */}
          <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md service-card">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-700">Consulting</h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-700">
              <li>Cloud Strategy & Planning</li>
              <li>IT Modernization</li>
              <li>Business Continuity Planning</li>
              <li>Change Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
