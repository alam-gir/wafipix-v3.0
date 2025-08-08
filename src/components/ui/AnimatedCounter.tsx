"use client";

import { useState, useEffect } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
  start?: number;
  delay?: number;
  onComplete?: () => void;
}

export function AnimatedCounter({ 
  end, 
  duration = 2, 
  suffix = "", 
  className = "",
  start = 0,
  delay = 0,
  onComplete
}: AnimatedCounterProps) {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const timer = setTimeout(() => {
      const startTime = Date.now();

      const animate = () => {
        const currentTime = Date.now();
        const elapsed = (currentTime - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(start + (end - start) * easeOutQuart);
        
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setHasAnimated(true);
          onComplete?.();
        }
      };

      animate();
    }, delay);

    return () => clearTimeout(timer);
  }, [end, duration, hasAnimated, start, delay, onComplete]);

  return (
    <span className={className}>
      {count}{suffix}
    </span>
  );
} 