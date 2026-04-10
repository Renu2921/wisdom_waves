import React from 'react';

const AlumniSection = () => {
  const logos = [
    "Google", "McKinsey", "Goldman Sachs",
    "Microsoft", "Tesla", "J.P. Morgan"
  ];

  return (
    <section className="bg-[#F8FAFC] py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Our Alumni in Top Organizations
            </h2>
            <p className="text-gray-500 text-sm mb-12 font-light leading-relaxed">
              WisdomWaves graduates lead the most influential companies worldwide, forming a powerful global network of intelligence.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-4xl font-bold text-accent mb-1 drop-shadow-sm">1000<span className="text-3xl">+</span></h3>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Outstanding Graduates</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-accent mb-1 drop-shadow-sm">50<span className="text-3xl">+</span></h3>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Countries Represented</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {logos.map((logo, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-gray-100 rounded-xl h-24 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:shadow-sm transition-all duration-500"
                >
                  {/* Since I cannot reliably fetch specific SVGs, I will use clean formatted text to represent the logos as per standard placeholder practices. */}
                  <span className="font-serif font-bold text-gray-400 text-lg tracking-wide">{logo}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AlumniSection;
