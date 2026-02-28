import React, { useState } from 'react';
import { Menu, X, PlaySquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/images/logo_nav.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Videos', href: '#videos' },
        { name: 'About', href: '#about' },
        { name: 'Plan', href: '#packages' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-[#0f0f11]/95 backdrop-blur-md py-4 border-b border-white/5">
            <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
                <a href="#home" className="flex items-center gap-3 group transition-transform hover:scale-105">
                    <img src={logoImg} alt="Pixeltrion Logo" className="h-6 md:h-8 w-auto object-contain" />
                    <span className="text-white text-xl md:text-2xl font-bold tracking-wide group-hover:text-[#fe564a] transition-colors">Pixeltrion</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white ml-auto" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-[#0f0f11] border-t border-white/10 md:hidden"
                    >
                        <div className="flex flex-col items-start px-6 py-6 space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-2 text-lg font-medium text-gray-300 hover:text-white"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
