import React from 'react';
import AboutHero from '../components/sections/about/AboutHero';
import ServicesGrid from '../components/sections/about/ServicesGrid';
import CoursesSection from '../components/sections/about/CoursesSection';
import AlumniSection from '../components/sections/about/AlumniSection';
import BlogsPreview from '../components/sections/about/BlogsPreview';
import MissionVision from '../components/sections/about/MissionVision';
// import CallToAction from '../components/sections/about/CallToAction';
import MetaTags from '../components/seo/MetaTags';
import AboutCTA from '../components/sections/about/AboutCTA';

const About = () => {
  return (
    <div className="w-full bg-[#F8FAFC]">
      <MetaTags 
        title="About WisdomWaves | Global Academic Recognition Platform" 
        description="Discover how WisdomWaves empowers global leaders through advanced academic recognition, exclusive networking, and elite honorary credentials."
      />
      <AboutHero />
      <ServicesGrid />
      <CoursesSection />
      <AlumniSection />
      <BlogsPreview />
      <MissionVision />
      <AboutCTA/>
    </div>
  );
};

export default About;
