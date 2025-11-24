import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-black text-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-wider">About Verticore</h2>
                        <div className="w-20 h-1 bg-white mx-auto mb-10"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                            Verticore is led by <span className="text-white font-medium">Jayesh</span>, a cinematographer and video editor specializing in weddings, festival events, baby showers, lifestyle deliveries, and high-energy reels. His work blends <span className="text-white font-medium">cinematic movement</span>, <span className="text-white font-medium">clean framing</span>, and <span className="text-white font-medium">fast-paced edits</span> that elevate everyday events into premium visual stories.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
