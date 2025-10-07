import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

interface Story {
  key: string;
  tab: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  primary: {
    label: string;
    href: string;
  };
  secondary: {
    label: string;
    href: string;
  };
}

const STORIES: Story[] = [
  {
    key: 'student',
    tab: 'Student',
    title: "Felicia's journey",
    tagline: 'Tagline',
    description: 'A 24-year-old student finds comfort and motivation after a challenging exam.',
    image: '/assets/images/story-student.webp',
    primary: {
      label: 'View story',
      href: '#'
    },
    secondary: {
      label: 'Learn more',
      href: '#'
    }
  },
  {
    key: 'pro',
    tab: 'Professional',
    title: "Alex's breakthrough",
    tagline: 'Tagline',
    description: 'Practical routines to navigate workplace pressure and uncertainty.',
    image: '/assets/images/story-pro.webp',
    primary: {
      label: 'View story',
      href: '#'
    },
    secondary: {
      label: 'Learn more',
      href: '#'
    }
  },
  {
    key: 'creative',
    tab: 'Creative',
    title: 'Maya finds flow',
    tagline: 'Tagline',
    description: 'Gentle prompts that unlock momentum without perfectionism.',
    image: '/assets/images/story-creative.webp',
    primary: {
      label: 'View story',
      href: '#'
    },
    secondary: {
      label: 'Learn more',
      href: '#'
    }
  },
  {
    key: 'parent',
    tab: 'Parent',
    title: 'Balance in the chaos',
    tagline: 'Tagline',
    description: 'Micro-actions that fit into family rhythms and real-life constraints.',
    image: '/assets/images/story-parent.webp',
    primary: {
      label: 'View story',
      href: '#'
    },
    secondary: {
      label: 'Learn more',
      href: '#'
    }
  },
  {
    key: 'entre',
    tab: 'Entrepreneur',
    title: 'Steady through volatility',
    tagline: 'Tagline',
    description: 'Lightweight rituals to stabilize energy and decision quality.',
    image: '/assets/images/story-entre.webp',
    primary: {
      label: 'View story',
      href: '#'
    },
    secondary: {
      label: 'Learn more',
      href: '#'
    }
  },
  {
    key: 'tab6',
    tab: 'Tab six',
    title: 'More stories',
    tagline: 'Tagline',
    description: 'Explore additional journeys from the community.',
    image: '/assets/images/story-more.webp',
    primary: {
      label: 'View story',
      href: '#'
    },
    secondary: {
      label: 'Learn more',
      href: '#'
    }
  }
];

const Stories: React.FC = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [imageError, setImageError] = useState<Set<string>>(new Set());
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleTabClick = (index: number) => {
    setActiveStory(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    let newIndex = index;
    
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        newIndex = index > 0 ? index - 1 : STORIES.length - 1;
        break;
      case 'ArrowRight':
        event.preventDefault();
        newIndex = index < STORIES.length - 1 ? index + 1 : 0;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = STORIES.length - 1;
        break;
      default:
        return;
    }
    
    setActiveStory(newIndex);
    tabRefs.current[newIndex]?.focus();
  };

  const handleImageError = (imagePath: string) => {
    setImageError(prev => new Set(prev).add(imagePath));
  };

  const currentStory = STORIES[activeStory];

  return (
    <section id="stories" className="py-20 sm:py-24 scroll-mt-20 bg-ui-bg">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-ink-600 mb-2">Stories</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-ink-900 mb-4">
            Real people, real transformations
          </h2>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto">
            See how MoodMigo helps individuals navigate emotional challenges with personalized support.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white border border-ui-border rounded-2xl p-4 sm:p-6 lg:p-8">
          {/* Tabs */}
          <div 
            role="tablist" 
            className="flex flex-wrap gap-0 border-b border-ui-border mb-8"
            aria-label="Success stories"
          >
            {STORIES.map((story, index) => (
              <button
                key={story.key}
                ref={el => { tabRefs.current[index] = el; }}
                role="tab"
                aria-selected={activeStory === index}
                aria-controls={`panel-${story.key}`}
                aria-labelledby={`tab-${story.key}`}
                id={`tab-${story.key}`}
                className={`
                  flex-1 min-w-0 px-4 py-3 text-sm font-medium transition-colors
                  ${activeStory === index 
                    ? 'bg-white text-ink-900 border-b-2 border-brand-primary' 
                    : 'bg-ui-bg text-ink-600 hover:text-ink-900 hover:bg-ui-muted'
                  }
                  ${index > 0 ? 'border-l border-ui-border' : ''}
                `}
                onClick={() => handleTabClick(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              >
                {story.tab}
              </button>
            ))}
          </div>

          {/* Tab Panel */}
          <div
            role="tabpanel"
            id={`panel-${currentStory.key}`}
            aria-labelledby={`tab-${currentStory.key}`}
            className="lg:py-10"
          >
            <div className="flex flex-col lg:flex-row lg:gap-12">
              {/* Content - Left Column */}
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex flex-col justify-center">
                <p className="text-sm text-ink-600 mb-2">{currentStory.tagline}</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-ink-900 mb-4">
                  {currentStory.title}
                </h3>
                <p className="text-ink-600 mb-8 leading-relaxed">
                  {currentStory.description}
                </p>
                
                {/* Buttons - Both using secondary style */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/stories"
                    className="px-6 py-3 bg-white text-ink-900 border border-ui-border rounded-full font-medium hover:bg-ui-muted transition-colors text-center"
                  >
                    {currentStory.primary.label}
                  </Link>
                  <a
                    href={currentStory.secondary.href}
                    className="px-6 py-3 bg-white text-ink-900 border border-ui-border rounded-full font-medium hover:bg-ui-muted transition-colors flex items-center justify-center"
                  >
                    {currentStory.secondary.label}
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Image - Right Column */}
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] rounded-xl border border-ui-border overflow-hidden">
                  {imageError.has(currentStory.image) ? (
                    <div className="w-full h-full bg-ui-muted border border-ui-border rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-ui-border rounded-lg mx-auto mb-2"></div>
                        <p className="text-ink-600 text-sm">Image placeholder</p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={currentStory.image}
                      alt={currentStory.title}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(currentStory.image)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
