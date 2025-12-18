import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        text: "Jayesh captured our wedding beautifully. The cinematic shots were breathtaking and the edit was perfect.",
        author: "Aditya & Priya",
        role: "Wedding Couple"
    },
    {
        text: "The energy of our Ganesh Chaturthi celebration was captured perfectly. Highly recommended for festival coverage.",
        author: "Rohan Mehta",
        role: "Festival Organizer"
    },
    {
        text: "Professional and creative. The car delivery video was a huge hit on our social media.",
        author: "Suresh Patil",
        role: "Car Showroom Manager"
    },
    {
        text: "Such a lovely video of our baby shower. Captured all the emotions so well.",
        author: "Mrs. Deshmukh",
        role: "Parent"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-zinc-900 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#fe564a]/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">Client Love</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#fe564a] to-[#ff8a7a] mx-auto mb-4"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Hear what our clients have to say about their experience
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group bg-gradient-to-br from-black to-zinc-900 p-8 rounded-lg border border-zinc-800 hover:border-[#fe564a]/50 transition-all duration-300 relative"
                        >
                            <Quote className="absolute top-6 right-6 text-[#fe564a]/20 w-12 h-12 group-hover:text-[#fe564a]/30 transition-colors" />
                            <p className="text-gray-300 mb-6 text-lg italic leading-relaxed relative z-10">"{item.text}"</p>
                            <div className="relative z-10">
                                <h4 className="text-[#FBFAFC] font-bold uppercase tracking-wide group-hover:text-[#fe564a] transition-colors">
                                    {item.author}
                                </h4>
                                <p className="text-zinc-500 text-sm">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
