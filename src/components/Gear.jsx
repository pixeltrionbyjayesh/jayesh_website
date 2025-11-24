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
        <section className="py-20 bg-zinc-900 text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/3 mb-10 md:mb-0"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">My Gear</h2>
                        <div className="w-20 h-1 bg-white mb-6"></div>
                        <p className="text-gray-400">Top-tier equipment ensures cinematic quality for every frame. I use industry-standard gear to deliver the best results.</p>
                    </motion.div>

                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {gearItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center p-4 bg-black border border-zinc-800 hover:border-white/30 transition-colors"
                            >
                                <div className="p-3 bg-zinc-800 rounded-full mr-4 text-white">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold uppercase">{item.name}</h3>
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
