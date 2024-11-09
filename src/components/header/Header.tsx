'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation'; // Import useRouter and usePathname
import React, { useEffect, useState } from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import { scroller } from 'react-scroll';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pendingScrollId, setPendingScrollId] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle scrolling or redirecting
  const handleScroll = (sectionId: string) => {
    if (pathname !== '/') {
      // If not on the Home page, navigate to Home
      setPendingScrollId(sectionId); // Save the sectionId to scroll to later
      router.push('/'); // Navigate to the Home page
    } else {
      // If already on the Home page, scroll to the section
      scroller.scrollTo(sectionId, {
        smooth: true,
        duration: 500,
      });
    }
  };

  // useEffect to detect navigation to Home and scroll
  useEffect(() => {
    if (pathname === '/' && pendingScrollId) {
      // Scroll to the saved section when on the Home page
      scroller.scrollTo(pendingScrollId, {
        smooth: true,
        duration: 500,
      });
      setPendingScrollId(null); // Clear the saved sectionId
    }
  }, [pathname, pendingScrollId]); // Run when pathname or pendingScrollId changes

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md text-white py-4 px-6 md:px-8 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500">
          <Link href="/">Doblier</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-blue-400">
          <button
            onClick={() => handleScroll('services')}
            className="hover:text-gray-300 cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => handleScroll('industries')}
            className="hover:text-gray-300 cursor-pointer"
          >
            Industries
          </button>
          <button
            onClick={() => handleScroll('featured')}
            className="hover:text-gray-300 cursor-pointer"
          >
            Featured
          </button>
          <button
            onClick={() => handleScroll('insights')}
            className="hover:text-gray-300 cursor-pointer"
          >
            Insights
          </button>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>

          {/* Language Selector */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-green-600">PK</span>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-400 hover:text-gray-300"
          onClick={toggleMobileMenu}
        >
          <FaBarsStaggered className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-800 text-white py-4 px-6">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => {
                  handleScroll('services');
                  setMobileMenuOpen(false);
                }}
                className="block hover:text-gray-300 cursor-pointer"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScroll('industries');
                  setMobileMenuOpen(false);
                }}
                className="block hover:text-gray-300 cursor-pointer"
              >
                Industries
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScroll('featured');
                  setMobileMenuOpen(false);
                }}
                className="block hover:text-gray-300 cursor-pointer"
              >
                Featured
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScroll('insights');
                  setMobileMenuOpen(false);
                }}
                className="block hover:text-gray-300 cursor-pointer"
              >
                Insights
              </button>
            </li>
            <li>
              <Link href="/about" className="block hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link href="/contact" className="block hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
