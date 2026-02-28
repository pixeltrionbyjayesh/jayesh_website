import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
    "All",
    "Automotive",
    "Festival Films",
    "Food",
    "Wedding Films"
];

const videoModules = import.meta.glob('../assets/videos/*.mp4', { eager: true, query: '?url', import: 'default' });
const getVideo = (name) => videoModules[`../assets/videos/${name}`];

const portfolioItems = [
    // Automotive
    { id: 1, category: "Automotive", title: "Automotive 1", aspectRatio: "9/16", video: getVideo("scram_440 (360p).mp4") },
    { id: 2, category: "Automotive", title: "Automotive 2", aspectRatio: "9/16", video: getVideo("scram_440_information_video (360p).mp4") },
    { id: 3, category: "Automotive", title: "Automotive 3", aspectRatio: "9/16", video: getVideo("palladium_video_in_marathi-_2_v1 (360p).mp4") },
    { id: 4, category: "Food", title: "Food 3", aspectRatio: "9/16", video: getVideo("stopmotion_v1 (360p).mp4") },
    { id: 5, category: "Food", title: "Food 4", aspectRatio: "9/16", video: getVideo("making_video_- (360p).mp4") },
    { id: 6, category: "Automotive", title: "Automotive 6", aspectRatio: "9/16", video: getVideo("custmore_video_for_instagram_v1 (360p).mp4") },
    { id: 15, category: "Automotive", title: "Automotive 7", aspectRatio: "9/16", video: getVideo("beer_song_video_classic_goan_2_v1 (360p).mp4") },
    { id: 19, category: "Automotive", title: "Automotive 8", aspectRatio: "9/16", video: getVideo("daya_sir- (360p).mp4") },
    { id: 23, category: "Automotive", title: "Automotive 9", aspectRatio: "9/16", video: getVideo("suhali_sir_video-_v1 (360p).mp4") },
    { id: 14, category: "Automotive", title: "Automotive 10", aspectRatio: "9/16", video: getVideo("tamdi_chamdi_2 (360p).mp4") },

    // Festival Films
    { id: 7, category: "Festival Films", title: "Festival 1", aspectRatio: "9/16", video: getVideo("agman (360p).mp4") },
    { id: 8, category: "Festival Films", title: "Festival 2", aspectRatio: "9/16", video: getVideo("day_7_garba (360p).mp4") },
    { id: 9, category: "Festival Films", title: "Festival 3", aspectRatio: "9/16", video: getVideo("ghartan_pada_devi_parel- (360p).mp4") },
    { id: 10, category: "Festival Films", title: "Festival 4", aspectRatio: "9/16", video: getVideo("payala_naman_｜｜_ganpati_edit_2023_｜｜ (360p).mp4") },
    { id: 11, category: "Festival Films", title: "Festival 5", aspectRatio: "9/16", video: getVideo("raj_da_ganpati_video- (360p).mp4") },
    { id: 12, category: "Festival Films", title: "Festival 6", aspectRatio: "9/16", video: getVideo("rohit_ganpati_visarjan_video-_v1 (360p).mp4") },
    { id: 13, category: "Festival Films", title: "Festival 7", aspectRatio: "9/16", video: getVideo("shirdi_nagar- (360p).mp4") },
    { id: 22, category: "Festival Films", title: "Festival 8", aspectRatio: "9/16", video: getVideo("pravin_bhau_sir_video_v1 (360p).mp4") },

    // Food
    { id: 4, category: "Food", title: "Food 3", aspectRatio: "9/16", video: getVideo("stopmotion_v1 (360p).mp4") },
    { id: 5, category: "Food", title: "Food 4", aspectRatio: "9/16", video: getVideo("making_video_- (360p).mp4") },
    { id: 17, category: "Food", title: "Food 1", aspectRatio: "9/16", video: getVideo("cocoalab_raksha_bandhan_video (360p).mp4") },
    { id: 18, category: "Food", title: "Food 2", aspectRatio: "9/16", video: getVideo("cocoalab_video_1 (360p).mp4") },
    { id: 24, category: "Food", title: "Food 5", aspectRatio: "9/16", video: getVideo("tremissu (360p).mp4") },

    // Wedding Films (And other projects)
    { id: 16, category: "Wedding Films", title: "Wedding 2", aspectRatio: "9/16", video: getVideo("choudriya_video_final_cc_v1 (360p).mp4") },
    { id: 20, category: "Wedding Films", title: "Wedding 6", aspectRatio: "9/16", video: getVideo("harsh_joshy_reel_for_my_website_1(1)_v1 (360p).mp4") },
    { id: 21, category: "Wedding Films", title: "Wedding 7", aspectRatio: "9/16", video: getVideo("harsh_joshy_reel_for_my_website_2(1)_v1 (360p).mp4") },
    { id: 25, category: "Wedding Films", title: "Wedding 11", aspectRatio: "9/16", video: getVideo("trending_song_video-_v1 (360p).mp4") },
    { id: 26, category: "Wedding Films", title: "Wedding 12", aspectRatio: "9/16", video: getVideo("yogita_didi_reel_2_for_my_website_v1 (360p).mp4") },
    { id: 27, category: "Wedding Films", title: "Wedding 13", aspectRatio: "9/16", video: getVideo("zat_pat_pata_pat_final (360p).mp4") },
    { id: 25, category: "Wedding Films", title: "Wedding 11", aspectRatio: "9/16", video: getVideo("trending_song_video-_v1 (360p).mp4") },
    { id: 26, category: "Wedding Films", title: "Wedding 12", aspectRatio: "9/16", video: getVideo("yogita_didi_reel_2_for_my_website_v1 (360p).mp4") },
    { id: 27, category: "Wedding Films", title: "Wedding 13", aspectRatio: "9/16", video: getVideo("zat_pat_pata_pat_final (360p).mp4") }
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(4);

    const filteredItems = activeCategory === "All"
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeCategory);

    const visibleItems = filteredItems.slice(0, visibleCount);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setVisibleCount(4); // Reset to 4 when switching categories
    };

    return (
        <section id="videos" className="py-20 bg-zinc-900 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#fe564a]/10 rounded-full blur-3xl"></div>
            </div>

            <div className="w-full max-w-[1600px] mx-auto px-6 relative z-10">
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
                                onClick={() => handleCategoryChange(cat)}
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

                <div className="columns-2 md:columns-4 gap-6 w-full mx-auto">
                    <AnimatePresence>
                        {visibleItems.map((item) => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                key={item.id}
                                className={`relative overflow-hidden bg-zinc-900 rounded-lg border border-zinc-800 transition-all duration-300 break-inside-avoid mb-6 group`}
                                style={{ aspectRatio: item.aspectRatio }}
                            >
                                {item.video.includes('vimeo.com') ? (
                                    <iframe
                                        src={`${item.video}&autoplay=1&muted=1`}
                                        className="w-full h-full object-cover"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    <video
                                        src={item.video}
                                        controls
                                        controlsList="nodownload"
                                        loop
                                        playsInline
                                        muted
                                        autoPlay
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Show More / Less */}
                <div className="flex justify-center mt-12">
                    {visibleCount < filteredItems.length ? (
                        <button
                            onClick={() => setVisibleCount(prev => prev + 4)}
                            className="px-8 py-3 bg-zinc-800 text-white rounded-full font-medium hover:bg-[#fe564a] hover:text-white transition-all duration-300 shadow-lg shadow-black/50 hover:shadow-[#fe564a]/30"
                        >
                            Show More Videos
                        </button>
                    ) : filteredItems.length > 4 && (
                        <button
                            onClick={() => setVisibleCount(4)}
                            className="px-8 py-3 bg-zinc-800 text-white rounded-full font-medium hover:bg-zinc-700 transition-all duration-300 shadow-lg shadow-black/50"
                        >
                            Show Less
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
