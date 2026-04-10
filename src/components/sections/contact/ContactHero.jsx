import React from 'react';

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-b from-[#141E30] to-[#243B55] pt-36 pb-64 relative overflow-hidden flex flex-col items-center justify-center text-center px-4">
      
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-[64px] font-serif font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-200 drop-shadow-sm">
          Contact Us
        </h1>
        
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          We're here to guide you on your academic journey. Connect with our curators of excellence.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
