import React from 'react';
import { Search, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const categories = [
    { name: 'PhD Research', count: 12 },
    { name: 'DBA Programs', count: 8 },
    { name: 'Global MBA', count: 16 },
    { name: 'Educational Leadership', count: 6 },
  ];

  const recentPosts = [
    {
      title: "The Shift Towards Global Online Doctorate Recognitions",
      date: "2 DAYS AGO",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      title: "Funding your PhD: Grants, Scholarships and Sponsorships",
      date: "1 WEEK AGO",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <aside className="w-full flex flex-col space-y-10">
      
      {/* Widget 1: Search */}
      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
        <h4 className="font-serif font-bold text-gray-900 mb-4 text-lg">Search Insights</h4>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Topics, authors..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border-none bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
          />
        </div>
      </div>

      {/* Widget 2: Categories */}
      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
        <h4 className="font-serif font-bold text-gray-900 mb-6 text-lg">Expertise Domains</h4>
        <ul className="space-y-4">
          {categories.map((cat, idx) => (
            <li key={idx}>
              <Link to="#" className="flex items-center justify-between group">
                <span className="text-sm text-gray-600 group-hover:text-primary transition-colors">{cat.name}</span>
                <span className="text-[10px] font-bold bg-gray-200 text-gray-500 px-2 py-0.5 rounded-md group-hover:bg-primary group-hover:text-white transition-colors">
                  {cat.count.toString().padStart(2, '0')}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Widget 3: Recent Posts */}
      <div className="bg-transparent">
        <h4 className="font-serif font-bold text-gray-900 mb-6 text-lg px-2">Latest Discussions</h4>
        <div className="space-y-6">
          {recentPosts.map((post, idx) => (
            <Link key={idx} to="/blogs" className="flex items-start space-x-4 group">
              <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div>
                <h5 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-1">
                  {post.title}
                </h5>
                <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                  {post.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Widget 4: Sidebar CTA Card */}
      <div className="bg-primary rounded-2xl p-8 shadow-xl relative overflow-hidden text-center group">
        <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-700">
          <Star className="w-32 h-32 text-accent" fill="currentColor" />
        </div>
        <div className="relative z-10">
          <h4 className="font-serif font-bold text-white text-xl mb-4">Academic Excellence Awaits</h4>
          <p className="text-xs text-gray-300 leading-relaxed mb-6 font-light">
            Join our network of elite scholars and gain exclusive access to research tools.
          </p>
          <Link to="/contact" className="block w-full bg-accent hover:bg-accent-hover text-primary font-bold py-3 rounded-xl transition-colors text-sm shadow-md">
            Request Invitation
          </Link>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;
