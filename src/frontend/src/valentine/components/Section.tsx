import { ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = '', id }: SectionProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`
        py-16 md:py-24 px-6 md:px-12 
        transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${className}
      `}
    >
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  );
}
