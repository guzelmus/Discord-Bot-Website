import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import PremiumFeatures from './components/PremiumFeatures';
import Pricing from './components/Pricing';
import Stats from './components/Stats';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Hero />
      <Features />
      <PremiumFeatures />
      <Pricing />
      <Stats />
    </div>
  );
}

export default App;