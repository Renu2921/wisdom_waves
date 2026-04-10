import React from 'react';
import { Star, Network, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsCTA = () => {
    return (
        <section className="bg-[#F8FAFC] pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                    
                    {/* Content Column */}
                    <div className="w-full lg:w-1/2 p-12 md:p-16 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-10 leading-tight">
                            Take a Tour or Learn More
                        </h2>
                        
                        <ul className="space-y-6 mb-12">
                            <li className="flex items-center text-gray-300 font-light group">
                                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-4 shrink-0 group-hover:bg-accent/20 transition-colors">
                                    <Star className="w-4 h-4 text-accent fill-currentColor" />
                                </div>
                                Empower students through high-impact mentorship.
                            </li>
                            <li className="flex items-center text-gray-300 font-light group">
                                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-4 shrink-0 group-hover:bg-accent/20 transition-colors">
                                    <Network className="w-4 h-4 text-accent" />
                                </div>
                                Build a global network of academic professionals.
                            </li>
                            <li className="flex items-center text-gray-300 font-light group">
                                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-4 shrink-0 group-hover:bg-accent/20 transition-colors">
                                    <Award className="w-4 h-4 text-accent" />
                                </div>
                                Access elite programs and specialized research portals.
                            </li>
                        </ul>
                        
                        <div>
                            <Link 
                                to="/contact" 
                                className="inline-block bg-accent hover:bg-accent-hover text-primary font-bold px-8 py-3.5 rounded-full transition-all shadow-lg text-sm"
                            >
                                Start Learning
                            </Link>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="w-full lg:w-1/2 h-64 lg:h-auto min-h-[400px] relative">
                        <img 
                            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                            alt="Grand Academic Hall" 
                            className="w-full h-full object-cover rounded-none lg:rounded-l-3xl transform lg:-translate-x-8 lg:scale-105 my-auto max-h-[80%] border-4 border-[#0B132B]/50"
                        />
                        {/* Native inner overlay to blend the harsh mask edges per design */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent hidden lg:block pointer-events-none w-16 -ml-8"></div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default EventsCTA;
