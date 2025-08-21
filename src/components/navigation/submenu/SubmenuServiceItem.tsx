import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn, getLucideIcon } from '@/lib/utils';
import { SubMenuItem } from '@/lib/navigation';

interface SubmenuServiceItemProps {
  subItem: SubMenuItem;
  categoryIndex: number;
  itemIndex: number;
  activeSubmenuItem?: string | null;
  onSubmenuItemClick?: (submenuItemId: string) => void;
}

export function SubmenuServiceItem({
  subItem,
  categoryIndex,
  itemIndex,
  activeSubmenuItem,
  onSubmenuItemClick,
}: SubmenuServiceItemProps) {
  const isActive = activeSubmenuItem === subItem.id;
  
  // Get the Lucide icon component using the utility function
  const IconComponent = getLucideIcon(subItem.icon);
  
  // If onSubmenuItemClick is provided, use it for mobile; otherwise use Link for desktop
  if (onSubmenuItemClick) {
    return (
      <button
        onClick={() => onSubmenuItemClick(subItem.id)}
        className={cn(
          'group/item flex items-center space-x-3 p-3 rounded-xl hover:bg-accent/40 transition-all duration-200 border hover:shadow-sm w-full text-left',
          isActive
            ? 'border-primary/50'
            : 'border-transparent hover:border-border/40'
        )}
      >
        <motion.div
          className="flex items-center space-x-3 w-full"
          whileHover={{ x: 4, scale: 1.02 }}
          transition={{
            duration: 0.15,
            delay: 0.1 + (categoryIndex * 5 + itemIndex) * 0.01,
          }}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {/* Item Icon */}
          <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-primary/15 to-accent/15 rounded-lg flex items-center justify-center group-hover/item:from-primary/25 group-hover/item:to-accent/25 transition-all duration-200">
            {IconComponent ? (
              <IconComponent 
                className="w-4 h-4 text-foreground group-hover/item:text-primary group-hover/item:scale-110 transition-all duration-200" 
              />
            ) : (
              <span className="text-sm group-hover/item:scale-110 transition-transform duration-200">
                {subItem.icon}
              </span>
            )}
          </div>

          {/* Item Content */}
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-foreground group-hover/item:text-primary transition-colors text-sm leading-tight">
              {subItem.title}
            </div>
            <div
              className="text-xs text-muted-foreground mt-1 leading-relaxed overflow-hidden"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {subItem.description}
            </div>
          </div>

          {/* Arrow Indicator */}
          <div className="flex-shrink-0 opacity-0 group-hover/item:opacity-100 transition-all duration-200 transform translate-x-2 group-hover/item:translate-x-0">
            <svg
              className="w-4 h-4 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </motion.div>
      </button>
    );
  }
  
  // Desktop version with Link
  return (
    <Link
      key={subItem.id}
      href={subItem.href}
      className={cn(
        'group/item flex items-center space-x-3 p-3 rounded-xl hover:bg-accent/40 transition-all duration-200 border hover:shadow-sm',
        isActive
          ? 'border-primary/50'
          : 'border-transparent hover:border-border/40'
      )}
    >
      <motion.div
        className="flex items-center space-x-3 w-full"
        whileHover={{ x: 4, scale: 1.02 }}
        transition={{
          duration: 0.15,
          delay: 0.1 + (categoryIndex * 5 + itemIndex) * 0.01,
        }}
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
      >
        {/* Item Icon */}
        <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-primary/15 to-accent/15 rounded-lg flex items-center justify-center group-hover/item:from-primary/25 group-hover/item:to-accent/25 transition-all duration-200">
          {IconComponent ? (
            <IconComponent 
              className="w-4 h-4 text-foreground group-hover/item:text-primary group-hover/item:scale-110 transition-all duration-200" 
            />
          ) : (
            <span className="text-sm group-hover/item:scale-110 transition-transform duration-200">
              {subItem.icon}
            </span>
          )}
        </div>

        {/* Item Content */}
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-foreground group-hover/item:text-primary transition-colors text-sm leading-tight">
            {subItem.title}
          </div>
          <div
            className="text-xs text-muted-foreground mt-1 leading-relaxed overflow-hidden"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {subItem.description}
          </div>
        </div>

        {/* Arrow Indicator */}
        <div className="flex-shrink-0 opacity-0 group-hover/item:opacity-100 transition-all duration-200 transform translate-x-2 group-hover/item:translate-x-0">
          <svg
            className="w-4 h-4 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </motion.div>
    </Link>
  );
} 