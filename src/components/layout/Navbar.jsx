import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Exact configured routes matching requested requirements
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Upcoming Batches', path: '/batches' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Events', path: '/events' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#0B132B]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              {/* Fallback to text if image fails to load, but configured for the PNG logo path */}
              <img 
                src="/assets/logo.png" 
                alt="WisdomWaves Logo" 
                className="h-10 md:h-12 w-auto object-contain bg-white rounded-md p-1"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="hidden text-white font-serif text-2xl font-bold tracking-tight">WisdomWaves</span>
            </Link>
          </div>
          
          {/* Desktop Navigation Links (Center) */}
          <div className="hidden lg:flex flex-1 justify-center px-4">
            <div className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `whitespace-nowrap px-2 py-2 text-sm font-medium transition-colors border-b-2 ${
                      isActive 
                        ? 'text-accent border-accent' 
                        : 'text-gray-300 border-transparent hover:text-white hover:border-gray-500'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Desktop Apply Now Button (Right) */}
          <div className="hidden lg:flex flex-shrink-0">
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-hover text-primary font-semibold px-6 py-2.5 rounded-full transition-transform duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg text-sm"
              >
                Apply Now
              </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#0B132B] shadow-2xl border-t border-white/5">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/50 text-accent border-l-4 border-accent'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 text-center bg-accent hover:bg-accent-hover text-primary font-semibold px-4 py-3 rounded-xl shadow-md transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
