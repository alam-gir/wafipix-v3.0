import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SubMenuItem } from '@/lib/navigation';

interface MobileSubmenuItemProps {
  subItem: SubMenuItem;
  onSubmenuItemClick: (submenuItemId: string) => void;
}

export function MobileSubmenuItem({ subItem, onSubmenuItemClick }: MobileSubmenuItemProps) {
  return (
    <Link
      href={subItem.href}
      onClick={() => onSubmenuItemClick(subItem.id)}
      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent/40 transition-all duration-200 group"
    >
      <motion.div
        className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-primary/15 to-accent/15 rounded-lg flex items-center justify-center group-hover:from-primary/25 group-hover:to-accent/25 transition-all duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-xs group-hover:scale-110 transition-transform duration-200">
          {subItem.icon}
        </span>
      </motion.div>
      <div className="flex-1 min-w-0">
        <div className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
          {subItem.title}
        </div>
        <div className="text-xs text-muted-foreground truncate">
          {subItem.description}
        </div>
      </div>
      <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
    </Link>
  );
} 