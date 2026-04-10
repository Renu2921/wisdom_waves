import React from 'react';
import { Globe, Building, Users, MapPin } from 'lucide-react';

const StatsNetwork = () => {
  return (
    <section className="bg-white py-16" id="network">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white shadow-xl rounded-2xl -mt-24 p-8 relative z-20 border border-gray-100 mb-20 space-y-6 md:space-y-0 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">500+</h2>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Distinguished<br/>Alumni</p>
          </div>
          <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">50+</h2>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Global<br/>Institutions</p>
          </div>
          <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">20+</h2>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Countries<br/>Represented</p>
          </div>
          <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
          <div className="flex flex-col space-y-2 opacity-60">
            <span className="font-serif font-bold text-sm text-gray-400 text-center tracking-widest whitespace-nowrap">OXFORD ALLIANCE</span>
            <span className="font-serif font-bold text-sm text-gray-400 text-center tracking-widest whitespace-nowrap">HARVARD GLOBAL</span>
            <span className="font-serif font-bold text-sm text-gray-400 text-center tracking-widest whitespace-nowrap">CAMBRIDGE ACADEMY</span>
          </div>
        </div>

        {/* Global Network Section */}
        <div className="text-center mb-12 mt-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Global University Network</h2>
          <p className="text-gray-500 text-sm">Collaborating with prestigious institutions worldwide</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { country: 'United Kingdom', desc: 'Oxfordshire & London', icon: Building, tag: '🇬🇧' },
            { country: 'United States', desc: 'Ivy League Affiliates', icon: Globe, tag: '🇺🇸' },
            { country: 'France', desc: 'Parisian Academies', icon: Users, tag: '🇫🇷' },
            { country: 'Germany', desc: 'Berlin Tech Hubs', icon: MapPin, tag: '🇩🇪' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <item.icon className="h-5 w-5 text-gray-400 group-hover:text-accent" />
              </div>
              <h3 className="text-md font-bold text-gray-900 flex justify-center items-center gap-2">
                <span className="text-xl">{item.tag}</span> {item.country}
              </h3>
              <p className="text-xs text-gray-400 mt-2 uppercase tracking-wide">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsNetwork;
