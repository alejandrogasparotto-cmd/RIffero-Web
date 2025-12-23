import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import ServiceFooter from './components/ServiceFooter';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <ProductSection />
      </main>
      <ServiceFooter />
    </div>
  );
}

export default App;