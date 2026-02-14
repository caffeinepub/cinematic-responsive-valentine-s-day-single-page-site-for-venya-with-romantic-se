import { useState } from 'react';
import { Gift } from 'lucide-react';
import SurpriseModal from './SurpriseModal';
import { SURPRISE_MESSAGE } from '../config';

export default function SurpriseTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="
          group relative px-8 py-4 text-xl font-semibold
          bg-accent text-accent-foreground rounded-full
          box-glow-gold hover:box-glow
          transition-all duration-300
          hover:scale-105 active:scale-95
          shadow-xl
        "
      >
        <span className="flex items-center gap-2">
          <Gift className="animate-bounce" size={24} />
          Click for a Surprise 💝
        </span>
      </button>

      <SurpriseModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-primary">
            A Special Message For You 💖
          </h3>
          <div className="text-lg md:text-xl leading-relaxed whitespace-pre-line">
            {SURPRISE_MESSAGE}
          </div>
        </div>
      </SurpriseModal>
    </>
  );
}
