import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-ui-hero py-16 lg:py-24 xl:py-32">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-onDark mb-6">
            Turn your mood into action
          </h1>
          
          {/* Subtitle */}
          <div className="text-lg md:text-xl text-ink-onDark/80 mb-8 max-w-2xl mx-auto">
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
            <button className="px-8 py-3 bg-ui-muted text-ink-900 border border-ui-border rounded-lg hover:bg-ui-border transition-colors font-medium">
              Learn
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
