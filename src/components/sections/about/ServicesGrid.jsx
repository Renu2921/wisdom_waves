import React from 'react';
import { Award, GraduationCap, Briefcase, Network } from 'lucide-react';
import ServiceCard from '../../ui/ServiceCard';

const ServicesGrid = () => {
  const services = [
    {
      icon: Award,
      title: "Honorary Doctorate",
      description: "Recognition of exceptional lifetime contributions and leadership.",
      link: "/honorary-doctorate"
    },
    {
      icon: GraduationCap,
      title: "Honorary PhD",
      description: "Prestigious validation of profound scholarly and societal impact.",
      link: "/honorary-professorship"
    },
    {
      icon: Briefcase,
      title:"PhD",
      description: "Advanced research expertise and original knowledge creation for academic and scientific advancement.",
      link: "/dba-phd-programs"
    },
    {
      icon: Network,
      title: "DBA",
      description: "Doctorate level research applied to real-world business complex.",
      link: "/dba-phd-programs"
    }
  ];

  return (
    <section className="bg-[#F8FAFC] relative z-20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Negative margin to overlap the Hero section */}
        <div className="-mt-32 md:-mt-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <ServiceCard 
                key={idx}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
