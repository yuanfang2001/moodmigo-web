import { Link } from 'react-router-dom';

type Cta = { label: string; to: string; withArrow?: boolean; variant?: 'primary' | 'secondary' };
type Card = {
  id: string;
  size: 'large' | 'small';
  kicker: string;
  title: string;
  desc: string;
  ctas: Cta[];
};

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

const cards: Card[] = [
  {
    id: 'achieve',
    size: 'large',
    kicker: 'Achieve',
    title: 'Small wins rebuild confidence',
    desc: 'Targeted actions help you regain momentum and self-belief.',
    ctas: [
      { label: 'Explore', to: '/how-it-works#actions', variant: 'primary' },
      { label: 'More', to: '/how-it-works#achieve', withArrow: true, variant: 'secondary' },
    ],
  },
  {
    id: 'comfort',
    size: 'small',
    kicker: 'Comfort',
    title: 'Comfort',
    desc: 'Soothing experiences that nurture your inner calm',
    ctas: [{ label: 'More', to: '/how-it-works#comfort', withArrow: true, variant: 'secondary' }],
  },
  {
    id: 'connect',
    size: 'small',
    kicker: 'Connect',
    title: 'Connect',
    desc: 'Build meaningful social interactions that support your emotional health',
    ctas: [{ label: 'More', to: '/how-it-works#connect', withArrow: true, variant: 'secondary' }],
  },
  {
    id: 'move',
    size: 'small',
    kicker: 'Move',
    title: 'Move',
    desc: 'Physical actions to reset your energy and perspective',
    ctas: [{ label: 'More', to: '/how-it-works#move', withArrow: true, variant: 'secondary' }],
  },
  {
    id: 'calm',
    size: 'small',
    kicker: 'Calm',
    title: 'Calm',
    desc: 'Grounding techniques to help you find inner peace',
    ctas: [{ label: 'More', to: '/how-it-works#calm', withArrow: true, variant: 'secondary' }],
  },
];

export default function ActionsPaths() {
  return (
    <section aria-labelledby="actions-paths-title" className="py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* Kicker */}
        <p className="text-center text-sm font-medium uppercase tracking-wide text-ink-600">Actions</p>

        {/* Title */}
        <h2 id="actions-paths-title" className="mt-3 text-center text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-900">
          Five paths to emotional wellness
        </h2>

        {/* Subheading */}
        <p className="mx-auto mt-4 max-w-3xl text-center text-ink-700">
          Personalized strategies to help you navigate your emotional landscape
        </p>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3 auto-rows-fr">
          {cards.map((card) => {
            const isLarge = card.size === 'large';
            return (
              <article
                key={card.id}
                className={[
                  // card surface
                  'relative rounded-2xl border border-ui-border bg-ui-muted p-6 sm:p-8',
                  'shadow-sm hover:shadow transition-shadow',
                  // layout
                  isLarge ? 'lg:col-span-2 lg:row-span-2 flex flex-col justify-end' : 'flex flex-col',
                ].join(' ')}
              >
                {/* Optional decorative thumbnail area */}
                <div
                  aria-hidden="true"
                  className={isLarge ? 'absolute inset-0 rounded-2xl bg-black/10' : 'absolute inset-0 rounded-2xl bg-black/5'}
                />

                <div className="relative z-[1]">
                  {/* kicker */}
                  <p className="text-xs font-medium uppercase tracking-wide text-ink-600">{card.kicker}</p>

                  {/* title */}
                  <h3 className={isLarge ? 'mt-2 text-3xl sm:text-4xl font-bold text-ink-900' : 'mt-2 text-2xl font-bold text-ink-900'}>
                    {card.title}
                  </h3>

                  {/* desc */}
                  <p className="mt-2 text-ink-700">{card.desc}</p>

                  {/* CTAs */}
                  <div className="mt-4 flex flex-wrap gap-3">
                    {card.ctas.map((cta) => (
                      <Link
                        key={cta.label}
                        to={cta.to}
                        className={[
                          'inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary',
                          cta.variant === 'primary'
                            ? 'bg-brand-primary text-white hover:bg-brand-primary/90'
                            : 'border border-ui-border bg-white text-ink-900 hover:bg-ui-muted',
                        ].join(' ')}
                      >
                        {cta.label}
                        {cta.withArrow && <Arrow />}
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
