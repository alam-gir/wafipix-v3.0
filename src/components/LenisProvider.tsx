'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface LenisProviderProps {
  children: React.ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with better scroll restoration handling
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      touchMultiplier: 2,
      infinite: false,
      // Better handling for scroll restoration
      smoothWheel: true,
      wheelMultiplier: 1,
      // Disable Lenis during page transitions to avoid conflicts
      lerp: 0.1,
    });

    // RAF loop for Lenis
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Pause Lenis during page transitions
    const handleRouteChangeStart = () => {
      if (lenisRef.current) {
        lenisRef.current.stop();
      }
    };

    const handleRouteChangeComplete = () => {
      if (lenisRef.current) {
        lenisRef.current.start();
      }
    };

    // Listen for route changes
    window.addEventListener('beforeunload', handleRouteChangeStart);
    
    // Resume after a short delay to ensure page is ready
    const timer = setTimeout(handleRouteChangeComplete, 100);

    // Cleanup function
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      window.removeEventListener('beforeunload', handleRouteChangeStart);
      clearTimeout(timer);
    };
  }, []);

  return <>{children}</>;
} 