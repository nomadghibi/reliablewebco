'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  once?: boolean;
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  distance = 24,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const style = {
    '--reveal-delay': `${delay}ms`,
    '--reveal-distance': `${distance}px`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal ${isVisible ? 'reveal-visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
