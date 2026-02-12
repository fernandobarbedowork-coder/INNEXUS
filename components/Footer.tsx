
import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase">INNEXUS</span>
          <p className="text-gray-500 text-sm mt-4">Firma inmobiliaria boutique en Paraguay.</p>
        </div>
        <div className="flex flex-col space-y-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
        </div>
        <div className="text-gray-600 text-[10px] tracking-widest uppercase md:text-right">
          © 2025 INNEXUS REAL ESTATE. <br/> TODOS LOS DERECHOS RESERVADOS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
