import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  return (
    <nav className="bg-ui-bg border-b border-ui-border">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-ink-900 font-semibold text-xl">
              MoodMigo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/mood" className="text-ink-900 hover:text-ink-600 transition-colors">
              Mood
            </a>
            <a href="/science" className="text-ink-900 hover:text-ink-600 transition-colors">
              Science
            </a>
            <a href="/tech" className="text-ink-900 hover:text-ink-600 transition-colors">
              Tech
            </a>
            
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
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 bg-ui-muted text-ink-900 border border-ui-border rounded-lg hover:bg-ui-border transition-colors">
              Button
            </button>
            <button className="px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primaryHover transition-colors">
              Button
            </button>
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
          <div className="md:hidden border-t border-ui-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/mood" className="block px-3 py-2 text-ink-900 hover:text-ink-600 transition-colors">
                Mood
              </a>
              <a href="/science" className="block px-3 py-2 text-ink-900 hover:text-ink-600 transition-colors">
                Science
              </a>
              <a href="/tech" className="block px-3 py-2 text-ink-900 hover:text-ink-600 transition-colors">
                Tech
              </a>
              <a href="/about" className="block px-3 py-2 text-ink-900 hover:text-ink-600 transition-colors">
                About
              </a>
              <div className="pt-4 space-y-2">
                <button className="w-full px-4 py-2 bg-ui-muted text-ink-900 border border-ui-border rounded-lg hover:bg-ui-border transition-colors">
                  Button
                </button>
                <button className="w-full px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primaryHover transition-colors">
                  Button
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
