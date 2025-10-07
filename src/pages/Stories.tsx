import { useEffect, useId, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function Placeholder() {
  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl border border-ui-border bg-[#e5e7eb]" aria-hidden="true">
      <div className="absolute inset-0 grid place-items-center">
        <svg width="96" height="96" viewBox="0 0 24 24" className="text-ink-600/40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 16l5-5 4 4 3-3 6 6" />
          <circle cx="9" cy="8" r="2" />
        </svg>
      </div>
    </div>
  );
}

function ImgPlaceholder() {
  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl border border-ui-border bg-[#e5e7eb]" aria-hidden="true">
      <div className="absolute inset-0 grid place-items-center text-ink-600/40">
        <svg width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 16l5-5 4 4 3-3 6 6" />
          <circle cx="9" cy="8" r="2" />
        </svg>
      </div>
    </div>
  );
}

type Persona = {
  id: string;
  tab: string;
  name: string;     // small label above card title
  title: string;    // card title
  body: string;     // card body
};

const personas: Persona[] = [
  {
    id: 'students',
    tab: 'Students',
    name: 'Felicia',
    title: 'Student support system',
    body: 'Exam stress can break your spirit. MoodMigo offers targeted support to help you bounce back.',
  },
  {
    id: 'professionals',
    tab: 'Professionals',
    name: 'Alex',
    title: 'Workday clarity & focus',
    body: 'Tame scattered energy and regain momentum with precise micro-actions for busy schedules.',
  },
  {
    id: 'creatives',
    tab: 'Creatives',
    name: 'Rae',
    title: 'Unblock the creative loop',
    body: 'Lightweight rituals to move through doubt and back into playful exploration.',
  },
  {
    id: 'parents',
    tab: 'Parents',
    name: 'Maya',
    title: 'Caring with calm',
    body: 'Gentle resets that help you regulate and reconnect in the rush of family life.',
  },
  {
    id: 'freelancers',
    tab: 'Freelancers',
    name: 'Ken',
    title: 'Steady your freelance rhythm',
    body: 'Keep consistency with small, repeatable actions that protect energy and focus.',
  },
  {
    id: 'managers',
    tab: 'Managers',
    name: 'Iris',
    title: 'Lead with balance',
    body: 'Micro-actions to support decision clarity, feedback, and team presence.',
  },
];

// ---- section 3: Feedback
function StoriesFeedback() {
  const tabs = [
    'Exam stress',
    'Work balance',
    'Personal growth',
    'Mental health',
    'Emotional support',
    'Life coaching',
  ];
  const [active, setActive] = useState(0);
  const onKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    setActive(p => (e.key === 'ArrowRight' ? (p + 1) % tabs.length : (p - 1 + tabs.length) % tabs.length));
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-[1100px] px-4">
        <p className="text-center text-sm font-medium uppercase tracking-wide text-ink-600">Feedback</p>
        <h2 className="mt-3 text-center text-4xl sm:text-5xl font-extrabold text-ink-900">What our users say</h2>
        <p className="mt-4 text-center text-ink-700 max-w-3xl mx-auto">
          Real experiences from people who transformed their emotional landscape with MoodMigo.
        </p>

        {/* Pills */}
        <div role="tablist" aria-label="User feedback topics"
             className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-2 rounded-2xl border border-ui-border bg-ui-muted p-2">
          {tabs.map((t, i) => {
            const selected = i === active;
            return (
              <button
                key={t}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(i)}
                onKeyDown={onKey}
                className={[
                  'rounded-xl px-4 py-3 text-sm font-semibold outline-none',
                  selected ? 'bg-white shadow text-ink-900' : 'text-ink-700 hover:bg-white'
                ].join(' ')}
              >
                {t}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div className="mt-8 rounded-2xl border border-ui-border bg-white p-6 sm:p-10">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-6">
              <ImgPlaceholder />
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="text-sm font-medium text-ink-600">Tagline</p>
              <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold text-ink-900">
                Medium length section heading goes here
              </h3>
              <p className="mt-4 text-ink-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo
                diam libero vitae erat.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="inline-flex items-center rounded-full border border-ui-border bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
                  Button
                </button>
                <button className="inline-flex items-center gap-1 rounded-full border border-ui-border bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
                  Button <Arrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- section 4: CTA
function StoriesCTA() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-[1100px] px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-ink-900">
          Ready to turn your mood
          <br className="hidden sm:block" /> into action?
        </h2>
        <p className="mt-4 text-ink-700 max-w-3xl mx-auto">
          Experience personalized emotional support that understands your unique journey
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button className="inline-flex items-center rounded-full bg-brand-primary px-6 py-3 text-base font-semibold text-white hover:bg-brand-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
            Start
          </button>
          <button className="inline-flex items-center rounded-full border border-ui-border bg-white px-6 py-3 text-base font-semibold text-ink-900 hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
            Learn more
          </button>
        </div>

        <div className="mt-8">
          <ImgPlaceholder />
        </div>
      </div>
    </section>
  );
}

export default function Stories() {
  const [params] = useSearchParams();
  const initial = params.get('persona') ?? 'students';
  const [active, setActive] = useState<string>(initial);
  const listId = useId();

  useEffect(() => {
    if (!personas.some(p => p.id === active)) setActive('students');
  }, [active]);

  const idx = personas.findIndex(p => p.id === active);
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    const dir = e.key === 'ArrowRight' ? 1 : -1;
    const next = (idx + dir + personas.length) % personas.length;
    setActive(personas[next].id);
  };

  const current = personas.find(p => p.id === active)!;

  return (
    <div className="min-h-screen bg-white text-ink-900">
      <Navbar />

      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-4 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-ink-600">Stories</p>
          <h1 className="mt-3 text-5xl sm:text-6xl font-extrabold leading-tight">
            Real stories, real
            <br className="hidden sm:block" />
            results
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-ink-700">
            Discover how people transform their emotional challenges into meaningful actions
            with MoodMigo&apos;s personalized support
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#personas" className="inline-flex items-center rounded-full bg-brand-primary px-6 py-3 text-base font-semibold text-white hover:bg-brand-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
              Explore
            </a>
            <Link to="/how-it-works#stories" className="inline-flex items-center rounded-full border border-ui-border bg-white px-6 py-3 text-base font-semibold text-ink-900 hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
              Learn
            </Link>
          </div>
        </div>
      </section>

      {/* Personas */}
      <section id="personas" className="scroll-mt-24 py-16 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-4">
          <p className="text-center text-sm font-medium uppercase tracking-wide text-ink-600">Personas</p>
          <h2 className="mt-3 text-center text-4xl sm:text-5xl font-extrabold">Meet our users</h2>
          <p className="mt-4 text-center text-ink-700 max-w-3xl mx-auto">
            Each person&apos;s journey is unique. MoodMigo understands that.
          </p>

          {/* Tabs */}
          <nav
            role="tablist"
            aria-label="User personas"
            id={listId}
            className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-1 rounded-xl border border-ui-border bg-ui-muted p-1"
          >
            {personas.map(p => {
              const selected = p.id === active;
              return (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`${p.id}-panel`}
                  id={`${p.id}-tab`}
                  onClick={() => setActive(p.id)}
                  onKeyDown={onKey}
                  className={[
                    'rounded-lg px-4 py-3 text-sm font-semibold outline-none',
                    selected
                      ? 'bg-white shadow text-ink-900'
                      : 'text-ink-700 hover:bg-white'
                  ].join(' ')}
                >
                  {p.tab}
                </button>
              );
            })}
          </nav>

          {/* Panel */}
          <div
            role="tabpanel"
            id={`${current.id}-panel`}
            aria-labelledby={`${current.id}-tab`}
            className="mt-8 rounded-2xl border border-ui-border bg-white p-6 sm:p-10"
          >
            <div className="grid grid-cols-12 gap-8 items-center">
              {/* text */}
              <div className="col-span-12 md:col-span-6">
                <p className="text-sm font-medium text-ink-600">{current.name}</p>
                <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold">{current.title}</h3>
                <p className="mt-4 text-ink-700">{current.body}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/how-it-works#stories"
                    className="inline-flex items-center rounded-full border border-ui-border bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                  >
                    Learn more
                  </Link>
                  <Link
                    to={`/stories/${current.id}`}
                    className="inline-flex items-center gap-1 rounded-full border border-ui-border bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                  >
                    View <Arrow />
                  </Link>
                </div>
              </div>
              {/* image placeholder */}
              <div className="col-span-12 md:col-span-6">
                <Placeholder />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <StoriesFeedback />
      
      {/* CTA Section */}
      <StoriesCTA />

      <Footer />
    </div>
  );
}
