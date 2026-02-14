import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export default function HeartbeatBackdrop() {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="heartbeat-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/10" />
      
      <style>{`
        @keyframes heartbeat {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          14% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0.5;
          }
          28% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          42% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0.5;
          }
          56% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
        }
        
        .heartbeat-pulse {
          animation: heartbeat 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
