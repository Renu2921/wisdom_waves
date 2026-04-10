import React from 'react';

const BlogsHero = () => {
  return (
    <section className="bg-[#F8FAFC] pt-32 pb-24 relative overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Background soft teal/blue gradient */}
      <div className="absolute inset-0 z-0 opacity-60 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent"></div>
      <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-50 via-transparent to-transparent"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center space-x-2 bg-yellow-500/10 text-accent font-semibold px-4 py-1.5 rounded-full mb-8 text-[10px] uppercase tracking-[0.2em] border border-accent/20">
          <span>ACADEMIC VANGUARD</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-[64px] font-serif font-bold text-gray-900 mb-6 leading-tight">
          Insights & Articles
        </h1>
        
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Explore expert insights on education, leadership, and global recognition from the world's leading academic curators.
        </p>
      </div>
    </section>
  );
};

export default BlogsHero;
