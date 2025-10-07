import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

interface Step {
  key: string;
  tab: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  primary: string;
  secondary: string;
}

const STEPS: Step[] = [
  {
    key: 'setup',
    tab: 'Setup',
    title: 'Preference setup',
    tagline: 'Tagline',
    description: 'Configure your personal preferences and mood tracking settings to get started with a personalized experience that adapts to your unique emotional patterns.',
    image: '/assets/images/step-setup.webp',
    primary: 'Get Started',
    secondary: 'Learn More'
  },
  {
    key: 'mood',
    tab: 'Mood',
    title: 'Mood tracking',
    tagline: 'Tagline',
    description: 'Record your daily moods and emotional states through intuitive interfaces that make it easy to capture how you feel throughout the day.',
    image: '/assets/images/step-mood.webp',
    primary: 'Start Tracking',
    secondary: 'View Examples'
  },
  {
    key: 'analyze',
    tab: 'Analyze',
    title: 'Smart analysis',
    tagline: 'Tagline',
    description: 'Our AI-powered system analyzes your mood patterns, identifying trends and triggers to provide meaningful insights about your emotional well-being.',
    image: '/assets/images/step-analyze.webp',
    primary: 'View Analysis',
    secondary: 'See Insights'
  },
  {
    key: 'actions',
    tab: 'Actions',
    title: 'Action recommendations',
    tagline: 'Tagline',
    description: 'Receive personalized recommendations for activities and strategies that can help improve your mood and overall emotional health.',
    image: '/assets/images/step-actions.webp',
    primary: 'Get Actions',
    secondary: 'Browse All'
  },
  {
    key: 'feedback',
    tab: 'Feedback',
    title: 'Continuous feedback',
    tagline: 'Tagline',
    description: 'Track your progress over time and receive feedback on how your mood patterns are evolving, celebrating improvements and identifying areas for growth.',
    image: '/assets/images/step-feedback.webp',
    primary: 'View Progress',
    secondary: 'Set Goals'
  },
  {
    key: 'tab-six',
    tab: 'Tab six',
    title: 'Advanced features',
    tagline: 'Tagline',
    description: 'Access advanced features and integrations that help you maintain long-term emotional wellness and connect with a supportive community.',
    image: '/assets/images/step-advanced.webp',
    primary: 'Explore',
    secondary: 'Join Community'
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [imageError, setImageError] = useState<Set<string>>(new Set());
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleTabClick = (index: number) => {
    setActiveStep(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    let newIndex = index;
    
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        newIndex = index > 0 ? index - 1 : STEPS.length - 1;
        break;
      case 'ArrowRight':
        event.preventDefault();
        newIndex = index < STEPS.length - 1 ? index + 1 : 0;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = STEPS.length - 1;
        break;
      default:
        return;
    }
    
    setActiveStep(newIndex);
    tabRefs.current[newIndex]?.focus();
  };

  const handleImageError = (imagePath: string) => {
    setImageError(prev => new Set(prev).add(imagePath));
  };

  const currentStep = STEPS[activeStep];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 scroll-mt-20 bg-ui-bg">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-ink-600 mb-2">How</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            How it works
          </h2>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto">
            Discover the simple steps to transform your mood tracking into meaningful insights and actions
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white border border-ui-border rounded-2xl p-4 sm:p-6 lg:p-8">
          {/* Tabs */}
          <div 
            role="tablist" 
            className="flex flex-wrap gap-0 border-b border-ui-border mb-8"
            aria-label="How it works steps"
          >
            {STEPS.map((step, index) => (
              <button
                key={step.key}
                ref={(el) => { tabRefs.current[index] = el; }}
                role="tab"
                aria-selected={activeStep === index}
                aria-controls={`panel-${step.key}`}
                aria-labelledby={`tab-${step.key}`}
                id={`tab-${step.key}`}
                className={`
                  flex-1 min-w-0 px-4 py-3 text-sm font-medium transition-colors
                  ${activeStep === index 
                    ? 'bg-white text-ink-900 border-b-2 border-brand-primary' 
                    : 'bg-ui-bg text-ink-600 hover:text-ink-900 hover:bg-ui-muted'
                  }
                  ${index > 0 ? 'border-l border-ui-border' : ''}
                `}
                onClick={() => handleTabClick(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              >
                {step.tab}
              </button>
            ))}
          </div>

          {/* Tab Panel */}
          <div
            role="tabpanel"
            id={`panel-${currentStep.key}`}
            aria-labelledby={`tab-${currentStep.key}`}
            className="lg:py-10"
          >
            <div className="flex flex-col lg:flex-row lg:gap-12">
              {/* Image */}
              <div className="w-full lg:w-2/5 mb-6 lg:mb-0">
                <div className="aspect-[4/3] rounded-xl border border-ui-border overflow-hidden">
                  {imageError.has(currentStep.image) ? (
                    <div className="w-full h-full bg-ui-muted border border-ui-border rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-ui-border rounded-lg mx-auto mb-2"></div>
                        <p className="text-ink-600 text-sm">Image placeholder</p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={currentStep.image}
                      alt={currentStep.title}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(currentStep.image)}
                    />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-3/5 flex flex-col justify-center">
                <p className="text-sm text-ink-600 mb-2">{currentStep.tagline}</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-ink-900 mb-4">
                  {currentStep.title}
                </h3>
                <p className="text-ink-600 mb-8 leading-relaxed">
                  {currentStep.description}
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/how-it-works"
                    className="px-6 py-3 bg-brand-primary text-white rounded-full font-medium hover:bg-brand-primaryHover transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 text-center"
                  >
                    {currentStep.primary}
                  </Link>
                  <Link
                    to="/how-it-works"
                    className="px-6 py-3 bg-ui-muted text-ink-900 border border-ui-border rounded-full font-medium hover:bg-ui-border transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                  >
                    {currentStep.secondary}
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
