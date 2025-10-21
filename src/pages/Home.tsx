import type { FC } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ActionCategories from '../components/ActionCategories';
import Stories from '../components/Stories';
import Technology from '../components/Technology';
import Footer from '../components/Footer';
import h2Image from '/images/h2.png';

const Home: FC = () => {
  const [activeTab, setActiveTab] = useState('setup');

  const tabs = [
    { key: 'setup', label: 'Setup' },
    { key: 'analyze', label: 'Analyze' },
    { key: 'actions', label: 'Actions' },
    { key: 'feedback', label: 'Feedback' }
  ];

  return (
    <div className="min-h-screen bg-ui-bg">
      <Navbar />
      <main>
        <Hero />
        
        {/* How it works section */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            {/* Section heading */}
            <div className="text-center mb-12">
              <p className="text-sm text-ink-600 mb-2">How</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-ink-900 mb-4">
                How it works
              </h2>
              <p className="text-lg text-ink-600 max-w-2xl mx-auto">
                Simple steps to transform your emotional state with intelligent, personalized recommendations.
              </p>
            </div>

            {/* White rounded container */}
            <div className="bg-white rounded-2xl border border-ui-border shadow-lg p-8">
              {/* Tabs */}
              <div className="flex border-b border-ui-border mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                      activeTab === tab.key
                        ? 'text-brand-primary border-b-2 border-brand-primary'
                        : 'text-ink-600 hover:text-ink-900 hover:border-b-2 hover:border-ui-border'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Left side - Image */}
                <div className="w-full lg:w-1/2">
                  <img
                    src={h2Image}
                    alt="Preference setup"
                    className="w-full aspect-square object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>

                {/* Right side - Content */}
                <div className="w-full lg:w-1/2">
                  <p className="text-sm text-ink-600 mb-2">Tagline</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-ink-900 mb-4">
                    Preference setup
                  </h3>
                  <p className="text-lg text-ink-600 mb-8">
                    Choose your location, budget, and favorite activities to personalize your experience.
                  </p>
                  <Link
                    to="/how-it-works"
                    className="px-6 py-3 border border-ui-border rounded-lg text-ink-900 hover:bg-ui-muted transition-colors font-medium inline-block"
                  >
                    Select
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ActionCategories />
      <Stories />
      <Technology />
      <Footer />
    </div>
  );
};

export default Home;
