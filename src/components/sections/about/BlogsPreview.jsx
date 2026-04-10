import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../../ui/BlogCard';

const BlogsPreview = () => {
  const blogs = [
    {
      category: "LEADERSHIP",
      title: "The Evolution of Global Recognition in the Digital Age",
      excerpt: "How prestigious issues shifting from local institutional borders to global peer-to-peer validation.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/blogs"
    },
    {
      category: "EDUCATION",
      title: "Modular Learning: The Future of Executive Development",
      excerpt: "Why micro-credentials and specialized doctoral paths are the new gold standard for busy executives.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/blogs"
    },
    {
      category: "GLOBAL RECOGNITION",
      title: "Building a Legacy: Beyond the Corporate Boardroom",
      excerpt: "Strategies for advanced leaders to translate their wealth of knowledge into academic legacy.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/blogs"
    }
  ];

  return (
    <section className="bg-white py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">Latest Insights & Articles</h2>
            <p className="text-gray-500 text-sm font-light">Explore the intersection of tradition and digital innovation.</p>
          </div>
          <Link to="/blogs" className="text-accent text-sm font-bold hover:text-primary transition-colors border-b border-transparent hover:border-primary mt-4 md:mt-0">
            View All Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <BlogCard 
              key={idx}
              {...blog}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsPreview;
