import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black py-8 border-t border-zinc-900 text-center">
            <div className="container mx-auto px-6">
                <p className="text-zinc-500 text-sm">
                    &copy; {new Date().getFullYear()} VERTICORE. All rights reserved.
                </p>
                <p className="text-zinc-600 text-xs mt-2 uppercase tracking-widest">
                    Cinematography | Editing | Storytelling
                </p>
            </div>
        </footer>
    );
};

export default Footer;
