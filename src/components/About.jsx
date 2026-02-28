import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Facebook, Twitter, Dribbble, Cloud, PlaySquare, Award } from 'lucide-react';

import jayeshImg from '../assets/images/jayesh_pf.webp';

const About = () => {
    const [openAccordion, setOpenAccordion] = useState('Creativity');

    const toggleAccordion = (title) => {
        setOpenAccordion(openAccordion === title ? '' : title);
    };

    return (
        <div id="about" className="bg-[#0f0f11] text-white font-sans w-full">

            {/* 1. Page Header */}
            <section className="py-24 border-b border-white/5 bg-[#141416] text-center relative overflow-hidden mt-20 md:mt-0">
                {/* Background pattern */}
                <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
                    <p className="text-gray-400 text-sm font-medium tracking-widest"><span className="text-[#fe564a]">Home</span> / About Me</p>
                </div>
            </section>

            {/* 2. Main About Section */}
            <section className="py-20 md:py-32 container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left - Text & Bio */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#fe564a]"><PlaySquare size={16} className="fill-[#fe564a] text-[#fe564a]" /></span>
                            <span className="text-[#fe564a] text-xs font-bold tracking-[0.2em] uppercase">About Me</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Hi, I'm Jayesh Gosavi<br /><span className="text-[#fe564a]">Visual Storyteller</span>
                        </h2>

                        <div className="space-y-6 mt-8">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Certified Video Editor, Cinematographer, and Photographer with 2+ years of experience in cinematic storytelling, brand films, and digital content production.
                            </p>
                            <p className="text-gray-400 text-base leading-relaxed">
                                Expertise spans pre-production through final delivery, including shooting, editing, color grading, and multi-platform distribution. Specialized in brand collaborations, podcasts, and high-engagement social media content.
                            </p>
                        </div>
                    </div>

                    {/* Right - Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-xl overflow-hidden shadow-2xl group pb-4 pr-4">
                            {/* Decorative offset border */}
                            <div className="absolute inset-0 border border-[#fe564a]/30 rounded-xl mt-4 ml-4 pointer-events-none group-hover:mt-6 group-hover:ml-6 transition-all duration-500"></div>
                            {/* Image placeholder */}
                            <div className="relative z-10 w-full aspect-[4/5] rounded-xl overflow-hidden">
                                <img src={jayeshImg} alt="Jayesh Gosavi" className="w-full h-full object-cover object-center transition-all duration-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    );
};

export default About;
