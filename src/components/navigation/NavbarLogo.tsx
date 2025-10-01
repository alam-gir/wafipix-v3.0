'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import MagneticWrapper from '@/components/ui/MagneticWrapper';

interface NavbarLogoProps {
  className?: string;
}

/**
 * NavbarLogo - Company logo component
 * Single responsibility: Display company logo with link to home
 */
export default function NavbarLogo({ className = '' }: NavbarLogoProps) {
  return (
    <motion.div
      className={`flex items-center ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <MagneticWrapper strength={0.2} attractArea={80}>
        <Link 
          href="/" 
          className="flex items-center space-x-2 text-xl font-bold text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-muted/50"
        >
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">W</span>
          </div>
          <span className="hidden sm:block">Wafipix</span>
        </Link>
      </MagneticWrapper>
    </motion.div>
  );
}