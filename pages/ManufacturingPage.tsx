
import React from 'react';

interface ManufacturingPageProps {
  onQuoteClick: () => void;
}

const ManufacturingPage: React.FC<ManufacturingPageProps> = ({ onQuoteClick }) => {
  const machinery = [
    {
      title: 'High-Output Extrusion',
      specs: '750kg/hr production capacity, automated thickness control, and UV additive mixing systems.',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Circular Looms',
      specs: '120+ high-speed looms capable of weaving 10x10 to 14x14 mesh patterns with reinforced gussets.',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Rotogravure Printing',
      specs: 'Multi-station 8-color printing units with solvent-based and water-based ink compatibility.',
      image: 'https://images.unsplash.com/photo-1621243804936-775306a8f2e3?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Auto-Lamination',
      specs: 'Thermal and sandwich lamination processes ensuring bubble-free bonding of BOPP film.',
      image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-white">
      {/* Hero */}
      <div className="bg-dark py-24 relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-extrabold mb-6">Industrial Precision</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our manufacturing facility combines heavy-duty capacity with the finesse of modern automation.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
             <div className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-xs font-bold text-primary uppercase tracking-widest">
               24/7 Operations
             </div>
             <div className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-xs font-bold text-primary uppercase tracking-widest">
               Zero-Waste Target
             </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 grayscale">
          <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" alt="Factory" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        {/* Machinery Grid */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">The Infrastructure</h2>
          <p className="text-4xl font-bold text-dark">Production Hardware</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {machinery.map((item, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row gap-8 items-center bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 p-8">
              <div className="w-full lg:w-1/2 h-64 overflow-hidden rounded-2xl">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold text-dark mb-4">{item.title}</h3>
                <p className="text-secondary text-sm leading-relaxed mb-6">{item.specs}</p>
                <div className="w-12 h-1 bg-primary rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Lab */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl font-bold text-dark mb-6 border-l-4 border-primary pl-4">The QC Laboratory</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Quality is not just a department; it's a measurable outcome. Our internal lab is equipped with universal testing machines to ensure every batch meets your stringent specs.
            </p>
            <ul className="space-y-4">
               {[
                 'Tensile strength testing of yarn and fabric',
                 'Bursting pressure verification',
                 'Ink adhesion and rub resistance tests',
                 'Co-efficient of friction (COF) monitoring for stackability',
                 'UV stabilization weathering tests'
               ].map((test, idx) => (
                 <li key={idx} className="flex items-center text-sm text-gray-500">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {test}
                 </li>
               ))}
            </ul>
          </div>
          <div className="bg-gray-100 p-8 rounded-3xl">
             <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800" alt="Laboratory" className="rounded-2xl shadow-lg grayscale" />
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Experience our facility first-hand</h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            We welcome plant visits for enterprise partners and industrial clients looking to audit our quality standards and capacity.
          </p>
          <button 
            onClick={onQuoteClick}
            className="px-8 py-4 bg-dark text-white font-bold rounded-lg hover:bg-gray-900 transition-all active:scale-95"
          >
            Schedule a Plant Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingPage;
