'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import MagneticWrapper from '@/components/ui/MagneticWrapper';

interface NavbarActionProps {
  className?: string;
}

/**
 * NavbarAction - Call-to-action button component
 * Single responsibility: Display CTA button with magnetic effect
 */
export default function NavbarAction({ className = '' }: NavbarActionProps) {
  return (
    <motion.div
      className={`flex items-center ${className}`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <MagneticWrapper strength={0.3} attractArea={100}>
        <Link
          href="/start-project"
          className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover-lift"
        >
          Start Project
        </Link>
      </MagneticWrapper>
    </motion.div>
  );
}
