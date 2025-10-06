import React, { useState, useRef } from 'react';

interface Category {
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

const CATEGORIES: Category[] = [
  {
    key: 'achieve',
    tab: 'Achieve',
    title: 'Achieve small wins',
    tagline: 'Tagline',
    description: 'Rebuild confidence through targeted, manageable actions that help you feel accomplished and motivated to keep moving forward.',
    image: '/assets/images/cat-achieve.webp',
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
    key: 'comfort',
    tab: 'Comfort',
    title: 'Find gentle relief',
    tagline: 'Tagline',
    description: 'Discover soothing activities and self-care practices that provide comfort during difficult moments and help restore emotional balance.',
    image: '/assets/images/cat-comfort.webp',
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
    key: 'connect',
    tab: 'Connect',
    title: 'Reach out and relate',
    tagline: 'Tagline',
    description: 'Build meaningful connections and strengthen relationships through guided activities that help you communicate and bond with others.',
    image: '/assets/images/cat-connect.webp',
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
    key: 'move',
    tab: 'Move',
    title: 'Reset with movement',
    tagline: 'Tagline',
    description: 'Channel your energy through physical activities that help release tension, boost endorphins, and create a fresh perspective.',
    image: '/assets/images/cat-move.webp',
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
    key: 'calm',
    tab: 'Calm',
    title: 'Slow down and breathe',
    tagline: 'Tagline',
    description: 'Practice mindfulness and relaxation techniques that help you find peace, reduce stress, and cultivate inner calm.',
    image: '/assets/images/cat-calm.webp',
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
    title: 'More categories',
    tagline: 'Tagline',
    description: 'Explore additional action categories and specialized strategies designed to support your unique emotional journey and personal growth.',
    image: '/assets/images/cat-more.webp',
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

const ActionCategories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [imageError, setImageError] = useState<Set<string>>(new Set());
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleTabClick = (index: number) => {
    setActiveCategory(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    let newIndex = index;
    
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        newIndex = index > 0 ? index - 1 : CATEGORIES.length - 1;
        break;
      case 'ArrowRight':
        event.preventDefault();
        newIndex = index < CATEGORIES.length - 1 ? index + 1 : 0;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = CATEGORIES.length - 1;
        break;
      default:
        return;
    }
    
    setActiveCategory(newIndex);
    tabRefs.current[newIndex]?.focus();
  };

  const handleImageError = (imagePath: string) => {
    setImageError(prev => new Set(prev).add(imagePath));
  };

  const currentCategory = CATEGORIES[activeCategory];

  return (
    <section id="action-categories" className="py-20 sm:py-24 scroll-mt-20 bg-ui-bg">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-ink-600 mb-2">Features</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-ink-900 mb-4">
            Action categories
          </h2>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto">
            Personalized strategies for every emotional state and moment.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white border border-ui-border rounded-2xl p-4 sm:p-6 lg:p-8">
          {/* Tabs */}
          <div 
            role="tablist" 
            className="flex flex-wrap gap-0 border-b border-ui-border mb-8"
            aria-label="Action categories"
          >
            {CATEGORIES.map((category, index) => (
              <button
                key={category.key}
                ref={(el) => { tabRefs.current[index] = el; }}
                role="tab"
                aria-selected={activeCategory === index}
                aria-controls={`panel-${category.key}`}
                aria-labelledby={`tab-${category.key}`}
                id={`tab-${category.key}`}
                className={`
                  flex-1 min-w-0 px-4 py-3 text-sm font-medium transition-colors
                  ${activeCategory === index 
                    ? 'bg-white text-ink-900 border-b-2 border-brand-primary' 
                    : 'bg-ui-bg text-ink-600 hover:text-ink-900 hover:bg-ui-muted'
                  }
                  ${index > 0 ? 'border-l border-ui-border' : ''}
                `}
                onClick={() => handleTabClick(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              >
                {category.tab}
              </button>
            ))}
          </div>

          {/* Tab Panel */}
          <div
            role="tabpanel"
            id={`panel-${currentCategory.key}`}
            aria-labelledby={`tab-${currentCategory.key}`}
            className="lg:py-10"
          >
            <div className="flex flex-col lg:flex-row lg:gap-12">
              {/* Image */}
              <div className="w-full lg:w-2/5 mb-6 lg:mb-0">
                <div className="aspect-[4/3] rounded-xl border border-ui-border overflow-hidden">
                  {imageError.has(currentCategory.image) ? (
                    <div className="w-full h-full bg-ui-muted border border-ui-border rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-ui-border rounded-lg mx-auto mb-2"></div>
                        <p className="text-ink-600 text-sm">Image placeholder</p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={currentCategory.image}
                      alt={currentCategory.title}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(currentCategory.image)}
                    />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-3/5 flex flex-col justify-center">
                <p className="text-sm text-ink-600 mb-2">{currentCategory.tagline}</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-ink-900 mb-4">
                  {currentCategory.title}
                </h3>
                <p className="text-ink-600 mb-8 leading-relaxed">
                  {currentCategory.description}
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={currentCategory.primary.href}
                    className="px-6 py-3 bg-brand-primary text-white rounded-full font-medium hover:bg-brand-primaryHover transition-colors text-center"
                  >
                    {currentCategory.primary.label}
                  </a>
                  <a
                    href={currentCategory.secondary.href}
                    className="px-6 py-3 bg-ui-muted text-ink-900 border border-ui-border rounded-full font-medium hover:bg-ui-border transition-colors flex items-center justify-center"
                  >
                    {currentCategory.secondary.label}
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

export default ActionCategories;
