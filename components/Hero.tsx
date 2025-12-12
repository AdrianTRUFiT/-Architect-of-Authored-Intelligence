import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Ember, FogOverlay } from './Layout';

export const Hero: React.FC = () => {
  const embers = Array.from({ length: 20 }).map((_, i) => ({
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${5 + Math.random() * 10}s`,
    opacity: 0.3 + Math.random() * 0.7
  }));

  const scrollToStart = () => {
    document.getElementById('transformation-architect')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-stone-950">
      {/* Background Image: Dawn Rainforest */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/dawnforestmist/1920/1080" 
          alt="Rainforest Dawn" 
          className="w-full h-full object-cover opacity-60 filter blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-900/40 to-stone-950" />
      </div>

      <FogOverlay />

      {/* Embers */}
      {embers.map((style, i) => (
        <Ember key={i} style={style} />
      ))}

      {/* Content */}
      <div className="relative z-30 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8 opacity-0 animate-[floatUp_2s_ease-out_forwards] delay-300">
           <div className="inline-block w-px h-24 bg-gradient-to-t from-amber-200/50 to-transparent mb-6"></div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-amber-100 tracking-wide leading-tight drop-shadow-2xl mb-6 opacity-0 animate-[fade_2s_ease-out_forwards_1s]" style={{ animationFillMode: 'forwards', animationName: 'fade-in-up' }}>
          The Architect of<br />
          <span className="text-amber-400/90 font-light italic">Authored Intelligence</span>
        </h1>

        <p className="text-lg md:text-2xl font-serif-text text-stone-300 italic tracking-wider max-w-3xl mx-auto mb-12 opacity-80">
          A technology excavated from lived experience — and built for human sovereignty.
        </p>

        <button 
          onClick={scrollToStart}
          className="group flex flex-col items-center gap-2 text-stone-400 hover:text-amber-200 transition-colors duration-500 text-xs tracking-[0.2em] uppercase"
        >
          <span>Enter the Journey</span>
          <div className="p-3 border border-stone-600 rounded-full group-hover:border-amber-400/50 transition-all">
            <ArrowDown className="w-5 h-5 animate-bounce text-stone-400 group-hover:text-amber-200" />
          </div>
        </button>
      </div>

      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
