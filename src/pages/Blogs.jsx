import React from 'react';
import BlogsHero from '../components/sections/blogs/BlogsHero';
import ListBlogCard from '../components/ui/ListBlogCard';
import Sidebar from '../components/sections/blogs/Sidebar';
import NewsletterCTA from '../components/sections/blogs/NewsletterCTA';
import MetaTags from '../components/seo/MetaTags';
import { blogsData } from '../data/blogsData';

const Blogs = () => {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "WisdomWaves Blogs",
    "description": "Expert insights on education, leadership, and global recognition.",
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "WisdomWaves"
    }
  };


  return (
    <div className="w-full bg-[#F8FAFC]">
      <MetaTags 
        title="Education Insights & Doctorate Guides | WisdomWaves Blog" 
        description="Explore expert insights on education, leadership, and global recognition. Read guides on PhD, DBA, and Honorary Doctorates."
        schema={blogSchema}
      />
      <BlogsHero />
      
      {/* Main Two-Column Layout Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16">
          
          {/* Primary Column - Blog List (8 cols) */}
          <div className="lg:col-span-8 flex flex-col space-y-8">
            {blogsData.map((blog, idx) => (
              <ListBlogCard key={idx} {...blog} />
            ))}
            
            {/* Pagination / Load More */}
            <div className="pt-10 flex justify-center">
                <button className="bg-transparent border border-gray-300 hover:border-primary text-gray-700 hover:text-primary font-bold px-8 py-3 rounded-full transition-colors text-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)]">
                    Load More Articles
                </button>
            </div>
          </div>
          
          {/* Secondary Column - Sidebar (4 cols) */}
          <div className="lg:col-span-4 relative mt-16 lg:mt-0">
            {/* Sticky Wrapper to trail along desktop scroll */}
            <div className="sticky top-28">
              <Sidebar />
            </div>
          </div>

        </div>
      </section>

      <NewsletterCTA />
    </div>
  );
};

export default Blogs;
