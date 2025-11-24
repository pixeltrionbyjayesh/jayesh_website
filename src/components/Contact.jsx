import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, Youtube, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format the message for WhatsApp
        const whatsappMessage = `Hi, I'm ${formData.name}%0A%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0A%0AMessage: ${formData.message}`;

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.link/qcxpl4?text=${whatsappMessage}`, '_blank');
    };

    return (
        <section id="contact" className="py-20 bg-zinc-900 text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">Get In Touch</h2>
                    <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-gray-400">Ready to create something cinematic? Let's talk.</p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 space-y-8"
                    >
                        <div className="bg-black p-8 border border-zinc-800">
                            <h3 className="text-2xl font-bold uppercase mb-6">Contact Info</h3>
                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center rounded-full mr-4">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-500 uppercase">Phone</p>
                                        <p className="text-lg">+91 99209 93068</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center rounded-full mr-4">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-500 uppercase">Email</p>
                                        <p className="text-lg">jayeshgosaviyt@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center rounded-full mr-4">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-500 uppercase">Location</p>
                                        <p className="text-lg">Mumbai, India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h4 className="text-sm text-zinc-500 uppercase mb-4">Follow Us</h4>
                                <div className="flex space-x-4">
                                    <a href="https://www.instagram.com/_verticore_/reels/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-800 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-colors">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                    <a href="https://wa.link/qcxpl4" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-800 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-colors">
                                        <MessageCircle className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-zinc-800 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-colors">
                                        <Youtube className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-zinc-500 uppercase mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black border border-zinc-800 p-3 text-white focus:border-white outline-none transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-zinc-500 uppercase mb-2">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black border border-zinc-800 p-3 text-white focus:border-white outline-none transition-colors"
                                        placeholder="Your Number"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm text-zinc-500 uppercase mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black border border-zinc-800 p-3 text-white focus:border-white outline-none transition-colors"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-zinc-500 uppercase mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black border border-zinc-800 p-3 text-white focus:border-white outline-none transition-colors"
                                    placeholder="Tell us about your project"
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                                <MessageCircle className="w-5 h-5" />
                                Send via WhatsApp
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
