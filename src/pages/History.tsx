import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Icons
const GridIcon = () => (
  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const LightbulbIcon = () => (
  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

// Rating emoji components
const VerySadFace = ({ isSelected, onClick }: { isSelected: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
      isSelected 
        ? 'border-red-500 bg-red-50' 
        : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
    }`}
  >
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
      <path d="M9 9h.01"/>
      <path d="M15 9h.01"/>
    </svg>
  </button>
);

const SadFace = ({ isSelected, onClick }: { isSelected: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
      isSelected 
        ? 'border-red-500 bg-red-50' 
        : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
    }`}
  >
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 15s1.5 2 4 2 4-2 4-2"/>
      <path d="M9 9h.01"/>
      <path d="M15 9h.01"/>
    </svg>
  </button>
);

const NeutralFace = ({ isSelected, onClick }: { isSelected: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
      isSelected 
        ? 'border-yellow-500 bg-yellow-50' 
        : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
    }`}
  >
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 12h8"/>
      <path d="M9 9h.01"/>
      <path d="M15 9h.01"/>
    </svg>
  </button>
);

const HappyFace = ({ isSelected, onClick }: { isSelected: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
      isSelected 
        ? 'border-green-500 bg-green-50' 
        : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
    }`}
  >
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 14s1.5-2 4-2 4 2 4 2"/>
      <path d="M9 9h.01"/>
      <path d="M15 9h.01"/>
    </svg>
  </button>
);

const VeryHappyFace = ({ isSelected, onClick }: { isSelected: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
      isSelected 
        ? 'border-green-500 bg-green-50' 
        : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
    }`}
  >
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 14s1.5-2 4-2 4 2 4 2"/>
      <path d="M9 9h.01"/>
      <path d="M15 9h.01"/>
      <path d="M12 2l1.5 3h3l-2.5 2 1 3-2.5-2-2.5 2 1-3-2.5-2h3z"/>
    </svg>
  </button>
);

export default function History() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleRatingSelect = (rating: number) => {
    setSelectedRating(rating);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="py-20 sm:py-24 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm text-gray-500 mb-2">Progress</p>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 font-serif">
              Track your mood journey
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover insights from your emotional experiences and help improve our AI recommendations.
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium">
              Explore
            </button>
          </div>
        </section>

        {/* Insights Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm text-gray-500 mb-2">Insights</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your emotional timeline
            </h2>
            <p className="text-lg text-gray-600">
              Understand your mood patterns with detailed historical tracking
            </p>
          </div>
        </section>

        {/* Two-Card Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 - Action history */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <GridIcon />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Action history
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Review the actions that have supported your emotional well-being
                    </p>
                    <Link 
                      to="/actions" 
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                    >
                      Reflect <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2 - Personal growth */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <LightbulbIcon />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Personal growth
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Track your emotional maturity and development over time.
                    </p>
                    <Link 
                      to="/actions" 
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                    >
                      Discover <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm text-gray-500 mb-2">Feedback</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Did this improve your mood?
            </h2>
          </div>
        </section>

        {/* Rating Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm text-gray-500 mb-2">Impact</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Rate your experience : )
            </h2>
            
            <div className="flex justify-center space-x-4">
              <VerySadFace 
                isSelected={selectedRating === 1} 
                onClick={() => handleRatingSelect(1)} 
              />
              <SadFace 
                isSelected={selectedRating === 2} 
                onClick={() => handleRatingSelect(2)} 
              />
              <NeutralFace 
                isSelected={selectedRating === 3} 
                onClick={() => handleRatingSelect(3)} 
              />
              <HappyFace 
                isSelected={selectedRating === 4} 
                onClick={() => handleRatingSelect(4)} 
              />
              <VeryHappyFace 
                isSelected={selectedRating === 5} 
                onClick={() => handleRatingSelect(5)} 
              />
            </div>
          </div>
        </section>

        {/* Illustration Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Keep improving your experience
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Your ongoing feedback helps us create more meaningful and supportive recommendations.
            </p>
            
            {/* Creative Illustration */}
            <div className="relative max-w-2xl mx-auto">
              {/* Hand with magnifying glass and heart */}
              <div className="absolute left-0 top-8">
                <svg className="w-16 h-16 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                  <path d="M8 11h6M11 8v6"/>
                </svg>
                <div className="absolute top-2 left-2 w-3 h-3 bg-yellow-400 rounded-full"></div>
              </div>

              {/* Three emoji faces */}
              <div className="flex justify-center space-x-8 mb-8">
                <div className="text-4xl">😞</div>
                <div className="text-4xl text-gray-600">😐</div>
                <div className="text-4xl text-gray-600">😊</div>
              </div>

              {/* Speech bubble with stars */}
              <div className="absolute left-4 bottom-16">
                <svg className="w-12 h-12 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 2h8a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"/>
                </svg>
                <div className="absolute top-1 left-1 text-white text-xs">⭐</div>
                <div className="absolute top-1 right-1 text-white text-xs">⭐</div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-white text-xs">⭐</div>
              </div>

              {/* Hand with thumbs up */}
              <div className="absolute right-0 top-8">
                <svg className="w-16 h-16 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 11v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1z"/>
                  <path d="M7 11V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/>
                  <path d="M11 11v4"/>
                </svg>
              </div>

              {/* Note/document icon */}
              <div className="absolute right-4 bottom-8">
                <svg className="w-12 h-12 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </div>

              {/* Central illustration area */}
              <div className="bg-gray-50 rounded-2xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💭</div>
                  <p className="text-gray-600">Your feedback matters</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
