
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black uppercase mb-12">Resultados <span className="gold-gradient-text">Reales</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Andrés G.", role: "Inversor", text: "Melissa tiene un criterio único para identificar plusvalía." },
            { name: "Sofia L.", role: "Propietaria", text: "Trato directo, honesto y muy profesional. Vendí en tiempo récord." },
            { name: "Mark H.", role: "Expansión", text: "Visión estratégica inigualable para establecer mi empresa." }
          ].map((item, i) => (
            <div key={i} className="bg-zinc-900/50 p-10 rounded-3xl border border-white/5 relative">
              <Quote className="absolute top-6 right-6 text-yellow-600/10" size={48} />
              <div className="flex text-yellow-500 mb-6"><Star size={14} fill="currentColor" /></div>
              <p className="text-gray-300 italic mb-8 font-light">"{item.text}"</p>
              <h5 className="font-bold text-white uppercase text-sm">{item.name}</h5>
              <p className="text-xs text-gray-500 uppercase">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
