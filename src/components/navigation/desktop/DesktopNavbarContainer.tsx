import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DesktopNavbarContainerProps {
  children: React.ReactNode;
  isScrolled: boolean;
  hasActiveSubmenu: boolean;
}

export function DesktopNavbarContainer({ 
  children, 
  isScrolled, 
  hasActiveSubmenu 
}: DesktopNavbarContainerProps) {
  return (
    <motion.div
      className={cn(
        'relative transition-all duration-500 overflow-hidden rounded-lg',
        hasActiveSubmenu ? 'p-4' : 'px-4'
      )}
      animate={{
        width: isScrolled 
          ? hasActiveSubmenu 
            ? '100%' 
            : '32rem'
          : '100%',
        maxWidth: isScrolled 
          ? hasActiveSubmenu 
            ? '100%' 
            : '32rem'
          : '100%',
        backgroundColor: isScrolled 
          ? 'rgba(var(--background), 0.95)' 
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(24px)' : 'none',
        border: isScrolled ? '1px solid rgba(var(--border), 0.2)' : 'none',
        boxShadow: isScrolled ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)' : 'none',
      }}
      transition={{ 
        duration: 0.4, 
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  );
} 