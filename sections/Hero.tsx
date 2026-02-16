import React, { useState, useEffect } from "react";

interface HeroProps {
  onSeeProducts?: () => void;
  onQuoteClick?: () => void;
}

const images = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  "https://www.kingchuanpackaging.com/wp-content/uploads/2022/02/Bopp-tape-film-1.jpg",
  "https://media.assettype.com/businessindia%2F2024-03%2F812442c8-2c62-4c94-8772-d08f48cbf0d2%2FCosmo_Pic_4.jpg?w=640&auto=format%2Ccompress",
];

const Hero: React.FC<HeroProps> = ({ onSeeProducts, onQuoteClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 bg-gray-50 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark leading-tight">
            High-Strength <span className="text-primary">BOPP</span> Packaging Solutions
          </h1>

          <p className="mt-6 text-xl text-secondary max-w-lg leading-relaxed">
            Precision-engineered woven bags designed for global industries. 
            Durability meets export-grade quality.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={onQuoteClick}
              className="px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-orange-600 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Get a Quote
            </button>

            <button
              onClick={onSeeProducts}
              className="px-8 py-4 bg-transparent border-2 border-secondary text-secondary font-bold rounded-md hover:border-primary hover:text-primary transition-all active:scale-95"
            >
              Our Products
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex items-center space-x-8 border-t border-gray-200 pt-8">
            <div>
              <p className="text-2xl font-bold text-dark">500+</p>
              <p className="text-xs uppercase tracking-wider text-secondary">
                Global Clients
              </p>
            </div>

            <div className="w-px h-8 bg-gray-200"></div>

            <div>
              <p className="text-2xl font-bold text-dark">25k+</p>
              <p className="text-xs uppercase tracking-wider text-secondary">
                Daily Capacity
              </p>
            </div>

            <div className="w-px h-8 bg-gray-200"></div>

            <div>
              <p className="text-2xl font-bold text-dark">15+</p>
              <p className="text-xs uppercase tracking-wider text-secondary">
                Countries Exported
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CAROUSEL */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100">
            
            <div className="relative w-full h-[450px] overflow-hidden">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Industrial Manufacturing"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
                    ${index === currentIndex ? "opacity-100" : "opacity-0"}
                    grayscale-[0.5] hover:grayscale-0`}
                />
              ))}

              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
              >
                ❮
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
              >
                ❯
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 w-full flex justify-center space-x-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all
                      ${
                        index === currentIndex
                          ? "bg-primary scale-110"
                          : "bg-gray-400"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Decorative accents */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-8 border-l-8 border-primary opacity-30"></div>
          <div className="absolute -top-6 -right-6 w-24 h-24 border-t-8 border-r-8 border-primary opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
