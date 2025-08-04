'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import MagneticWrapper from '@/components/ui/MagneticWrapper';

interface NavbarCTAProps {
  isScrolled?: boolean;
}

export default function NavbarCTA({ isScrolled = false }: NavbarCTAProps) {
  return (
    <MagneticWrapper strength={0.3} attractArea={100}>
      <motion.button
        className={cn(
          "bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300",
          isScrolled ? "px-4 py-2 text-sm" : "px-5 py-2 text-sm"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </MagneticWrapper>
  );
} 