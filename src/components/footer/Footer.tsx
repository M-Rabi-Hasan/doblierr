import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Digital Consulting & Strategy</li>
              <li>Digital Commerce</li>
              <li>Business Applications</li>
              <li>Data Modernization</li>
              <li>Generative AI</li>
            </ul>
          </div>

          {/* Cloud Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Cloud</h3>
            <ul className="space-y-2">
              <li>Cloud Operations & Migration</li>
              <li>Cloud Applications</li>
              <li>Development & Integrations</li>
              <li>Managed Services</li>
            </ul>
          </div>

          {/* Industries Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li>Telecommunications</li>
              <li>Banking & Finance</li>
              <li>Public Sector</li>
              <li>Healthcare & Pharmaceutical</li>
              <li>Retail & CPG</li>
            </ul>
          </div>

          {/* Insights Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Insights</h3>
            <ul className="space-y-2">
              <li>Case Studies</li>
              <li>Newsroom</li>
              <li>Whitepapers / EBooks</li>
              <li>Blogs</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Subscribe Section */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
            <p className="text-gray-400 mb-4">Stay updated on how the future of technology is shaping.</p>
            <div className="flex justify-center md:justify-start space-x-2">
              <input
                type="email"
                placeholder="Enter your email here"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
              />
              <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">Submit</button>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-2xl">
            {/* Add links to social media */}
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
