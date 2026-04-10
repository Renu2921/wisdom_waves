import React from 'react';
import ContactHero from '../components/sections/contact/ContactHero';
import ContactInfoGrid from '../components/sections/contact/ContactInfoGrid';
import ContactSplitForm from '../components/sections/contact/ContactSplitForm';
import GlobalMap from '../components/sections/contact/GlobalMap';
import FAQSection from '../components/sections/contact/FAQSection';
import ContactCTA from '../components/sections/contact/ContactCTA';
import MetaTags from '../components/seo/MetaTags';

const ContactUs = () => {
  return (
    <div className="w-full bg-[#F8FAFC]">
      <MetaTags 
        title="Contact WisdomWaves | Apply for Doctorate Programs" 
        description="Get in touch with WisdomWaves to apply for global academic recognition, DBA programs, and network with leading global academics."
      />
      <ContactHero />
      <ContactInfoGrid />
      <ContactSplitForm />
      <GlobalMap />
      <FAQSection />
      <ContactCTA />
    </div>
  );
};

export default ContactUs;
