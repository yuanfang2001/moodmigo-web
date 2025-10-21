import { Link } from 'react-router-dom';

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function ImagePlaceholder({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={[
        'relative w-full aspect-[16/9] rounded-2xl border',
        dark ? 'border-white/15 bg-white/10' : 'border-ui-border bg-[#e5e7eb]',
      ].join(' ')}
      aria-hidden="true"
    >
      <div className="absolute inset-0 grid place-items-center">
        <svg width="96" height="96" viewBox="0 0 24 24" className={dark ? 'text-white/40' : 'text-ink-600/40'} fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 16l5-5 4 4 3-3 6 6" />
          <circle cx="9" cy="8" r="2" />
        </svg>
      </div>
    </div>
  );
}

export default function ActionsDetailsMore() {
  return (
    <>
      {/* 4) Move — deep burgundy */}
      <section className="bg-[#5b0f10] text-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-4">
          <p className="text-center text-sm font-medium uppercase tracking-wide text-white/70">Move</p>
          <h2 className="mt-3 text-center text-4xl sm:text-5xl font-extrabold leading-tight">
            Physical actions to reset
            <br className="hidden sm:block" />
            your energy
          </h2>
          <p className="mt-4 text-center text-white/80 max-w-3xl mx-auto">
            Engage your body to transform your mental state. Simple movements can shift your
            <br className="hidden sm:block" />
            entire perspective.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              to="/how-it-works#move"
              className="inline-flex items-center rounded-full bg-white text-[#5b0f10] px-6 py-3 text-base font-semibold hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Try now
            </Link>
            <Link
              to="/how-it-works#move"
              className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-transparent px-6 py-3 text-base font-semibold text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Learn more <Arrow />
            </Link>
          </div>
          <div className="mt-8 sm:mt-10">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
              <img 
                src="/images/a8.png" 
                alt="Physical actions to reset your energy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5) Calm — near-black */}
      <section className="bg-[#0f0d0b] text-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-4">
          <p className="text-center text-sm font-medium uppercase tracking-wide text-white/70">Calm</p>
          <h2 className="mt-3 text-center text-4xl sm:text-5xl font-extrabold leading-tight">
            Grounding techniques for
            <br className="hidden sm:block" />
            inner peace
          </h2>
          <p className="mt-4 text-center text-white/80 max-w-3xl mx-auto">
            Find stillness in moments of tension. Breathe. Center yourself. Let go of what weighs
            <br className="hidden sm:block" />
            you down.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              to="/how-it-works#calm"
              className="inline-flex items-center rounded-full bg-white text-[#0f0d0b] px-6 py-3 text-base font-semibold hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Try now
            </Link>
            <Link
              to="/how-it-works#calm"
              className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-transparent px-6 py-3 text-base font-semibold text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Learn more <Arrow />
            </Link>
          </div>
          <div className="mt-8 sm:mt-10">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
              <img 
                src="/images/a9.png" 
                alt="Grounding techniques for inner peace" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}



