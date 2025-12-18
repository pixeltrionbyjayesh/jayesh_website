import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Enhanced Overlays */}
            <div className="absolute inset-0 z-0">
                {/* Multi-layered gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-black/90 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fe564a]/20 via-transparent to-transparent z-10" />

                <img
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2942&auto=format&fit=crop"
                    alt="Cinematography Background"
                    className="w-full h-full object-cover scale-105"
                />
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#fe564a]/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FBFAFC]/10 rounded-full blur-3xl"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
                {/* Logo with glow effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute inset-0 blur-2xl opacity-30">
                        <img
                            src="https://ik.imagekit.io/verticore/Untitled%20(3).png"
                            alt="PIXELTRION Glow"
                            className="h-24 md:h-32 lg:h-40 mx-auto mb-6 object-contain"
                        />
                    </div>
                    <img
                        src="https://ik.imagekit.io/verticore/Untitled%20(3).png"
                        alt="PIXELTRION"
                        className="h-24 md:h-32 lg:h-40 mx-auto mb-8 object-contain relative z-10"
                    />
                </motion.div>

                {/* Tagline with elegant styling */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mb-6"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#fe564a]"></div>
                        <h2 className="text-[#FBFAFC]/90 text-xs md:text-sm uppercase tracking-[0.4em] font-light">
                            Cinematography | Event Films | Wedding Stories
                        </h2>
                        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#fe564a]"></div>
                    </div>
                </motion.div>

                {/* Description with premium typography */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <p className="text-[#FBFAFC]/80 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-12">
                        High-impact visuals for weddings, festivals, celebrations, and lifestyle events.
                        <span className="block mt-2 text-[#fe564a] text-sm md:text-base font-normal">
                            Crafting cinematic stories that last forever
                        </span>
                    </p>
                </motion.div>

                {/* CTA Button with enhanced styling */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#portfolio"
                        className="group relative px-10 py-4 bg-gradient-to-r from-[#fe564a] to-[#ff7a66] text-white overflow-hidden transition-all duration-300 uppercase tracking-widest text-sm font-semibold hover:shadow-2xl hover:shadow-[#fe564a]/50 hover:scale-105"
                    >
                        <span className="relative z-10">View Portfolio</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a66] to-[#fe564a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                    <a
                        href="#contact"
                        className="px-10 py-4 border-2 border-[#FBFAFC]/30 text-[#FBFAFC] hover:border-[#FBFAFC] hover:bg-[#FBFAFC]/10 backdrop-blur-sm transition-all duration-300 uppercase tracking-widest text-sm font-semibold"
                    >
                        Get in Touch
                    </a>
                </motion.div>
            </div>

            {/* Elegant Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-[2px] h-12 bg-gradient-to-b from-[#fe564a] via-[#fe564a]/50 to-transparent"
                />
                <span className="text-[#FBFAFC]/50 text-xs uppercase tracking-widest">Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
