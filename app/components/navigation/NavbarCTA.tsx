'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import MagneticWrapper from '@/components/ui/MagneticWrapper';

interface NavbarCTAProps {
  isScrolled?: boolean;
}

export default function NavbarCTA({ isScrolled = false }: NavbarCTAProps) {
  return (
    <MagneticWrapper>
      <a
        href="/start-project"
        className={cn(
          "bg-gradient-to-r from-primary to-purple-500 text-white rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 font-semibold inline-block text-center",
          isScrolled ? "px-4 py-2 text-sm" : "px-5 py-2 text-sm"
        )}
      >
        Get Started
      </a>
    </MagneticWrapper>
  );
} 