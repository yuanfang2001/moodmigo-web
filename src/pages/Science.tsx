import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// const ImagePlaceholder = ({ className = '' }: { className?: string }) => (
//   <div className={`flex items-center justify-center rounded-lg bg-ui-muted text-ink-500 ${className}`}>
//     <div className="text-sm opacity-80">Image placeholder</div>
//   </div>
// );

export default function Science() {
  return (
    <div className="min-h-screen bg-ui-bg text-ink-900">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-[1100px] px-4 pt-16 sm:pt-24 pb-10">
        <div className="text-center">
          <div className="mb-3 text-xs tracking-wide uppercase text-ink-600">Mood</div>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            The science behind<br />MoodMigo
          </h1>
          <p className="mt-6 text-ink-700">
            Advanced AI algorithms that transform emotional data into meaningful, personalized actions
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#model" className="rounded-full bg-brand-primary px-5 py-2 text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
              Explore
            </a>
            <Link to="/how-it-works#model" className="rounded-full border border-ui-border bg-white px-5 py-2 text-ink-900 hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
              Learn
            </Link>
          </div>
        </div>
      </section>

      {/* Model section */}
      <section id="model" className="mx-auto max-w-[1100px] px-4 py-12 sm:py-16">
        <div className="text-center">
          <div className="mb-2 text-xs tracking-wide uppercase text-ink-600">Model</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold">Our powerful AI engine</h2>
          <p className="mt-4 text-ink-700">
            Cutting-edge artificial intelligence designed to understand human emotions
          </p>
        </div>

        {/* Cards grid - Single row layout */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* AI model architecture card */}
          <div className="rounded-2xl border border-ui-border bg-white hover:shadow-md transition-shadow">
            <div className="p-4 sm:p-6">
              <div className="text-xs text-ink-600">DeepSeek</div>
              <h3 className="mt-2 text-lg sm:text-xl font-bold">AI model architecture</h3>
              <p className="mt-2 text-sm text-ink-700">
                Fine-tuned with advanced machine learning techniques
              </p>
              <div className="mt-4">
                <button
                  className="inline-flex items-center gap-1 rounded-full border border-ui-border bg-white px-3 py-1.5 text-xs font-medium hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                  type="button"
                >
                  Details <Arrow />
                </button>
              </div>
            </div>
          </div>

          {/* Training methodology card */}
          <div className="rounded-2xl border border-ui-border bg-white p-4 sm:p-6 hover:shadow-md transition-shadow">
            <div className="text-2xl">🧠</div>
            <h3 className="mt-2 text-lg sm:text-xl font-bold">Training methodology</h3>
            <p className="mt-2 text-sm text-ink-700">
              Sophisticated neural network optimized for emotional intelligence
            </p>
            <div className="mt-4">
              <button
                className="inline-flex items-center gap-1 rounded-full border border-ui-border bg-white px-3 py-1.5 text-xs font-medium hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                type="button"
              >
                Explore <Arrow />
              </button>
            </div>
          </div>

          {/* Performance metrics card */}
          <div className="rounded-2xl border border-ui-border bg-white p-4 sm:p-6 hover:shadow-md transition-shadow">
            <div className="text-2xl">📈</div>
            <h3 className="mt-2 text-lg sm:text-xl font-bold">Performance metrics</h3>
            <p className="mt-2 text-sm text-ink-700">
              Precision-driven approach to emotional analysis
            </p>
            <div className="mt-4">
              <button
                className="inline-flex items-center gap-1 rounded-full border border-ui-border bg-white px-3 py-1.5 text-xs font-medium hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                type="button"
              >
                Review <Arrow />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Data Section */}
      <section id="data" className="py-16 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-xs font-medium uppercase tracking-wide text-ink-600">Data</div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-ink-900">Comprehensive data ecosystem</h2>
            <p className="mt-3 text-ink-600">Robust data sources powering intelligent mood interpretation</p>
          </div>
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible">
            {/* Card A */}
            <article className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 flex flex-col h-full rounded-2xl border border-ui-border bg-white p-6 sm:p-8 snap-start hover:shadow-sm transition">
              <div className="text-xs font-medium uppercase tracking-wide text-ink-600">Sources</div>
              <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-ink-900">Hugging Face datasets</h3>
              <p className="mt-3 text-ink-600">Extensive emotional intelligence training data</p>
              <div className="mt-4 rounded-xl bg-ui-muted aspect-[16/9] grid place-items-center text-ink-600">
                🖼️
              </div>
              <div className="mt-auto">
                <a href="#" className="mt-4 inline-flex items-center rounded-full border border-ui-border px-4 py-2 text-sm font-medium hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
                  Explore <span className="ml-1"><Arrow /></span>
                </a>
              </div>
            </article>

            {/* Card B */}
            <article className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 flex flex-col h-full rounded-2xl border border-ui-border bg-white p-6 sm:p-8 snap-start hover:shadow-sm transition">
              <div className="text-3xl mb-4" aria-hidden="true">🔗</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-ink-900">Integration platforms</h3>
              <p className="mt-3 text-ink-600">Seamless connections with leading digital services</p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center rounded-full border border-ui-border px-4 py-2 text-sm font-medium hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
                  Connect <span className="ml-1"><Arrow /></span>
                </a>
              </div>
            </article>

            {/* Card C */}
            <article className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 flex flex-col h-full rounded-2xl border border-ui-border bg-white p-6 sm:p-8 snap-start hover:shadow-sm transition">
              <div className="text-3xl mb-4" aria-hidden="true">🧩</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-ink-900">API ecosystem</h3>
              <p className="mt-3 text-ink-600">Multiple platforms working together for precise recommendations</p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center rounded-full border border-ui-border px-4 py-2 text-sm font-medium hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
                  Discover <span className="ml-1"><Arrow /></span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section id="performance" className="py-16 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-xs font-medium uppercase tracking-wide text-ink-600">Performance</div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-ink-900">Measuring our emotional intelligence</h2>
            <p className="mt-3 text-ink-600">Rigorous evaluation of AI accuracy and user satisfaction</p>
          </div>
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible">
            {/* Card A */}
            <article className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 flex flex-col h-full rounded-2xl border border-ui-border bg-white p-6 sm:p-8 snap-start hover:shadow-sm transition">
              <div className="text-3xl mb-4" aria-hidden="true">📈</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-ink-900">Macro F1 performance metrics</h3>
              <p className="mt-3 text-ink-600">Precise measurement of recommendation effectiveness</p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center rounded-full border border-ui-border px-4 py-2 text-sm font-medium hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
                  Review <span className="ml-1"><Arrow /></span>
                </a>
              </div>
            </article>

            {/* Card B */}
            <article className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 flex flex-col h-full rounded-2xl border border-ui-border bg-white p-6 sm:p-8 snap-start hover:shadow-sm transition">
              <div className="text-3xl mb-4" aria-hidden="true">💬</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-ink-900">User satisfaction tracking</h3>
              <p className="mt-3 text-ink-600">Real-world feedback drives continuous improvement</p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center rounded-full border border-ui-border px-4 py-2 text-sm font-medium hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
                  Analyze <span className="ml-1"><Arrow /></span>
                </a>
              </div>
            </article>

            {/* Card C */}
            <article className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 flex flex-col h-full rounded-2xl border border-ui-border bg-white p-6 sm:p-8 snap-start hover:shadow-sm transition">
              <div className="text-xs font-medium uppercase tracking-wide text-ink-600">Analytics</div>
              <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-ink-900">Quantitative insights into emotional support</h3>
              <p className="mt-3 text-ink-600">Continuous evaluation and optimization of our AI models</p>
              <div className="mt-4 rounded-xl bg-ui-muted aspect-[16/9] grid place-items-center text-ink-600">
                📊
              </div>
              <div className="mt-auto">
                <a href="#" className="mt-4 inline-flex items-center rounded-full border border-ui-border px-4 py-2 text-sm font-medium hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
                  Monitor <span className="ml-1"><Arrow /></span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-xs font-medium uppercase tracking-wide text-ink-600">Process</div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-ink-900">How we understand your emotions</h2>
            <p className="mt-3 text-ink-600">Advanced algorithms that decode emotional nuances with precision</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Left content */}
            <div className="rounded-2xl border border-ui-border bg-white p-6 sm:p-8 hover:shadow-sm transition">
              <div className="text-xs font-medium uppercase tracking-wide text-ink-600">Analysis</div>
              <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-ink-900">Emotion interpretation framework</h3>
              <p className="mt-3 text-ink-600">Deep learning models capture subtle emotional context and intensity</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center rounded-full border border-ui-border px-4 py-2 text-sm font-medium hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
                  Learn
                </a>
                <a href="#" className="inline-flex items-center rounded-full border border-ui-border px-4 py-2 text-sm font-medium hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
                  Explore <span className="ml-1"><Arrow /></span>
                </a>
              </div>
            </div>
            {/* Right image */}
            <div className="rounded-2xl bg-ui-muted h-[420px] sm:h-[460px] lg:h-[520px] grid place-items-center text-ink-600">
              🧠
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-16 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-xs font-medium uppercase tracking-wide text-ink-600">Privacy</div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-ink-900">Your data is safe with MoodMigo</h2>
            <p className="mt-3 text-ink-600">Committed to protecting your emotional insights with advanced security measures</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Left content */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-ink-900 mb-4">Enterprise-grade security</h3>
              <p className="text-ink-600 mb-6">Your emotional data is encrypted, anonymized, and protected with industry-leading security standards.</p>
              
              {/* Compliance badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="rounded-lg bg-ui-muted px-3 py-2 text-sm font-medium text-ink-600">GDPR Compliant</div>
                <div className="rounded-lg bg-ui-muted px-3 py-2 text-sm font-medium text-ink-600">SOC 2 Type II</div>
                <div className="rounded-lg bg-ui-muted px-3 py-2 text-sm font-medium text-ink-600">ISO 27001</div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center rounded-full bg-brand-primary px-4 py-2 text-sm font-medium text-white hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
                  Protect
                </a>
                <a href="#" className="inline-flex items-center rounded-full border border-ui-border px-4 py-2 text-sm font-medium hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
                  Learn <span className="ml-1"><Arrow /></span>
                </a>
              </div>
            </div>
            {/* Right image */}
            <div className="rounded-2xl bg-ui-muted h-[420px] sm:h-[460px] lg:h-[520px] grid place-items-center text-ink-600">
              🔒
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
