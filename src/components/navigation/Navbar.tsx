'use client';

import { useState, useEffect } from 'react';
import DesktopNavbar from './desktop/DesktopNavbar';
import MobileNavbar from './mobile/MobileNavbar';
import type { NavbarProps } from './types';

/**
 * Navbar - Main navbar component with scroll behavior
 * Single responsibility: Manage scroll state and coordinate desktop/mobile navbars
 */
export default function Navbar({}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll behavior with reload detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    // Check initial scroll position on mount (handles reload)
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <DesktopNavbar isScrolled={isScrolled} />
      <MobileNavbar />
    </>
  );
}