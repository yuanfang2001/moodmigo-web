import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const location = useLocation();

  // Helper function to check if a path is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Brand Name */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/logo.png"
              alt="MoodMigo logo"
              width={40}
              height={40}
              className="w-10 h-10 mr-2 object-contain"
            />
            <Link to="/home" aria-label="Go to Home" className="text-ink-900 font-bold text-xl">
              MoodMigo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/mood" 
              className={`transition-colors ${
                isActive('/mood') 
                  ? 'text-brand-primary font-medium' 
                  : 'text-ink-900 hover:text-ink-600'
              }`}
            >
              Mood
            </Link>
            <Link 
              to="/preference" 
              className={`transition-colors ${
                isActive('/preference') 
                  ? 'text-brand-primary font-medium' 
                  : 'text-ink-900 hover:text-ink-600'
              }`}
            >
              Preference
            </Link>
            <Link 
              to="/history" 
              className={`transition-colors ${
                isActive('/history') 
                  ? 'text-brand-primary font-medium' 
                  : 'text-ink-900 hover:text-ink-600'
              }`}
            >
              History
            </Link>
            
            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAboutDropdown}
                className="text-ink-900 hover:text-ink-600 transition-colors flex items-center"
              >
                About
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-ui-bg border border-ui-border rounded-lg shadow-lg z-50">
                  <div className="p-6 grid grid-cols-3 gap-6">
                    {/* Explore Column */}
                    <div>
                      <h3 className="text-ink-900 font-semibold mb-4">Explore</h3>
                      <ul className="space-y-3">
                        {['Start', 'Demo', 'Learn', 'Connect'].map((item) => (
                          <li key={item}>
                            <a href={`/${item.toLowerCase()}`} className="flex items-center text-ink-600 hover:text-ink-900 transition-colors">
                              <div className="w-5 h-5 bg-ui-muted border border-ui-border mr-3 rounded"></div>
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                      <h3 className="text-ink-900 font-semibold mb-4">Resources</h3>
                      <ul className="space-y-3">
                        {['Blog', 'Insights', 'Community', 'Support'].map((item) => (
                          <li key={item}>
                            <a href={`/${item.toLowerCase()}`} className="flex items-center text-ink-600 hover:text-ink-900 transition-colors">
                              <div className="w-5 h-5 bg-ui-muted border border-ui-border mr-3 rounded"></div>
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Featured from Blog Column */}
                    <div>
                      <h3 className="text-ink-900 font-semibold mb-4">Featured from Blog</h3>
                      <div className="space-y-4">
                        {[
                          {
                            title: "Understanding Mood Patterns",
                            description: "Discover how your daily routines affect your emotional well-being and learn practical strategies."
                          },
                          {
                            title: "The Science of Happiness",
                            description: "Explore the latest research on what truly makes us happy and how to apply it in daily life."
                          }
                        ].map((article, index) => (
                          <div key={index} className="flex space-x-3">
                            <div className="w-16 h-16 bg-ui-muted border border-ui-border rounded flex-shrink-0"></div>
                            <div className="flex-1">
                              <h4 className="text-ink-900 font-medium text-sm mb-1 line-clamp-1">
                                {article.title}
                              </h4>
                              <p className="text-ink-600 text-xs mb-2 line-clamp-2">
                                {article.description}
                              </p>
                              <a href="#" className="text-brand-primary text-xs hover:text-brand-primaryHover">
                                Read more
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/login"
              aria-label="Login"
              className="inline-flex items-center rounded-full border border-ui-border bg-white px-4 py-2 text-sm font-medium text-ink-900 hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            >
              Login
            </Link>
            <Link
              to="/signup"
              aria-label="Sign Up"
              className="inline-flex items-center rounded-full bg-brand-primary text-white px-4 py-2 text-sm font-medium hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-ink-900 hover:text-ink-600 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/mood" 
                className={`block px-3 py-2 transition-colors ${
                  isActive('/mood') 
                    ? 'text-brand-primary font-medium bg-ui-muted' 
                    : 'text-ink-900 hover:text-ink-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Mood
              </Link>
              <Link 
                to="/preference" 
                className={`block px-3 py-2 transition-colors ${
                  isActive('/preference') 
                    ? 'text-brand-primary font-medium bg-ui-muted' 
                    : 'text-ink-900 hover:text-ink-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Preference
              </Link>
              <Link 
                to="/history" 
                className={`block px-3 py-2 transition-colors ${
                  isActive('/history') 
                    ? 'text-brand-primary font-medium bg-ui-muted' 
                    : 'text-ink-900 hover:text-ink-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                History
              </Link>
              <Link 
                to="/about" 
                className={`block px-3 py-2 transition-colors ${
                  isActive('/about') 
                    ? 'text-brand-primary font-medium bg-ui-muted' 
                    : 'text-ink-900 hover:text-ink-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-4 space-y-2">
                <Link
                  to="/login"
                  className="block w-full px-4 py-2 bg-white text-ink-900 border border-ui-border rounded-lg hover:bg-ui-muted transition-colors text-center"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block w-full px-4 py-2 bg-brand-primary text-white rounded-lg hover:opacity-95 transition-colors text-center"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
