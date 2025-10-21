import { Link } from 'react-router-dom';
import a6Image from '/images/a6.png';
import a7Image from '/images/a7.png';

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function ImagePlaceholder({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`relative w-full aspect-[16/9] rounded-2xl border ${dark ? 'border-white/15' : 'border-ui-border'} ${dark ? 'bg-white/10' : 'bg-[#e5e7eb]'}`}>
      <div className="absolute inset-0 grid place-items-center">
        <svg width="96" height="96" viewBox="0 0 24 24" className={`${dark ? 'text-white/40' : 'text-ink-600/40'}`} fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 16l5-5 4 4 3-3 6 6" />
          <circle cx="9" cy="8" r="2" />
        </svg>
      </div>
    </div>
  );
}

export default function ActionsDetails() {
  return (
    <>
      {/* 1) Achieve — dark background */}
      <section className="bg-[#0f0d0b] text-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-white/70 text-center">Achieve</p>
          <h2 className="mt-3 text-center text-4xl sm:text-5xl font-extrabold leading-tight">
            Small wins that rebuild
            <br className="hidden sm:block" />
            your confidence
          </h2>
          <p className="mt-4 text-center text-white/80 max-w-3xl mx-auto">
            Targeted actions help you regain momentum. Complete simple tasks that create a
            <br className="hidden sm:block" />
            sense of accomplishment.
          </p>

          {/* 单个小箭头（居中） */}
          <div className="mt-4 flex justify-center">
            <Arrow />
          </div>

          <div className="mt-8 sm:mt-10">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
              <img 
                src={a6Image} 
                alt="Small wins that rebuild your confidence" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2) Comfort — dark background */}
      <section className="bg-[#0f0d0b] text-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-white/70 text-center">Comfort</p>
          <h2 className="mt-3 text-center text-4xl sm:text-5xl font-extrabold leading-tight">
            Soothing experiences that
            <br className="hidden sm:block" />
            nurture your spirit
          </h2>
          <p className="mt-4 text-center text-white/80 max-w-3xl mx-auto">
            Create moments of warmth and relaxation. Find peace in simple, gentle actions.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              to="/how-it-works#comfort"
              className="inline-flex items-center rounded-full bg-white text-[#0f0d0b] px-6 py-3 text-base font-semibold hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Try now
            </Link>
            <Link
              to="/how-it-works#comfort"
              className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-transparent px-6 py-3 text-base font-semibold text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Learn more
              <Arrow />
            </Link>
          </div>

          <div className="mt-8 sm:mt-10">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
              <img 
                src={a7Image} 
                alt="Soothing experiences that nurture your spirit" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}



