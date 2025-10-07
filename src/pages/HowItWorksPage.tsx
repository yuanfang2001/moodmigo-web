import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Arrow 组件
function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

// TransformIcon 组件
function TransformIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 7h6m0 0-3-3m3 3-3 3M17 17H11m0 0 3 3m-3-3 3-3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// EvolveIcon 组件
function EvolveIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
      {/* 气泡 */}
      <rect x="5" y="4" width="14" height="12" rx="2"></rect>
      <path d="M9 20l3-4 3 4"></path>
      {/* 感叹号 */}
      <path d="M12 8v4"></path>
      <circle cx="12" cy="14.5" r="0.8" fill="currentColor"></circle>
    </svg>
  );
}

// InfoCard 组件
interface InfoCardProps {
  kicker: string;
  title: string;
  desc: string;
  cta: string;
  to?: string;
}

function InfoCard({ kicker, title, desc, cta, to = "/how-it-works/start" }: InfoCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-ui-border bg-white p-6">
      <div className="flex-1">
        <p className="text-sm font-medium text-ink-600 mb-2">{kicker}</p>
        <h3 className="text-xl font-semibold text-ink-900 mb-3">{title}</h3>
        <p className="text-ink-600 text-sm leading-relaxed mb-4">{desc}</p>
      </div>
      
      {/* 4:3 灰色占位 */}
      <div className="mt-4 aspect-[4/3] w-full rounded-lg border border-ui-border bg-ui-muted"></div>
      
      {/* CTA 按钮 */}
      <Link
        to={to}
        className="mt-4 inline-flex items-center gap-1 rounded-full border border-ui-border bg-white px-4 py-2 text-ink-900 hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
      >
        {cta}
        <Arrow />
      </Link>
    </div>
  );
}

export default function HowItWorksPage() {

  return (
    <div className="min-h-screen bg-ui-bg">
      <Navbar />
      <main className="mx-auto max-w-[1200px] px-4">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 text-center">
          <p className="text-sm text-ink-600 mb-2">How</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 mb-4">
            How it works
          </h1>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto">
            Discover the simple steps to transform your mood tracking into meaningful insights and actions
          </p>
        </section>

        {/* Journey Section */}
        <section id="journey" className="py-12 sm:py-16">
          <div className="mx-auto max-w-[1200px] px-4">
            {/* 标题区域 */}
            <div className="text-center mb-12">
              <p className="text-sm text-ink-600 mb-2">Journey</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-4">
                Your path to emotional clarity
              </h2>
              <p className="text-lg text-ink-600 max-w-2xl mx-auto">
                Five simple steps to understand and improve your mood
              </p>
            </div>

            {/* 主栅格布局 */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* 左侧大卡 */}
              <div className="lg:row-span-2">
                <div className="rounded-2xl border border-ui-border bg-white p-6 h-full flex flex-col">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-ink-600 mb-2">Mood</p>
                    <h3 className="text-2xl font-bold text-ink-900 mb-4">
                      Preference setup
                    </h3>
                    <p className="text-ink-600 leading-relaxed mb-6">
                      Customize your experience with personal preferences and interests
                    </p>
                    
                    {/* 两个次按钮 */}
                    <div className="space-y-3">
                      <button className="w-full px-4 py-2 bg-white text-ink-900 border border-ui-border rounded-full font-medium hover:bg-ui-muted transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
                        Begin
                      </button>
                      <button className="w-full px-4 py-2 bg-white text-ink-900 border border-ui-border rounded-full font-medium hover:bg-ui-muted transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
                        Details
                        <svg viewBox="0 0 24 24" className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M13 5l7 7-7 7"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* 16:9 灰色占位 */}
                  <div className="mt-6 aspect-[16/9] w-full rounded-xl border border-ui-border bg-ui-muted"></div>
                </div>
              </div>

              {/* 右侧四张信息卡 */}
              <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
                <InfoCard
                  kicker="Input"
                  title="Mood capture"
                  desc="Share your current emotional state with a simple emoji"
                  cta="Select"
                />
                
                <InfoCard
                  kicker="Analyze"
                  title="Emotion insights"
                  desc="Our AI understands the nuance of your emotional landscape"
                  cta="Explore"
                />
                
                <InfoCard
                  kicker="Generate"
                  title="Action recommendations"
                  desc="Personalized micro-actions tailored to your specific emotional needs"
                  cta="View"
                />
                
                <InfoCard
                  kicker="Improve"
                  title="Feedback loop"
                  desc="Help us refine our recommendations by sharing your experience"
                  cta="Rate"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Understand Section */}
        <section id="understand" className="py-16 sm:py-24 text-center scroll-mt-20">
          <div className="mx-auto max-w-[1200px] px-4">
            {/* 标题区域 */}
            <div className="mb-10">
              <p className="text-sm text-ink-600 mb-2">Understand</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-ink-900 mb-4">
                Deep emotional intelligence
              </h2>
              <p className="text-lg text-ink-600 max-w-2xl mx-auto">
                Our AI decodes the complexity of your mood, analyzing intensity and contextual nuances.
              </p>
            </div>

            {/* 按钮组 */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/how-it-works/start"
                className="inline-flex items-center gap-1 rounded-full border border-ui-border bg-ui-muted px-5 py-2.5 text-ink-900 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Analyze
              </Link>
              <Link
                to="/how-it-works/start"
                className="inline-flex items-center gap-1 rounded-full border border-ui-border bg-ui-muted px-5 py-2.5 text-ink-900 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Explore
                <Arrow />
              </Link>
            </div>

            {/* 大演示区 */}
            <div className="mt-10 sm:mt-12">
              <div className="aspect-[16/9] rounded-2xl border border-ui-border bg-ui-muted w-full">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <svg 
                      className="w-20 h-20 mx-auto mb-4 text-ink-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
                      />
                    </svg>
                    <p className="text-ink-600 text-sm">AI Analysis Demo</p>
                    <p className="text-ink-600 text-xs mt-1">Interactive emotional intelligence demonstration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transform Section */}
        <section id="transform" className="py-16 sm:py-24 text-center scroll-mt-20">
          <div className="mx-auto max-w-[1200px] px-4">
            {/* 顶部图标 */}
            <div className="mx-auto text-ink-900 mb-2">
              <TransformIcon />
            </div>
            
            {/* 标题区域 */}
            <div>
              <p className="text-sm text-ink-600">Transform</p>
              <h2 className="mt-1 text-4xl sm:text-5xl font-bold text-ink-900">
                Personalized action recommendations
              </h2>
              <p className="mt-3 max-w-3xl mx-auto text-ink-600">
                Receive 3–5 targeted micro-actions designed to shift your emotional state positively.
              </p>
            </div>

            {/* 按钮组 */}
            <div className="mt-5 flex justify-center gap-3">
              <Link
                to="/how-it-works/start"
                className="inline-flex items-center gap-1 rounded-full border border-ui-border bg-white px-5 py-2.5 text-ink-900 hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Generate
              </Link>
              <Link
                to="/how-it-works/start"
                className="inline-flex items-center gap-1 rounded-full border border-ui-border bg-white px-5 py-2.5 text-ink-900 hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Discover
                <Arrow />
              </Link>
            </div>

            {/* 超大演示区 */}
            <div className="mt-10 sm:mt-12">
              <div className="aspect-[16/9] w-full rounded-2xl border border-ui-border bg-ui-muted">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <svg 
                      className="w-24 h-24 mx-auto mb-4 text-ink-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                    <p className="text-ink-600 text-sm">Action Recommendations Demo</p>
                    <p className="text-ink-600 text-xs mt-1">Personalized micro-actions for emotional wellness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evolve Section */}
        <section id="evolve" className="py-16 sm:py-24 text-center scroll-mt-20">
          <div className="mx-auto max-w-[1200px] px-4">
            {/* 顶部图标 */}
            <div className="mx-auto mb-2 text-ink-900">
              <EvolveIcon />
            </div>
            
            {/* 标题区域 */}
            <div>
              <p className="text-sm text-ink-600">Evolve</p>
              <h2 className="mt-1 text-4xl sm:text-5xl font-bold text-ink-900">
                Continuous emotional learning
              </h2>
              <p className="mt-3 max-w-3xl mx-auto text-ink-600">
                Rate our suggestions to help us improve future recommendations. Your feedback matters.
              </p>
            </div>

            {/* 按钮组 */}
            <div className="mt-5 flex justify-center gap-3">
              <Link
                to="/how-it-works/start"
                className="inline-flex items-center gap-1 rounded-full border border-ui-border bg-white px-5 py-2.5 text-ink-900 hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Improve
              </Link>
              <Link
                to="/how-it-works/start"
                className="inline-flex items-center gap-1 rounded-full border border-ui-border bg-white px-5 py-2.5 text-ink-900 hover:bg-ui-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Refine
                <Arrow />
              </Link>
            </div>

            {/* 超大占位区 */}
            <div className="mt-10 sm:mt-12">
              <div className="aspect-[16/9] w-full rounded-2xl border border-ui-border bg-ui-muted">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <svg 
                      className="w-24 h-24 mx-auto mb-4 text-ink-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
                      />
                    </svg>
                    <p className="text-ink-600 text-sm">Learning Analytics Demo</p>
                    <p className="text-ink-600 text-xs mt-1">Continuous improvement through user feedback</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready CTA Section */}
        <section id="ready" className="py-16 sm:py-24 text-center scroll-mt-20">
          <div className="mx-auto max-w-[1200px] px-4">
            {/* 标题区域 */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-ink-900">
                Ready to transform your mood
              </h2>
              <p className="mt-3 max-w-3xl mx-auto text-ink-600">
                Instant emotional support without complicated downloads or signups
              </p>
            </div>

            {/* 按钮组 */}
            <div className="mt-6 flex justify-center gap-3">
              <Link
                to="/how-it-works/start"
                className="rounded-full bg-brand-primary px-5 py-2.5 text-white hover:bg-brand-primaryHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Start
              </Link>
              <Link
                to="/how-it-works/start"
                className="rounded-full border border-ui-border bg-ui-muted px-5 py-2.5 text-ink-900 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Learn
              </Link>
            </div>

            {/* 媒体占位区 */}
            <div className="mt-10 sm:mt-12">
              <div className="aspect-[16/9] w-full rounded-2xl border border-ui-border bg-ui-muted">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <svg 
                      className="w-24 h-24 mx-auto mb-4 text-ink-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M13 10V3L4 14h7v7l9-11h-7z" 
                      />
                    </svg>
                    <p className="text-ink-600 text-sm">Get Started Demo</p>
                    <p className="text-ink-600 text-xs mt-1">Transform your mood in seconds</p>
                  </div>
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
