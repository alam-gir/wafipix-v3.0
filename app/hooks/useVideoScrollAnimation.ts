import { useState, useEffect, useRef, useCallback } from 'react';

interface VideoScrollAnimationState {
  width: number;
}

interface UseVideoScrollAnimationProps {
  containerRef: React.RefObject<HTMLElement | null>;
  initialWidth: number;
  fullScreenWidth: number;
}

export function useVideoScrollAnimation({
  containerRef,
  initialWidth = 80,
  fullScreenWidth = 100,
}: UseVideoScrollAnimationProps) {
  const [state, setState] = useState<VideoScrollAnimationState>({
    width: initialWidth
  });

  const rafRef = useRef<number | undefined>(undefined);

  const calculateAnimation = useCallback(() => {
    if (!containerRef.current) return;

    // Check if mobile device (disable scroll animation on mobile)
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      return { width: 100 };
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    // Simple container position values
    const containerTop = containerRect.top;
    const containerBottom = containerRect.bottom;

    let width = initialWidth;

    // PHASE 1: EXPANDING (80% to 100%)
    // When container top enters viewport until it reaches viewport top
    if (containerTop > 0 && containerTop < viewportHeight) {
      const expandProgress = (viewportHeight - containerTop) / viewportHeight;
      width = initialWidth + (fullScreenWidth - initialWidth) * expandProgress;
    }
    
    // PHASE 2: STICKY (100% and sticky)
    // When container top is at or above viewport top, and container bottom is still in viewport
    else if (containerTop <= 0 && containerBottom >= viewportHeight) {
      width = fullScreenWidth;
    }
    
    // PHASE 3: SHRINKING (100% to 80%)
    // When container bottom starts leaving viewport
    else if (containerBottom < viewportHeight && containerBottom > 0) {
      const shrinkProgress = containerBottom / viewportHeight;
      width = fullScreenWidth - (fullScreenWidth - initialWidth) * (1 - shrinkProgress);
    }

    // Clamp width to prevent overflow
    width = Math.max(initialWidth, Math.min(fullScreenWidth, width));

    return { width };
  }, [initialWidth, fullScreenWidth, containerRef]);

  const updateAnimation = useCallback(() => {
    const newState = calculateAnimation();
    if (!newState) return;
    setState(newState);
  }, [calculateAnimation]);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateAnimation);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initial calculation
    updateAnimation();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateAnimation]);

  return state;
} 