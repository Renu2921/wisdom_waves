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
                        line1="1st Floor, building No. F7"
                        line2="Sector 58, Noida, Uttar Pradesh, 201301"
                    />
                    <InfoCard 
                        icon={Phone}
                        title="Contact Number"
                        line1="+91 70659 25013"
                        line2="support@wisdomwaves.in"
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
