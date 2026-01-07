"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileDropdownOpen(false);
  }, [pathname]);

  // Check if the current path matches or starts with the given link
  const isActive = (link) => {
    if (link === '/') {
      return pathname === link;
    }
    return pathname === link || pathname.startsWith(`${link}/`);
  };

  // Check if any job-seekers related page is active
  const isJobSeekersActive = pathname.includes('/job-seekers/caregivers') || 
                             pathname.includes('/job-seekers/nurses');

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-0' : 'top-4'
    }`}>
      <div className={`${
        isScrolled ? 'w-full' : 'container mx-auto'
      }`}>
        <div className={`${
          isScrolled ? 'px-6' : 'bg-white rounded-full shadow-md px-6 mx-4'
        }`}>
          <div className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            {/* Logo */}
            <div className="flex items-center pr-4">
              <div className="flex items-center">
                <div className={`flex items-center justify-center overflow-hidden transition-all duration-300 ${
                  isScrolled ? 'w-36 h-14' : 'w-44 h-16'
                }`}>
                  <img 
                    src="/images/logo.png" 
                    alt="Recruitment Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center flex-1 px-4">
              <div className="flex items-center justify-center gap-8 w-full max-w-2xl">
                <a 
                  href="/" 
                  className={`relative text-gray-600 hover:text-primary-200 transition-colors px-2 py-4 ${
                    isActive('/') ? 'text-primary-200' : ''
                  }`}
                >
                  {isActive('/') && <div className="absolute top-0 left-0 right-0 h-1 bg-primary-200 rounded-b-sm"></div>}
                  Home
                </a>
                
                <a 
                  href="/about" 
                  className={`relative text-gray-600 hover:text-primary-200 transition-colors px-3 py-4 ${
                    isActive('/about') ? 'text-primary-200' : ''
                  }`}
                >
                  {isActive('/about') && <div className="absolute top-0 left-0 right-0 h-1 bg-primary-200 rounded-b-sm"></div>}
                  About
                </a>
                
                {/* Job Seekers Dropdown - Only dropdown, no direct page */}
                <div className="relative group">
                  <div
                    className={`relative flex items-center text-gray-600 hover:text-primary-200 transition-colors px-3 py-4 cursor-pointer ${
                      isJobSeekersActive ? 'text-primary-200' : ''
                    }`}
                  >
                    {isJobSeekersActive && <div className="absolute top-0 left-0 right-0 h-1 bg-primary-200 rounded-b-sm"></div>}
                    Job Seekers
                    <ChevronDown size={16} className="ml-1" />
                  </div>
                  
                  {/* Dropdown that appears on hover */}
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <a 
                      href="/job-seekers/caregivers" 
                      className={`block px-4 py-2 text-sm ${
                        isActive('/job-seekers/caregivers') 
                          ? 'text-primary-200 bg-gray-50' 
                          : 'text-gray-700 hover:bg-gray-100 hover:text-primary-200'
                      }`}
                    >
                      Caregivers
                    </a>
                    <a 
                      href="/job-seekers/nurses" 
                      className={`block px-4 py-2 text-sm ${
                        isActive('/job-seekers/nurses') 
                          ? 'text-primary-200 bg-gray-50' 
                          : 'text-gray-700 hover:bg-gray-100 hover:text-primary-200'
                      }`}
                    >
                      Nurses
                    </a>
                  </div>
                </div>
                
                <a 
                  href="/rate-our-work" 
                  className={`relative text-gray-600 hover:text-primary-200 transition-colors px-3 py-4 ${
                    isActive('/rate-our-work') ? 'text-primary-200' : ''
                  }`}
                >
                  {isActive('/rate-our-work') && <div className="absolute top-0 left-0 right-0 h-1 bg-primary-200 rounded-b-sm"></div>}
                  Rate Our Work
                </a>
                
                <a 
                  href="/contact" 
                  className={`relative text-gray-600 hover:text-primary-200 transition-colors px-3 py-4 ${
                    isActive('/contact') ? 'text-primary-200' : ''
                  }`}
                >
                  {isActive('/contact') && <div className="absolute top-0 left-0 right-0 h-1 bg-primary-200 rounded-b-sm"></div>}
                  Get In Touch
                </a>
              </div>
            </nav>

            {/* Connect Button */}
            <div className="hidden md:flex items-center pl-4">
              <button className="bg-primary-200 text-white px-6 py-2 rounded-full hover:bg-primary-100 transition-colors">
                Sign In
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg">
              <div className="px-4 py-3 space-y-1">
                <a 
                  href="/" 
                  className={`block px-3 py-2 rounded-md ${
                    isActive('/') 
                      ? 'text-primary-200 bg-gray-50' 
                      : 'text-gray-600 hover:text-primary-200 hover:bg-gray-50'
                  }`}
                >
                  Home
                </a>
                
                <a 
                  href="/about" 
                  className={`block px-3 py-2 rounded-md ${
                    isActive('/about') 
                      ? 'text-primary-200 bg-gray-50' 
                      : 'text-gray-600 hover:text-primary-200 hover:bg-gray-50'
                  }`}
                >
                  About
                </a>
                
                {/* Mobile Job Seekers Dropdown - Only dropdown, no direct page */}
                <div>
                  <button
                    onClick={toggleMobileDropdown}
                    className={`flex items-center justify-between w-full px-3 py-2 rounded-md ${
                      isJobSeekersActive 
                        ? 'text-primary-200 bg-gray-50' 
                        : 'text-gray-600 hover:text-primary-200 hover:bg-gray-50'
                    }`}
                  >
                    <span>Job Seekers</span>
                    {isMobileDropdownOpen ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>
                  
                  {isMobileDropdownOpen && (
                    <div className="pl-6 space-y-1">
                      <a 
                        href="/job-seekers/caregivers" 
                        className={`block px-3 py-2 rounded-md ${
                          isActive('/job-seekers/caregivers') 
                            ? 'text-primary-200 bg-gray-50' 
                            : 'text-gray-600 hover:text-primary-200 hover:bg-gray-50'
                        }`}
                      >
                        Caregivers
                      </a>
                      <a 
                        href="/job-seekers/nurses" 
                        className={`block px-3 py-2 rounded-md ${
                          isActive('/job-seekers/nurses') 
                            ? 'text-primary-200 bg-gray-50' 
                            : 'text-gray-600 hover:text-primary-200 hover:bg-gray-50'
                        }`}
                      >
                        Nurses
                      </a>
                    </div>
                  )}
                </div>
                
                <a 
                  href="/rate-our-work" 
                  className={`block px-3 py-2 rounded-md ${
                    isActive('/rate-our-work') 
                      ? 'text-primary-200 bg-gray-50' 
                      : 'text-gray-600 hover:text-primary-200 hover:bg-gray-50'
                  }`}
                >
                  Rate Our Work
                </a>
                
                <a 
                  href="/contact" 
                  className={`block px-3 py-2 rounded-md ${
                    isActive('/contact') 
                      ? 'text-primary-200 bg-gray-50' 
                      : 'text-gray-600 hover:text-primary-200 hover:bg-gray-50'
                  }`}
                >
                  Get In Touch
                </a>
                
                <div className="mt-4">
                  <button className="w-full bg-primary-200 text-white px-6 py-2 rounded-full hover:bg-primary-100 transition-colors">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;