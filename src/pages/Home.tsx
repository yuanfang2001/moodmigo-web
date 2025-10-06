import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import ActionCategories from '../components/ActionCategories';
import Stories from '../components/Stories';
import Technology from '../components/Technology';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-ui-bg">
      <Navbar />
      <main>
        <Hero />
      </main>
      <HowItWorks />
      <ActionCategories />
      <Stories />
      <Technology />
      <Experience />
      <Footer />
    </div>
  );
};

export default Home;
