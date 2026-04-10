import React from 'react';
import EventCard from '../../ui/EventCard';

const EventsGrid = () => {
  const eventsData = [
    {
      location: "MUMBAI / HYBRID",
      date: "25",
      month: "DEC",
      title: "Global MBA for Future Leaders",
      time: "8:00 AM - 5:00 PM",
      description: "Explore the intersection of traditional management principles and emerging digital paradigms in this intensive leadership summit.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      location: "ONLINE / GLOBAL",
      date: "12",
      month: "JAN",
      title: "Capstone Projects in Cyber Security",
      time: "10:00 AM - 1:00 PM",
      description: "Join elite security experts as they showcase groundbreaking research in defensive architecture and neural network protection.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      location: "LONDON / IN-PERSON",
      date: "04",
      month: "FEB",
      title: "Elite Alumni Networking Gala",
      time: "6:30 PM - 10:00 PM",
      description: "An exclusive evening at our London campus to foster connections between recent graduates and industry titans across Europe.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event, idx) => (
            <EventCard key={idx} {...event} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default EventsGrid;
