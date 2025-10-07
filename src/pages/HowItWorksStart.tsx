import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HowItWorksStart() {
  // 处理页面内滚动到 #simple
  const scrollToSimple = () => {
    const element = document.getElementById('simple');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ui-bg">
      <Navbar />
      <main className="mx-auto max-w-[1200px] px-4">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 text-center">
          <p className="text-sm text-ink-600 mb-2">How</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 mb-6">
            How it works
          </h1>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto mb-8">
            Discover how MoodMigo transforms your emotional state into clear, actionable steps
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToSimple}
              className="px-8 py-3 bg-brand-primary text-white rounded-full font-medium hover:bg-brand-primaryHover transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            >
              Start
            </button>
            <button className="px-8 py-3 bg-ui-muted text-ink-900 border border-ui-border rounded-full font-medium hover:bg-ui-border transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
              Learn
            </button>
          </div>
        </section>

        {/* Simple Section */}
        <section id="simple" className="py-16 sm:py-20">
          <div className="text-center">
            {/* Emoji Icon */}
            <div className="w-14 h-14 bg-ui-muted border border-ui-border rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              😀
            </div>
            
            <p className="text-sm text-ink-600 mb-2">Simple</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-4">
              Mood meets action in seconds
            </h2>
            <p className="text-lg text-ink-600 max-w-2xl mx-auto mb-8">
              Enter your current feeling. We'll help you move forward.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-6 py-3 bg-ui-muted text-ink-900 border border-ui-border rounded-full font-medium hover:bg-ui-border transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
                How
              </button>
              <button className="px-6 py-3 bg-ui-muted text-ink-900 border border-ui-border rounded-full font-medium hover:bg-ui-border transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
                Watch
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Video/Image Placeholder */}
            <div className="aspect-video bg-ui-muted border border-ui-border rounded-2xl max-w-4xl mx-auto">
              <div className="w-full h-full flex items-center justify-center">
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
                  <p className="text-ink-600 text-sm">Video placeholder</p>
                  <p className="text-ink-600 text-xs mt-1">Demo video will appear here</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
