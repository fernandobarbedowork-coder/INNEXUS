
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-zinc-900 py-24 text-center">
        <CheckCircle size={64} className="text-yellow-500 mx-auto mb-6" />
        <h2 className="text-3xl font-bold uppercase">¡Mensaje Enviado!</h2>
        <p className="text-gray-400 mt-2">Melissa se contactará contigo pronto.</p>
      </div>
    );
  }

  return (
    <section id="contacto" className="bg-zinc-900 py-24 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="flex-1">
          <h2 className="text-4xl font-black uppercase tracking-tighter">¿Hablamos sobre tu próximo paso en <span className="gold-gradient-text">Paraguay?</span></h2>
          <p className="text-gray-400 mt-6 font-light">Especializados en asesoramiento personalizado.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex-1 bg-black p-8 rounded-3xl space-y-4 border border-white/5">
          <input required type="text" placeholder="Nombre completo" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-yellow-600 transition-colors" />
          <input required type="email" placeholder="Email" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-yellow-600 transition-colors" />
          <select className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none">
            <option>Quiero Invertir</option>
            <option>Quiero Mudarme</option>
            <option>Consultoría Empresarial</option>
          </select>
          <button type="submit" className="w-full bg-yellow-600 text-white font-bold py-4 rounded-xl uppercase tracking-widest text-xs flex items-center justify-center space-x-2">
            <span>ENVIAR SOLICITUD</span>
            <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
