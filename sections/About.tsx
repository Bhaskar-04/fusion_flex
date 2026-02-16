
import React from 'react';

interface AboutProps {
  onViewAbout?: () => void;
}

const About: React.FC<AboutProps> = ({ onViewAbout }) => {
  const highlights = [
    {
      title: 'Premium Quality',
      desc: 'Double-layered lamination ensures moisture resistance and superior strength.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21.48V12" />
        </svg>
      )
    },
    {
      title: 'Mass Capacity',
      desc: 'High-speed circular looms and multi-stage extrusion for large-scale orders.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: 'Export Grade',
      desc: 'Certified manufacturing processes meeting international packaging standards.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-dark border-l-4 border-primary pl-4 mb-6">
              Precision Manufacturing for Global Demands
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Fusion Flex specializes in the high-quality production of Biaxially Oriented Polypropylene (BOPP) woven bags. 
              Our manufacturing facility utilizes state-of-the-art European technology to ensure every bag offers unparalleled 
              tensile strength, vivid print quality, and reliable lamination.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              With a core focus on scalability and sustainability, we serve industries ranging from agriculture and animal feed 
              to chemicals and retail minerals. Our bags are engineered to protect your product while enhancing your brand identity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-lg text-secondary group-hover:text-primary transition-colors mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={onViewAbout}
              className="text-primary font-bold flex items-center hover:translate-x-1 transition-transform"
            >
              Learn More About Fusion Flex
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800" 
                alt="Production Line" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-10 -right-10 hidden xl:block w-64 p-6 bg-dark text-white rounded-lg shadow-2xl">
                <p className="text-primary font-bold text-xl mb-2">Our Vision</p>
                <p className="text-sm opacity-80 italic">"Setting the gold standard in industrial woven packaging through relentless innovation and quality control."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
