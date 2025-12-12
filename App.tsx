import React from 'react';
import { Hero } from './components/Hero';
import { 
  TransformationArchitect, 
  Genesis, 
  Crucible, 
  Revelation 
} from './components/NarrativeSections';
import { 
  AuthoredIntelligence, 
  SoulHost, 
  Ascent, 
  Ecosystem, 
  CallToNewEra 
} from './components/DeepSystem';

const App: React.FC = () => {
  return (
    <main className="w-full bg-stone-950 text-stone-200 selection:bg-amber-500/30 selection:text-amber-100">
      <Hero />
      <TransformationArchitect />
      <Genesis />
      <Crucible />
      <Revelation />
      <AuthoredIntelligence />
      <SoulHost />
      <Ascent />
      <Ecosystem />
      <CallToNewEra />
    </main>
  );
};

export default App;
