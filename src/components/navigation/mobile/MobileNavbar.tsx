'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, FolderOpen, User, Mail, ChevronUp } from 'lucide-react';
import { navbarItems } from '../data';
import type { NavbarItem } from '../types';
import { useActiveRoute } from '../hooks/useActiveRoute';
import { useServicesNavigation } from '@/hooks/api/useServices';
import type { NavigationCategory, NavigationService } from '@/types';

// Icon mapping for mobile navigation
const iconMap = {
  home: Home,
  services: Briefcase,
  works: FolderOpen,
  about: User,
  contact: Mail,
};

/**
 * MobileNavbar - Mobile dock-style navigation component
 * Single responsibility: Handle mobile navigation with dock-style layout
 */
export default function MobileNavbar() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const { isActive } = useActiveRoute();
  const { data: servicesData, isLoading: servicesLoading, error: servicesError } = useServicesNavigation();

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Mobile Dock Navigation */}
      <motion.div
        className="fixed bottom-4 left-4 right-4 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="bg-card/90 backdrop-blur-xl rounded-2xl shadow-xl border border-border/20 p-4">
          <div className="flex items-center justify-around">
            {navbarItems.map((item: NavbarItem) => {
              const IconComponent = iconMap[item.id as keyof typeof iconMap];
              
              if (item.hasSubmenu) {
                return (
                  <button
                    key={item.id}
                    onClick={toggleSubmenu}
                    className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-primary/10 text-primary'
                        : 'hover:bg-muted/50'
                    }`}
                  >
                    <IconComponent className={`w-6 h-6 ${
                      isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                    <span className={`text-xs ${
                      isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                    }`}>{item.title}</span>
                  </button>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-muted/50'
                  }`}
                >
                  <IconComponent className={`w-6 h-6 ${
                    isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                  <span className={`text-xs ${
                    isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                  }`}>{item.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Mobile Services Submenu Panel */}
      <AnimatePresence>
        {isSubmenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSubmenu}
            />
            
            {/* Submenu Panel */}
            <motion.div
              className="fixed bottom-20 left-4 right-4 bg-card/95 backdrop-blur-xl rounded-2xl shadow-xl border border-border/20 z-50 p-6"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Close Button */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-foreground">Services</h2>
                <button
                  onClick={closeSubmenu}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

                      {/* Services Content */}
                      <div className="max-h-[60vh] overflow-y-auto">
                        {/* Loading State */}
                        {servicesLoading && (
                          <div className="flex items-center justify-center py-12">
                            <div className="flex flex-col items-center space-y-4">
                              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                              <p className="text-sm text-muted-foreground">Loading services...</p>
                            </div>
                          </div>
                        )}

                        {/* Error State */}
                        {servicesError && (
                          <div className="flex items-center justify-center py-12">
                            <div className="flex flex-col items-center space-y-4 text-center">
                              <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                          <div className="grid grid-cols-2 gap-4">
                            {servicesData.map((category: NavigationCategory) => (
                              <div key={category.id} className="space-y-3">
                                <h3 className="text-sm font-semibold text-foreground">
                                  {category.title}
                                </h3>
                                <div className="space-y-2">
                                  {category.items.map((item: NavigationService) => (
                                    <Link
                                      key={item.id}
                                      href={item.href}
                                      className={`block p-2 rounded-lg transition-colors ${
                                        isActive(item.href)
                                          ? 'bg-primary/10 text-primary'
                                          : 'hover:bg-muted/50'
                                      }`}
                                      onClick={closeSubmenu}
                                    >
                                      <span className={`text-sm transition-colors ${
                                        isActive(item.href)
                                          ? 'text-primary'
                                          : 'text-muted-foreground hover:text-primary'
                                      }`}>
                                        {item.title}
                                      </span>
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
                              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  );
}