import { Heart } from 'lucide-react';
import FloatingHeartsLayer from '../components/FloatingHeartsLayer';

export default function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('days-counter');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-red-50 to-rose-100 dark:from-pink-950/30 dark:via-red-950/30 dark:to-rose-950/30" />
      
      {/* Floating hearts overlay */}
      <FloatingHeartsLayer />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-glow animate-in fade-in duration-1000">
          Happy First Valentine's Day, My Love <Heart className="inline-block text-primary fill-primary animate-pulse" size={64} />
        </h1>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-8 text-primary animate-in fade-in duration-1000 delay-300">
          To My Beautiful Venya 💖
        </h2>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-foreground/80 animate-in fade-in duration-1000 delay-500">
          My world changed the day I saw you.
        </p>
        
        <button
          onClick={scrollToNext}
          className="
            group relative px-8 py-4 text-lg md:text-xl font-semibold
            bg-primary text-primary-foreground rounded-full
            box-glow hover:box-glow-gold
            transition-all duration-300
            hover:scale-105 active:scale-95
            animate-in fade-in delay-700
          "
        >
          <span className="relative z-10">Scroll Down, My Love 💕</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </section>
  );
}
