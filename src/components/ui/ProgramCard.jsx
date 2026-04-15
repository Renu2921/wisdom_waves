import React from 'react';

const ProgramCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1">
      {icon && (
        <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center text-accent mb-6">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 font-light text-sm leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
};

export default ProgramCard;
