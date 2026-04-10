import React from 'react';

const AboutHero = () => {
  return (
    <div className="relative bg-primary pt-32 pb-48 lg:pb-56 overflow-hidden">
      {/* Background Dots/Texture */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/10 text-accent font-semibold px-4 py-1.5 rounded-full mb-8 text-[10px] uppercase tracking-[0.2em]">
            OUR PHILOSOPHY
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
            Empowering <span className="text-accent italic font-light">Global Leaders</span> Through Education & Recognition
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-xl font-light leading-relaxed">
            At WisdomWaves Academic Vanguard, we bridge the gap between professional excellence and formal academic prestige, curating paths for the world's most distinguished minds.
          </p>
        </div>
      </div>

      {/* Wavy Bottom SVG Border exactly matching the design */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.06,130.83,119.34,201.33,105.15,242.49,96.86,282.8,75.1,321.39,56.44Z" className="fill-[#F8FAFC]"></path>
        </svg>
      </div>
    </div>
  );
};

export default AboutHero;
