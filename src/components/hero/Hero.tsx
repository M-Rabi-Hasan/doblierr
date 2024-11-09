import Link from 'next/link';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/AmeenAlam2.mp4" // Replace with actual path to video
        autoPlay
        loop
        muted
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400 leading-tight">
          Revolutionizing the way you work and connect
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-xl mt-4 max-w-xl md:max-w-2xl text-gray-400">
          Connecting freelancers and businesses in a decentralized network for efficient service exchange and professional growth.
        </p>
        <button className="mt-6 sm:mt-8 px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm sm:text-base md:text-sm">
          <Link href="/about">Learn More</Link>
        </button>
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>
  );
};

export default Hero;
