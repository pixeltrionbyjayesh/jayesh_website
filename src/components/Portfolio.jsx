import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
    "All",
    "Wedding Films",
    "Festival Films",
    "Automotive"
];

const portfolioItems = [
    // Wedding Films - 9:16 vertical first, then 16:9 horizontal
    { id: 1, category: "Wedding Films", title: "Wedding Film 1", aspectRatio: "9/16", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147804503?loop=1" },
    { id: 6, category: "Wedding Films", title: "Wedding Film 2", aspectRatio: "9/16", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147804457?loop=1" },
    { id: 7, category: "Wedding Films", title: "Wedding Film 3", aspectRatio: "16/9", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147803886?loop=1" },
    { id: 8, category: "Wedding Films", title: "Wedding Film 4", aspectRatio: "16/9", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147803841?loop=1" },
    { id: 9, category: "Wedding Films", title: "Wedding Film 5", aspectRatio: "16/9", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147803618?loop=1" },

    // Festival Films - 9:16 vertical first, then 16:9 horizontal
    { id: 10, category: "Festival Films", title: "Festival Film 1", aspectRatio: "9/16", image: "https://images.unsplash.com/photo-1567591414240-e2152d0a84d2?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147803389?loop=1" },
    { id: 11, category: "Festival Films", title: "Festival Film 2", aspectRatio: "9/16", image: "https://images.unsplash.com/photo-1567591414240-e2152d0a84d2?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147803798?loop=1" },
    { id: 12, category: "Festival Films", title: "Festival Film 3", aspectRatio: "9/16", image: "https://images.unsplash.com/photo-1567591414240-e2152d0a84d2?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147803724?loop=1" },
    { id: 14, category: "Festival Films", title: "Festival Film 5", aspectRatio: "9/16", image: "https://images.unsplash.com/photo-1567591414240-e2152d0a84d2?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147804079?loop=1" },
    { id: 15, category: "Festival Films", title: "Festival Film 6", aspectRatio: "9/16", image: "https://images.unsplash.com/photo-1567591414240-e2152d0a84d2?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147804116?loop=1" },
    { id: 16, category: "Festival Films", title: "Festival Film 7", aspectRatio: "9/16", image: "https://images.unsplash.com/photo-1567591414240-e2152d0a84d2?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147804151?loop=1" },
    { id: 17, category: "Festival Films", title: "Festival Film 8", aspectRatio: "9/16", image: "https://images.unsplash.com/photo-1567591414240-e2152d0a84d2?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147804271?loop=1" },
    { id: 13, category: "Festival Films", title: "Festival Film 4", aspectRatio: "16/9", image: "https://images.unsplash.com/photo-1567591414240-e2152d0a84d2?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147803996?loop=1" },

    // Automotive - All 9:16 vertical
    { id: 18, category: "Automotive", title: "Automotive 1", aspectRatio: "9/16", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147804332?loop=1" },
    { id: 19, category: "Automotive", title: "Automotive 2", aspectRatio: "9/16", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147804421?loop=1" },
    { id: 20, category: "Automotive", title: "Automotive 3", aspectRatio: "9/16", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147804389?loop=1" },
    { id: 21, category: "Automotive", title: "Automotive 4", aspectRatio: "9/16", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147804234?loop=1" },
    { id: 22, category: "Automotive", title: "Automotive 5", aspectRatio: "9/16", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147804192?loop=1" },
    { id: 23, category: "Automotive", title: "Automotive 6", aspectRatio: "9/16", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147803931?loop=1" },
    { id: 24, category: "Automotive", title: "Automotive 7", aspectRatio: "9/16", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147803757?loop=1" },
    { id: 25, category: "Automotive", title: "Automotive 8", aspectRatio: "9/16", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147803645?loop=1" },
    { id: 26, category: "Automotive", title: "Automotive 9", aspectRatio: "9/16", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2874&auto=format&fit=crop", video: "https://player.vimeo.com/video/1147803442?loop=1" },
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems = activeCategory === "All"
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeCategory);

    return (
        <section id="portfolio" className="py-20 bg-zinc-900 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#fe564a]/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">Selected Works</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#fe564a] to-[#ff8a7a] mx-auto mb-4"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        A curated collection of our finest cinematic creations
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 text-sm uppercase tracking-wider border-2 transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-gradient-to-r from-[#fe564a] to-[#ff7a66] text-white border-[#fe564a] shadow-lg shadow-[#fe564a]/30'
                                    : 'bg-transparent text-[#FBFAFC]/60 border-zinc-700 hover:border-[#fe564a] hover:text-[#FBFAFC]'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr" style={{ gridAutoFlow: 'dense' }}>
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                key={item.id}
                                whileHover={{ scale: 1.05 }}
                                className={`relative overflow-hidden bg-zinc-900 rounded-lg border border-zinc-800 hover:border-[#fe564a]/50 transition-all duration-300 group ${item.aspectRatio === '16/9' ? 'md:col-span-2' : ''
                                    }`}
                                style={{ aspectRatio: item.aspectRatio }}
                            >
                                {item.video.includes('vimeo.com') ? (
                                    <iframe
                                        src={item.video}
                                        className="w-full h-full object-cover"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    <video
                                        src={item.video}
                                        controls
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                )}
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#fe564a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
