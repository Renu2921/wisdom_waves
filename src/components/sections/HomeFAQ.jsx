import React, { useState } from 'react';
import FAQAccordion from '../ui/FAQAccordion';

const HomeFAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const faqs = [
        {
            question: "What is an Honorary Doctorate?",
            answer: "An Honorary Doctorate is a high-level academic recognition granted to individuals who have made significant, measurable contributions to their field, industry, or society, distinct from an academically earned degree."
        },
        {
            question: "How is an Honorary Doctorate different from a PhD?",
            answer: "A PhD is a research-based academic degree requiring coursework, a dissertation, and defense. An Honorary Doctorate is awarded based on prior life achievements, executive leadership, and established expertise without further academic study."
        },
        {
            question: "Is an Honorary Doctorate valid and recognized?",
            answer: "Yes, our Honorary Doctorates are validated by our global consortium of institutional partners, ensuring respect and recognition for your life's work across professional and academic networking environments."
        },
        {
            question: "Who is eligible for an Honorary Doctorate?",
            answer: "Senior executives, industry pioneers, philanthropists, and individuals possessing decades of demonstrated excellence or transformative leadership in their respective domains are highly eligible."
        },
        {
            question: "What is the duration of a PhD program?",
            answer: "Traditional PhD programs typically range between 3 to 5 years of dedicated academic research, concluding with a fully vetted dissertation defense under institutional faculty oversight."
        },
        {
            question: "What is a DBA and how is it different from a PhD?",
            answer: "A Doctor of Business Administration (DBA) focuses on practical, applied research to solve immediate industry challenges, whereas a PhD is predominantly theoretical and designed for career academics."
        },
        {
            question: "Can working professionals apply for these programs?",
            answer: "Absolutely. Both our DBA and Honorary recognitions are explicitly designed to accommodate the schedules of high-level working professionals, featuring fully remote and hybrid pathways."
        },
        {
            question: "What is the application process?",
            answer: "Candidates submit a comprehensive portfolio of their achievements. Our independent review panel then evaluates these credentials against global standards to determine eligibility and alignment with your chosen program."
        },
        {
            question: "Are these programs internationally recognized?",
            answer: "Yes. All credentials, awards, and degrees granted through the WisdomWaves consortium hold rigorous international validity due to our cross-border academic accreditation relationships."
        },
        {
            question: "Do I need to write a thesis for DBA or PhD?",
            answer: "Yes, both earned DBA and earned PhD tracks require a dissertation or substantial final thesis. Conversely, Honorary Doctorates rely exclusively on your already-established body of work."
        }
    ];

    return (
        <section className="bg-gray-50 py-24 pb-32 border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-500 text-lg font-light">
                        Everything you need to know about our academic programs
                    </p>
                    <div className="w-16 h-1 bg-accent mx-auto mt-8"></div>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} onClick={() => toggleFAQ(index)}>
                            {/* We wrap the generic FAQAccordion with manual state oversight to ensure only one is open at a time like requested */}
                            <FAQAccordionToggle 
                                question={faq.question} 
                                answer={faq.answer} 
                                isOpen={openIndex === index} 
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

// Extracted internal pure component to hook smoothly into the parent's single-active-index tracking
const FAQAccordionToggle = ({ question, answer, isOpen }) => {
    return (
        <div className={`rounded-xl transition-all duration-300 cursor-pointer ${isOpen ? 'bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-100 transform scale-[1.01]' : 'bg-transparent border border-gray-200 hover:border-gray-300'}`}>
            <div className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between">
                <span className={`text-base md:text-lg font-semibold pr-4 ${isOpen ? 'text-primary' : 'text-gray-800'}`}>
                    {question}
                </span>
                
                {/* Plus/Minus Indicator */}
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'border-primary bg-primary text-white' : 'border-gray-300 text-gray-400'}`}>
                    <svg className={`w-4 h-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        )}
                    </svg>
                </div>
            </div>
            
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 px-6 md:px-8 pb-6' : 'max-h-0 opacity-0 px-6 md:px-8'
                }`}
            >
                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light mt-1 pt-4 border-t border-gray-100">
                    {answer}
                </p>
            </div>
        </div>
    );
};

export default HomeFAQ;
