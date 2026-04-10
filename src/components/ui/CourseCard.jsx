import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, description, image, duration, mode, link }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row group hover:shadow-xl transition-shadow duration-300">
      {/* Image Half */}
      <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden relative">
        <img 
          src={image} 
          alt={`WisdomWaves Internationally Recognized ${title} Program Application`} 
          loading="lazy"
          className="w-full h-full object-cover mix-blend-multiply opacity-50 contrast-125 transition-transform duration-700 ease-out group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:hidden"></div>
      </div>
      
      {/* Content Half */}
      <div className="p-8 md:p-10 w-full md:w-3/5 flex flex-col justify-center">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-500 text-xs font-bold uppercase tracking-wider rounded-full">
            {duration}
          </span>
          <span className="px-3 py-1 bg-yellow-50 border border-yellow-100 text-accent text-xs font-bold uppercase tracking-wider rounded-full">
            {mode}
          </span>
        </div>
        <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          {description}
        </p>
        <div>
          <Link 
            to={link}
            className="inline-block bg-primary hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm shadow-md"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
