import React from 'react';
import CourseCard from '../../ui/CourseCard';

const CoursesSection = () => {
  return (
    <section className="bg-[#F8FAFC] py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Strategic Academic Programs</h2>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Tailored for the elite, our programs combine rigorous research with practical global leadership insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CourseCard
            title="Executive DBA"
            description="Bridging the gap between professional experience and academic contributions for C-suite leaders."
            duration="36 MONTHS"
            mode="SENIOR EXECUTIVES"
            image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            link="/contact"
          />
          <CourseCard
            title="Global MBA"
            description="Intensive curriculum focused on cross-cultural negotiation and digital transformation strategies."
            duration="12 MONTHS"
            mode="EMERGING LEADERS"
            image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            link="/contact"
          />
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
