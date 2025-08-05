import { motion, AnimatePresence } from 'framer-motion';
import NavbarCTA from '../NavbarCTA';

interface DesktopCTASectionProps {
  isScrolled: boolean;
}

export function DesktopCTASection({ isScrolled }: DesktopCTASectionProps) {
  return (
    <AnimatePresence mode="wait">
      {!isScrolled && (
        <motion.div
          key="cta"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <NavbarCTA isScrolled={isScrolled} />
        </motion.div>
      )}
    </AnimatePresence>
  );
} 