import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ category, title, excerpt, image, link }) => {
  return (
    <div className="group cursor-pointer flex flex-col h-full">
      <div className="w-full h-56 rounded-2xl mb-6 overflow-hidden relative">
        <img 
          src={image} 
          alt={`WisdomWaves Insight Article on ${title}`} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300"></div>
      </div>
      <div className="flex items-center space-x-2 text-[10px] text-accent font-bold uppercase tracking-widest mb-3">
        <span>{category}</span>
      </div>
      <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-snug">
        {title}
      </h3>
      <p className="text-sm text-gray-500 line-clamp-2 mb-4 font-light">
        {excerpt}
      </p>
      <div className="mt-auto pt-2 border-t border-gray-100"></div>
    </div>
  );
};

export default BlogCard;
