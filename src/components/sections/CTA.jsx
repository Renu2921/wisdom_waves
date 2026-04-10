import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="bg-gray-50 py-12 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Get Recognized Globally<br className="hidden md:block"/> Today
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto mb-10">
              Take the first step toward exlusive recognition of your life's work. Connect with an admissions advisor today.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-accent hover:bg-accent-hover text-primary font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Start Your Application
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
