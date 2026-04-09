
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROPERTIES } from '../constants';

const PropertyGrid: React.FC = () => {
  return (
    <section id="inversiones" className="bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black uppercase mb-12">Proyectos <span className="gold-gradient-text">Destacados</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROPERTIES.map((prop) => (
            <div key={prop.id} className="group relative h-[450px] overflow-hidden rounded-[2rem] border border-white/5">
              <img src={prop.image} alt={prop.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-[10px] text-yellow-500 font-bold tracking-[0.2em] mb-2 uppercase">{prop.location}</p>
                <h3 className="text-2xl font-black text-white mb-6 uppercase leading-none">{prop.name}</h3>
                <a href={prop.link} className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-yellow-600 hover:text-white transition-all">
                  <span>ANALIZAR</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;
