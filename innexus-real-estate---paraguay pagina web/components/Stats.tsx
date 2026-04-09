
import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="bg-black py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/5">
              <p className="text-xs tracking-widest text-yellow-500 mb-4 uppercase">{stat.label}</p>
              <div className="text-5xl lg:text-6xl font-bold text-white tracking-tighter">
                {stat.prefix}{stat.value}{stat.suffix}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
