import React from 'react';
import { Award, GraduationCap, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
  return (
    <section className="bg-gray-50 py-20 border-t border-gray-100" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs text-accent font-semibold tracking-widest uppercase mb-2">Academic Excellence</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">Distinguished Programs</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6">
              <Award className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Honorary Doctorate</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              The highest academic honor given to individuals for their exceptional contribution to their respective fields and significant impact on society.
            </p>
            <Link to="/about" className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-accent transition-colors">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Card 2 (Highlighted) */}
          <div className="bg-primary rounded-2xl p-8 shadow-2xl transform lg:-translate-y-4 border-t-4 border-accent relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-6 relative z-10">
              <GraduationCap className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4 relative z-10">DBA / PhD Programs</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-8 relative z-10 font-light">
              Rigorous academic endeavors prior to professional executives and researchers seeking to codify their experience into scholarly impact.
            </p>
            <Link to="/about" className="inline-flex items-center text-sm font-semibold text-accent hover:text-white transition-colors relative z-10 pb-1 border-b border-accent/50 hover:border-white">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Honorary Professorship</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Recognizing professionals of high academic or professional standing for their ongoing commitment to sharing knowledge with the next generation.
            </p>
            <Link to="/about" className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-accent transition-colors">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
