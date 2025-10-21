import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function HowItWorksStart() {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    console.error('Failed to load image: /images/p1.png');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Background Image */}
        <section className="relative h-screen flex items-center justify-center text-center">
          {imageError ? (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600">Image not found</p>
            </div>
          ) : (
            <img
               src="/images/p1.png"
              alt="How MoodMigo works"
              className="absolute inset-0 w-full h-full object-cover"
              onError={handleImageError}
            />
          )}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-white">
            <p className="text-sm mb-2">Mood</p>
            <h1 className="text-6xl font-bold mb-4">How it works</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover how MoodMigo transforms your emotional state into clear, actionable steps
            </p>
          </div>
        </section>

      {/* Image Section - Between the two text sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {imageError ? (
            <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
              <p className="text-gray-600">Image not found</p>
            </div>
          ) : (
            <img
               src="/images/p1.png"
              alt="MoodMigo User Guide"
              className="w-full h-auto rounded-2xl shadow-lg"
              onError={handleImageError}
            />
          )}
        </div>
      </section>

      {/* Second Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 mb-2">Simple</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mood meets action in seconds
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Enter your current feeling. We'll help you move forward.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
