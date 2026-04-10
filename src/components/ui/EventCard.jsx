import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';

const EventCard = ({ 
  location, 
  title, 
  time, 
  description, 
  date, 
  month, 
  image 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Top Image Box */}
      <div className="w-full h-56 relative overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={`WisdomWaves Global Academic Event Registration for ${title}`} 
          loading="lazy"
          className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
        />
        
        {/* Floating Date Badge */}
        <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm text-primary rounded-xl p-3 text-center min-w-[72px] shadow-lg">
          <p className="text-2xl font-bold leading-none mb-0.5">{date}</p>
          <p className="text-[10px] font-bold uppercase tracking-widest leading-none">{month}</p>
        </div>
      </div>
      
      {/* Content Box */}
      <div className="p-8 flex flex-col flex-grow">
        
        <div className="flex items-center text-blue-600 mb-3">
          <MapPin className="w-3.5 h-3.5 mr-1.5" />
          <p className="text-[10px] font-bold uppercase tracking-widest leading-none">{location}</p>
        </div>
        
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{title}</h3>
        
        <div className="flex items-center text-gray-500 text-sm mb-6 pb-6 border-b border-gray-100">
          <Clock className="w-4 h-4 mr-2" />
          <span className="font-medium font-light">{time}</span>
        </div>
        
        <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow font-light line-clamp-3">
          {description}
        </p>
        
        {/* Full-width Button */}
        <Link 
          to="/about"
          className="block w-full text-center bg-transparent border border-gray-300 hover:border-primary text-gray-900 hover:text-primary font-bold py-3.5 rounded-full transition-colors text-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
