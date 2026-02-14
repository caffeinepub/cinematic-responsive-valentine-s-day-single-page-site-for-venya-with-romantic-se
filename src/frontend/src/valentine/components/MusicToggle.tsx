import { Volume2, VolumeX } from 'lucide-react';
import { useBackgroundMusic } from '../audio/useBackgroundMusic';

export default function MusicToggle() {
  const { isPlaying, toggle } = useBackgroundMusic();

  return (
    <button
      onClick={toggle}
      className="
        fixed top-6 right-6 z-50
        p-4 rounded-full
        bg-card shadow-xl box-glow
        hover:scale-110 active:scale-95
        transition-all duration-300
      "
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      title={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        <Volume2 className="text-primary animate-pulse" size={28} />
      ) : (
        <VolumeX className="text-muted-foreground" size={28} />
      )}
    </button>
  );
}
