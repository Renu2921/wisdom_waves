import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Radio } from 'lucide-react';

const BatchCard = ({ 
  university, 
  title, 
  duration, 
  mode, 
  tag, 
  startDate, 
  startMonth, 
  image 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Top Image Box */}
      <div className="w-full h-48 relative overflow-hidden bg-primary">
        <img 
          src={image} 
          alt={`WisdomWaves ${title} Academic Masterclass Session`} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
        
        {/* Floating Date Badge */}
        <div className="absolute top-4 right-4 bg-accent text-primary rounded-xl p-2 text-center min-w-[64px] shadow-lg">
          <p className="text-[9px] font-bold uppercase tracking-widest leading-none mb-1 opacity-80">STARTS</p>
          <p className="text-xl font-bold leading-none">{startDate}</p>
          <p className="text-xs font-bold leading-tight">{startMonth}</p>
        </div>

        {/* Tag over image */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            {tag}
          </span>
        </div>
      </div>
      
      {/* Content Box */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mb-2">{university}</p>
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">{title}</h3>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 mb-8 border-t border-gray-100 pt-4 mt-auto">
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-2 text-primary" />
            <span className="font-medium">{duration}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Radio className="w-4 h-4 mr-2 text-primary" />
            <span className="font-medium">{mode}</span>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <Link 
            to="/about"
            className="w-full text-center bg-transparent border border-gray-300 hover:border-primary text-gray-700 hover:text-primary font-semibold py-2.5 rounded-full transition-colors text-sm"
          >
            Learn More
          </Link>
          <Link 
            to="/contact"
            className="w-full text-center bg-primary hover:bg-gray-800 text-white font-semibold py-2.5 rounded-full transition-colors text-sm shadow-md"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BatchCard;
