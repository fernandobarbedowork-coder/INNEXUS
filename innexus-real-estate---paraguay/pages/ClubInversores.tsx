import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TrendingUp, Shield, Users, ArrowRight } from 'lucide-react';

const ClubInversores: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-600">
      <Navbar />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h3 className="text-yellow-500 font-bold tracking-[0.4em] uppercase text-xs">Exclusividad & Rendimiento</h3>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
              CLUB DE <br/><span className="gold-gradient-text">INVERSORES INNEXUS</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto italic">
              Acceso privilegiado a las mejores oportunidades inmobiliarias en Paraguay antes de que salgan al mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="bg-zinc-900/50 border border-white/5 p-10 rounded-3xl hover:border-yellow-600/30 transition-all group">
              <TrendingUp className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold uppercase mb-4">Alta Rentabilidad</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Seleccionamos proyectos con el mayor potencial de plusvalía y retorno por alquiler en las zonas de mayor crecimiento.</p>
            </div>
            <div className="bg-zinc-900/50 border border-white/5 p-10 rounded-3xl hover:border-yellow-600/30 transition-all group">
              <Shield className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold uppercase mb-4">Seguridad Jurídica</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Análisis exhaustivo de cada desarrolladora y proyecto para garantizar la protección total de tu capital.</p>
            </div>
            <div className="bg-zinc-900/50 border border-white/5 p-10 rounded-3xl hover:border-yellow-600/30 transition-all group">
              <Users className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold uppercase mb-4">Comunidad Selecta</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Forma parte de un grupo exclusivo de inversores con intereses similares y acceso a eventos privados.</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-20 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
                ¿LISTO PARA <span className="gold-gradient-text">ELEVAR</span> TUS INVERSIONES?
              </h2>
              <p className="text-gray-400 text-lg mb-10 font-light">
                El Club de Inversores es por invitación o solicitud. Déjanos tus datos para una entrevista personalizada con Melissa Rojas.
              </p>
              <a href="/#contacto" className="inline-flex items-center space-x-4 bg-yellow-600 hover:bg-yellow-500 text-white px-12 py-6 rounded-full transition-all font-bold uppercase tracking-widest text-xs">
                <span>SOLICITAR MEMBRESÍA</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ClubInversores;
