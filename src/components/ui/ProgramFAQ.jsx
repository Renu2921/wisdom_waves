import React, { useState } from 'react';

const ProgramFAQ = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
                <div 
                    key={index} 
                    onClick={() => toggleFAQ(index)}
                    className={`rounded-xl transition-all duration-300 cursor-pointer ${
                        openIndex === index 
                        ? 'bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-100 transform scale-[1.01]' 
                        : 'bg-transparent border border-gray-200 hover:border-gray-300'
                    }`}
                >
                    <div className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between">
                        <span className={`text-base md:text-lg font-semibold pr-4 ${openIndex === index ? 'text-primary' : 'text-gray-800'}`}>
                            {faq.question}
                        </span>
                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                            openIndex === index ? 'border-primary bg-primary text-white' : 'border-gray-300 text-gray-400'
                        }`}>
                            <svg className={`w-4 h-4 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {openIndex === index ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                )}
                            </svg>
                        </div>
                    </div>
                    
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openIndex === index ? 'max-h-96 opacity-100 px-6 md:px-8 pb-6' : 'max-h-0 opacity-0 px-6 md:px-8'
                        }`}
                    >
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light mt-1 pt-4 border-t border-gray-100">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProgramFAQ;
