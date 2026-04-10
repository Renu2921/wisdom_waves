import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-primary overflow-hidden pt-10 pb-24 lg:pt-20 lg:pb-32">
      {/* Abstract Background Waves Placeholder */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-yellow-500/10 text-accent font-semibold px-4 py-2 rounded-full mb-6 text-sm uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span>The Pinnacle of Recognition</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-4">
              Recognizing Excellence.<br />
              <span className="text-accent italic font-light font-serif">Elevating Global Leaders.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl font-light leading-relaxed">
              A world-class consortium dedicated to awarding prestigious honorary doctorates and global academic recognition to visionaries shaping the future of society.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#apply" className="bg-accent hover:bg-accent-hover text-primary font-bold px-8 py-4 rounded-full transition-all flex items-center group shadow-lg">
                Apply Now
              </a>
              <a href="#programs" className="bg-primary-light hover:bg-gray-800 border border-gray-700 text-white font-semibold px-8 py-4 rounded-full transition-all flex items-center group">
                Explore Programs
              </a>
            </div>
          </div>
          
          <div className="relative mt-12 lg:mt-0 lg:ml-10 hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 mx-auto max-w-sm lg:max-w-md">
                {/* Random highly professional portrait representing a graduate */}
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Graduate" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary/80 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl w-64 border border-white/20">
              <h3 className="font-serif font-bold text-gray-900 text-lg mb-1">A Legacy of Merit</h3>
              <p className="text-xs text-gray-600">Empowering the world's most distinguished individuals through global university alliances.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
