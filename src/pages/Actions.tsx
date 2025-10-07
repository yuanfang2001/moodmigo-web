import type { FC } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ActionsPaths from '../components/ActionsPaths';
import ActionsDetails from '../components/ActionsDetails';
import ActionsDetailsMore from '../components/ActionsDetailsMore';
import { Link, useNavigate } from 'react-router-dom';

const Actions: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-ui-bg text-ink-900">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4">
        <section className="py-16 sm:py-24 text-center">
          {/* Kicker */}
          <p className="text-sm font-medium uppercase tracking-wide text-ink-600 mb-4">Mood</p>

          {/* Display headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            Discover your
            <br className="hidden sm:block" />
            personalized
            <br className="hidden sm:block" />
            actions
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl text-ink-700">
            Explore micro-actions that transform your emotional state with precision and care
          </p>

          {/* CTAs */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                // TODO: wire to your next step or anchor
                // e.g. navigate('/how-it-works#actions') or open an Actions grid
                navigate('/how-it-works#actions');
              }}
              className="inline-flex items-center rounded-full bg-brand-primary px-6 py-3 text-base font-semibold text-white hover:bg-brand-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            >
              Start
            </button>

            <Link
              to="/how-it-works"
              className="inline-flex items-center rounded-full border border-ui-border bg-white px-6 py-3 text-base font-semibold text-ink-900 hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            >
              Learn
            </Link>
          </div>
        </section>
      </main>

      {/* Actions Paths Section */}
      <ActionsPaths />
      
      {/* Actions Details Sections */}
      <ActionsDetails />
      
      {/* Actions Details More Sections */}
      <ActionsDetailsMore />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Actions;
