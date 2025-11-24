import React from 'react';
import { motion } from 'framer-motion';

const btsItems = [
    { title: "Shooting Crowd Sequences", desc: "Capturing the energy of the moment", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2942&auto=format&fit=crop" },
    { title: "Gimbal Work", desc: "Smooth cinematic movement", image: "https://images.unsplash.com/photo-1533561052604-c3be13075122?q=80&w=2874&auto=format&fit=crop" },
    { title: "Directing Poses", desc: "Creating perfect frames", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2864&auto=format&fit=crop" },
];

const BTS = () => {
    return (
        <section className="py-20 bg-zinc-900 text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">Behind The Scenes</h2>
                    <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-white/60 max-w-2xl mx-auto">Witness the craft behind the lens. From directing couples to managing crowd energy, we ensure every shot is perfect.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {btsItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group overflow-hidden aspect-[4/5]"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity">
                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <h3 className="text-xl font-bold uppercase mb-1">{item.title}</h3>
                                    <p className="text-sm text-white/70">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BTS;
