import React from 'react';
import EventsHero from '../components/sections/events/EventsHero';
import EventsGrid from '../components/sections/events/EventsGrid';
import EventsCTA from '../components/sections/events/EventsCTA';
import MetaTags from '../components/seo/MetaTags';

const Events = () => {
  return (
    <div className="w-full bg-[#F8FAFC]">
      <MetaTags 
        title="Academic Events & Webinars | WisdomWaves" 
        description="Join our global academic sessions, workshops, and networking events. Connect with industry leaders and scholars worldwide."
      />
      <EventsHero />
      <EventsGrid />
      <EventsCTA />
    </div>
  );
};

export default Events;
