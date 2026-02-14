import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export default function SunsetBackdrop() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className={`
          absolute inset-0 
          bg-gradient-to-br from-amber-200/40 via-orange-200/30 to-rose-200/40
          dark:from-amber-900/20 dark:via-orange-900/15 dark:to-rose-900/20
          ${!prefersReducedMotion ? 'animate-pulse' : ''}
        `}
        style={!prefersReducedMotion ? { animationDuration: '8s' } : {}}
      />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-amber-300/20 to-transparent dark:from-amber-900/10" />
    </div>
  );
}
