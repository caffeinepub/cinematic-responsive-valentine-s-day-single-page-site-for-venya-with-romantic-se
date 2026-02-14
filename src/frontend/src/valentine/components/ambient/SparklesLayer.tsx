import { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export default function SparklesLayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    const sparkles = container.querySelectorAll('.sparkle');
    
    sparkles.forEach((sparkle, index) => {
      const delay = index * 0.3;
      const duration = 3 + Math.random() * 2;
      (sparkle as HTMLElement).style.animationDelay = `${delay}s`;
      (sparkle as HTMLElement).style.animationDuration = `${duration}s`;
    });
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="sparkle absolute"
          style={{
            left: `${5 + i * 8}%`,
            top: `${10 + (i % 3) * 30}%`,
            animation: 'sparkle-float linear infinite',
          }}
        >
          <Sparkles
            className="text-accent/40"
            size={12 + Math.random() * 12}
          />
        </div>
      ))}
      
      <style>{`
        @keyframes sparkle-float {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 1;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
