import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

interface TechItem {
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

const TECH: TechItem[] = [
  {
    key: 'model',
    tab: 'Model',
    title: 'AI model',
    tagline: 'Tagline',
    description: 'DeepSeek V3 fine-tuned with QLoRA for precise emotional understanding.',
    image: '/images/h5.png',
    primary: {
      label: 'Explore',
      href: '#'
    },
    secondary: {
      label: 'Learn more',
      href: '#'
    }
  },
  {
    key: 'data',
    tab: 'Data',
    title: 'Curated, privacy-first data',
    tagline: 'Tagline',
    description: 'Anonymized event signals and opt-in feedback loops to learn safely.',
    image: '/images/h3.png',
    primary: {
      label: 'Explore',
      href: '#'
    },
    secondary: {
      label: 'Learn more',
      href: '#'
    }
  },
  {
    key: 'apis',
    tab: 'APIs',
    title: 'Simple, stable APIs',
    tagline: 'Tagline',
    description: 'REST and streaming endpoints with typed responses and rate safety.',
    image: '/images/h4.png',
    primary: {
      label: 'Explore',
      href: '#'
    },
    secondary: {
      label: 'Learn more',
      href: '#'
    }
  },
  {
    key: 'eval',
    tab: 'Evaluation',
    title: 'Human + automated evals',
    tagline: 'Tagline',
    description: 'Behavioral metrics, A/Bs, and rubric-guided reviews for quality.',
    image: '/images/h5.png',
    primary: {
      label: 'Explore',
      href: '#'
    },
    secondary: {
      label: 'Learn more',
      href: '#'
    }
  },
  {
    key: 'impact',
    tab: 'Impact',
    title: 'Measurable outcomes',
    tagline: 'Tagline',
    description: 'Track well-being effects with lightweight, longitudinal measures.',
    image: '/assets/images/tech-impact.webp',
    primary: {
      label: 'Explore',
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
    title: 'More details',
    tagline: 'Tagline',
    description: 'Additional technical notes and whitepapers.',
    image: '/assets/images/tech-more.webp',
    primary: {
      label: 'Explore',
      href: '#'
    },
    secondary: {
      label: 'Learn more',
      href: '#'
    }
  }
];

const Technology: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [imageError, setImageError] = useState<Set<string>>(new Set());
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleTabClick = (index: number) => {
    setActiveTech(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    let newIndex = index;
    
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        newIndex = index > 0 ? index - 1 : TECH.length - 1;
        break;
      case 'ArrowRight':
        event.preventDefault();
        newIndex = index < TECH.length - 1 ? index + 1 : 0;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = TECH.length - 1;
        break;
      default:
        return;
    }
    
    setActiveTech(newIndex);
    tabRefs.current[newIndex]?.focus();
  };

  const handleImageError = (imagePath: string) => {
    setImageError(prev => new Set(prev).add(imagePath));
  };

  const currentTech = TECH[activeTech];

  return (
    <section id="technology" className="py-20 sm:py-24 scroll-mt-20 bg-ui-bg">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-ink-600 mb-2">Technology</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-ink-900 mb-4">
            The science behind<br />MoodMigo
          </h2>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto">
            Advanced AI and machine learning techniques powering intelligent, empathetic recommendations.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white border border-ui-border rounded-2xl p-4 sm:p-6 lg:p-8">
          {/* Tabs */}
          <div 
            role="tablist" 
            className="flex flex-wrap gap-0 border-b border-ui-border mb-8"
            aria-label="Technology components"
          >
            {TECH.map((tech, index) => (
              <button
                key={tech.key}
                ref={(el) => { tabRefs.current[index] = el; }}
                role="tab"
                aria-selected={activeTech === index}
                aria-controls={`panel-${tech.key}`}
                aria-labelledby={`tab-${tech.key}`}
                id={`tab-${tech.key}`}
                className={`
                  flex-1 min-w-0 px-4 py-3 text-sm font-medium transition-colors
                  ${activeTech === index 
                    ? 'bg-white text-ink-900 border-b-2 border-brand-primary' 
                    : 'bg-ui-bg text-ink-600 hover:text-ink-900 hover:bg-ui-muted'
                  }
                  ${index > 0 ? 'border-l border-ui-border' : ''}
                `}
                onClick={() => handleTabClick(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              >
                {tech.tab}
              </button>
            ))}
          </div>

          {/* Tab Panel */}
          <div
            role="tabpanel"
            id={`panel-${currentTech.key}`}
            aria-labelledby={`tab-${currentTech.key}`}
            className="lg:py-10"
          >
            <div className="flex flex-col lg:flex-row lg:gap-12">
              {/* Image - Left Column */}
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <div className="w-full flex justify-center">
                  {imageError.has(currentTech.image) ? (
                    <div className="w-full max-h-[400px] bg-ui-muted border border-ui-border rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-ui-border rounded-lg mx-auto mb-2"></div>
                        <p className="text-ink-600 text-sm">Image placeholder</p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={currentTech.image}
                      alt={currentTech.title}
                      className="w-full max-h-[400px] object-contain rounded-xl"
                      loading="lazy"
                      decoding="async"
                      onError={() => handleImageError(currentTech.image)}
                    />
                  )}
                </div>
              </div>

              {/* Content - Right Column */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <p className="text-sm text-ink-600 mb-2">{currentTech.tagline}</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-ink-900 mb-4">
                  {currentTech.title}
                </h3>
                <p className="text-ink-600 mb-8 leading-relaxed">
                  {currentTech.description}
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/science"
                    className="px-6 py-3 bg-brand-primary text-white rounded-full font-medium hover:bg-brand-primaryHover transition-colors text-center"
                  >
                    {currentTech.primary.label}
                  </Link>
                  <a
                    href={currentTech.secondary.href}
                    className="px-6 py-3 bg-ui-muted text-ink-900 border border-ui-border rounded-full font-medium hover:bg-ui-border transition-colors flex items-center justify-center"
                  >
                    {currentTech.secondary.label}
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
