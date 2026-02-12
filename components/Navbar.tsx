
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-2 border-b border-white/10' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-white uppercase">INNEXUS</span>
              <span className="text-[10px] tracking-[0.3em] text-yellow-500 font-bold uppercase -mt-1">Real Estate</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {NAV_ITEMS.map((item) => (
                <a key={item.label} href={item.href} className="text-gray-300 hover:text-white px-3 py-2 text-xs font-bold transition-colors uppercase tracking-widest">
                  {item.label}
                </a>
              ))}
              <button className="flex items-center space-x-1 text-xs border border-white/20 rounded-full px-3 py-1 hover:bg-white/10 transition-all">
                <Globe size={14} />
                <span>ES</span>
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl absolute w-full top-16 left-0 h-screen">
          <div className="px-2 pt-10 pb-3 space-y-1 text-center">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className="text-gray-300 block px-3 py-6 text-xl font-medium border-b border-white/5 uppercase tracking-widest" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
