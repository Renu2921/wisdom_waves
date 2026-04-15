import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import ProgramCard from '../components/ui/ProgramCard';
import ProgramFAQ from '../components/ui/ProgramFAQ';
import MetaTags from '../components/seo/MetaTags';
import { BookOpen, GraduationCap, TrendingUp, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';

const DBAPhdPrograms = () => {
  const dbaFaqs = [
      { question: "How does a DBA differ from an MBA?", answer: "While an MBA provides generalized business management skills, a DBA is the terminal degree in business, focusing on original, applied research to solve immediate, complex corporate challenges." },
      { question: "Can I complete this while working full-time?", answer: "Absolutely. Both the DBA and modern PhD programs are engineered specifically for working executive leaders, featuring flexible remote supervision and timeline management." },
      { question: "Is my degree accredited?", answer: "Yes. All degrees are awarded via our highly prestigious, internationally accredited partner universities ensuring global legal validity." },
      { question: "What is a research proposal?", answer: "A proposal outlines the exact business or societal problem you intend to research, presenting your hypothesis, methodologies, and intended academic contribution." },
      { question: "Are campus visits mandatory?", answer: "Most programs can be completed 100% online with remote defense via digital symposiums; however, optional graduation ceremonies and networking galas are hosted physically." }
  ];

  return (
    <main className="w-full bg-white">
      <MetaTags 
        title="DBA & PhD Programs | WisdomWaves" 
        description="Advance your academic journey with our elite DBA and PhD degree frameworks." 
        imageUrl="/assets/dba_phd.png"
        keywords="online DBA, executive PhD, business research, corporate doctorate, academic leadership, global education"
      />

      <section className="relative bg-primary overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/10 text-accent font-semibold px-4 py-2 rounded-full mb-6 text-sm uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Excellence</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
            DBA / PhD Programs
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
            For scholars and executive leaders determined to conduct original research that solves complex real-world challenges.
          </p>
          <button className="bg-accent hover:bg-accent-hover text-primary font-bold px-8 py-4 rounded-full transition-all inline-flex items-center group shadow-lg">
             Apply Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <SectionWrapper bgColor="bg-[#F8FAFC]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <article className="order-2 md:order-1">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">About the Program</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-6">
              Our Doctor of Business Administration (DBA) and Doctor of Philosophy (PhD) programs are meticulously designed for driven executives and academics who want to reach the absolute apex of their educational journey.
            </p>
            <p className="text-gray-600 font-light leading-relaxed">
              Whether you aim to reshape boardrooms through empirical business research (DBA) or seek to contribute wholly new theories to academic literature (PhD), our globally partnered institutions provide the flexible, high-tier supervision you need.
            </p>
          </article>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
            <img 
              src="/assets/dba_phd.png" 
              alt="Executive Research in an Academic Library" 
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Why Pursue a DBA/PhD?">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProgramCard 
            title="Original Research" 
            description="Publish work that pushes the boundaries of current global knowledge."
            icon={<BookOpen size={24} />}
          />
          <ProgramCard 
            title="C-Suite Advantage" 
            description="A DBA is widely recognized as the ultimate differentiator for CEO and Board positions."
            icon={<TrendingUp size={24} />}
          />
          <ProgramCard 
            title="Global Faculty" 
            description="Work with leading professors and supervisors from top-tier international universities."
            icon={<GraduationCap size={24} />}
          />
          <ProgramCard 
            title="Thought Leadership" 
            description="Transition from a manager to a globally recognized thought leader."
            icon={<Lightbulb size={24} />}
          />
        </div>
      </SectionWrapper>

      {/* Research Domains (New Content Block) */}
      <SectionWrapper bgColor="bg-[#111827]" titleColor="text-white">
        <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Research Focus Areas</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-12">
               Our candidates tackle the defining issues of the 21st century. Supervision is available across a vast multitude of domains, allowing you to pioneer your own framework.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 opacity-80">
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                    <h4 className="text-accent font-bold mb-2">Corporate Strategy</h4>
                    <p className="text-xs text-gray-400">Mergers, Change Management, & Globalization.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                    <h4 className="text-accent font-bold mb-2">Technological Ethics</h4>
                    <p className="text-xs text-gray-400">Artificial Intelligence deployment & Automation.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                    <h4 className="text-accent font-bold mb-2">Global Economics</h4>
                    <p className="text-xs text-gray-400">Supply Chain vulnerabilities & Fiscal Policy.</p>
                </div>
            </div>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Program Path" bgColor="bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Proposal', desc: 'Submit research framework.' },
              { step: '2', title: 'Coursework', desc: 'Complete advanced methodologies.' },
              { step: '3', title: 'Research', desc: 'Execute supervised analysis.' },
              { step: '4', title: 'Defense', desc: 'Defend your final dissertation.' }
            ].map((item, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-accent text-2xl font-serif font-bold flex items-center justify-center mb-4 z-10 border-4 border-white shadow-lg">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
                {idx < 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-gray-200 -z-0"></div>}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Eligibility Criteria" bgColor="bg-white">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 border border-gray-100 rounded-3xl shadow-xl">
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
               <CheckCircle className="text-accent w-6 h-6 flex-shrink-0 mt-1" />
               <span className="text-gray-700 text-lg font-light leading-relaxed">A recognized Master's Degree in a relevant field.</span>
            </li>
            <li className="flex items-start space-x-4">
               <CheckCircle className="text-accent w-6 h-6 flex-shrink-0 mt-1" />
               <span className="text-gray-700 text-lg font-light leading-relaxed">For DBA: Minimum of 5 years of senior management experience.</span>
            </li>
            <li className="flex items-start space-x-4">
               <CheckCircle className="text-accent w-6 h-6 flex-shrink-0 mt-1" />
               <span className="text-gray-700 text-lg font-light leading-relaxed">Submission of a comprehensive research proposal.</span>
            </li>
            <li className="flex items-start space-x-4">
               <CheckCircle className="text-accent w-6 h-6 flex-shrink-0 mt-1" />
               <span className="text-gray-700 text-lg font-light leading-relaxed">Proficiency in academic English.</span>
            </li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Frequently Asked Questions" bgColor="bg-[#F8FAFC]">
         <ProgramFAQ faqs={dbaFaqs} />
      </SectionWrapper>

      <section className="bg-primary py-20 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Ready to master your field?</h2>
        <button className="bg-accent hover:bg-accent-hover text-primary font-bold px-10 py-5 rounded-full transition-all text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1">
          Apply for DBA / PhD
        </button>
      </section>
    </main>
  );
};

export default DBAPhdPrograms;
