'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
      <Link 
        href="/" 
        className="flex items-center text-xl font-bold text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-muted/50"
      >
        {/* Logo Image or Text Fallback */}
        <div className="h-10 w-auto flex items-center justify-center p-0.5">
          <Image
            src="/logo.png"
            alt="Wafipix Logo"
            width={0}
            height={0}
            className="h-full w-auto object-contain"
            sizes="400px"
            quality={100}
            onError={(e) => {
              // Hide image on error and show text fallback
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerHTML = '<span class="text-primary font-bold text-2xl">W</span>';
              }
            }}
          />
        </div>
      </Link>
    </motion.div>
  );
}