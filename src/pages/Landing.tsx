import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MoodStrip from '../components/MoodStrip';
import LandingHistory from '../components/LandingHistory';
import LandingPersonalization from '../components/LandingPersonalization';
import LandingSuggestionsNeutral from '../components/LandingSuggestionsNeutral';
import Footer from '../components/Footer';
import type { MoodId } from '../components/MoodStrip';

const Landing: React.FC = () => {
  const [mood, setMood] = useState<MoodId>('neutral');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Initialize mood from URL or localStorage
  useEffect(() => {
    const urlMood = searchParams.get('mood') as MoodId;
    if (urlMood && ['angry', 'sad', 'neutral', 'calm', 'blessed', 'love'].includes(urlMood)) {
      setMood(urlMood);
    } else {
      const savedMood = localStorage.getItem('landing.mood') as MoodId;
      if (savedMood && ['angry', 'sad', 'neutral', 'calm', 'blessed', 'love'].includes(savedMood)) {
        setMood(savedMood);
      }
    }
  }, [searchParams]);

  // Update URL and localStorage when mood changes
  const handleMoodChange = (newMood: MoodId) => {
    setMood(newMood);
    setSearchParams({ mood: newMood });
    localStorage.setItem('landing.mood', newMood);
  };

  // Handle Continue button click
  const handleContinue = () => {
    if (mood === 'neutral') {
      setShowSuggestions(true);
      // smooth scroll to suggestions after first render
      requestAnimationFrame(() => {
        document.getElementById('suggestions')?.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      // keep existing behavior
      navigate('/how-it-works');
    }
  };


  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="bg-white py-16 lg:py-24 xl:py-32">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center">
              {/* Mood Kicker */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-6">
                Mood
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6">
                Turning Emotions into Actions
              </h1>
              
              {/* Subtitle */}
              <div className="text-lg md:text-xl text-ink-600 mb-12 max-w-2xl mx-auto">
                <p className="mb-2">
                  Discover the power of emotional intelligence and transform your daily experiences
                </p>
                <p>
                  into meaningful actions that drive personal growth and happiness.
                </p>
              </div>

              {/* Interactive Mood Strip */}
              <MoodStrip 
                value={mood} 
                onChange={handleMoodChange}
                className="mt-12 sm:mt-16 lg:mt-24 mb-6 sm:mb-8 lg:mb-10"
              />
              
              {/* Neutral Note */}
              {mood === 'neutral' && (
                <p aria-live="polite"
                   className="mt-6 text-lg sm:text-xl font-semibold text-ink-900 text-left">
                  Not bad, just a normal day:)
                </p>
              )}
              
              {/* Continue Button */}
              <div className="flex items-center justify-center mt-6">
                <button 
                  className="px-8 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primaryHover transition-colors font-semibold text-base sm:text-lg"
                  onClick={handleContinue}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Conditional Content Below Continue Button */}
        {showSuggestions ? (
          <>
            <LandingSuggestionsNeutral />
            <Footer />
          </>
        ) : (
          <>
            {/* History & Feedback Section */}
            <section aria-labelledby="history-feedback-title">
              <LandingHistory />
            </section>
            
            {/* Personalization Section */}
            <LandingPersonalization />
            <Footer />
          </>
        )}
      </main>
    </div>
  );
};

export default Landing;
