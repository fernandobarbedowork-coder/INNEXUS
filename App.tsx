
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PropertyGrid from './components/PropertyGrid';
import Stats from './components/Stats';
import ReferralProgram from './components/ReferralProgram';
import Testimonials from './components/Testimonials';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import AdvisorChat from './components/AdvisorChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-600">
      <Navbar />
      <Hero />
      <section className="bg-black py-20 px-4 text-center border-b border-white/5">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h3 className="text-yellow-500 font-bold tracking-[0.4em] uppercase text-xs">Bienvenido a Innexus</h3>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
            EXPERIENCIA LOCAL. <br/><span className="gold-gradient-text">VISIÓN INTERNACIONAL.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto italic">
            "Brindamos asesoramiento experto y soluciones a medida que impulsan el éxito de cada inversión."
          </p>
        </div>
      </section>
      <About />
      <PropertyGrid />
      <Stats />
      <ReferralProgram />
      <Testimonials />
      <LeadForm />
      <Footer />
      <AdvisorChat />
    </div>
  );
};

export default App;
