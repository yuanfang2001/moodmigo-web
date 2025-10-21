import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import p2Image from '/images/p2.png';
import p3Image from '/images/p3.png';
import p4Image from '/images/p4.png';
import p5Image from '/images/p5.png';
import p6Image from '/images/p6.png';
import p7Image from '/images/p7.png';
import p1Image from '/images/p1.png';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* --- Hero Section --- */}
        <section className="flex flex-col justify-center items-center text-center py-32 bg-white">
          <p className="text-sm text-gray-500 mb-2">Mood</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">How it works</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how MoodMigo transforms your emotional state into clear, actionable steps
          </p>
        </section>

        {/* --- Five Steps Section --- */}
        <section className="py-24 px-4 sm:px-8 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-16">
              <p className="text-sm text-gray-500 mb-2">Steps</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-10">
                Five simple steps to understand and improve your mood
              </h2>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left column - Large card (Preference setup) */}
              <div className="md:row-span-2">
                <div className="border rounded-2xl shadow-sm bg-white p-6 flex flex-col justify-between hover:shadow-md transition h-full">
                  {/* Top small image */}
                  <div className="mb-4">
                    <img
                      src={p2Image}
                      alt="Preference setup small"
                      className="w-16 h-16 mx-auto mb-4"
                    />
                  </div>
                  
                  {/* Large image */}
                  <div className="mb-6">
                    <img
                      src={p3Image}
                      alt="Preference setup"
                      className="w-full h-48 object-cover rounded-lg mx-auto"
                    />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Mood</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Preference setup
                    </h3>
                    <p className="text-gray-600">
                      Customize your experience with personal preferences and interests
                    </p>
                  </div>
                </div>
              </div>

              {/* Middle column - Top card (Mood capture) */}
              <div>
                <div className="border rounded-2xl shadow-sm bg-white p-6 flex flex-col justify-between hover:shadow-md transition h-full">
                  <img
                    src={p4Image}
                    alt="Mood capture"
                    className="w-20 h-20 mx-auto mb-4"
                  />
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Input</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Mood capture
                    </h3>
                    <p className="text-gray-600">
                      Share your current emotional state with a simple emoji
                    </p>
                  </div>
                </div>
              </div>

              {/* Right column - Top card (Emotion insights) */}
              <div>
                <div className="border rounded-2xl shadow-sm bg-white p-6 flex flex-col justify-between hover:shadow-md transition h-full">
                  <img
                    src={p6Image}
                    alt="Emotion insights"
                    className="w-20 h-20 mx-auto mb-4"
                  />
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Analyze</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Emotion insights
                    </h3>
                    <p className="text-gray-600">
                      Our AI understands the nuance of your emotional landscape
                    </p>
                  </div>
                </div>
              </div>

              {/* Middle column - Bottom card (Action recommendations) */}
              <div>
                <div className="border rounded-2xl shadow-sm bg-white p-6 flex flex-col justify-between hover:shadow-md transition h-full">
                  <img
                    src={p5Image}
                    alt="Action recommendations"
                    className="w-20 h-20 mx-auto mb-4"
                  />
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Generate</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Action recommendations
                    </h3>
                    <p className="text-gray-600">
                      Personalized micro-actions tailored to your specific emotional needs
                    </p>
                  </div>
                </div>
              </div>

              {/* Right column - Bottom card (Feedback loop) */}
              <div>
                <div className="border rounded-2xl shadow-sm bg-white p-6 flex flex-col justify-between hover:shadow-md transition h-full">
                  <img
                    src={p7Image}
                    alt="Feedback loop"
                    className="w-20 h-20 mx-auto mb-4"
                  />
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Improve</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Feedback loop
                    </h3>
                    <p className="text-gray-600">
                      Help us refine our recommendations by sharing your experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Simple Section --- */}
        <section className="py-20 bg-white text-center">
          <div className="text-4xl mb-6">😄</div>
          <p className="text-sm text-gray-600 mb-2">Simple</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Mood meets action in seconds
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Enter your current feeling. We'll help you move forward.
          </p>

          {/* Demo image */}
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-300 shadow-md">
            <img
              src={p1Image}
              alt="MoodMigo User Guide"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </section>

        {/* --- Three-Stage Process Section --- */}
        <section className="py-24 px-4 sm:px-8 lg:px-16 bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Three blocks stacked vertically */}
            <div className="space-y-16">
              {/* Block 1 - Understand */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-16 h-16 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 mb-2">Understand</p>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-serif">
                  Deep emotional intelligence
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our AI decodes the complexity of your mood, analyzing intensity and contextual nuances.
                </p>
              </div>

              {/* Block 2 - Transform */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-16 h-16 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 mb-2">Transform</p>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-serif">
                  Personalized action recommendations
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Receive 3-5 targeted micro-actions designed to shift your emotional state positively.
                </p>
              </div>

              {/* Block 3 - Evolve */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-16 h-16 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 mb-2">Evolve</p>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-serif">
                  Continuous emotional learning
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Rate our suggestions to help us improve future recommendations. Your feedback matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Detailed Explanation Section --- */}
        <section className="py-24 px-4 sm:px-8 lg:px-16 bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Text Block */}
            <div className="space-y-6 text-left">
              <p className="text-lg text-gray-700 leading-relaxed font-serif">
                In an age where technology increasingly intersects with our inner world, emotional intelligence has become the next frontier of human-AI collaboration. The journey begins with understanding — the foundation of all emotional connection. By decoding the complexity of a person's mood, an AI system can read subtle nuances, contextual cues, and emotional intensity that often go unnoticed. This stage mirrors how we, as humans, first learn to empathize: by truly listening before acting.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed font-serif">
                The second stage, transformation, is where understanding turns into meaningful change. Through personalized action recommendations, users receive micro-steps designed to guide their emotions toward balance and positivity. These are not one-size-fits-all solutions, but targeted interventions that respond to each individual's unique emotional landscape. Here, technology becomes a mirror and a motivator — offering gentle nudges rather than commands.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed font-serif">
                Finally comes evolution — the process of continuous emotional learning. Feedback loops allow the system to grow smarter and more attuned over time, while users develop a stronger awareness of their own emotional patterns. Each interaction becomes a moment of mutual growth between human and machine.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed font-serif">
                Together, these three stages — understand, transform, and evolve — form a cycle of emotional co-creation. They redefine the role of AI not as a cold observer, but as a compassionate companion helping us translate feelings into forward movement.
              </p>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Ready to transform your mood
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Instant emotional support without complicated downloads or signups
              </p>
              
              <button className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                REGISTER NOW
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
