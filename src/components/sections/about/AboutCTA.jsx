import React from 'react';
import { Link } from 'react-router-dom';

const AboutCTA = () => {
  return (
    <section className="bg-primary pt-16 pb-20 relative overflow-hidden -mt-20">
      {/* Background Dots */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
          Join a Global Network of<br/>Recognized Leaders
        </h2>
        <p className="text-gray-300 text-sm max-w-xl mx-auto mb-10 font-light">
          Your journey toward global academic prestige begins with a single conversation. Inquire today about our private invitation paths.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            to="/contact" 
            className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-primary font-bold px-10 py-3.5 rounded-full transition-all shadow-lg"
          >
            Apply Now
          </Link>
          <Link 
            to="/contact" 
            className="w-full sm:w-auto bg-transparent border border-gray-400 hover:border-white text-white font-semibold px-10 py-3.5 rounded-full transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
