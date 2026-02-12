
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../constants';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img src={slide} className="w-full h-full object-cover" alt={`Slide ${index}`} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90" />
        </div>
      ))}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="max-w-5xl space-y-8">
          <h2 className="text-xl md:text-2xl font-light tracking-[0.5em] text-yellow-500 uppercase mb-2">Innexus</h2>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase leading-tight">
            TU PUNTO DE ENTRADA <br /> PARA VIVIR O <br />
            <span className="gold-gradient-text">ESTABLECERTE EN PARAGUAY</span>
          </h1>
          <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contacto" className="group inline-flex items-center space-x-3 bg-yellow-600 hover:bg-yellow-500 text-white px-10 py-5 rounded-full transition-all">
              <span className="font-bold tracking-widest text-xs uppercase">AGENDÁ UNA LLAMADA</span>
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
