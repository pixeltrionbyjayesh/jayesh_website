import React from 'react';
import { motion } from 'framer-motion';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const VideoPage = () => {
    return (
        <div className="bg-[#0f0f11] min-h-screen w-full flex flex-col">
            {/* Dynamic Intro Header & Featured Video */}
            <section className="pt-32 pb-10 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                <div className="container mx-auto px-6 relative z-10 text-center mb-12 md:mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-tight">
                            Cinematic <span className="text-[#fe564a]">Masterpieces</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                            Dive into our video portfolio. Every frame is crafted with emotion, precision, and an unwavering passion for visual storytelling.
                        </p>
                    </motion.div>
                </div>

                {/* Featured Highlight Video */}
                <div className="container mx-auto px-6 mb-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full aspect-[21/9] md:aspect-[21/9] lg:aspect-[21/8] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(254,86,74,0.15)] relative group cursor-pointer"
                    >
                        <iframe
                            src="https://player.vimeo.com/video/1147803618?autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0"
                            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 pointer-events-none"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
                        <div className="absolute bottom-8 left-8 right-8 pointer-events-none flex justify-between items-end">
                            <div>
                                <span className="text-[#fe564a] font-bold tracking-widest text-sm uppercase mb-2 block">Featured Premiere</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">The Grand Vision Cinematic</h2>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Portfolio />
            <Footer />
        </div>
    );
};

export default VideoPage;
