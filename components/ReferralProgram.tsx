
import React from 'react';
import { Users, Handshake, TrendingUp } from 'lucide-react';

const ReferralProgram: React.FC = () => {
  return (
    <section id="referidos" className="bg-zinc-950 py-24 px-4 border-b border-white/5">
      <div className="max-w-7xl mx-auto text-center space-y-16">
        <h2 className="text-5xl font-black uppercase tracking-tighter">Referí. Conectá. <span className="gold-gradient-text">Ganá.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Users size={32} />, title: "Referí", desc: "Si tenés una red de inversores interesados en Paraguay." },
            { icon: <Handshake size={32} />, title: "Conectá", desc: "Presentanos a potenciales clientes de alto valor." },
            { icon: <TrendingUp size={32} />, title: "Ganá", desc: "Recibí comisiones por cada cierre exitoso." }
          ].map((item, i) => (
            <div key={i} className="bg-black border border-white/5 p-10 rounded-[2rem]">
              <div className="text-yellow-500 mb-6 flex justify-center">{item.icon}</div>
              <h4 className="text-xl font-bold text-white uppercase mb-4">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferralProgram;
