import React from 'react';
import { Link } from 'react-router-dom';

const Arrow: React.FC = () => {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
};

const LandingPersonalization: React.FC = () => {
  return (
    <section id="personalization" className="pt-12 sm:pt-14 pb-12 sm:pb-14">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left column - Number */}
          <div className="col-span-12 sm:col-span-3">
            <div className="text-[64px] sm:text-[120px] leading-none font-extrabold text-ink-900 select-none">
              04
            </div>
          </div>
          
          {/* Right column - Content */}
          <div className="col-span-12 sm:col-span-9">
            <div className="h-px w-full bg-ui-border mb-4" />
            
            <div className="text-xs font-medium uppercase tracking-wide text-ink-600">
              Personalization
            </div>
            
            <h2 className="mt-1 text-3xl sm:text-5xl font-extrabold text-ink-900">
              Tailoring support to your needs
            </h2>
            
            <p className="mt-3 text-ink-600">
              Your feedback ensures our AI understands your emotional landscape.
            </p>
            
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/how-it-works#start"
                className="inline-flex items-center rounded-full border border-ui-border bg-white px-4 py-2 text-sm font-medium text-ink-900 hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Customize
              </Link>
              
              <Link
                to="/how-it-works#understand"
                className="inline-flex items-center gap-1 rounded-full border border-ui-border bg-white px-4 py-2 text-sm font-medium text-ink-900 hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Discover
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPersonalization;
