import React from 'react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="bg-gray-50 py-24 pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#111827] rounded-2xl md:rounded-3xl p-12 md:p-20 text-center shadow-xl border border-gray-800">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Start Your Academic Journey Today
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Join a global network of elite scholars and redefine the boundaries of modern knowledge.
          </p>
          
          <Link 
            to="/contact" 
            className="inline-block bg-accent hover:bg-accent-hover text-primary font-bold px-10 py-3.5 rounded-full transition-all shadow-md text-sm uppercase tracking-widest"
          >
            Apply Now
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ContactCTA;
