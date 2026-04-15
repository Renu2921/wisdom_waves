import React from 'react';

const SectionWrapper = ({ title, children, className = "", bgColor = "bg-white", titleColor = "text-primary" }) => {
  return (
    <section className={`py-16 ${bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-12 text-center ${titleColor}`}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
