import React from 'react';

const EventsHero = () => {
  return (
    <section className="bg-[#F4F9FA] pt-32 pb-24 relative overflow-hidden flex flex-col items-center justify-center text-center px-4">
      
      {/* Abstract Shape: Subtly blurred offset circle mirroring the design */}
      <div className="absolute top-10 right-[20%] w-64 h-64 bg-blue-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 z-0"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        <h1 className="text-4xl md:text-5xl lg:text-[64px] font-serif font-bold text-gray-900 mb-6 leading-tight">
          Events & Webinars
        </h1>
        
        <p className="text-gray-500 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Join our global academic sessions, workshops, and networking events designed for the modern scholar.
        </p>
      </div>
    </section>
  );
};

export default EventsHero;
