import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative flex flex-col items-center justify-center text-center text-white py-32 sm:py-48 rounded-none lg:rounded-3xl mx-4 lg:mx-8 overflow-hidden animate-fade-in"
      style={{
        backgroundImage: 'url(./images/h1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Turn your mood into action
          </h1>
          
          {/* Subtitle */}
          <div className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            <p className="mb-2">
              Discover the power of emotional intelligence and transform your daily experiences
            </p>
            <p>
              into meaningful actions that drive personal growth and happiness.
            </p>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primaryHover transition-colors font-medium">
              Start
            </button>
            <button className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/30 transition-colors font-medium">
              Learn
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
