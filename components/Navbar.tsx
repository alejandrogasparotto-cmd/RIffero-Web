import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, LOGO_URL, COMPANY_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center group">
              <img 
                src={LOGO_URL} 
                alt={`${COMPANY_NAME} Logo`} 
                className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-[#b91c1c] font-bold text-sm tracking-wide transition-colors uppercase"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-[#b91c1c] hover:bg-red-800 text-white px-6 py-3 rounded-sm font-black text-sm shadow-sm transition-all transform hover:-translate-y-0.5 uppercase tracking-wider"
            >
              Contacto
            </a>
          </div>

          {/* Mobile Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-red-700 focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-bold text-gray-700 hover:text-[#b91c1c] hover:bg-gray-50 uppercase border-b border-gray-100 last:border-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;