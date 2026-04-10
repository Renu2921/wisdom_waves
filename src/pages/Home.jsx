import React from 'react';
import Hero from '../components/sections/Hero';
import StatsNetwork from '../components/sections/StatsNetwork';
import Programs from '../components/sections/Programs';
import Journey from '../components/sections/Journey';
import Story from '../components/sections/Story';
import Testimonials from '../components/sections/Testimonials';
import HomeFAQ from '../components/sections/HomeFAQ';
import CTA from '../components/sections/CTA';
import MetaTags from '../components/seo/MetaTags';

const Home = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "WisdomWaves",
    "description": "Global academic recognition platform offering Honorary Doctorates, PhD, and DBA programs.",
    "url": "https://wisdomwaves.edu",
    "logo": "https://wisdomwaves.edu/assets/favicon.png",
    "sameAs": [
      "https://linkedin.com/company/wisdomwaves",
      "https://twitter.com/wisdomwaves"
    ]
  };

  return (
    <div className="w-full">
      <MetaTags 
        title="Honorary Doctorate & PhD Programs | WisdomWaves" 
        description="Get globally recognized honorary doctorates, PhD, and DBA programs through international universities. Apply now with WisdomWaves."
        schema={organizationSchema}
      />
      <Hero />
      <StatsNetwork />
      <Programs />
      <Journey />
      <Story />
      <Testimonials />
      <HomeFAQ />
      <CTA />
    </div>
  );
};

export default Home;
