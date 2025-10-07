import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="site-footer" className="min-h-[50vh] py-16 sm:py-20 bg-ui-bg">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Top Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] gap-8 lg:gap-12">
          {/* Left Column - Brand/Address/Contact/Social */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/assets/logo/logo.svg" 
                alt="MoodMigo Logo" 
                className="h-7 w-auto"
                onError={(e) => {
                  // Fallback to text if logo not found
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<span class="text-2xl font-bold text-ink-900">Logo</span>';
                  }
                }}
              />
            </div>

            {/* Address */}
            <div>
              <h3 className="text-sm font-semibold text-ink-900 mb-2">Address</h3>
              <address className="not-italic text-ink-600">
                Level 1, 12 Sample St, Sydney NSW 2000
              </address>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-ink-900 mb-2">Contact</h3>
              <div className="space-y-1">
                <a 
                  href="tel:1800-mood-help" 
                  className="block text-ink-600 hover:text-ink-900 hover:underline underline-offset-4 transition-colors"
                >
                  1800 mood help
                </a>
                <a 
                  href="mailto:support@moodmigo.com" 
                  className="block text-ink-600 hover:text-ink-900 hover:underline underline-offset-4 transition-colors"
                >
                  support@moodmigo.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <div className="flex space-x-2">
                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="h-10 w-10 rounded-lg flex items-center justify-center text-ink-600 hover:text-ink-900 hover:bg-ui-muted transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="h-10 w-10 rounded-lg flex items-center justify-center text-ink-600 hover:text-ink-900 hover:bg-ui-muted transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281h-1.969v-1.969h1.969v1.969zm-5.262 2.262c-.807 0-1.469.662-1.469 1.469s.662 1.469 1.469 1.469 1.469-.662 1.469-1.469-.662-1.469-1.469-1.469z"/>
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a
                  href="#"
                  aria-label="X (formerly Twitter)"
                  className="h-10 w-10 rounded-lg flex items-center justify-center text-ink-600 hover:text-ink-900 hover:bg-ui-muted transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="h-10 w-10 rounded-lg flex items-center justify-center text-ink-600 hover:text-ink-900 hover:bg-ui-muted transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  aria-label="YouTube"
                  className="h-10 w-10 rounded-lg flex items-center justify-center text-ink-600 hover:text-ink-900 hover:bg-ui-muted transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Column 1 */}
            <nav aria-label="Footer">
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-ink-600 hover:text-ink-900 hover:underline underline-offset-4 transition-colors">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-ink-600 hover:text-ink-900 hover:underline underline-offset-4 transition-colors">
                    Our mission
                  </a>
                </li>
                <li>
                  <a href="#" className="text-ink-600 hover:text-ink-900 hover:underline underline-offset-4 transition-colors">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-ink-600 hover:text-ink-900 hover:underline underline-offset-4 transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-ink-600 hover:text-ink-900 hover:underline underline-offset-4 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>

            {/* Column 2 */}
            <nav aria-label="Footer">
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-ink-600 hover:text-ink-900 hover:underline underline-offset-4 transition-colors">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-ink-600 hover:text-ink-900 hover:underline underline-offset-4 transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-ink-600 hover:text-ink-900 hover:underline underline-offset-4 transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-ink-600 hover:text-ink-900 hover:underline underline-offset-4 transition-colors">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-ink-600 hover:text-ink-900 hover:underline underline-offset-4 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-ui-border mt-12"></div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-8 space-y-4 sm:space-y-0">
          <div className="text-ink-600 text-sm">
            © 2024 MoodMigo. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6">
            <a 
              href="#" 
              className="text-ink-600 hover:text-ink-900 hover:underline underline-offset-4 transition-colors text-sm"
            >
              Privacy policy
            </a>
            <a 
              href="#" 
              className="text-ink-600 hover:text-ink-900 hover:underline underline-offset-4 transition-colors text-sm"
            >
              Terms of service
            </a>
            <a 
              href="#" 
              className="text-ink-600 hover:text-ink-900 hover:underline underline-offset-4 transition-colors text-sm"
            >
              Cookie settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

