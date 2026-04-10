import React from 'react';
import BatchesHero from '../components/sections/batches/BatchesHero';
import BatchesGrid from '../components/sections/batches/BatchesGrid';
import TrustLogos from '../components/sections/batches/TrustLogos';
import BatchesCTA from '../components/sections/batches/BatchesCTA';
import MetaTags from '../components/seo/MetaTags';

const UpcomingBatches = () => {
  return (
    <div className="w-full bg-[#F8FAFC]">
      <MetaTags 
        title="Upcoming Doctorate Programs | Apply Now" 
        description="Enroll now to secure your seat and begin your academic journey. Explore upcoming batches for Honorary Doctorates, PhD, and DBA programs."
      />
      <BatchesHero />
      <BatchesGrid />
      <TrustLogos />
      <BatchesCTA />
    </div>
  );
};

export default UpcomingBatches;
