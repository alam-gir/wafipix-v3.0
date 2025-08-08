import { motion, AnimatePresence } from 'framer-motion';
import NavbarLogo from '../NavbarLogo';

interface DesktopLogoSectionProps {
  isScrolled: boolean;
}

export function DesktopLogoSection({ isScrolled }: DesktopLogoSectionProps) {
  return (
    <AnimatePresence mode="wait">
      {!isScrolled && (
        <motion.div
          key="logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <NavbarLogo isScrolled={isScrolled} />
        </motion.div>
      )}
    </AnimatePresence>
  );
} 