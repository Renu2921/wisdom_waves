import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <Link to="/" className="text-white font-serif text-2xl font-bold tracking-tight mb-4 block">
              WisdomWaves
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              The world's leading network of professionals and academic institutions, elevating excellence worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Explore</h3>
            <ul className="space-y-3">
              {['Academic Programs', 'Global Network', 'Alumni Association', 'Faculty Directory'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 hover:text-accent text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 hover:text-accent text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>support@wisdomwaves.in</li>
              <li>+91 70659 25013</li>
              <li>1st Floor, building No. F7<br />Sector 58, Noida, Uttar Pradesh<br />201301</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center bg-primary">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} WisdomWaves Academic Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
