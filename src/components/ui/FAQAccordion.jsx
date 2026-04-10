import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-xl transition-colors duration-300 ${isOpen ? 'bg-white shadow-sm border border-gray-100' : 'bg-gray-50 border border-transparent'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between focus:outline-none text-left"
      >
        <span className="text-sm font-semibold text-gray-800">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-gray-400 shrink-0 ml-4" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 ml-4" />
        )}
      </button>
      
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-500 text-xs leading-relaxed font-light mt-1">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQAccordion;
