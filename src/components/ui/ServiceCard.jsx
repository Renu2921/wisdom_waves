import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100/50 hover:shadow-xl transition-all duration-300 text-center group flex flex-col h-full bg-clip-padding">
      <div className="w-16 h-16 mx-auto bg-yellow-50/50 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow font-light">
        {description}
      </p>
      <Link 
        to={link} 
        className="inline-flex items-center justify-center text-sm font-semibold text-gray-400 group-hover:text-accent transition-colors w-max mx-auto pb-1 border-b border-transparent group-hover:border-accent"
      >
        Learn More <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;
