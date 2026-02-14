import { useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export default function FloatingHeartsLayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    const hearts = container.querySelectorAll('.floating-heart');
    
    hearts.forEach((heart, index) => {
      const delay = index * 0.5;
      const duration = 8 + Math.random() * 4;
      (heart as HTMLElement).style.animationDelay = `${delay}s`;
      (heart as HTMLElement).style.animationDuration = `${duration}s`;
    });
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="floating-heart absolute"
          style={{
            left: `${10 + i * 12}%`,
            bottom: '-10%',
            animation: 'float-up linear infinite',
          }}
        >
          <Heart
            className="text-primary/20 fill-primary/10"
            size={20 + Math.random() * 20}
          />
        </div>
      ))}
      
      <style>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-120vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
