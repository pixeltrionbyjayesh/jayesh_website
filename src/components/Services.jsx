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
        <section id="services" className="py-20 bg-zinc-900 text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">Services</h2>
                    <div className="w-20 h-1 bg-white mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-black p-8 border border-zinc-800 hover:border-white/30 transition-colors duration-300 group"
                        >
                            <div className="mb-6 text-white/70 group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">{service.title}</h3>
                            <ul className="space-y-2">
                                {service.items.map((item, idx) => (
                                    <li key={idx} className="text-gray-400 text-sm flex items-start">
                                        <span className="mr-2 text-white/50">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
