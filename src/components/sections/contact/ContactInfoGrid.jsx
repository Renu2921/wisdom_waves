import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import InfoCard from '../../ui/InfoCard';

const ContactInfoGrid = () => {
    return (
        <section className="relative z-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="-mt-32 md:-mt-40 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                    <InfoCard 
                        icon={MapPin}
                        title="Office Location"
                        line1="12 Academic Plaza, Suite 400"
                        line2="Cambridge, MA 02138, USA"
                    />
                    <InfoCard 
                        icon={Phone}
                        title="Contact Number"
                        line1="+1 (800) 555-WISDOM"
                        line2="admissions@wisdomwaves.edu"
                    />
                    <InfoCard 
                        icon={Clock}
                        title="Working Hours"
                        line1="Mon - Fri: 09:00 - 20:00"
                        line2="Sat: 10:00 - 16:00 (EST)"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactInfoGrid;
