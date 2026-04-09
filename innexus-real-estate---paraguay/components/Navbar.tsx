
import React, { useState, useEffect } from 'react';
import { Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
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
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-white uppercase group-hover:text-yellow-500 transition-colors">INNEXUS</span>
              <span className="text-[10px] tracking-[0.3em] text-yellow-500 font-bold uppercase -mt-1 group-hover:text-white transition-colors">Real Estate</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/club-inversores" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-yellow-500 transition-colors flex items-center space-x-2">
              <Users size={14} />
              <span>Club de Inversores</span>
            </Link>
            <div className="flex items-baseline space-x-6">
              <button className="flex items-center space-x-1 text-[10px] font-bold border border-white/20 rounded-full px-4 py-1.5 hover:bg-white/10 transition-all text-white uppercase tracking-widest">
                <Globe size={12} />
                <span>ES</span>
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/club-inversores" className="text-gray-400 hover:text-yellow-500 transition-colors">
              <Users size={20} />
            </Link>
            <button className="flex items-center space-x-1 text-xs border border-white/20 rounded-full px-3 py-1 hover:bg-white/10 transition-all">
              <Globe size={14} />
              <span>ES</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
