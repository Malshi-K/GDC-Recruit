import React from "react";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-primary-800 snap-start">
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Logo and Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-48 h-18 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/logo.png" 
                  alt="GDC Recruitment Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Connecting talent with opportunity in the healthcare industry.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">CALL US</h4>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+64 22 594 5951</span>
              </li>
            </ul>

            <h4 className="text-lg font-semibold mb-4">WRITE US</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>hire@gdcgroup.co.nz</span>
              </li>
            </ul>
          </div>

          {/* Quick Links and Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">QUICK LINKS</h4>
            <div className="grid grid-cols-1 gap-2 mb-6">
              <a
                href="/about"
                className="text-gray-600 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="/job-seekers"
                className="text-gray-600 hover:text-white transition-colors"
              >
                Job Seekers
              </a>
              <a
                href="/contact"
                className="text-gray-600 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>

            <h4 className="text-lg font-semibold mb-2">NEWSLETTER</h4>
            <p className="text-gray-600 text-sm mb-2">
              Subscribe to our newsletter to get job updates
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/20 text-white px-3 py-2 rounded-l-md focus:outline-none flex-grow text-sm"
              />
              <button className="bg-primary-500 text-white px-4 py-2 rounded-r-md hover:bg-primary-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-4 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} GDC Digital Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;