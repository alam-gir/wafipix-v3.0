import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function MobileSubmenuCTA() {
  return (
    <div className="mt-4 pt-4 border-t border-border/20">
      <motion.button 
        className="w-full bg-primary text-primary-foreground py-2.5 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-sm">Start Project</span>
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </div>
  );
} 