import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Aperture, Mic, Disc } from 'lucide-react';

const gearItems = [
    { icon: <Camera className="w-6 h-6" />, name: "Mirrorless Camera", desc: "High-resolution 4K recording" },
    { icon: <Aperture className="w-6 h-6" />, name: "Pro Lenses", desc: "24-70mm, 50mm, 70-200mm" },
    { icon: <Disc className="w-6 h-6" />, name: "Drone & Gimbal", desc: "Aerial shots & stabilization" },
    { icon: <Mic className="w-6 h-6" />, name: "Audio Gear", desc: "Wireless mics for crisp sound" },
];

const Gear = () => {
    return (
        <section className="py-20 bg-black text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#fe564a]/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/3"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">My Gear</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-[#fe564a] to-[#ff8a7a] mb-6"></div>
                        <p className="text-gray-400 leading-relaxed">
                            Top-tier equipment ensures cinematic quality for every frame. I use industry-standard gear to deliver the best results.
                        </p>
                    </motion.div>

                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {gearItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="group flex items-center p-5 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 hover:border-[#fe564a]/50 transition-all duration-300 rounded-lg"
                            >
                                <div className="p-3 bg-gradient-to-br from-[#fe564a]/20 to-[#fe564a]/10 rounded-full mr-4 text-[#fe564a] group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold uppercase text-[#FBFAFC] group-hover:text-[#fe564a] transition-colors duration-300">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gear;
