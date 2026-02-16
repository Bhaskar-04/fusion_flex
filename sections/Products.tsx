
import React from 'react';

interface ProductsProps {
  onViewAll?: () => void;
}

const Products: React.FC<ProductsProps> = ({ onViewAll }) => {
  const products = [
    {
      title: 'BOPP Laminated Bags',
      category: 'Multi-layer Packaging',
      image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=600',
      description: 'High-gloss print finish with exceptional moisture barrier properties.'
    },
    {
      title: 'PP Woven Bags',
      category: 'Heavy Duty',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600',
      description: 'Rugged woven sacks for cement, sand, and industrial raw materials.'
    },
    {
      title: 'Custom Printed Packaging',
      category: 'Branding Solutions',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=600',
      description: 'Up to 8-color rotogravure printing for premium market shelf presence.'
    },
    {
      title: 'Industrial & Agricultural',
      category: 'Versatile Bulk',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=600',
      description: 'Ventilated and UV-stabilized bags for agricultural harvesting.'
    }
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Our Catalog</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-dark">Featured Solutions</p>
          </div>
          <button 
            onClick={onViewAll}
            className="text-primary font-bold flex items-center hover:translate-x-1 transition-transform"
          >
            View All Products
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold text-primary uppercase tracking-tighter mb-2">{product.category}</span>
                <h3 className="text-xl font-bold text-dark mb-3 leading-tight">{product.title}</h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow">{product.description}</p>
                
                <button 
                  onClick={onViewAll}
                  className="text-sm font-semibold text-secondary group-hover:text-primary flex items-center transition-colors"
                >
                  Technical Specs 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
