import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import BTS from './components/BTS';
import Testimonials from './components/Testimonials';
import Gear from './components/Gear';
import Packages from './components/Packages';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <BTS />
      <Testimonials />
      <Gear />
      <Packages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
