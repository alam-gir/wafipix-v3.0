'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import MagneticWrapper from '@/components/ui/MagneticWrapper';
import { navbarItems } from './data';
import { useActiveRoute } from './hooks/useActiveRoute';
import { useServicesNavigation } from '@/hooks/api/useServices';
import type { NavigationCategory, NavigationService } from '@/types';

/**
 * NavbarNavigation - Navigation menu component
 * Single responsibility: Display navigation items with hover interactions
 */
export default function NavbarNavigation() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [submenuTimeout, setSubmenuTimeout] = useState<NodeJS.Timeout | null>(null);
  const { isActive } = useActiveRoute();
  const { data: servicesData, isLoading: servicesLoading, error: servicesError } = useServicesNavigation();

  const handleServicesHover = () => {
    if (submenuTimeout) {
      clearTimeout(submenuTimeout);
      setSubmenuTimeout(null);
    }
    setIsSubmenuOpen(true);
  };

  const handleServicesLeave = () => {
    const timeout = setTimeout(() => {
      setIsSubmenuOpen(false);
    }, 200);
    setSubmenuTimeout(timeout);
  };

  const handleSubmenuClose = () => {
    if (submenuTimeout) {
      clearTimeout(submenuTimeout);
      setSubmenuTimeout(null);
    }
    setIsSubmenuOpen(false);
  };

  // Calculate optimal grid layout based on number of categories
  const getGridLayout = () => {
    const count = servicesData.length;
    
    if (count === 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-1 md:grid-cols-2';
    if (count === 3) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    if (count === 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
    if (count >= 5) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
    
    return 'grid-cols-1 md:grid-cols-2';
  };

  return (
    <motion.nav
      className="flex items-center space-x-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      {navbarItems.map((item) => (
        <div key={item.id} className="relative">
          {item.hasSubmenu ? (
            // Services item with custom submenu
            <div
              onMouseEnter={handleServicesHover}
              onMouseLeave={handleServicesLeave}
            >
              <Link
                href={item.href}
                className={`flex items-center space-x-1 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-muted/50 ${
                  isActive(item.href) 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <span>{item.title}</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </Link>

              {/* Custom Submenu */}
              <AnimatePresence>
                {isSubmenuOpen && (
                  <>
                    {/* Backdrop */}
                    <motion.div
                      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={handleSubmenuClose}
                    />
                    
                    {/* Submenu Panel */}
                    <motion.div
                      className="fixed top-20 left-0 right-0 flex justify-center z-50"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <div 
                        className="bg-card backdrop-blur-2xl rounded-2xl shadow-xl border border-border/20 p-6"
                        style={{ 
                          width: 'fit-content', 
                          minWidth: '800px', 
                          maxWidth: '90vw' 
                        }}
                        onMouseEnter={handleServicesHover}
                        onMouseLeave={handleServicesLeave}
                      >
                        {/* Loading State */}
                        {servicesLoading && (
                          <div className="flex items-center justify-center py-12">
                            <div className="flex flex-col items-center space-y-4">
                              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                              <p className="text-sm text-muted-foreground">Loading services...</p>
                            </div>
                          </div>
                        )}

                        {/* Error State */}
                        {servicesError && (
                          <div className="flex items-center justify-center py-12">
                            <div className="flex flex-col items-center space-y-4 text-center">
                              <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-destructive">Failed to load services</p>
                                <p className="text-xs text-muted-foreground mt-1">Please try again later</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Services Data */}
                        {!servicesLoading && !servicesError && servicesData.length > 0 && (
                          <div className={`grid gap-8 ${getGridLayout()}`}>
                            {servicesData.map((category: NavigationCategory) => (
                              <div key={category.id} className="space-y-4 min-w-[200px]">
                                <div className="space-y-2">
                                  <h3 className="text-lg font-semibold text-foreground">
                                    {category.title}
                                  </h3>
                                </div>
                                
                                <div className="space-y-2">
                                  {category.items.map((subItem: NavigationService) => (
                                    <Link
                                      key={subItem.id}
                                      href={subItem.href}
                                      className={`block p-3 rounded-lg transition-colors group ${
                                        isActive(subItem.href)
                                          ? 'bg-primary/10 text-primary'
                                          : 'hover:bg-muted/50'
                                      }`}
                                      onClick={handleSubmenuClose}
                                    >
                                      <h4 className={`text-sm font-medium transition-colors whitespace-nowrap ${
                                        isActive(subItem.href)
                                          ? 'text-primary'
                                          : 'text-foreground group-hover:text-primary'
                                      }`}>
                                        {subItem.title}
                                      </h4>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Empty State */}
                        {!servicesLoading && !servicesError && servicesData.length === 0 && (
                          <div className="flex items-center justify-center py-12">
                            <div className="flex flex-col items-center space-y-4 text-center">
                              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-muted-foreground">No services available</p>
                                <p className="text-xs text-muted-foreground mt-1">Check back later</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          ) : (
            // Other items with MagneticWrapper
            <MagneticWrapper strength={0.2} attractArea={80}>
              <motion.div
                className="relative"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-muted/50 ${
                    isActive(item.href) 
                      ? 'text-primary bg-primary/10' 
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  <span>{item.title}</span>
                </Link>
              </motion.div>
            </MagneticWrapper>
          )}
        </div>
      ))}
    </motion.nav>
  );
}
