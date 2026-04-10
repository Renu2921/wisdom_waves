import React from 'react';
import { ChevronDown } from 'lucide-react';

const BatchesHero = () => {
  return (
    <section className="bg-[#F8FAFC] pt-32 pb-20 relative overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Very faint background gradient/dots */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center space-x-2 bg-yellow-500/10 text-accent font-semibold px-4 py-1.5 rounded-full mb-8 text-[10px] uppercase tracking-[0.2em] border border-accent/20">
          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
          <span>ACADEMIC EXCELLENCE 2024</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
          Upcoming Programs
        </h1>
        
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-16">
          Enroll now to secure your seat and begin your global academic journey within our exclusive scholarly ecosystem.
        </p>

        <a href="#programs-grid" className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 text-gray-400 hover:text-primary hover:border-primary transition-colors animate-bounce">
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default BatchesHero;
