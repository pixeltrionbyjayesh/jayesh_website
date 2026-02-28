import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import Packages from '../components/Packages';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <Portfolio />
            <About />
            <Contact />
            <Packages />
            <Footer />
        </div>
    );
};

export default HomePage;
