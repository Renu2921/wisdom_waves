import React from 'react';

const InfoCard = ({ icon: Icon, title, line1, line2 }) => {
  return (
    <div className="bg-white rounded-3xl p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-blue-50 flex flex-col items-center justify-center mb-6">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-500 text-sm font-light leading-relaxed">
        {line1}<br />
        {line2}
      </p>
    </div>
  );
};

export default InfoCard;
