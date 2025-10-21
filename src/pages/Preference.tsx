import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

// Icons
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
    {children}
  </div>
);

export default function Preference() {
  const navigate = useNavigate();
  
  // State management
  const [email, setEmail] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [selectedMood, setSelectedMood] = useState<string>('');
  const [location, setLocation] = useState('');

  // Activities data
  const activities = [
    'Traveling', 'Reading', 'Cooking', 'Gardening', 'Movies', 'Exercising',
    'Music', 'Photography', 'Hiking', 'Writing', 'Meditation', 'Gaming'
  ];

  // Budget options
  const budgetOptions = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
    { value: 'no-preference', label: 'No preference' }
  ];

  // Mood options
  const moodOptions = [
    { value: 'happy', label: 'Happy', emoji: '😊' },
    { value: 'neutral', label: 'Neutral', emoji: '⚪' },
    { value: 'sad', label: 'Sad', emoji: '😢' },
    { value: 'angry', label: 'Angry', emoji: '😠' },
    { value: 'anxious', label: 'Anxious', emoji: '⚪' },
    { value: 'excited', label: 'Excited', emoji: '😃' }
  ];

  // Filter activities based on search
  const filteredActivities = activities.filter(activity =>
    activity.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle activity selection
  const toggleActivity = (activity: string) => {
    setSelectedActivities(prev =>
      prev.includes(activity)
        ? prev.filter(item => item !== activity)
        : [...prev, activity]
    );
  };

  // Handle budget selection
  const handleBudgetChange = (budget: string) => {
    setSelectedBudget(budget);
  };

  // Handle mood selection
  const handleMoodChange = (mood: string) => {
    setSelectedMood(mood);
  };

  // Handle Generate my actions button click
  const handleGenerateActions = () => {
    // Navigate to landing page and scroll to suggestions section
    navigate('/');
    // Use setTimeout to ensure the page has loaded before scrolling
    setTimeout(() => {
      const suggestionsElement = document.getElementById('suggestions');
      if (suggestionsElement) {
        suggestionsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-gray-900">
                MoodMigo
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/mood" className="text-gray-700 hover:text-gray-900">Mood</Link>
              <Link to="/preference" className="text-gray-900 font-medium">Preference</Link>
              <Link to="/history" className="text-gray-700 hover:text-gray-900">History</Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 flex items-center">
                  About
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
              </div>
            </nav>

            {/* Auth buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-gray-900">Log In</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Let's personalize your moodmigo experience
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Answer a few quick questions to help us understand what you need right now
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium">
                Get started
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              By clicking get started, you agree to our{' '}
              <Link to="/terms" className="text-red-600 hover:underline">terms of use</Link>
            </p>
          </div>
        </section>

        {/* Activities Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Choose your favorite activities</h2>
          
          {/* Search bar */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search for anything"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          {/* Activity checkboxes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredActivities.map((activity) => (
              <label
                key={activity}
                className={`flex items-center justify-center px-4 py-3 rounded-full border cursor-pointer transition-all ${
                  selectedActivities.includes(activity)
                    ? 'bg-red-600 text-white border-red-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-red-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedActivities.includes(activity)}
                  onChange={() => toggleActivity(activity)}
                  className="sr-only"
                />
                <span className="text-sm font-medium">{activity}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Budget Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What's your budget range</h2>
          
          <div className="grid grid-cols-2 gap-4 max-w-md">
            {budgetOptions.map((option) => (
              <label
                key={option.value}
                className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedBudget === option.value
                    ? 'bg-red-600 text-white border-red-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-red-300'
                }`}
              >
                <input
                  type="radio"
                  name="budget"
                  value={option.value}
                  checked={selectedBudget === option.value}
                  onChange={() => handleBudgetChange(option.value)}
                  className="sr-only"
                />
                <span className="font-medium">{option.label}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Mood Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How are you feeling today</h2>
          
          <div className="grid grid-cols-3 gap-4 max-w-2xl">
            {moodOptions.map((mood) => (
              <label
                key={mood.value}
                className={`flex flex-col items-center p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedMood === mood.value
                    ? 'bg-red-600 text-white border-red-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-red-300'
                }`}
              >
                <input
                  type="radio"
                  name="mood"
                  value={mood.value}
                  checked={selectedMood === mood.value}
                  onChange={() => handleMoodChange(mood.value)}
                  className="sr-only"
                />
                <span className="text-2xl mb-2">{mood.emoji}</span>
                <span className="text-sm font-medium">{mood.label}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Location Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Where are you located</h2>
          
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LocationIcon />
            </div>
            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </section>

        {/* Completion Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">You're all set</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're ready to generate personalized actions just for you
          </p>
          <button 
            onClick={handleGenerateActions}
            className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-medium text-lg"
          >
            Generate my actions
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Left side - Logo and contact */}
            <div className="md:col-span-1">
              <div className="mb-4">
                <Link to="/" className="text-2xl font-bold text-gray-900">
                  MoodMigo
                </Link>
              </div>
              <div className="text-gray-600 space-y-2">
                <p>Los Angeles</p>
                <p>1000 angel hello</p>
                <p>support@moodmigo.com</p>
              </div>
              <div className="flex space-x-3 mt-4">
                <SocialIcon>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </SocialIcon>
                <SocialIcon>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </SocialIcon>
                <SocialIcon>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </SocialIcon>
                <SocialIcon>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </SocialIcon>
              </div>
            </div>

            {/* About us */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About us</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/mission" className="hover:text-gray-900">Our mission</Link></li>
                <li><Link to="/how-it-works" className="hover:text-gray-900">How it works</Link></li>
                <li><Link to="/testimonials" className="hover:text-gray-900">Testimonials</Link></li>
                <li><Link to="/blog" className="hover:text-gray-900">Blog</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/community" className="hover:text-gray-900">Community</Link></li>
                <li><Link to="/support" className="hover:text-gray-900">Support</Link></li>
                <li><Link to="/contact" className="hover:text-gray-900">Contact us</Link></li>
                <li><Link to="/careers" className="hover:text-gray-900">Careers</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom footer */}
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2025 MoodMigo. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link to="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">Privacy policy</Link>
              <Link to="/terms" className="text-gray-600 hover:text-gray-900 text-sm">Terms of service</Link>
              <Link to="/cookies" className="text-gray-600 hover:text-gray-900 text-sm">Cookie settings</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
