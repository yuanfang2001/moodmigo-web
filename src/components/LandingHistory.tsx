import React from 'react';
import { Link } from 'react-router-dom';

type Item = {
  number: string;
  kicker: string;
  title: string;
  desc?: string;
  ctas: { label: string; to: string; withArrow?: boolean }[];
};

const Arrow: React.FC = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
};

const LandingHistory: React.FC = () => {
  const items: Item[] = [
    {
      number: '01',
      kicker: 'Impact',
      title: 'Rate your experience',
      ctas: [
        { label: 'Explore', to: '/how-it-works' },
        { label: 'Learn', to: '/how-it-works#understand', withArrow: true },
      ],
    },
    {
      number: '02',
      kicker: 'Precision',
      title: 'Refining emotional understanding',
      desc: 'Your continuous input helps us create more accurate mood support.',
      ctas: [
        { label: 'Analyze', to: '/how-it-works#understand' },
        { label: 'Understand', to: '/how-it-works#model', withArrow: true },
      ],
    },
    {
      number: '03',
      kicker: 'Growth',
      title: 'Evolving with your emotional journey',
      desc: 'We adapt our recommendations based on your unique experiences.',
      ctas: [
        { label: 'Improve', to: '/how-it-works#evolve' },
        { label: 'Connect', to: '/how-it-works#community', withArrow: true },
      ],
    },
  ];

  return (
    <section
      id="history-feedback"
      className="pt-16 sm:pt-24 pb-12 sm:pb-14 scroll-mt-24"
    >
      <div className="mx-auto max-w-[1200px] px-4">
        <h2
          id="history-feedback-title"
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-900 mb-12 sm:mb-14"
        >
          History & Feedback
        </h2>

        <div>
          {items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-12 gap-6 sm:gap-8 items-start py-12 sm:py-14 border-b border-ui-border last:border-b-0"
            >
              {/* Left column - Number */}
              <div className="col-span-12 sm:col-span-3">
                <div className="text-[64px] sm:text-[120px] leading-none font-extrabold text-ink-900 select-none">
                  {item.number}
                </div>
              </div>

              {/* Right column - Content */}
              <div className="col-span-12 sm:col-span-9">
                <div className="h-px w-full bg-ui-border mb-4" />

                <div className="text-xs font-medium uppercase tracking-wide text-ink-600">
                  {item.kicker}
                </div>

                <h3 className="mt-1 text-3xl sm:text-4xl font-bold text-ink-900">
                  {item.title}
                </h3>

                {item.desc && (
                  <p className="mt-3 text-ink-600">{item.desc}</p>
                )}

                <div className="mt-4 flex flex-wrap gap-3">
                  {item.ctas.map((cta, ctaIndex) => (
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

export default LandingHistory;
