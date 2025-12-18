import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Heart, Car, Bike, Zap } from 'lucide-react';

const servicesData = [
    {
        title: "Wedding Cinematography",
        icon: <Heart className="w-8 h-8" />,
        items: ["Full-day wedding coverage", "Couple portraits", "Ceremony documentation", "Cinematic wedding film", "Highlight film (3–5 mins)", "Drone add-on", "Pre-wedding shoot"]
    },
    {
        title: "Festival Event Cinematography",
        icon: <Camera className="w-8 h-8" />,
        items: ["Ganesh Chaturthi", "Visarjan shoots", "Mandap + aarti coverage", "Crowd/documentary clips", "Navratri", "Garba cinematic sequences", "Stage + performance coverage", "Fast-cut reels"]
    },
    {
        title: "Lifestyle & Personal Events",
        icon: <Video className="w-8 h-8" />,
        items: ["Baby shower film", "Naming ceremony", "Engagement events", "Birthday celebrations"]
    },
    {
        title: "Automotive & Delivery Videos",
        icon: <Car className="w-8 h-8" />,
        items: ["Car delivery cinematic reels", "Showroom handover shots", "Customer moment highlights"]
    },
    {
        title: "Motovlogging Shoots",
        icon: <Bike className="w-8 h-8" />,
        items: ["Rolling shots", "Bike close-ups", "GoPro + handheld hybrid", "Velocity-style reels"]
    },
    {
        title: "Reels & Velocity Edits",
        icon: <Zap className="w-8 h-8" />,
        items: ["Fast-paced edits", "Trend-based transitions", "Festival reels", "Wedding teaser reels"]
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-black text-white relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#fe564a]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-[#FBFAFC]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">Our Services</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#fe564a] to-[#ff8a7a] mx-auto mb-4"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive cinematography solutions tailored to capture your most precious moments
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative bg-gradient-to-br from-zinc-900 to-black p-8 border border-zinc-800 hover:border-[#fe564a]/50 transition-all duration-300 overflow-hidden"
                        >
                            {/* Hover gradient effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#fe564a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <div className="mb-6 text-[#fe564a] group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide text-[#FBFAFC] group-hover:text-[#fe564a] transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <ul className="space-y-2">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="text-gray-400 text-sm flex items-start group-hover:text-gray-300 transition-colors">
                                            <span className="mr-2 text-[#fe564a] font-bold">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
