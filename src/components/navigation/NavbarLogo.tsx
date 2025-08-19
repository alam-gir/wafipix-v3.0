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
      <h1 className={cn(
        "font-bold text-primary transition-all duration-300",
        isScrolled ? "text-xl" : "text-2xl"
      )}>
        Wafipix
      </h1>
    </motion.div>
  );
} 