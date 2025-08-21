'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useNavigation } from '@/hooks/useNavigation';
import { useScrollDetection } from '@/hooks/useScrollDetection';
import { navigation } from '@/lib/navigation';
import NavbarLogo from '../NavbarLogo';
import NavbarItem from '../NavbarItem';
import NavbarCTA from '../NavbarCTA';
import SubmenuPanel from '../submenu/SubmenuPanel';

export default function DesktopNavbar() {
  const isScrolled = useScrollDetection();
  const {
    activeMenuItem,
    activeSubmenuItem,
    activeSubmenuData,
    handleMouseEnter,
    handleMouseLeave,
    handleSubmenuMouseEnter,
    handleSubmenuMouseLeave,
    handleServiceClick,
    hasActiveSubmenu,
  } = useNavigation();

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
          <motion.div
            className={cn(
              'relative transition-all duration-500 overflow-hidden rounded-lg',
              hasActiveSubmenu ? 'p-4' : 'px-4'
            )}
            animate={{
              width: isScrolled 
                ? hasActiveSubmenu 
                  ? '100%' 
                  : 'auto'
                : '100%',
              maxWidth: isScrolled 
                ? hasActiveSubmenu 
                  ? '100%' 
                  : '40rem'
                : '100%',
              minWidth: isScrolled 
                ? hasActiveSubmenu 
                  ? 'auto' 
                  : '32rem'
                : 'auto',
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
            {/* Navigation Content */}
            <div className={cn(
              'flex items-center transition-all duration-500',
              isScrolled ? 'px-8 py-3 justify-center' : 'py-2 justify-between'
            )}>
              {/* Logo - Only render when not scrolled */}
              <AnimatePresence>
                {!isScrolled && (
                  <motion.div
                    key="logo"
                    className="flex items-center"
                    initial={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <NavbarLogo isScrolled={isScrolled} />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Navigation Items */}
              <div className={cn(
                "flex items-center transition-all duration-300",
                isScrolled ? "space-x-8 px-4" : "space-x-8"
              )}>
                {navigation.map((item) => (
                  <NavbarItem
                    key={item.id}
                    item={item}
                    isScrolled={isScrolled}
                    isActive={activeMenuItem === item.id}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleServiceClick(item)}
                  />
                ))}
              </div>
              
              {/* CTA - Only render when not scrolled */}
              <AnimatePresence>
                {!isScrolled && (
                  <motion.div
                    key="cta"
                    initial={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <NavbarCTA isScrolled={isScrolled} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Submenu */}
            {hasActiveSubmenu && activeSubmenuData && (
              <div
                onMouseEnter={handleSubmenuMouseEnter}
                onMouseLeave={handleSubmenuMouseLeave}
              >
                <SubmenuPanel
                  categories={activeSubmenuData}
                  activeSubmenuItem={activeSubmenuItem}
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
} 