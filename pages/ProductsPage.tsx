
import React, { useState } from 'react';

const categories = ['All Products', 'BOPP Laminated', 'PP Woven', 'Custom Specialty', 'Agricultural'];

const productData = [
  {
    id: 1,
    title: 'BOPP Laminated Rice Bags',
    category: 'BOPP Laminated',
    image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=600',
    specs: {
      gsm: '60 - 120 GSM',
      denier: '600 - 1200',
      printing: 'Rotogravure 8 Colors',
      strength: 'High Burst Resistance'
    }
  },
  {
    id: 2,
    title: 'Industrial Cement Sacks',
    category: 'PP Woven',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600',
    specs: {
      gsm: '80 - 140 GSM',
      denier: '1000 - 1500',
      printing: 'Flexographic',
      strength: 'Valve Closure Tech'
    }
  },
  {
    id: 3,
    title: 'Premium Animal Feed Bags',
    category: 'BOPP Laminated',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=600',
    specs: {
      gsm: '70 - 110 GSM',
      denier: '800 - 1100',
      printing: 'Reverse Print BOPP',
      strength: 'Moisture Barrier'
    }
  },
  {
    id: 4,
    title: 'Ventilated Potato Sacks',
    category: 'Agricultural',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=600',
    specs: {
      gsm: '50 - 90 GSM',
      denier: '600 - 900',
      printing: 'N/A',
      strength: 'UV Stabilized'
    }
  },
  {
    id: 5,
    title: 'Transparent PP Bags',
    category: 'Custom Specialty',
    image: 'https://images.unsplash.com/photo-1605600611284-19561ad7ddf1?auto=format&fit=crop&q=80&w=600',
    specs: {
      gsm: '55 - 85 GSM',
      denier: '500 - 800',
      printing: 'Flexo / Gravure',
      strength: 'Crystal Clarity'
    }
  },
  {
    id: 6,
    title: 'Retail Carrier Bags',
    category: 'Custom Specialty',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=600',
    specs: {
      gsm: '90 - 130 GSM',
      denier: '900 - 1200',
      printing: 'Full Color Branded',
      strength: 'Reinforced Handles'
    }
  },
  {
    id: 7,
    title: 'Leno Mesh Produce Bags',
    category: 'Agricultural',
    image: 'https://images.unsplash.com/photo-1498579687545-d5a44479b75c?auto=format&fit=crop&q=80&w=600',
    specs: {
      gsm: '25 - 50 GSM',
      denier: 'N/A',
      printing: 'Label Attachment',
      strength: 'Breathable Mesh'
    }
  },
  {
    id: 8,
    title: 'Sugar & Flour Sacks',
    category: 'PP Woven',
    image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=600',
    specs: {
      gsm: '65 - 100 GSM',
      denier: '700 - 1000',
      printing: 'Internal Liner',
      strength: 'Leak-Proof Seal'
    }
  }
];

interface ProductsPageProps {
  onQuoteClick: () => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onQuoteClick }) => {
  const [activeCategory, setActiveCategory] = useState('All Products');

  const filteredProducts = activeCategory === 'All Products' 
    ? productData 
    : productData.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-24 bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16 mb-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark mb-4">Complete Product Catalog</h1>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            From heavy-duty industrial sacks to retail-ready BOPP laminated bags, we offer the full spectrum of woven packaging solutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all border ${
                activeCategory === cat 
                  ? 'bg-primary border-primary text-white shadow-md' 
                  : 'bg-white border-gray-200 text-gray-500 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-56 relative overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-100 shadow-sm">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{product.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-4 leading-tight group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center text-sm">
                      <span className="text-gray-400 capitalize">{key}</span>
                      <span className="text-gray-700 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={onQuoteClick}
                  className="w-full py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all text-sm active:scale-95"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specification Banner */}
        <div className="mt-24 bg-dark rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <svg className="w-48 h-48" viewBox="0 0 100 100" fill="currentColor">
               <path d="M10,10 H90 V90 H10 Z" />
            </svg>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Need Custom Specifications?</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our manufacturing capacity allows for fully custom bag dimensions, lamination thickness, and specialized features like easy-open taps or side-gussets.
              </p>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom width from 30cm to 90cm
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  UV Protection (200 - 1600 hours)
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Inside or outside lamination options
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
              <h4 className="text-xl font-bold text-primary mb-4">Direct Sales Access</h4>
              <p className="text-sm text-gray-400 mb-6">Connect with a dedicated account manager for enterprise-level logistics and pricing.</p>
              <button 
                onClick={onQuoteClick}
                className="w-full py-4 bg-primary text-white font-bold rounded-lg text-sm shadow-lg shadow-orange-900/20 active:scale-95 transition-all"
              >
                Contact Sales Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
