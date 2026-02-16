
import React, { useState, useEffect } from 'react';
import Logo from '../assets/FUSION_FLEX.png';
import { PageType } from '../App';

interface NavbarProps {
  onNavigate: (page: PageType) => void;
  currentPage: PageType;
  onQuoteClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (['home', 'products', 'about', 'manufacturing'].includes(href)) {
      e.preventDefault();
      onNavigate(href as PageType);
      setIsMobileMenuOpen(false);
    } else if (currentPage !== 'home') {
      onNavigate('home');
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Products', href: 'products' },
    { name: 'Manufacturing', href: 'manufacturing' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentPage !== 'home' ? 'bg-gray-200 shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" onClick={(e) => handleLinkClick(e, 'home')} className="">
  <img src={Logo} alt="Fusion Flex Logo" className="h-24 w-auto" />
</a>


          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href="#"
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === link.href 
                    ? 'text-primary' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={onQuoteClick}
              className="px-5 py-2 bg-primary text-white rounded-md text-sm font-semibold hover:bg-orange-600 transition-colors shadow-sm active:scale-95"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 border-t border-gray-100 shadow-lg p-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href="#"
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block text-base font-medium ${
                  currentPage === link.href ? 'text-primary' : 'text-gray-600'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                onQuoteClick();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-center px-5 py-2 bg-primary text-white rounded-md font-semibold"
            >
              Get a Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
