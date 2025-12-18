import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
    "All",
    "Wedding Films",
    "Festival Films",
    "Lifestyle Events",
    "Car Delivery",
    "Motovlogging",
    "Reels"
];

const portfolioItems = [
    { id: 2, category: "Festival Films", title: "Ghartanpadachi Aai Mauli", image: "https://images.unsplash.com/photo-1567591414240-e2152d0a84d2?q=80&w=2874&auto=format&fit=crop", video: "https://ik.imagekit.io/verticore/video2?updatedAt=1764009576238" },
    { id: 3, category: "Festival Films", title: "Navratri Celebration", image: "https://images.unsplash.com/photo-1567591414240-e2152d0a84d2?q=80&w=2874&auto=format&fit=crop", video: "https://ik.imagekit.io/verticore/video1?updatedAt=1764009535705" },
    { id: 4, category: "Festival Films", title: "Shirdi Nagar Cha Raja", image: "https://images.unsplash.com/photo-1567591414240-e2152d0a84d2?q=80&w=2874&auto=format&fit=crop", video: "https://ik.imagekit.io/verticore/Shirdi%20Nagar%20Cha%20Raja%20%E2%99%A5%EF%B8%8F%20.%20@shreeboyssarvajanikutsavmandal%20.%20_maghiganeshutsav%20_ganpatibappamorya_%20_ganpatiphotography.mp4" },
    { id: 5, category: "Festival Films", title: "Navratri Garba Night", image: "https://images.unsplash.com/photo-1567591414240-e2152d0a84d2?q=80&w=2874&auto=format&fit=crop", video: "https://ik.imagekit.io/verticore/%E0%A4%98%E0%A4%B0%E0%A4%9F%E0%A4%A8%E0%A4%AA%E0%A4%BE%E0%A4%A1%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%9A%E0%A5%80%20%E0%A4%86%E0%A4%88%20_%20%E0%A4%AE%E0%A4%BE%E0%A4%8A%E0%A4%B2%E0%A5%80%20_%20%E0%A5%A8%E0%A5%A6%E0%A5%A8%E0%A5%AB%20...%20%20_%20%E0%A4%86%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%BF%E0%A4%A4%20_%20%E0%A4%95%E0%A5%88.%20%E0%A4%A8%E0%A4%B5%E0%A4%BF%E0%A4%A8%20%E0%A4%B6%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%AE%20%E0%A4%B6%E0%A5%87%E0%A4%9F%E0%A5%8D%E0%A4%9F%E0%A5%80%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A4%E0%A4%BF%E0%A4%B7%E0%A5%8D%E0%A4%A0%E0%A4%BE%E0%A4%A8%20(%E0%A4%B0%E0%A4%9C%E0%A4%BF)%20.%20.%20_bhagwadhari%20_navratri%20_navratrispecial%20_jaishreeram%20_power%20_maharashtra%20_dahisar%20_garbanight%20_dailyreels%20_instagram%20_instamo.mp4" },
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

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={item.id}
                                whileHover={{ scale: 1.05 }}
                                className="relative aspect-[9/16] overflow-hidden bg-zinc-900 rounded-lg border border-zinc-800 hover:border-[#fe564a]/50 transition-all duration-300 group"
                            >
                                <video
                                    src={item.video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#fe564a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
