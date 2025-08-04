'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { navigation } from '@/lib/navigation';

const mobileIcons = {
  home: '🏠',
  services: '⚙️',
  works: '💼',
  about: '👥',
  contact: '📞',
};

export default function MobileNavbar() {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (itemId: string) => {
    if (activeSubmenu === itemId) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(itemId);
    }
    setActiveItem(itemId);
  };

  const activeSubmenuData = navigation.find(item => item.id === activeSubmenu)?.submenu;

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <motion.nav
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl border-t border-border/20" />
        
        {/* Navigation Items */}
        <div className="relative px-4 py-3">
          <div className="flex items-center justify-around">
            {navigation.map((item) => (
              <motion.div
                key={item.id}
                className="relative"
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <button
                  onClick={() => handleItemClick(item.id)}
                  className={cn(
                    "flex flex-col items-center space-y-1 p-2 rounded-xl transition-all duration-200",
                    activeItem === item.id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className="text-xl">{mobileIcons[item.id as keyof typeof mobileIcons]}</span>
                  <span className="text-xs font-medium">{item.title}</span>
                </button>

                {/* Active Indicator */}
                <AnimatePresence>
                  {activeItem === item.id && (
                    <motion.div
                      className="absolute inset-0 bg-primary/20 rounded-xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expandable Submenu Panel */}
        <AnimatePresence>
          {activeSubmenu && activeSubmenuData && (
            <motion.div
              className="px-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <div className="bg-card/95 backdrop-blur-xl border border-border/20 rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-4">
                  {/* Header */}
                  <div className="text-center mb-4">
                    <h2 className="text-lg font-bold text-foreground mb-1">
                      Our Services
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      Discover our creative solutions
                    </p>
                  </div>

                  {/* Categories Grid */}
                  <div className="grid grid-cols-1 gap-4 max-h-64 overflow-y-auto">
                    {activeSubmenuData.map((category) => (
                      <div key={category.id} className="space-y-2">
                        <h3 className="text-sm font-semibold text-foreground border-b border-border/20 pb-1">
                          {category.title}
                        </h3>
                        <div className="space-y-1">
                          {category.items.map((subItem) => (
                            <a
                              key={subItem.id}
                              href={subItem.href}
                              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accent/40 transition-colors"
                            >
                              <span className="text-sm">{subItem.icon}</span>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-medium text-foreground">
                                  {subItem.title}
                                </div>
                                <div className="text-xs text-muted-foreground truncate">
                                  {subItem.description}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-4 pt-4 border-t border-border/20">
                    <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                      Start Project
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-24 md:hidden" />
    </>
  );
} 