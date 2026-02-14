import { useState } from 'react';

export default function PlayfulNoButton() {
  const [showMessage, setShowMessage] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [moveCount, setMoveCount] = useState(0);

  const moveButton = () => {
    if (moveCount >= 3) {
      setShowMessage(true);
      return;
    }

    const maxX = 100;
    const maxY = 50;
    const newX = (Math.random() - 0.5) * maxX;
    const newY = (Math.random() - 0.5) * maxY;
    
    setPosition({ x: newX, y: newY });
    setMoveCount(prev => prev + 1);
  };

  if (showMessage) {
    return (
      <div className="px-8 py-6 bg-card rounded-3xl shadow-xl box-glow animate-in fade-in duration-500">
        <p className="text-xl md:text-2xl font-semibold text-primary">
          Nice try, Banana Kitten 😌<br />You're stuck with me forever ❤️
        </p>
      </div>
    );
  }

  return (
    <button
      onMouseEnter={moveButton}
      onTouchStart={moveButton}
      onClick={moveButton}
      className="
        px-12 py-6 text-2xl font-bold
        bg-muted text-muted-foreground rounded-full
        transition-all duration-300
        hover:scale-105 active:scale-95
        shadow-xl
      "
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.3s ease-out',
      }}
    >
      No 🥺
    </button>
  );
}
