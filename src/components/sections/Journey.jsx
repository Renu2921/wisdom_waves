import React from 'react';
import { Award } from 'lucide-react';

const Journey = () => {
  const steps = [
    { num: '01', title: 'Application', desc: 'Submit your credentials and detailed portfolio.' },
    { num: '02', title: 'Review', desc: 'Board of Governors evaluates your contributions.' },
    { num: '03', title: 'Approval', desc: 'Formal ratification across global affiliations.' },
    { num: '04', title: 'Award Ceremony', desc: 'Global recognition and official investiture.', isFinal: true },
  ];

  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            The <span className="font-bold">Journey</span> to Recognition
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            A streamlined, rigorous evaluation process ensuring that every award remains a symbol of true excellence.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 w-full h-[1px] bg-gray-200 hidden md:block z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 text-xl font-serif font-bold transition-transform duration-300 hover:scale-110 shadow-sm
                  ${step.isFinal 
                    ? 'bg-primary text-accent border-2 border-primary shadow-lg shadow-primary/20' 
                    : 'bg-white text-gray-400 border border-gray-200'}`}
                >
                  {step.isFinal ? <Award className="h-6 w-6 text-accent" /> : step.num}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${step.isFinal ? 'text-gray-900' : 'text-gray-900'}`}>
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs px-4">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
