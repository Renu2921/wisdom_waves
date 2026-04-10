import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      text: "The recognition from WisdomWaves has significantly amplified my philanthropic efforts. It's an honor that truly reflects my life's journey.",
      author: "Dr. Liana Grace",
      role: "CEO, Tech For Good Global",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      text: "A profoundly humbling experience. The rigorous vetting process ensures that this award maintains the highest level of prestige.",
      author: "Prof. David Rodriguez",
      role: "Director, Innovation Foundation",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Voices of Influence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex space-x-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic leading-relaxed mb-8">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <img 
                  src={review.image} 
                  alt={review.author} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mt-0.5">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
