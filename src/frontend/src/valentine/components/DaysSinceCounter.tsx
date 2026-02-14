import { useEffect, useState } from 'react';
import { RELATIONSHIP_START_DATE } from '../config';
import Section from './Section';

export default function DaysSinceCounter() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const calculateDays = () => {
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - RELATIONSHIP_START_DATE.getTime());
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      setDays(diffDays);
    };

    calculateDays();
    const interval = setInterval(calculateDays, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="days-counter" className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
          Days Since Our Story Began
        </h2>
        <div className="inline-block px-12 py-8 bg-card rounded-3xl shadow-xl box-glow">
          <div className="text-6xl md:text-8xl font-bold text-primary text-glow">
            {days}
          </div>
          <div className="text-xl md:text-2xl mt-4 text-muted-foreground">
            {days === 1 ? 'day' : 'days'} of love
          </div>
        </div>
      </div>
    </Section>
  );
}
