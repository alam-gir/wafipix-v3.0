import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NavItem } from '@/lib/navigation';
import { 
  Home, 
  Settings, 
  Briefcase, 
  Users, 
  Phone,
} from 'lucide-react';

const mobileIcons = {
  home: Home,
  services: Settings,
  works: Briefcase,
  about: Users,
  contact: Phone,
};

interface MobileNavbarItemProps {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
}

export function MobileNavbarItem({ item, isActive, onClick }: MobileNavbarItemProps) {
  const IconComponent = mobileIcons[item.id as keyof typeof mobileIcons];

  return (
    <motion.div
      className="relative"
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <button
        onClick={onClick}
        className={cn(
          'flex flex-col items-center space-y-1 p-2 rounded-xl transition-all duration-200',
          isActive
            ? 'text-primary bg-primary/10'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        <IconComponent className="w-5 h-5" />
        <span className="text-xs font-medium">{item.title}</span>
      </button>

      {/* Active Indicator */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute inset-0 bg-primary/20 rounded-xl -z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
} 