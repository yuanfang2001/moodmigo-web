import React, { useRef, useEffect } from 'react';
import { clsx } from 'clsx';

export type MoodId = 'angry' | 'sad' | 'neutral' | 'calm' | 'love';

export interface MoodStripProps {
  value: MoodId;
  onChange: (mood: MoodId) => void;
  className?: string;
}

export const MOODS = [
  { id: 'angry' as const, label: 'Angry', emoji: '😠' },
  { id: 'sad' as const, label: 'Sad', emoji: '😞' },
  { id: 'neutral' as const, label: 'Neutral', emoji: '🙂' },
  { id: 'calm' as const, label: 'Calm', emoji: '😌' },
  { id: 'love' as const, label: 'In Love', emoji: '😍' },
] as const;

export const getMoodById = (id: MoodId) => {
  return MOODS.find(mood => mood.id === id) || MOODS[2]; // fallback to neutral
};

const MoodStrip: React.FC<MoodStripProps> = ({ value, onChange, className = '' }) => {
  const radioRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    // Focus the selected radio button
    const selectedIndex = MOODS.findIndex(mood => mood.id === value);
    if (selectedIndex !== -1 && radioRefs.current[selectedIndex]) {
      radioRefs.current[selectedIndex]?.focus();
    }
  }, [value]);

  const handleKeyDown = (event: React.KeyboardEvent, currentIndex: number) => {
    let newIndex = currentIndex;

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        newIndex = currentIndex > 0 ? currentIndex - 1 : MOODS.length - 1;
        break;
      case 'ArrowRight':
        event.preventDefault();
        newIndex = currentIndex < MOODS.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        onChange(MOODS[currentIndex].id);
        return;
      default:
        return;
    }

    // Focus the new radio button
    if (radioRefs.current[newIndex]) {
      radioRefs.current[newIndex]?.focus();
    }
  };

  const handleClick = (moodId: MoodId) => {
    onChange(moodId);
  };

  return (
    <div
      role="radiogroup"
      aria-label="Select your mood"
      className={clsx(
        "grid grid-cols-5 justify-items-center gap-4 sm:gap-6",
        // reserve height so scaled emoji + label fit without overlapping
        "min-h-[220px] sm:min-h-[280px] lg:min-h-[320px]",
        className
      )}
    >
      {MOODS.map((mood, index) => {
        const isSelected = value === mood.id;
        return (
          <button
            key={mood.id}
            ref={el => { radioRefs.current[index] = el; }}
            type="button"
            role="radio"
            aria-checked={isSelected}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => handleClick(mood.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={clsx(
              "group relative inline-flex flex-col items-center justify-start",
              "bg-transparent border-0 outline-none select-none leading-none",
              "transition-transform duration-200 hover:scale-110 focus-visible:ring-2 focus-visible:ring-brand-primary",
              "text-[96px] sm:text-[120px]",
              isSelected && "scale-[1.6]",
              "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-0.5 after:w-8 after:rounded-full after:bg-brand-primary",
              !isSelected && "after:hidden"
            )}
            aria-label={`Select ${mood.label} mood`}
          >
            <span aria-hidden="true" className="relative z-[1]">{mood.emoji}</span>
            <span className="sr-only">{mood.label}</span>
            <span
              aria-hidden="true"
              className={clsx(
                "mt-2 h-6 sm:h-8 text-base sm:text-2xl font-medium text-ink-600 text-center transition-all duration-200",
                isSelected ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"
              )}
            >
              {mood.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default MoodStrip;
