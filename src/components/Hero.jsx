import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Mail, MessageCircle } from 'lucide-react';

import img1 from '../assets/images/jayesh_1.webp';
import img2 from '../assets/images/jayesh_1_1.webp';
import img3 from '../assets/images/jayesh_1_2.webp';
import img4 from '../assets/images/jayesh_1_3.webp';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen w-full overflow-hidden bg-[#0f0f11] pt-32 pb-20 flex flex-col justify-center"
        >
            {/* Background dark pattern approximation */}
            <div className="absolute inset-0 z-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>

            {/* Main Container */}
            <div className="container mx-auto px-6 max-w-7xl relative z-20 flex flex-col items-center">

                {/* Left Social Links */}
                <div className="hidden lg:flex flex-col items-center gap-6 absolute left-0 top-1/2 -translate-y-1/2 z-30">
                    <span className="text-gray-400 text-xs tracking-[0.2em] uppercase -rotate-90 mb-10 w-20 flex justify-center">Follow</span>
                    <a href="https://wa.link/qcxpl4" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#fe564a] text-white flex items-center justify-center hover:bg-[#ff6b60] transition-colors shadow-[0_0_15px_rgba(254,86,74,0.4)]"><MessageCircle size={14} /></a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pixeltrionbyjayesh@gmail.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 text-gray-400 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors"><Mail size={14} /></a>
                    <a href="https://www.instagram.com/pixeltrion/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 text-gray-400 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors"><Instagram size={14} /></a>
                    <a href="https://www.youtube.com/@Pixeltrionbyjayesh" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 text-gray-400 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors"><Youtube size={14} /></a>
                </div>

                {/* Content */}
                <div className="w-full flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white mb-6 leading-tight tracking-tight uppercase">
                            Elevate Your<br />
                            <span className="text-[#fe564a]">Narrative.</span>
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto mb-10">
                            Cinematic storytelling, brand films, and high-impact digital content crafted to capture your audience.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="#videos"
                                className="px-8 py-4 bg-[#fe564a] text-white text-sm font-semibold rounded hover:bg-[#ff6b60] transition-colors"
                            >
                                Watch Films
                            </a>
                            <a
                                href="https://wa.link/qcxpl4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 border border-white/20 text-white text-sm font-semibold rounded hover:bg-white/5 transition-colors"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Cards Row */}
                    <div className="mt-20 flex justify-center items-center w-full h-48 sm:h-64 md:h-80 perspectiva-1000">
                        {[img1, img2, img3, img4].map((src, index) => {
                            const rotation = [-4, 6, -8, 5][index];
                            const yOffset = [10, -5, 15, -10][index];

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 60 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.2 + index * 0.15, ease: [0.25, 1, 0.5, 1] }}
                                    whileHover={{ y: yOffset - 15, zIndex: 50, scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } }}
                                    className="relative w-1/4 max-w-[280px] aspect-[3/4] rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl border-4 md:border-8 border-[#0f0f11] bg-zinc-900 group cursor-pointer"
                                    style={{
                                        rotate: `${rotation}deg`,
                                        top: `${yOffset}px`,
                                        marginLeft: index === 0 ? '0' : '-8%',
                                        zIndex: index + 10,
                                    }}
                                >
                                    <img
                                        src={src}
                                        alt={`Portfolio ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

