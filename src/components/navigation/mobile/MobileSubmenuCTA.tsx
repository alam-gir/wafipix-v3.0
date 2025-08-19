import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface MobileSubmenuCTAProps {
  onClose?: () => void;
}

export function MobileSubmenuCTA({ onClose }: MobileSubmenuCTAProps) {
  const handleViewAllServices = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="mt-4 pt-4 border-t border-border/20 space-y-3">
      {/* View All Services Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="/services"
          onClick={handleViewAllServices}
          className="w-full bg-foreground/5 hover:bg-foreground/10 text-foreground py-2.5 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 border border-border/20 hover:border-border/40"
        >
          <span className="text-sm">View All Services</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
      
      {/* Start Project Button */}
      <motion.a 
        href="/start-project"
        className="w-full bg-primary text-primary-foreground py-2.5 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2 inline-block text-center"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="text-sm">Start Project</span>
        <ArrowRight className="w-4 h-4" />
      </motion.a>
    </div>
  );
} 