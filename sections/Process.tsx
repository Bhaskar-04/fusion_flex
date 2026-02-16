
import React from 'react';

interface ProcessProps {
  onViewManufacturing?: () => void;
}

const Process: React.FC<ProcessProps> = ({ onViewManufacturing }) => {
  const steps = [
    { name: 'Extrusion', desc: 'Melting and processing raw PP resin into high-tenacity tapes.' },
    { name: 'Weaving', desc: 'Circular weaving of tapes into strong, seamless tubular fabric.' },
    { name: 'Lamination', desc: 'Precision bonding of BOPP film to the woven substrate.' },
    { name: 'Printing', desc: 'High-speed rotogravure printing for photorealistic designs.' },
    { name: 'Finishing', desc: 'Automated cutting, stitching, and final quality inspection.' }
  ];

  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Workflow</h2>
            <p className="text-3xl font-extrabold text-dark">Our Manufacturing Excellence</p>
          </div>
          <button 
            onClick={onViewManufacturing}
            className="text-primary font-bold flex items-center hover:translate-x-1 transition-transform text-sm"
          >
            Explore Facility Technicals
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="group">
                <div className="flex flex-col lg:items-center">
                  <div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-primary group-hover:shadow-md transition-all duration-300 relative">
                    <span className="text-2xl font-black text-gray-300 group-hover:text-primary transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {/* Active Step Indicator */}
                    <div className="absolute -right-1 -top-1 w-4 h-4 bg-primary rounded-full transform scale-0 group-hover:scale-100 transition-transform"></div>
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-3 lg:text-center group-hover:text-primary transition-colors">
                    {step.name}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed lg:text-center">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
