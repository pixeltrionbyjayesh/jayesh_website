import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const packagesData = {
    Weddings: [
        { name: "Silver", features: ["Ceremony Coverage", "Highlight Reel (3 mins)", "1 Cinematographer"] },
        { name: "Gold", features: ["Full Day Coverage", "Highlight Reel (5 mins)", "Full Wedding Film", "2 Cinematographers", "Drone Coverage"] },
        { name: "Platinum", features: ["Multi-Day Coverage", "Pre-Wedding Shoot", "Same Day Edit", "3 Cinematographers", "Drone & Gimbal", "Teaser Reel"] }
    ],
    Festivals: [
        { name: "Coverage + Highlight", features: ["Event Coverage", "3-min Highlight Video"] },
        { name: "Coverage + Reels", features: ["Event Coverage", "3 Instagram Reels"] },
        { name: "Full Day Coverage", features: ["Unlimited Coverage", "Long Form Video", "Reels Package", "Drone Shots"] }
    ],
    "Lifestyle Events": [
        { name: "Basic", features: ["2 Hours Coverage", "1 min Highlight"] },
        { name: "Standard", features: ["4 Hours Coverage", "2-3 min Highlight", "Teaser"] },
        { name: "Premium", features: ["Full Event Coverage", "Cinematic Film", "Reels", "Drone (if applicable)"] }
    ],
    "Car Delivery": [
        { name: "Standard Reel", features: ["30-60 sec Reel", "Cinematic Angles", "Color Grading"] },
        { name: "Premium Experience", features: ["Full Delivery Video", "Customer Interview", "Drone/Rolling Shots", "Multiple Reels"] }
    ]
};

const Packages = () => {
    const [activeCategory, setActiveCategory] = useState("Weddings");

    return (
        <section id="packages" className="py-20 bg-black text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#fe564a]/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">Investments</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#fe564a] to-[#ff8a7a] mx-auto mb-4"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Curated experiences tailored to your vision.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {Object.keys(packagesData).map((cat) => (
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    <AnimatePresence mode="wait">
                        {packagesData[activeCategory].map((pkg, index) => (
                            <motion.div
                                key={`${activeCategory}-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group bg-gradient-to-br from-zinc-900 to-black p-8 border border-zinc-800 hover:border-[#fe564a]/50 transition-all duration-300 flex flex-col rounded-lg"
                            >
                                <h3 className="text-2xl font-bold uppercase mb-6 text-center text-[#FBFAFC] group-hover:text-[#fe564a] transition-colors">
                                    {pkg.name}
                                </h3>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-gray-300 text-sm">
                                            <Check className="w-5 h-5 text-[#fe564a] mr-3 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => {
                                        const message = `Hi, I'm interested in the ${pkg.name} package for ${activeCategory}.%0A%0ACould you please provide more details?`;
                                        window.open(`https://wa.link/qcxpl4?text=${message}`, '_blank');
                                    }}
                                    className="w-full py-3 bg-gradient-to-r from-[#fe564a] to-[#ff7a66] text-white hover:shadow-lg hover:shadow-[#fe564a]/30 transition-all uppercase tracking-widest text-sm font-semibold"
                                >
                                    Inquire Now
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Packages;
