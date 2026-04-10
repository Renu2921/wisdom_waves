import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsletterCTA = () => {
    return (
        <section className="bg-[#F8FAFC] py-24 pb-32 border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-900 border-b border-gray-200"></div> {/* Divider */}
            
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
                    Stay Ahead with Expert Insights
                </h2>
                <p className="text-gray-500 text-sm md:text-base font-light mb-10 leading-relaxed">
                    Subscribe to our monthly vanguard newsletter to receive curated research, leadership trends, and academic opportunities.
                </p>
                
                <form className="flex flex-col sm:flex-row items-center justify-center max-w-xl mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
                    <input 
                        type="email" 
                        placeholder="Enter your academic email" 
                        required
                        className="w-full sm:flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm bg-white shadow-sm"
                    />
                    <button 
                        type="submit" 
                        className="w-full sm:w-auto bg-primary hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-full transition-colors shadow-md text-sm whitespace-nowrap"
                    >
                        Explore More Articles
                    </button>
                </form>
            </div>
        </section>
    );
};

export default NewsletterCTA;
