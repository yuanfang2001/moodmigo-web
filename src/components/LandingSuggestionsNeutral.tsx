import React from 'react';
import { Link } from 'react-router-dom';

const Arrow: React.FC = () => {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
};

const LandingSuggestionsNeutral: React.FC = () => {
  const suggestions = [
    {
      number: "01",
      kicker: "Impact",
      title: "🧘 Calm – Watch an uplifting short film nearby",
      subtitle: "→ \"See movie list\"",
      ctas: [
        { label: "Explore", to: "/how-it-works#explore", withArrow: true }
      ]
    },
    {
      number: "02",
      kicker: "Precision",
      title: "🏃 Move – Take a short walk to boost your energy",
      subtitle: "→ \"Start 10-min walk\"",
      ctas: [
        { label: "Explore", to: "/how-it-works#move", withArrow: true }
      ]
    },
    {
      number: "03",
      kicker: "Growth",
      title: "☕ Comfort – Enjoy your favorite drink or dessert",
      subtitle: "→ \"Find nearby cafe\"",
      ctas: [
        { label: "Explore", to: "/how-it-works#comfort" },
        { label: "Go to Map", to: "/how-it-works#map", withArrow: true }
      ]
    }
  ];

  return (
    <section id="suggestions" className="pt-16 sm:pt-24 pb-12 sm:pb-14 scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-900 text-center">
          Suggestion
        </h2>
        
        <div className="mt-8 sm:mt-10 space-y-0">
          {suggestions.map((suggestion, index) => (
            <div 
              key={index}
              className="grid grid-cols-12 gap-6 sm:gap-8 items-start py-12 sm:py-14 border-b border-ui-border last:border-b-0"
            >
              {/* Left column - Number */}
              <div className="col-span-12 sm:col-span-3">
                <div className="text-[64px] sm:text-[120px] leading-none font-extrabold text-ink-900 select-none">
                  {suggestion.number}
                </div>
              </div>
              
              {/* Right column - Content */}
              <div className="col-span-12 sm:col-span-9">
                <div className="h-px w-full bg-ui-border mb-4" />
                
                <div className="text-xs font-medium uppercase tracking-wide text-ink-600">
                  {suggestion.kicker}
                </div>
                
                <h3 className="mt-1 text-3xl sm:text-4xl font-bold text-ink-900">
                  {suggestion.title}
                </h3>
                
                <p className="mt-2 text-xl sm:text-2xl font-semibold text-ink-900">
                  {suggestion.subtitle}
                </p>
                
                <div className="mt-4 flex flex-wrap gap-3">
                  {suggestion.ctas.map((cta, ctaIndex) => (
                    <Link
                      key={ctaIndex}
                      to={cta.to}
                      className="inline-flex items-center gap-1 rounded-full border border-ui-border bg-white px-4 py-2 text-sm font-medium text-ink-900 hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                    >
                      {cta.label}
                      {cta.withArrow && <Arrow />}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingSuggestionsNeutral;
