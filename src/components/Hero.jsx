import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, useAnimationFrame } from 'framer-motion';

import img1 from '../assets/images/conor-luddy-IVaKksEZmZA-unsplash.webp';
import img2 from '../assets/images/deepak-rastogi-9OJ_FuqdaPM-unsplash.webp';
import img3 from '../assets/images/kyle-loftus-DDxWBUhLkmo-unsplash.webp';
import img4 from '../assets/images/prithiviraj-a-DD4hLcVJT00-unsplash.webp';
import img5 from '../assets/images/reinhart-julian-WxM465oM4j4-unsplash.webp';

const Hero = () => {
    const ref = useRef(null);
    const { scrollY } = useScroll();
    const [isMobile, setIsMobile] = useState(false);

    // Mouse follow effect
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    // Mobile detection
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        let { left, top, width, height } = currentTarget.getBoundingClientRect();
        let x = (clientX - left) / width;
        let y = (clientY - top) / height;

        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <section
            id="home"
            ref={ref}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen w-full overflow-hidden bg-black"
        >
            {/* Simple Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />

            {/* Scattered Images Behind - with strong parallax */}
            <div className="absolute inset-0 z-10">
                {[
                    { src: img1, x: 12, y: 18, xMobile: 20, yMobile: 15, rotate: -15, rotateMobile: -8, scale: 0.9 },
                    { src: img2, x: 40, y: 12, xMobile: 80, yMobile: 25, rotate: -20, rotateMobile: 6, scale: 1.1 },
                    { src: img3, x: 72, y: 18, xMobile: 50, yMobile: 50, rotate: 15, rotateMobile: -4, scale: 0.95 },
                    { src: img4, x: 20, y: 65, xMobile: 25, yMobile: 80, rotate: -8, rotateMobile: 10, scale: 1.05 },
                    { src: img5, x: 65, y: 65, xMobile: 75, yMobile: 70, rotate: 8, rotateMobile: -6, scale: 1 },
                ].map((item, index) => {
                    // Enhanced parallax calculations - more dynamic
                    const parallaxMultiplier = isMobile ? 40 + index * 10 : 80 + index * 20;
                    const parallaxX = (mouseX.get() - 0.5) * parallaxMultiplier;
                    const parallaxY = (mouseY.get() - 0.5) * parallaxMultiplier;

                    // Scroll parallax - different speeds for depth
                    const scrollParallax = useTransform(
                        scrollY,
                        [0, 500],
                        [0, (index - 2) * 40] // Reduced from 50
                    );

                    return (
                        <motion.div
                            key={index}
                            layoutId={`hero-img-${index}`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: 0.5,
                                scale: item.scale,
                                x: parallaxX,
                                y: [parallaxY - 8, parallaxY + 8], // Enhanced floating ±8px
                                rotateZ: isMobile ? [item.rotateMobile - 2, item.rotateMobile + 2] : [item.rotate - 2, item.rotate + 2],
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2 + index * 0.08,
                                opacity: { duration: 1.2 },
                                x: { type: "spring", stiffness: 40, damping: 10, mass: 0.5 },
                                y: {
                                    duration: 4 + index * 0.5, // 4-6.5 seconds per cycle
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut"
                                },
                                rotateZ: {
                                    duration: 5 + index * 0.5, // 5-7.5 seconds per cycle
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut"
                                },
                            }}
                            whileHover={{
                                scale: item.scale * 1.05,
                                opacity: 0.5,
                                transition: {
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 10
                                }
                            }}
                            className="absolute w-48 h-60 sm:w-44 sm:h-56 md:w-56 md:h-72 lg:w-72 lg:h-96 bg-zinc-900/40 sm:bg-zinc-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
                            style={{
                                left: isMobile ? `${item.xMobile}%` : `${item.x}%`,
                                top: isMobile ? `${item.yMobile}%` : `${item.y}%`,
                                transform: 'translate(-50%, -50%)',
                                y: scrollParallax,
                                willChange: 'transform, opacity',
                            }}
                        >
                            <img
                                src={item.src}
                                alt="Cinematic showcase"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Main Content - Centered Layout - On Top */}
            <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 max-w-7xl mx-auto">

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center text-center space-y-6 sm:space-y-8 w-full"
                >
                    {/* Tagline */}
                    <div className="overflow-hidden">
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
                            className="flex items-center justify-center gap-2 sm:gap-4"
                        >
                            <div className="h-[1px] w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent to-[#fe564a]"></div>
                            <h2 className="text-white/90 text-[0.6rem] sm:text-xs md:text-sm uppercase tracking-[0.3em] sm:tracking-[0.5em] font-light whitespace-nowrap">
                                Cinematography | Event Films
                            </h2>
                            <div className="h-[1px] w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent to-[#fe564a]"></div>
                        </motion.div>
                    </div>

                    {/* Main Heading with Gradient */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="max-w-4xl px-2 sm:px-4"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white mb-4 sm:mb-6 tracking-wide leading-tight">
                            Capture the{" "}
                            <span className="font-serif italic bg-gradient-to-r from-[#fe564a] via-[#ff8a80] to-[#fe564a] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                                Moment
                            </span>
                        </h1>
                        <p className="text-white/70 text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed px-4 sm:px-0">
                            Crafting cinematic stories that transcend time.
                        </p>
                    </motion.div>

                    {/* CTA Buttons with Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
                    >
                        <motion.a
                            href="#portfolio"
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 bg-[#fe564a] text-white overflow-hidden transition-all duration-500 uppercase tracking-widest text-xs font-bold rounded-lg hover:shadow-[0_0_40px_rgba(254,86,74,0.5)] flex items-center justify-center gap-2"
                        >
                            <span className="relative z-10 group-hover:tracking-[0.2em] transition-all duration-300">View Portfolio</span>
                            <motion.span
                                className="text-lg"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-8 py-4 border-2 border-white/50 text-white hover:border-white hover:bg-white/10 transition-all duration-300 uppercase tracking-widest text-xs font-bold backdrop-blur-md bg-white/5 rounded-lg flex items-center justify-center gap-2"
                        >
                            <span className="relative z-10">Get in Touch</span>
                            <motion.span
                                className="text-lg"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator - Centered */}
            <motion.div
                className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-30"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-[#fe564a] to-transparent mx-auto mb-2"></div>
                <span className="text-white/30 text-[0.55rem] sm:text-[0.625rem] uppercase tracking-[0.3em] sm:tracking-[0.35em]">Scroll</span>
            </motion.div>

            {/* Add CSS for gradient animation */}
            <style jsx>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient {
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </section>
    );
};

export default Hero;
