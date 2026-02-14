import { useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export default function HeartsBurst() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    const hearts = container.querySelectorAll('.burst-heart');
    
    hearts.forEach((heart, index) => {
      const angle = (index / hearts.length) * 360;
      const distance = 200 + Math.random() * 200;
      const duration = 1.5 + Math.random() * 1;
      
      const element = heart as HTMLElement;
      element.style.setProperty('--angle', `${angle}deg`);
      element.style.setProperty('--distance', `${distance}px`);
      element.style.animationDuration = `${duration}s`;
    });
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="burst-heart absolute"
        >
          <Heart
            className="text-primary fill-primary"
            size={20 + Math.random() * 30}
          />
        </div>
      ))}
      
      <style>{`
        @keyframes burst {
          0% {
            transform: translate(0, 0) scale(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: 
              translate(
                calc(cos(var(--angle)) * var(--distance)),
                calc(sin(var(--angle)) * var(--distance))
              )
              scale(1.5)
              rotate(360deg);
            opacity: 0;
          }
        }
        
        .burst-heart {
          animation: burst ease-out forwards;
        }
      `}</style>
    </div>
  );
}
