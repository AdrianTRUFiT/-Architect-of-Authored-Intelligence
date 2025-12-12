import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  threshold?: number;
  className?: string;
  delay?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  threshold = 0.2, 
  className = "", 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const FogOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-stone-950 via-stone-900/50 to-transparent opacity-80" />
      <div className="absolute -bottom-10 left-0 w-[200%] h-64 bg-white/5 blur-3xl animate-drift opacity-20" />
    </div>
  );
};

export const Ember: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div 
    className="absolute w-1 h-1 bg-amber-400 rounded-full blur-[1px] animate-float-ember"
    style={style}
  />
);

export const SectionContainer: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  id?: string;
  bgImage?: string;
  overlayOpacity?: string;
}> = ({ children, className = "", id, bgImage, overlayOpacity = "bg-stone-950/80" }) => {
  return (
    <section id={id} className={`relative min-h-screen flex items-center justify-center overflow-hidden py-24 ${className}`}>
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImage} 
            alt="Atmospheric Background" 
            className="w-full h-full object-cover opacity-40 transition-transform duration-[20s] hover:scale-105"
          />
          <div className={`absolute inset-0 ${overlayOpacity}`} />
        </div>
      )}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12">
        {children}
      </div>
    </section>
  );
};
