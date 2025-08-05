'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { ServiceCategory } from '@/lib/navigation';
import { SubmenuCategoriesSection } from './SubmenuCategoriesSection';
import { SubmenuCTASection } from './SubmenuCTASection';

interface SubmenuPanelProps {
  categories: ServiceCategory[];
  activeSubmenuItem?: string | null;
}

export default function SubmenuPanel({
  categories,
  activeSubmenuItem,
}: SubmenuPanelProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      lenisRef.current = new Lenis({
        wrapper: scrollContainerRef.current,
        content: scrollContainerRef.current,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
      });

      function raf(time: number) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenisRef.current?.destroy();
      };
    }
  }, []);

  return (
    <div className="border-t border-border/20 bg-background backdrop-blur-xl -mt-px overflow-hidden">
      <div className="grid grid-cols-12 min-h-96">
        <SubmenuCategoriesSection
          categories={categories}
          activeSubmenuItem={activeSubmenuItem}
          scrollContainerRef={scrollContainerRef}
        />
        <SubmenuCTASection />
      </div>
    </div>
  );
} 