
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Products from './sections/Products';
import WhyUs from './sections/WhyUs';
import Process from './sections/Process';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ManufacturingPage from './pages/ManufacturingPage';
import QuoteModal from './components/QuoteModal';
import FloatingContact from './components/FloatingContact';

export type PageType = 'home' | 'products' | 'about' | 'manufacturing';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Scroll to top when switching pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
  };

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onNavigate={navigateTo} 
        currentPage={currentPage} 
        onQuoteClick={openQuoteModal} 
      />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero onSeeProducts={() => navigateTo('products')} onQuoteClick={openQuoteModal} />
            <About onViewAbout={() => navigateTo('about')} />
            <Products onViewAll={() => navigateTo('products')} />
            <WhyUs />
            <Process onViewManufacturing={() => navigateTo('manufacturing')} />
            <Contact />
          </>
        )}
        {currentPage === 'products' && <ProductsPage onQuoteClick={openQuoteModal} />}
        {currentPage === 'about' && <AboutPage onQuoteClick={openQuoteModal} />}
        {currentPage === 'manufacturing' && <ManufacturingPage onQuoteClick={openQuoteModal} />}
      </main>

      <Footer onNavigate={navigateTo} />
      
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
      <FloatingContact />
    </div>
  );
};

export default App;
