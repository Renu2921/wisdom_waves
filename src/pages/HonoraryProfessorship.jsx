import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import ProgramCard from '../components/ui/ProgramCard';
import ProgramFAQ from '../components/ui/ProgramFAQ';
import MetaTags from '../components/seo/MetaTags';
import { Users, Presentation, ShieldCheck, Globe, CheckCircle, ArrowRight, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HonoraryProfessorship = () => {
  const navigate=useNavigate();
  const professorshipFaqs = [
      { question: "Is this a full-time academic role?", answer: "No. The Honorary Professorship is an esteemed title designed to run parallel to your primary business or corporate operations, requiring minimal structured time." },
      { question: "Am I required to relocate to the campus?", answer: "No. You can deliver guest lectures, mentor doctoral candidates, and attend symposiums entirely online via global digital channels, or visit campuses dynamically." },
      { question: "What are the core responsibilities?", answer: "Responsibilities are heavily personalized but generally include giving 1-2 masterclasses a year, providing strategic guidance to universities, and optionally co-authoring papers." },
      { question: "What are the eligibility limits?", answer: "Candidates must be active or retired C-Level executives, highly recognized industry innovators, or possess an equivalent lifetime achievement footprint establishing them as uncontested experts." },
      { question: "How long does the appointment last?", answer: "Appointments are typically granted on an ongoing, honorary basis, bringing lifetime prestige to your professional profile." }
  ];

  return (
    <main className="w-full bg-white">
      <MetaTags 
        title="Honorary Professorship | WisdomWaves" 
        description="Share your industrial expertise as an esteemed academic thought leader." 
        imageUrl="/assets/professorship.png"
        keywords="honorary professor, guest lecturer, industry faculty, academic appointment, university mentorship, thought leader"
      />

      <section className="relative bg-primary overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] bg-repeat" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/10 text-accent font-semibold px-4 py-2 rounded-full mb-6 text-sm uppercase tracking-wider">
            <Presentation className="w-4 h-4" />
            <span>Academic Leadership</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Honorary Professorship
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
            A prestigious appointment for industry veterans stepping into the academic realm to mentor the next generation.
          </p>
          <button onClick={()=>navigate("/contact")} className="bg-accent hover:bg-accent-hover text-primary font-bold px-8 py-4 rounded-full transition-all inline-flex items-center group shadow-lg">
             Apply Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <SectionWrapper bgColor="bg-[#F8FAFC]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/assets/professorship.png" 
              alt="Esteemed Industry Veteran giving a Masterclass Lecture" 
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
          </div>
          <article>
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">About the Appointment</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-6">
              The Honorary Professorship is a distinguished faculty appointment reserved for professionals who possess exceptional knowledge and have profoundly impacted their sector. It bridges the gap between theoretical academia and practical industry application.
            </p>
            <p className="text-gray-600 font-light leading-relaxed">
              As an Honorary Professor, you are invited to deliver guest lectures, co-author research papers, and mentor doctoral candidates, bringing the stark reality of modern business into the university ecosystem.
            </p>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Appointment Privileges">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProgramCard 
            title="Academic Status" 
            description="Use the highly respected 'Professor' title in all professional settings."
            icon={<ShieldCheck size={24} />}
          />
          <ProgramCard 
            title="Mentorship" 
            description="Shape the minds of brilliant postgraduate students globally."
            icon={<Users size={24} />}
          />
          <ProgramCard 
            title="Institutional Access" 
            description="Gain access to global university libraries, research grants, and data."
            icon={<Globe size={24} />}
          />
          <ProgramCard 
            title="Guest Lecturing" 
            description="Receive exclusive invitations to speak at international symposiums."
            icon={<Presentation size={24} />}
          />
        </div>
      </SectionWrapper>

      {/* Global Impact (New Content Block) */}
      <SectionWrapper bgColor="bg-[#111827]" titleColor="text-white">
        <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Your Global Impact</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-12">
               Bridging the massive divide between ivory-tower academic theory and brutal modern-day market reality is the core mission of our Honorary Professors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-white/5 border border-white/10 p-8 rounded-xl flex items-start space-x-4">
                    <Globe className="text-accent w-6 h-6 shrink-0 mt-1" />
                    <div>
                        <h4 className="text-white font-bold mb-2">Cross-Border Influence</h4>
                        <p className="text-sm text-gray-400 font-light">Guide doctoral candidates from developing nations, directly fueling structural reform and corporate innovation across global ecosystems.</p>
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-8 rounded-xl flex items-start space-x-4">
                    <BookOpen className="text-accent w-6 h-6 shrink-0 mt-1" />
                    <div>
                        <h4 className="text-white font-bold mb-2">Academic Authorship</h4>
                        <p className="text-sm text-gray-400 font-light">Collaborate with tenured researchers to codify your tacit business life-lessons into recognized academic journals and economic literature.</p>
                    </div>
                </div>
            </div>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Integration Process" bgColor="bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Nomination', desc: 'Self or peer nomination.' },
              { step: '2', title: 'Evaluation', desc: 'Faculty board review.' },
              { step: '3', title: 'Appointment', desc: 'Official induction ceremony.' },
              { step: '4', title: 'Integration', desc: 'Begin guest lectures.' }
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

      <SectionWrapper title="Who Should Apply?" bgColor="bg-white">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 border border-gray-100 rounded-3xl shadow-xl">
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
               <CheckCircle className="text-accent w-6 h-6 flex-shrink-0 mt-1" />
               <span className="text-gray-700 text-lg font-light leading-relaxed">Current or former C-Level Executives or Founders.</span>
            </li>
            <li className="flex items-start space-x-4">
               <CheckCircle className="text-accent w-6 h-6 flex-shrink-0 mt-1" />
               <span className="text-gray-700 text-lg font-light leading-relaxed">Subject Matter Experts with published industry articles or books.</span>
            </li>
            <li className="flex items-start space-x-4">
               <CheckCircle className="text-accent w-6 h-6 flex-shrink-0 mt-1" />
               <span className="text-gray-700 text-lg font-light leading-relaxed">Individuals deeply passionate about education and mentorship.</span>
            </li>
            <li className="flex items-start space-x-4">
               <CheckCircle className="text-accent w-6 h-6 flex-shrink-0 mt-1" />
               <span className="text-gray-700 text-lg font-light leading-relaxed">Holders of a Doctorate or equivalent lifetime achievements.</span>
            </li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Frequently Asked Questions" bgColor="bg-[#F8FAFC]">
         <ProgramFAQ faqs={professorshipFaqs} />
      </SectionWrapper>

      <section className="bg-primary py-20 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Share your expertise with the world.</h2>
        <button  onClick={()=>navigate("/contact")} className="bg-accent hover:bg-accent-hover text-primary font-bold px-10 py-5 rounded-full transition-all text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1">
          Apply for Honorary Professorship
        </button>
      </section>
    </main>
  );
};

export default HonoraryProfessorship;
