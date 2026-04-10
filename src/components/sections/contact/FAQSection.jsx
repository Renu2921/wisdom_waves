import React from 'react';
import FAQAccordion from '../../ui/FAQAccordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "What programs do you offer?",
      answer: "WisdomWaves provides a curated selection of advanced fellowships, interdisciplinary journals, and elite mentorship programs designed for post-doctoral scholars and industry pioneers."
    },
    {
      question: "How can I apply?",
      answer: "Candidates can apply directly through our Admissions portal. Our process involves a rigorous primary evaluation of your portfolio and a subsequent panel review by our global academic partners."
    },
    {
      question: "Are these programs internationally recognized?",
      answer: "Yes. All our honorary credentials and doctorate recognition frameworks are validated by our 50+ institutional partners across the United States, Europe, and Asia."
    },
    {
      question: "What support is provided?",
      answer: "Throughout your journey, you are equipped with a dedicated academic advisor, access to our exclusive research archives, and lifetime membership into our global alumni networking platform."
    }
  ];

  return (
    <section className="bg-white py-24 border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Common Inquiries</h2>
          <div className="w-12 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQAccordion key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
