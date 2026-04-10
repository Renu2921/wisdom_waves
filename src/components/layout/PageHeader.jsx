import React from 'react';

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="bg-primary pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{title}</h1>
        {subtitle && <p className="text-gray-300 text-sm md:text-base font-light">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
