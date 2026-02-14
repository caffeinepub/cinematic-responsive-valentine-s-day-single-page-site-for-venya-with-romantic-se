import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export default function GlowBackdrop() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className={`
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-96 h-96 md:w-[600px] md:h-[600px]
          rounded-full
          bg-gradient-radial from-primary/20 via-primary/10 to-transparent
          blur-3xl
          ${!prefersReducedMotion ? 'animate-pulse' : ''}
        `}
        style={!prefersReducedMotion ? { animationDuration: '4s' } : {}}
      />
    </div>
  );
}
