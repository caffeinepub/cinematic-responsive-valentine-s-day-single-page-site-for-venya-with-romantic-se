import { useEffect, useRef, useState } from 'react';

interface UseBackgroundMusicReturn {
  isPlaying: boolean;
  toggle: () => void;
  swell: () => void;
}

let globalAudioInstance: HTMLAudioElement | null = null;
let globalIsPlaying = false;
const listeners = new Set<(playing: boolean) => void>();

export function useBackgroundMusic(): UseBackgroundMusicReturn {
  const [isPlaying, setIsPlaying] = useState(globalIsPlaying);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const originalVolumeRef = useRef(0.3);

  useEffect(() => {
    // Initialize audio only once globally
    if (!globalAudioInstance) {
      const audio = new Audio('/assets/music/romantic-instrumental.mp3');
      audio.loop = true;
      audio.volume = originalVolumeRef.current;
      globalAudioInstance = audio;
    }
    
    audioRef.current = globalAudioInstance;

    // Subscribe to global state changes
    const updateState = (playing: boolean) => setIsPlaying(playing);
    listeners.add(updateState);

    return () => {
      listeners.delete(updateState);
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;

    if (globalIsPlaying) {
      audioRef.current.pause();
      globalIsPlaying = false;
    } else {
      audioRef.current.play().catch(err => {
        console.warn('Audio play failed:', err);
      });
      globalIsPlaying = true;
    }

    // Notify all listeners
    listeners.forEach(listener => listener(globalIsPlaying));
  };

  const swell = () => {
    if (!audioRef.current || !globalIsPlaying) return;

    const audio = audioRef.current;
    const originalVolume = audio.volume;
    const targetVolume = Math.min(originalVolume * 1.5, 0.6);

    // Gradually increase volume
    audio.volume = targetVolume;

    // Return to original after 2 seconds
    setTimeout(() => {
      if (audio) {
        audio.volume = originalVolume;
      }
    }, 2000);
  };

  return { isPlaying, toggle, swell };
}
