
import React from 'react';

interface AboutPageProps {
  onQuoteClick: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onQuoteClick }) => {
  return (
    <div className="pt-24 pb-24 bg-white">
      {/* Hero */}
      <div className="bg-gray-50 py-20 border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold text-dark mb-6 leading-tight">
              Pioneering the Future of <span className="text-primary">Woven Packaging</span>
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              Founded on the principles of engineering excellence and industrial reliability, Fusion Flex has grown into a leading manufacturer of BOPP laminated solutions for global trade.
            </p>
          </div>
        </div>
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 100 100" fill="currentColor">
            <path d="M0,0 L100,0 L100,100 Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        {/* Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
          <div>
            <h2 className="text-3xl font-bold text-dark mb-6 border-l-4 border-primary pl-4">Our History</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Fusion Flex began as a small weaving unit with a single vision: to provide the agricultural sector with bags that didn't just carry products, but protected them. Over two decades, we have evolved into a vertically integrated powerhouse.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, our facility spans over 100,000 sq. ft., housing some of the most advanced rotogravure and extrusion technology available in the industry.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark mb-6 border-l-4 border-primary pl-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              To empower global industries with packaging that is high-strength, visually superior, and environmentally conscious. We strive to reduce waste through extreme durability and recyclability.
            </p>
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
              <p className="text-primary font-bold italic">"Reliability in every fiber, quality in every print."</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark mb-6 border-l-4 border-primary pl-4">Our People</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our strength lies in our technical team. With over 250 skilled technicians and engineers, we maintain a culture of precision and constant learning.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Safety and fair labor practices are the bedrock of our operations, ensuring a sustainable workforce that is as reliable as our products.
            </p>
          </div>
        </div>

        {/* Global Impact */}
        <div className="bg-dark rounded-3xl p-12 text-white mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">A Global Export Partner</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                  <p className="text-gray-300">Serving 15+ countries across 4 continents.</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                  <p className="text-gray-300">Dedicated logistics support for sea and air freight.</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                  <p className="text-gray-300">Compliance with FDA and international food-grade standards.</p>
                </div>
              </div>
              <button 
                onClick={onQuoteClick}
                className="mt-10 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-orange-600 transition-all active:scale-95"
              >
                Inquire for Export
              </button>
            </div>
            <div className="relative h-64 lg:h-96">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800" 
                alt="Global Shipping" 
                className="w-full h-full object-cover rounded-2xl opacity-50 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Certified Excellence</h2>
          <p className="text-3xl font-bold text-dark">Trust through Standardization</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['ISO 9001:2015', 'BRC Certified', 'ISO 14001', 'FDA Compliant'].map((cert, idx) => (
            <div key={idx} className="p-8 border border-gray-100 rounded-2xl bg-gray-50 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm mb-4 flex items-center justify-center">
                 <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.9L9.03 1.12c.623-.343 1.345-.343 1.968 0l6.865 3.78c.553.304.89.878.89 1.5V13.333c0 .622-.337 1.196-.89 1.5l-6.865 3.78c-.623.343-1.345.343-1.968 0l-6.865-3.78A1.75 1.75 0 011 13.333V6.4c0-.622.337-1.196.89-1.5zM12 4a1 1 0 10-2 0 1 1 0 002 0zm-2 12a1 1 0 100-2 1 1 0 000 2zM5 8a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2zM5 13a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                 </svg>
              </div>
              <p className="font-bold text-dark text-sm">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
