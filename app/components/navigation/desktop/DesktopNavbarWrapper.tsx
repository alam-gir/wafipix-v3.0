import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DesktopNavbarWrapperProps {
  children: React.ReactNode;
  isScrolled: boolean;
}

export function DesktopNavbarWrapper({ children, isScrolled }: DesktopNavbarWrapperProps) {
  return (
    <motion.nav
      className={cn(
        'hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled ? 'py-2' : 'py-4'
      )}
      initial={false}
      animate={{ height: 'auto' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          {children}
        </div>
      </div>
    </motion.nav>
  );
} 