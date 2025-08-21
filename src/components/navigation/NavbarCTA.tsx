'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import MagneticWrapper from '@/components/ui/MagneticWrapper';

interface NavbarCTAProps {
  isScrolled?: boolean;
}

export default function NavbarCTA({ isScrolled = false }: NavbarCTAProps) {
  return (
    <motion.div
      animate={{
        scale: isScrolled ? 0.95 : 1,
        opacity: isScrolled ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <MagneticWrapper>
        <a
          href="/start-project"
          className={cn(
            "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 font-semibold inline-block text-center hover:from-primary/90 hover:to-primary/70",
            isScrolled ? "px-4 py-2 text-sm" : "px-5 py-2 text-sm"
          )}
        >
          Get Started
        </a>
      </MagneticWrapper>
    </motion.div>
  );
} 