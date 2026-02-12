
import React from 'react';
import { Award, Briefcase, Globe, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="acerca" className="bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2 relative">
          <div className="aspect-[4/5] bg-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Melissa Rojas"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-yellow-600 p-8 rounded-2xl text-white shadow-2xl hidden md:block">
            <p className="text-4xl font-black mb-1">8+</p>
            <p className="text-[10px] uppercase font-bold tracking-widest">Años de experiencia</p>
          </div>
        </div>
        <div className="lg:w-1/2 space-y-8">
          <h3 className="text-yellow-500 font-bold tracking-[0.4em] uppercase text-xs">Detrás de Innexus Real Estate</h3>
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter">Melissa Rojas</h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Innexus es una firma boutique que nace para brindar asesoramiento inmobiliario real y estratégico en Paraguay.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="font-bold text-sm uppercase tracking-widest text-white">Firma Boutique</h4>
              <p className="text-xs text-gray-500">Sin volumen genérico. Cada cliente es prioritario.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-sm uppercase tracking-widest text-white">Visión Global</h4>
              <p className="text-xs text-gray-500">Red de aliados en Europa y Latinoamérica.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
