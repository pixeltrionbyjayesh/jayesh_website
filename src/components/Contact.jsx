import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Youtube, MapPin, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
    const contactButtons = [
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            description: 'Chat with us instantly',
            link: 'https://wa.link/qcxpl4',
            gradient: 'from-green-500 to-emerald-600',
            hoverGradient: 'hover:from-green-600 hover:to-emerald-700'
        },
        {
            icon: Mail,
            label: 'Email',
            description: 'jayeshgosaviyt@gmail.com',
            link: 'mailto:jayeshgosaviyt@gmail.com',
            gradient: 'from-blue-500 to-cyan-600',
            hoverGradient: 'hover:from-blue-600 hover:to-cyan-700'
        },
        {
            icon: Instagram,
            label: 'Instagram',
            description: 'Follow our creative journey',
            link: 'https://www.instagram.com/pixeltrion/',
            gradient: 'from-pink-500 to-purple-600',
            hoverGradient: 'hover:from-pink-600 hover:to-purple-700'
        },
        {
            icon: Youtube,
            label: 'YouTube',
            description: 'Watch our portfolio',
            link: '#',
            gradient: 'from-red-500 to-rose-600',
            hoverGradient: 'hover:from-red-600 hover:to-rose-700'
        }
    ];

    return (
        <section id="contact" className="py-20 bg-black text-white relative overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 opacity-50"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#fe564a]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#fe564a]/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider">Let's Connect</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#fe564a] to-[#ff8a7a] mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Ready to create something cinematic? Choose your preferred way to reach out.
                    </p>
                </motion.div>

                {/* Location Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center justify-center gap-3 mb-12"
                >
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <p className="text-gray-400 text-lg">Based in Mumbai, India</p>
                </motion.div>

                {/* Contact Buttons Grid */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactButtons.map((button, index) => {
                        const Icon = button.icon;
                        return (
                            <motion.a
                                key={button.label}
                                href={button.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                className={`group relative bg-gradient-to-br ${button.gradient} ${button.hoverGradient} p-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden`}
                            >
                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                <div className="relative z-10 flex items-center gap-4">
                                    <div className="w-14 h-14 flex-shrink-0 bg-black/40 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-black/60 transition-colors border border-white/20">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-xl font-bold text-white mb-0.5 uppercase tracking-wide">
                                            {button.label}
                                        </h3>
                                        <p className="text-white/90 text-sm truncate">
                                            {button.description}
                                        </p>
                                    </div>
                                    <Send className="w-5 h-5 flex-shrink-0 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                </div>
                            </motion.a>
                        );
                    })}
                </div>

                {/* Additional CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-500 text-sm uppercase tracking-widest">
                        Available for projects worldwide
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
