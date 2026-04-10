import React from 'react';
import { Target, Compass, CheckCircle2 } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="bg-[#F8FAFC] py-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border border-gray-100/50 flex flex-col md:flex-row items-start space-x-0 md:space-x-6 space-y-4 md:space-y-0 group">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  To democratize access to elite academic recognition for professionals who have proven their value through real-world impact and visionary leadership.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border border-gray-100/50 flex flex-col md:flex-row items-start space-x-0 md:space-x-6 space-y-4 md:space-y-0 group">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  To become the world's most trusted arbiter of professional-academic convergence, fostering a network where wisdom flows across borders.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-[1.1]">
              Tradition Meets the<br/>
              <span className="text-accent italic font-light">Vanguard of Innovation</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 font-light">
              We believe that learning is a lifelong pursuit, and that wisdom earned through decades of leadership deserves the same reverence as that found in hallowed academic halls.
            </p>
            
            <ul className="space-y-4">
              {[
                "Integrity-first screening process",
                "Global university partnerships",
                "Lifetime alumni support & networking"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-sm font-semibold text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
