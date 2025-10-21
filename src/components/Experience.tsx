import React, { useState } from 'react';

interface ExperienceProps {
  videoSrc?: string;
  posterSrc?: string;
  imageSrc?: string;
}

const Experience: React.FC<ExperienceProps> = ({ 
  videoSrc = '/assets/demo/moodmigo-demo.mp4',
  posterSrc = '/assets/demo/moodmigo-poster.webp',
  imageSrc = '/moodmigo-web/images/h2.png'
}) => {
  const [videoError, setVideoError] = useState(false);
  const [, setImageError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const renderMedia = () => {
    // If imageSrc is provided and no video error, show image
    if (imageSrc && !videoError) {
      return (
        <img
          src={imageSrc}
          alt="MoodMigo experience demo"
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      );
    }

    // If video is available and no error, show video
    if (videoSrc && !videoError) {
      return (
        <video
          className="w-full h-full object-cover"
          controls
          poster={posterSrc}
          onError={handleVideoError}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    // Fallback to placeholder
    return (
      <div className="w-full h-full bg-ui-muted flex items-center justify-center">
        <div className="text-center">
          <svg 
            className="w-16 h-16 mx-auto mb-4 text-ink-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" 
            />
          </svg>
          <p className="text-ink-600 text-sm">Demo placeholder</p>
          <p className="text-ink-600 text-xs mt-1">Video or image will appear here</p>
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="py-20 sm:py-24 scroll-mt-20 bg-ui-bg">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-ink-900 mb-4">
            Experience MoodMigo in action
          </h2>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto mb-8">
            Start your emotional wellness journey with a simple click. No signup, no downloads.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#start"
              data-cta="experience-start"
              className="px-8 py-3 bg-brand-primary text-white rounded-full font-medium hover:bg-brand-primaryHover transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            >
              Start
            </a>
            <a
              href="#learn-more"
              className="px-8 py-3 bg-ui-muted text-ink-900 border border-ui-border rounded-full font-medium hover:bg-ui-border transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Demo Area */}
        <div className="w-full">
          <div className="aspect-video sm:aspect-video md:aspect-video lg:aspect-video rounded-2xl border border-ui-border overflow-hidden bg-ui-muted">
            {renderMedia()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
