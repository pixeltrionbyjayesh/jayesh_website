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
        <section id="testimonials" className="py-20 bg-black text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">Client Love</h2>
                    <div className="w-20 h-1 bg-white mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-zinc-900 p-8 rounded-sm border border-zinc-800 relative"
                        >
                            <Quote className="absolute top-6 right-6 text-zinc-700 w-10 h-10" />
                            <p className="text-gray-300 mb-6 text-lg italic leading-relaxed">"{item.text}"</p>
                            <div>
                                <h4 className="text-white font-bold uppercase tracking-wide">{item.author}</h4>
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
