import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ListBlogCard = ({ category, date, title, excerpt, author, image, link }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row group hover:shadow-xl transition-all duration-300">
      {/* Target Image Size - slightly smaller ratio than a full course card */}
      <div className="w-full md:w-2/5 md:max-w-xs h-56 md:h-auto overflow-hidden relative shrink-0 p-4">
        <div className="w-full h-full relative group overflow-hidden">
            <img 
                src={image} 
                alt={`WisdomWaves Comprehensive Blog Post on ${title}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300"></div>
        </div>
      </div>
      
      {/* Content Side */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest mb-3">
          <span className="text-blue-600">{category}</span>
          <span className="text-gray-300">•</span>
          <span className="text-gray-500">{date}</span>
        </div>
        
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-snug">
          {title}
        </h3>
        
        <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light line-clamp-2 md:line-clamp-3">
          {excerpt}
        </p>
        
        {/* Footer Area */}
        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs font-bold text-gray-900">{author}</span>
          <Link 
            to={link}
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            Read More <ArrowRight className="ml-1.5 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListBlogCard;
