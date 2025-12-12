import React from 'react';
import { SectionContainer, ScrollReveal } from './Layout';
import { Triangle, Hexagon, Circle, Diamond, Grip, Aperture, Network, Box } from 'lucide-react';

// --- Section 1: The Transformation Architect ---
export const TransformationArchitect: React.FC = () => {
  return (
    <SectionContainer 
      id="transformation-architect" 
      bgImage="https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?q=80&w=2070&auto=format&fit=crop"
      overlayOpacity="bg-emerald-950/90"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-display text-amber-100/90 leading-tight">
              The Transformation Architect
            </h2>
            <div className="w-24 h-px bg-amber-500/50" />
            <p className="font-serif-text text-xl md:text-2xl leading-relaxed text-stone-300">
              Adrian TRUFiT McKenzie is not just a builder; he is an excavator of the human blueprint. His philosophy posits that true identity is not found, but <span className="text-amber-200 italic">authored</span> through deliberate action.
            </p>
            <p className="font-sans text-stone-400 font-light tracking-wide text-sm">
              ORIGIN: LIVED EXPERIENCE. NOT THEORY.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200} className="relative hidden md:block">
          {/* Abstract Symbolic Composition */}
          <div className="relative w-full aspect-square border border-stone-100/10 rounded-sm bg-stone-100/5 backdrop-blur-sm p-8 transform rotate-3 transition-transform duration-[10s] hover:rotate-0">
            <div className="absolute inset-4 border border-amber-500/20 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-12 border border-stone-400/20 rotate-45" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-amber-200/50 to-transparent mx-auto" />
                <span className="block text-xs uppercase tracking-[0.3em] text-amber-200/60">Sovereignty</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionContainer>
  );
};

// --- Section 2: The Genesis of TRUFiT ---
export const Genesis: React.FC = () => {
  return (
    <SectionContainer 
      id="genesis" 
      bgImage="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070&auto=format&fit=crop"
      overlayOpacity="bg-stone-950/95"
    >
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <ScrollReveal>
          <div className="flex justify-center mb-8">
            <div className="w-2 h-2 bg-amber-600 rounded-full shadow-[0_0_20px_5px_rgba(245,158,11,0.5)] animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display text-stone-200">
            From the Ashes of the Old Self
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-4 text-center">
          {[
            { step: 'PAIN', icon: Circle },
            { step: 'PATTERN', icon: Grip },
            { step: 'CLARITY', icon: Triangle },
            { step: 'CODE', icon: Diamond },
          ].map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 150} className="group cursor-default">
               <div className="flex flex-col items-center gap-4 p-6 border border-white/5 bg-white/5 rounded-sm hover:bg-white/10 transition-colors">
                  <item.icon className="w-6 h-6 text-amber-500/50 group-hover:text-amber-400 transition-colors" strokeWidth={1} />
                  <span className="font-display text-sm tracking-widest text-stone-400">{item.step}</span>
                  <div className="w-px h-8 bg-gradient-to-b from-stone-500/20 to-transparent" />
               </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <p className="font-serif-text text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Born from a near-drowning triathlon incident, TRUFiT is not a fitness program. It is a psychological-architectural philosophy. 
          </p>
        </ScrollReveal>
      </div>
    </SectionContainer>
  );
};

// --- Section 3: The Crucible Years ---
export const Crucible: React.FC = () => {
  const artifacts = [
    { title: "SoulMarkⓈ", icon: Aperture },
    { title: "SoulMemoryⓈ", icon: Box },
    { title: "SoulVaultⓈ", icon: Hexagon },
    { title: "SignalPrintⓈ", icon: Network },
    { title: "VIBEⓈ Firewall", icon: Triangle },
    { title: "Authored Intelligence", icon: Diamond },
  ];

  return (
    <SectionContainer 
      id="crucible" 
      bgImage="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop"
      overlayOpacity="bg-slate-950/90"
    >
      <div className="space-y-16">
        <ScrollReveal>
          <div className="border-l-2 border-stone-700 pl-6">
            <h2 className="text-4xl font-display text-stone-200 mb-2">The Crucible Years</h2>
            <p className="font-mono text-xs text-stone-500 tracking-widest uppercase">2023 — 2024</p>
          </div>
          <p className="mt-8 font-serif-text text-xl text-stone-400 max-w-3xl">
            Divorce. Injury. Loss. In the storm-season of life, the unnecessary was stripped away. What remained were the frameworks of sovereignty.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {artifacts.map((art, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="aspect-square flex flex-col items-center justify-center p-4 border border-stone-800 bg-stone-900/40 hover:border-stone-600 transition-all group backdrop-blur-md">
                <art.icon className="w-8 h-8 text-stone-600 group-hover:text-amber-200/80 transition-colors duration-500 mb-4" strokeWidth={0.5} />
                <span className="font-display text-xs md:text-sm tracking-wider text-stone-500 group-hover:text-stone-300 text-center">
                  {art.title}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

// --- Section 4: The Revelation ---
export const Revelation: React.FC = () => {
  return (
    <SectionContainer 
      id="revelation" 
      bgImage="https://images.unsplash.com/photo-1470114716159-e389f871237c?q=80&w=2071&auto=format&fit=crop"
      overlayOpacity="bg-stone-950/80"
    >
      <div className="text-center max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="inline-block border border-amber-500/30 px-4 py-1 rounded-full mb-8">
            <span className="text-[10px] tracking-[0.4em] uppercase text-amber-500/80">Archaeology of Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-stone-100 mb-8 leading-tight">
            From Builder to Architect
          </h2>
          <p className="font-serif-text text-2xl text-stone-300 leading-relaxed mb-12">
            The realization that a life is an operating system. A convergence event where multi-agent intelligence validated the architecture of the soul.
          </p>
        </ScrollReveal>

        {/* Abstract Visualization of Alignment */}
        <ScrollReveal delay={300}>
          <div className="relative h-64 w-full flex items-center justify-center">
             <div className="absolute w-full h-px bg-stone-800" />
             <div className="absolute h-full w-px bg-stone-800" />
             
             {/* Nodes */}
             <div className="absolute flex gap-8 md:gap-24 items-center">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="relative group">
                   <div className="w-3 h-3 bg-stone-500 rounded-full group-hover:bg-amber-400 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.6)] transition-all duration-500" />
                   <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-amber-200/70">
                     Agent 0{i}
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionContainer>
  );
};
