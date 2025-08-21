'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavbarLogoProps {
  isScrolled?: boolean;
}

export default function NavbarLogo({ isScrolled = false }: NavbarLogoProps) {
  return (
    <motion.div
      className="flex items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <motion.h1 
        className={cn(
          "font-bold text-primary transition-all duration-500",
          isScrolled ? "text-lg" : "text-2xl"
        )}
        animate={{
          scale: isScrolled ? 0.9 : 1,
          opacity: isScrolled ? 0.8 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        Wafipix
      </motion.h1>
    </motion.div>
  );
} 