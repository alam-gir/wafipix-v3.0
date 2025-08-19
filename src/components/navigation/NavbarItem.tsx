'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import MagneticWrapper from '@/components/ui/MagneticWrapper';
import { NavItem } from '@/lib/navigation';

interface NavbarItemProps {
  item: NavItem;
  isScrolled?: boolean;
  isHovered?: boolean;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick?: () => void;
}

export default function NavbarItem({
  item,
  isScrolled = false,
  isHovered = false,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: NavbarItemProps) {
  const router = useRouter();

  const handleClick = () => {
    // If item doesn't have submenu, navigate using Next.js router
    if (!item.hasSubmenu && item.href) {
      router.push(item.href);
    }
    // If onClick prop is provided, call it
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <MagneticWrapper strength={0.2} attractArea={80}>
        <motion.div
          className={cn(
            "relative px-3 py-2 rounded-lg cursor-pointer transition-colors",
            isActive 
              ? "text-primary bg-primary/10 border border-primary/20" 
              : isHovered 
                ? "text-primary bg-primary/5" 
                : "text-foreground hover:text-primary/80 hover:bg-primary/5"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          onClick={handleClick}
        >
          <span className={cn(
            "font-medium transition-all duration-300",
            isScrolled ? "text-sm" : "text-sm"
          )}>
            {item.title}
          </span>
          
          {/* Active Indicator */}
          <AnimatePresence>
            {(isHovered || isActive) && (
              <motion.div
                className="absolute inset-0 bg-primary/10 rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </MagneticWrapper>
    </div>
  );
} 