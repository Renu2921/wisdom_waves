import React from 'react';
import { Link } from 'react-router-dom';

const BatchesCTA = () => {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-primary rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center border-l-[6px] border-accent">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          
          <div className="relative z-10 w-full md:w-2/3 pr-0 md:pr-10 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">
              Take the Next Step in<br/>Your Academic Journey
            </h2>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Join a network of global scholars and industry leaders. Your pursuit of excellence starts here.
            </p>
          </div>

          <div className="relative z-10 w-full md:w-1/3 flex justify-center md:justify-end">
            <Link 
              to="/contact" 
              className="bg-accent hover:bg-accent-hover text-primary font-bold px-8 py-4 rounded-full transition-all shadow-lg text-sm tracking-wide"
            >
              Start Learning
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BatchesCTA;
