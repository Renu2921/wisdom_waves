import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import ProgramCard from '../components/ui/ProgramCard';
import ProgramFAQ from '../components/ui/ProgramFAQ';
import MetaTags from '../components/seo/MetaTags';
import { Globe2, Briefcase, Award, Network, CheckCircle, ArrowRight } from 'lucide-react';

const HonoraryDoctorate = () => {
  const doctorateFaqs = [
      { question: "Is this a real academic degree?", answer: "It is an honorary academic recognition (honoris causa) rather than a traditional earned degree. It does not qualify you for professional licensing in fields like medicine or law, but holds massive prestige globally." },
      { question: "Can I use 'Dr.' in my title?", answer: "Yes, you are legally entitled to use 'Dr.' before your name or 'h.c.' after your name in professional, corporate, and social settings depending on regional norms." },
      { question: "Do I need prior academic degrees?", answer: "No. Unlike a PhD, an Honorary Doctorate is awarded based entirely on your life achievements, industry leadership, and philanthropic impact rather than prior academic study." },
      { question: "How long does the evaluation take?", answer: "Once your portfolio is submitted, our global committee typically requires 4-6 weeks to evaluate your documentation and issue the formal award confirmation." },
      { question: "Are there any exams or coursework?", answer: "None. The Honorary Doctorate honors your past legacy and contributions, requiring zero exams, study hours, or dissertations." }
  ];

  return (
    <main className="w-full bg-white">
      <MetaTags 
        title="Honorary Doctorate | WisdomWaves" 
        description="Celebrate your vast industry experience and milestones with an elite Honorary Doctorate." 
        imageUrl="/assets/honorary_doctorate.png"
        keywords="honorary doctorate, doctor honoris causa, academic recognition, executive degree, global recognition"
      />

      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/10 text-accent font-semibold px-4 py-2 rounded-full mb-6 text-sm uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Highest Honor</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Honorary Doctorate
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
            A prestigious recognition of your life's work, outstanding achievements, and significant contributions to society and your industry.
          </p>
          <button className="bg-accent hover:bg-accent-hover text-primary font-bold px-8 py-4 rounded-full transition-all inline-flex items-center group shadow-[0_0_20px_rgba(244,185,66,0.3)] hover:shadow-[0_0_30px_rgba(244,185,66,0.5)]">
             Apply Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <SectionWrapper bgColor="bg-[#F8FAFC]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/assets/honorary_doctorate.png" 
              alt="Honorary Doctorate Graduation Ceremony with Executive Leaders" 
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
          </div>
          <article>
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">About the Program</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-6">
              The Honorary Doctorate (honoris causa) is the highest academic recognition awarded by our partner universities globally. It is designed to honor distinguished individuals who have made significant, overarching contributions to their field or society.
            </p>
            <p className="text-gray-600 font-light leading-relaxed">
              Unlike traditional academic degrees that require coursework and examinations, this honor is bestowed upon leaders, visionaries, and philanthropists based entirely on their legacy, massive experience, and proven track record of excellence.
            </p>
          </article>
        </div>
      </SectionWrapper>

      {/* Benefits Section */}
      <SectionWrapper title="Exclusive Benefits">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProgramCard 
            title="Global Recognition" 
            description="Achieve instant, worldwide recognition for your life's work from highly accredited international universities."
            icon={<Globe2 size={24} />}
          />
          <ProgramCard 
            title="Career Advancement" 
            description="Elevate your corporate standing, board member appeal, and professional authority overnight."
            icon={<Briefcase size={24} />}
          />
          <ProgramCard 
            title="Academic Prestige" 
            description="Gain the legally recognized title of 'Dr.' adding exceptional weight to your personal brand."
            icon={<Award size={24} />}
          />
          <ProgramCard 
            title="Elite Networking" 
            description="Join an exclusive alumni network of global leaders, politicians, and titan industrialists."
            icon={<Network size={24} />}
          />
        </div>
      </SectionWrapper>

      {/* The Alumni Elite (New Content Block) */}
      <SectionWrapper bgColor="bg-[#111827]" titleColor="text-white">
        <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">The Alumni Elite</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-12">
               When you are awarded an Honorary Doctorate, you aren't just receiving a certificate; you are being inducted into a global consortium of power. Our alumni include sitting parliament members, Fortune 500 CEOs, global philanthropists, and royal dignitaries. By accepting this award, you share a platform with the world's most transformative thinkers.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-60">
                <div className="text-accent font-serif text-3xl font-bold">120+</div>
                <div className="text-accent font-serif text-3xl font-bold">45</div>
                <div className="text-accent font-serif text-3xl font-bold">300+</div>
                <div className="text-accent font-serif text-3xl font-bold">$1B+</div>
                
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-[-20px]">Global CEOs</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-[-20px]">Nations Represented</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-[-20px]">Inductees</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-[-20px]">Philanthropic Impact</div>
            </div>
        </div>
      </SectionWrapper>

      {/* Process Section */}
      <SectionWrapper title="How It Works" bgColor="bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Apply', desc: 'Submit your detailed profile and CV.' },
              { step: '2', title: 'Review', desc: 'Committee evaluates your achievements.' },
              { step: '3', title: 'Approval', desc: 'University Senate confirms the award.' },
              { step: '4', title: 'Award', desc: 'Receive your Doctorate globally.' }
            ].map((item, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-accent text-2xl font-serif font-bold flex items-center justify-center mb-4 z-10 border-4 border-white shadow-lg">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
                {/* Connector line for desktop */}
                {idx < 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-gray-200 -z-0"></div>}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Eligibility Section */}
      <SectionWrapper title="Eligibility Criteria" bgColor="bg-white">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 border border-gray-100 rounded-3xl shadow-xl">
          <ul className="space-y-6">
            {[
              "Minimum 10-15 years of exceptional leadership or industry experience.",
              "Documented proof of extraordinary achievements or community impact.",
              "Nominations or endorsements from current industry leaders.",
              "A clean, honorable public and professional record."
            ].map((text, i) => (
              <li key={i} className="flex items-start space-x-4">
                <CheckCircle className="text-accent w-6 h-6 flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg font-light leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* NEW FAQ SECTION */}
      <SectionWrapper title="Frequently Asked Questions" bgColor="bg-[#F8FAFC]">
         <ProgramFAQ faqs={doctorateFaqs} />
      </SectionWrapper>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Ready to formalize your legacy?</h2>
        <button className="bg-accent hover:bg-accent-hover text-primary font-bold px-10 py-5 rounded-full transition-all text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1">
          Apply for Honorary Doctorate
        </button>
      </section>

    </main>
  );
};

export default HonoraryDoctorate;
