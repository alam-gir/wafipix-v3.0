'use client';

import { motion, AnimatePresence } from 'framer-motion';
import NavbarLogo from '../NavbarLogo';
import NavbarNavigation from '../NavbarNavigation';
import NavbarAction from '../NavbarAction';

interface DesktopNavbarProps {
  isScrolled: boolean;
}

/**
 * DesktopNavbar - Desktop navigation component
 * Single responsibility: Handle desktop navbar layout and animations
 */
export default function DesktopNavbar({ isScrolled }: DesktopNavbarProps) {
  return (
    <motion.header
      className={`hidden md:block fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled ? 'mt-4 mx-4' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        className={`mx-auto transition-all duration-300 relative ${
          isScrolled 
            ? 'max-w-fit px-6 py-3 bg-card/80 backdrop-blur-xl rounded-2xl shadow-xl border border-border/20' 
            : 'w-full px-6 py-4'
        }`}
        animate={{
          width: isScrolled ? 'fit-content' : '100%',
          paddingTop: isScrolled ? '0.75rem' : '1rem',
          paddingBottom: isScrolled ? '0.75rem' : '1rem',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/* Main Navbar Content */}
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                initial={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <NavbarLogo />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Section */}
          <NavbarNavigation />

          {/* Action Button Section */}
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                initial={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-visible"
              >
                <NavbarAction />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.header>
  );
}