import React from 'react';
import { PlaySquare, Cloud } from 'lucide-react';

const Brands = () => {
    return (
        <section id="brands" className="container mx-auto px-6 max-w-7xl py-20">
            <div className="bg-[#141416] border border-white/5 rounded-xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#fe564a]/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="flex items-center gap-6 relative z-10">
                    <div className="bg-[#fe564a] p-4 rounded-lg shadow-[0_0_20px_rgba(254,86,74,0.4)]">
                        <PlaySquare size={28} className="fill-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight">Trusted by Industry<br />Leaders</h3>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 relative z-10 w-full md:w-auto mt-6 md:mt-0 pb-4 md:pb-0 border-b md:border-b-0 border-white/10 md:border-none">
                    <span className="font-bold text-xl md:text-2xl flex items-center gap-3 hover:text-white hover:opacity-100 transition-all cursor-pointer"><Cloud className="text-[#fe564a]" /> Cloud</span>
                    <span className="font-bold text-xl md:text-2xl flex items-center gap-3 hover:text-white hover:opacity-100 transition-all cursor-pointer"><Cloud className="text-[#fe564a]" /> Clues</span>
                    <span className="font-bold text-xl md:text-2xl flex items-center gap-3 hover:text-white hover:opacity-100 transition-all cursor-pointer"><Cloud className="text-[#fe564a]" /> Rise</span>
                </div>
            </div>
        </section>
    );
};

export default Brands;
