import React from 'react';

const Story = () => {
  return (
    <section className="bg-primary py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images Section */}
          <div className="relative h-96 w-full flex items-center">
            {/* Background Graphic/Textured Card Placeholder */}
            <div className="absolute left-0 bottom-0 w-2/3 h-5/6 bg-[#131E3A] rounded-2xl border border-white/5 shadow-2xl p-6 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>
                {/* Abstract shape representing the left image in design */}
                <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center relative shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                    <div className="w-24 h-24 rounded-full border border-white/20 blur-sm"></div>
                    <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md absolute"></div>
                </div>
                <p className="text-white/40 text-[10px] mt-6 tracking-widest uppercase">WisdomWaves Identity</p>
            </div>
            
            {/* Foreground Image Placeholder */}
            <div className="absolute right-0 top-0 w-2/3 h-5/6 rounded-2xl shadow-2xl border border-white/10 overflow-hidden transform translate-x-4 -translate-y-4">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Business Handshake" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
            </div>
          </div>
          
          {/* Text Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              The WisdomWaves<br />Story
            </h2>
            <div className="space-y-6 text-gray-300 font-light text-sm md:text-base mb-10">
              <p>
                Founded on the principles of academic integrity and professional merit, WisdomWaves serves as the bridge between lifetime achievement and institutional recognition.
              </p>
              <p>
                Our vision is to curate a global fellowship of leaders, ensuring that significant societal contributions are celebrated by prestigious academies vanguard.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <h4 className="text-accent text-xl font-bold font-serif mb-1">Global</h4>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Presence</p>
              </div>
              <div>
                <h4 className="text-accent text-xl font-bold font-serif mb-1">Elite</h4>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
