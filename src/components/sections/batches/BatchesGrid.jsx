import React from 'react';
import { GraduationCap } from 'lucide-react';
import BatchCard from '../../ui/BatchCard';

const BatchesGrid = () => {
  const programs = [
    {
      university: "ST. ANDREWS GLOBAL UNIVERSITY",
      title: "Honorary Doctorate",
      duration: "3 months",
      mode: "Live Session",
      tag: "DISTINGUISHED",
      startDate: "15",
      startMonth: "SEP",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      university: "CAMBRIDGE ACADEMIC TRUST",
      title: "Honorary PhD",
      duration: "5 months",
      mode: "Online Mode",
      tag: "RESEARCH FOCUS",
      startDate: "02",
      startMonth: "OCT",
      image: "https://images.unsplash.com/photo-1629731669865-cde1fece8f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      university: "GLOBAL SCHOOL OF BUSINESS",
      title: "Executive MBA",
      duration: "2 years",
      mode: "Hybrid Live",
      tag: "LEADERSHIP",
      startDate: "12",
      startMonth: "NOV",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      university: "INSTITUTE OF STRATEGIC MANAGEMENT",
      title: "DBA Program",
      duration: "3 years",
      mode: "Online Mode",
      tag: "ADVANCED",
      startDate: "05",
      startMonth: "JAN",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="bg-[#F8FAFC] pb-24" id="programs-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {programs.map((program, idx) => (
            <BatchCard key={idx} {...program} />
          ))}

          {/* Ghost Placeholder Card */}
          <div className="bg-transparent border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-8 text-center min-h-[400px] text-gray-400 group hover:border-gray-300 hover:text-gray-500 transition-colors">
            <GraduationCap className="w-10 h-10 mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-serif italic text-lg leading-relaxed max-w-[200px]">New Academic Paths Announced Quarterly</h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BatchesGrid;
