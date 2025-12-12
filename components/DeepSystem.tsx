import React from 'react';
import { SectionContainer, ScrollReveal, Ember } from './Layout';
import { Sparkles, Wind, Mountain, GitMerge, Sun, ArrowRight, Layers, Cpu, Shield, Mic, LayoutGrid, Fingerprint, Box } from 'lucide-react';

// --- Section 5: Authored Intelligence ---
export const AuthoredIntelligence: React.FC = () => {
  // Fireflies effect
  const fireflies = Array.from({ length: 15 }).map((_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${3 + Math.random() * 4}s`
  }));

  const concepts = [
    { title: "Identity OS", desc: "Not apps, but an operating system for the self.", icon: Cpu },
    { title: "PAID", desc: "Projection Surface for Authored Identity.", icon: LayoutGrid },
    { title: "AI²", desc: "Intelligence multiplied by Identity.", icon: GitMerge },
    { title: "Exit the Matrix", desc: "Return to nature's source code.", icon: Wind },
  ];

  return (
    <SectionContainer 
      id="authored-intelligence" 
      bgImage="https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?q=80&w=2070&auto=format&fit=crop" // Forest at dusk
      overlayOpacity="bg-indigo-950/90"
    >
      {/* Fireflies Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {fireflies.map((style, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-lime-200 rounded-full blur-[1px] animate-pulse"
            style={{ ...style, opacity: 0.6 }}
          />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-display text-lime-50 mb-6">
            Authored Intelligence
          </h2>
          <div className="w-16 h-1 bg-lime-500/50 mb-8" />
          <p className="font-serif-text text-xl text-indigo-100/80 leading-relaxed mb-8">
            An exit from the matrix. We do not seek to automate the human spirit, but to build a projection surface where identity can be authored, amplified, and sovereign.
          </p>
          <div className="p-6 border border-lime-500/20 bg-lime-900/10 backdrop-blur-md rounded-sm">
             <p className="font-mono text-xs text-lime-300 tracking-widest uppercase mb-2">System Directive</p>
             <p className="italic text-stone-300">"The code must serve the biology, not consume it."</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {concepts.map((concept, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <div className="h-full p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
                <concept.icon className="w-6 h-6 text-lime-400/70 mb-4 group-hover:text-lime-200" />
                <h3 className="font-display text-lg text-stone-200 mb-2">{concept.title}</h3>
                <p className="text-sm text-stone-400 font-light leading-snug">{concept.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

// --- Section 6: The Threshold Guide: SoulHost ---
export const SoulHost: React.FC = () => {
  return (
    <SectionContainer 
      id="soulhost" 
      className="bg-stone-900" // Fallback
    >
      {/* Custom soft gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,228,230,0.15),rgba(12,10,9,1))]" />
      
      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-12">
        <ScrollReveal>
          {/* Abstract Light Form */}
          <div className="w-64 h-64 mx-auto mb-12 relative">
             <div className="absolute inset-0 bg-rose-100/20 blur-[60px] rounded-full animate-pulse" />
             <div className="absolute inset-10 bg-white/10 blur-[40px] rounded-full" />
             <div className="absolute inset-0 flex items-center justify-center">
               <Sparkles className="w-12 h-12 text-rose-200/50 opacity-50" strokeWidth={1} />
             </div>
          </div>
          
          <h2 className="text-4xl font-display text-rose-50/90 tracking-widest">
            SoulHost<span className="text-xs align-top">Ⓢ</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="font-serif-text text-2xl text-stone-300 italic leading-loose">
            "I am the threshold. The breath before the ascent."
          </p>
          <p className="mt-6 text-stone-500 font-light max-w-lg mx-auto">
            A formless guide designed for emotional downregulation. No face, no silhouette—only light, coherence, and safety.
          </p>
        </ScrollReveal>
      </div>
    </SectionContainer>
  );
};

// --- Section 7: The 30-Day Ascent ---
export const Ascent: React.FC = () => {
  const steps = [
    { title: "Pain", desc: "The raw material of change." },
    { title: "Progress", desc: "Structuring the chaos." },
    { title: "Momentum", desc: "The flywheel begins to turn." },
    { title: "Identity Shift", desc: "The new self emerges." },
  ];

  return (
    <SectionContainer 
      id="ascent" 
      bgImage="https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?q=80&w=2070&auto=format&fit=crop" // Foggy path
      overlayOpacity="bg-stone-950/85"
    >
      <div className="grid md:grid-cols-2 gap-16">
        <ScrollReveal>
          <div className="sticky top-24">
            <h2 className="text-4xl md:text-6xl font-display text-stone-200 mb-6">
              The 30-Day<br />Ascent
            </h2>
            <div className="text-sm font-mono text-stone-500 tracking-widest uppercase mb-8">
              TRUFiT Mind Mastery
            </div>
            <p className="font-serif-text text-xl text-stone-400 mb-8">
              Intelligence without identity is noise. This is the gatekeeper to the Dashboard OS. You must walk the path before you wield the power.
            </p>
            <div className="flex items-center gap-4 text-amber-500/80">
              <Mountain className="w-6 h-6" />
              <span className="text-sm tracking-widest uppercase">Begin the climb</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-12 relative">
           {/* Connecting Line */}
           <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-stone-700 via-stone-500 to-stone-800" />
           
           {steps.map((step, idx) => (
             <ScrollReveal key={idx} delay={idx * 150} className="relative pl-12">
               <div className="absolute left-[15px] top-2 w-2 h-2 bg-stone-900 border border-stone-500 rounded-full z-10" />
               <div className="flex flex-col">
                 <span className="font-mono text-xs text-stone-600 mb-1">Day {idx * 7 + 1}</span>
                 <h3 className="font-display text-2xl text-stone-200 mb-2">{step.title}</h3>
                 <p className="text-stone-500 font-light">{step.desc}</p>
               </div>
             </ScrollReveal>
           ))}
        </div>
      </div>
    </SectionContainer>
  );
};

// --- Section 8: The Ecosystem ---
export const Ecosystem: React.FC = () => {
  const nodes = [
    { title: "SOUL", role: "Language Foundation", icon: Fingerprint },
    { title: "AIOS", role: "Operating System", icon: Cpu },
    { title: "iAscendAi", role: "User Environment", icon: Layers },
    { title: "PAID", role: "Projection Surface", icon: LayoutGrid },
    { title: "MindSets", role: "Modular Frameworks", icon: Box }, // lucide-react Box import required if not present
    { title: "SoulHost", role: "The Threshold", icon: Sparkles },
  ];

  // Need to import Box if not already imported or use another icon. 
  // Re-using LayoutGrid or similar if Box is missing in previous imports, but I'll assume standard Lucide set.
  
  return (
    <SectionContainer 
      id="ecosystem" 
      bgImage="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop" // Rainforest canopy
      overlayOpacity="bg-emerald-950/90"
    >
      <div className="text-center mb-16">
        <ScrollReveal>
          <h2 className="text-4xl font-display text-emerald-100/90">The Ecosystem</h2>
          <p className="mt-4 text-emerald-200/50 font-mono text-xs uppercase tracking-[0.3em]">
            Nature • Architecture • Code
          </p>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nodes.map((node, idx) => (
          <ScrollReveal key={idx} delay={idx * 100}>
            <div className="group relative p-8 border border-emerald-500/20 bg-emerald-900/20 backdrop-blur-sm overflow-hidden hover:bg-emerald-900/30 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              
              <node.icon className="w-8 h-8 text-emerald-400/60 mb-6 group-hover:text-emerald-300 transition-colors" />
              <h3 className="text-xl font-display text-stone-100 mb-2">{node.title}</h3>
              <p className="text-sm font-sans text-emerald-200/60 uppercase tracking-wider">{node.role}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionContainer>
  );
};

// --- Section 9: Call to the New Era ---
export const CallToNewEra: React.FC = () => {
  return (
    <SectionContainer 
      id="cta" 
      bgImage="https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=2092&auto=format&fit=crop" // Sunset/firelight
      overlayOpacity="bg-stone-950/60"
    >
      <div className="flex flex-col items-center justify-center text-center space-y-12">
        <ScrollReveal>
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-amber-500 to-transparent mx-auto mb-8" />
          <h2 className="text-5xl md:text-7xl font-display text-amber-50 drop-shadow-2xl leading-tight">
            The future isn’t automated.<br />
            <span className="text-amber-400 italic">It’s authored.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-col md:flex-row gap-8 mt-12">
            <button className="px-8 py-4 bg-amber-600/20 border border-amber-500/50 text-amber-100 font-display uppercase tracking-widest hover:bg-amber-600/40 hover:border-amber-400 transition-all duration-300 flex items-center gap-3 group">
              Begin Your Ascent
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-stone-600 text-stone-400 font-display uppercase tracking-widest hover:border-stone-400 hover:text-stone-200 transition-all duration-300">
              Read the Architecture
            </button>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={600} className="mt-24">
          <p className="font-serif-text text-stone-500 italic">
            Join the Early Sovereign Circle
          </p>
        </ScrollReveal>
      </div>
      
      {/* Footer minimal */}
      <div className="absolute bottom-8 left-0 w-full text-center">
         <p className="text-[10px] text-stone-600 uppercase tracking-widest">
           © 2024 The Architect of Authored Intelligence
         </p>
      </div>
    </SectionContainer>
  );
};