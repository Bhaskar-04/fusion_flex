
import React from 'react';
import Logo from '../assets/FUSION_FLEX.png';

interface FooterProps {
  onNavigate?: (page: 'home' | 'products') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <img src={Logo} alt='FUSION FLEX LOGO' className='h-24 mb-6' />
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Leading global supplier of high-tenacity BOPP laminated bags and industrial packaging solutions. Committed to precision and durability.
            </p>
          </div>
          
          <div>
            <h4 className="text-dark font-bold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate?.('home')} className="text-sm text-gray-500 hover:text-primary transition-colors">Company Profile</button></li>
              <li><button onClick={() => onNavigate?.('products')} className="text-sm text-gray-500 hover:text-primary transition-colors">Our Products</button></li>
              <li><button onClick={() => onNavigate?.('home')} className="text-sm text-gray-500 hover:text-primary transition-colors text-left">Manufacturing Process</button></li>
              <li><button onClick={() => onNavigate?.('home')} className="text-sm text-gray-500 hover:text-primary transition-colors">Request a Quote</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-dark font-bold mb-6">Product Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Technical Data Sheets</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Custom Printing Guide</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Bag Capacity Chart</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Export Compliance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-dark font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Cookie Settings</a></li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs text-gray-400 font-medium">System Status: Optimal</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Fusion Flex Manufacturing. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
             <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">ISO 9001:2015 Certified</span>
             <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Global Export Grade</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
