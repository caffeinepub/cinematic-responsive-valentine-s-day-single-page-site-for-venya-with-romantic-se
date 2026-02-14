import { useState } from 'react';
import Section from '../components/Section';
import FloatingHeartsLayer from '../components/FloatingHeartsLayer';
import HeartsBurst from '../components/HeartsBurst';
import PlayfulNoButton from '../components/PlayfulNoButton';
import { useBackgroundMusic } from '../audio/useBackgroundMusic';

export default function FinaleSection() {
  const [showYesMessage, setShowYesMessage] = useState(false);
  const [triggerBurst, setTriggerBurst] = useState(false);
  const { swell } = useBackgroundMusic();

  const handleYesClick = () => {
    setShowYesMessage(true);
    setTriggerBurst(true);
    swell();
    
    // Reset burst after animation
    setTimeout(() => setTriggerBurst(false), 3000);
  };

  return (
    <Section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 dark:from-pink-950/30 dark:via-rose-950/30 dark:to-red-950/30">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/10 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
        <FloatingHeartsLayer />
      </div>
      
      {/* Hearts burst effect */}
      {triggerBurst && <HeartsBurst />}
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {!showYesMessage ? (
          <>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-primary text-glow">
              Venya… 💖
            </h2>
            
            <h3 className="text-3xl md:text-5xl font-semibold mb-12 text-foreground">
              Will You Be My Valentine Forever? 💍❤️
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={handleYesClick}
                className="
                  px-12 py-6 text-2xl font-bold
                  bg-primary text-primary-foreground rounded-full
                  box-glow hover:box-glow-gold
                  transition-all duration-300
                  hover:scale-110 active:scale-95
                  shadow-2xl
                "
              >
                YES, FOREVER ❤️
              </button>
              
              <PlayfulNoButton />
            </div>
          </>
        ) : (
          <div className="animate-in fade-in duration-1000">
            <div className="inline-block px-12 py-10 bg-card rounded-3xl shadow-2xl box-glow-gold">
              <p className="text-2xl md:text-3xl leading-relaxed mb-6">
                You just made me the happiest person alive. I promise to love you forever.
              </p>
              <p className="text-3xl md:text-4xl font-bold text-primary">
                💖 — Adhil
              </p>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
