import React from 'react';
import { GraduationCap } from 'lucide-react';

const GlobalMap = () => {
    return (
        <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-gray-200">
            {/* Grayscale Map Background - Assuming a placeholder texture of a map for UI layout purposes. */}
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                    alt="Global Network Map" 
                    className="w-full h-full object-cover grayscale opacity-50 contrast-125 mix-blend-multiply" 
                />
            </div>
            
            {/* Exact Center HQ Locator Pill */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-[#111827] rounded-xl pl-3 pr-6 py-3 flex items-center shadow-2xl border border-gray-700/50 hover:scale-105 transition-transform duration-300">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex flex-col items-center justify-center mr-4">
                        <GraduationCap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                        <h4 className="text-white text-sm font-bold leading-tight">WisdomWaves HQ</h4>
                        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest leading-none mt-1">Global Center for Excellence</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalMap;
