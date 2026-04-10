import React from 'react';

const TrustLogos = () => {
    return (
        <section className="bg-gray-50 py-16 border-y border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-10">
                    OUR STUDENTS ARE ASSOCIATED WITH TOP ORGANIZATIONS
                </p>
                
                {/* Horizontal Scrolling Logo Strip for small screens, flex wrap for large */}
                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale">
                    {/* Placeholder Text Icons for Logos to match design look and feel */}
                    <span className="font-serif font-bold text-xl text-gray-500 flex items-center gap-2">
                        <div className="w-6 h-6 bg-gray-400 rounded-sm"></div> SQUARE
                    </span>
                    <span className="font-serif font-bold text-xl text-gray-500 flex items-center gap-2">
                        <div className="w-8 h-4 bg-gray-400 rounded-sm"></div> STRIPE
                    </span>
                    <span className="font-serif font-bold text-xl text-gray-500 flex items-center gap-2">
                        <div className="w-6 h-6 bg-gray-400 rounded-full"></div> GLOBE
                    </span>
                    <span className="font-serif font-bold text-xl text-gray-500 flex items-center gap-2">
                        <div className="w-4 h-6 bg-gray-400 rounded-sm transform skew-x-12"></div> APEX
                    </span>
                    <span className="font-serif font-bold text-xl text-gray-500 flex items-center gap-2">
                         <div className="w-8 h-2 bg-gray-400 rounded-full"></div> LINEAR
                    </span>
                </div>
            </div>
        </section>
    );
};

export default TrustLogos;
