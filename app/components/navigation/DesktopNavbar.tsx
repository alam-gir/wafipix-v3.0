"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import NavbarLogo from "./NavbarLogo";
import NavbarItem from "./NavbarItem";
import NavbarCTA from "./NavbarCTA";
import SubmenuPanel from "./SubmenuPanel";
import { navigation, ServiceCategory } from "@/lib/navigation";

// Custom hook for scroll detection
function useScrollDetection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
}

// Custom hook for active menu detection
function useActiveMenu() {
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
  const [activeSubmenuItem, setActiveSubmenuItem] = useState<string | null>(null);

  useEffect(() => {
    const pathname = window.location.pathname;
    const currentMenuItem = navigation.find(item => 
      item.href === pathname || 
      (item.submenu && item.submenu.some(cat => 
        cat.items.some(subItem => subItem.href === pathname)
      ))
    );
    
    if (currentMenuItem) {
      setActiveMenuItem(currentMenuItem.id);
      
      if (currentMenuItem.submenu) {
        for (const category of currentMenuItem.submenu) {
          const activeItem = category.items.find(item => item.href === pathname);
          if (activeItem) {
            setActiveSubmenuItem(activeItem.id);
            break;
          }
        }
      }
    }
  }, []);

  return { activeMenuItem, activeSubmenuItem };
}

// Custom hook for submenu management
function useSubmenuManagement() {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isSubmenuHovered, setIsSubmenuHovered] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (itemId: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    
    const item = navigation.find(nav => nav.id === itemId);
    if (item && item.submenu) {
      setActiveSubmenu(itemId);
    }
  };

  const handleMouseLeave = () => {
    if (!isSubmenuHovered) {
      closeTimeoutRef.current = setTimeout(() => {
        setActiveSubmenu(null);
      }, 150);
    }
  };

  const handleSubmenuMouseEnter = () => {
    setIsSubmenuHovered(true);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleSubmenuMouseLeave = () => {
    setIsSubmenuHovered(false);
    closeTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 150);
  };

  return {
    activeSubmenu,
    isSubmenuHovered,
    handleMouseEnter,
    handleMouseLeave,
    handleSubmenuMouseEnter,
    handleSubmenuMouseLeave,
  };
}

// Component for the navbar wrapper
function NavbarWrapper({ children, isScrolled }: { children: React.ReactNode; isScrolled: boolean }) {
  return (
    <motion.nav
      className={cn(
        " hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "py-2" : "py-4"
      )}
      initial={false}
      animate={{ height: "auto" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          {children}
        </div>
      </div>
    </motion.nav>
  );
}

// Component for the navbar container
function NavbarContainer({ 
  children, 
  isScrolled, 
  hasActiveSubmenu 
}: { 
  children: React.ReactNode; 
  isScrolled: boolean; 
  hasActiveSubmenu: boolean; 
}) {
  return (
    <motion.div
      className={cn(
        "relative transition-all duration-500 overflow-hidden rounded-lg",
        hasActiveSubmenu ? "p-4" : "px-4"
      )}
      animate={{
        width: isScrolled 
          ? hasActiveSubmenu 
            ? "100%" 
            : "32rem"
          : "100%",
        maxWidth: isScrolled 
          ? hasActiveSubmenu 
            ? "100%" 
            : "32rem"
          : "100%",
        backgroundColor: isScrolled 
          ? "rgba(var(--background), 0.95)" 
          : "transparent",
        backdropFilter: isScrolled ? "blur(24px)" : "none",
        border: isScrolled ? "1px solid rgba(var(--border), 0.2)" : "none",
        boxShadow: isScrolled ? "0 20px 25px -5px rgba(0, 0, 0, 0.1)" : "none",
      }}
      transition={{ 
        duration: 0.4, 
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}

// Component for the navbar content
function NavbarContent({ 
  children, 
  isScrolled 
}: { 
  children: React.ReactNode; 
  isScrolled: boolean; 
}) {
  return (
    <div className={cn(
      "flex items-center justify-between",
      isScrolled ? "px-6 py-3" : "py-2"
    )}>
      {children}
    </div>
  );
}

// Component for the logo section
function LogoSection({ isScrolled }: { isScrolled: boolean }) {
  return (
    <AnimatePresence mode="wait">
      {!isScrolled && (
        <motion.div
          key="logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <NavbarLogo isScrolled={isScrolled} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Component for the navigation items
function NavigationItems({ 
  isScrolled, 
  activeSubmenu, 
  activeMenuItem, 
  onMouseEnter, 
  onMouseLeave 
}: { 
  isScrolled: boolean; 
  activeSubmenu: string | null; 
  activeMenuItem: string | null; 
  onMouseEnter: (itemId: string) => void; 
  onMouseLeave: () => void; 
}) {
  return (
    <div className={cn(
      "flex items-center space-x-1 lg:space-x-2",
      isScrolled && "mx-auto"
    )}>
      {navigation.map((item) => (
        <div key={item.id} className="relative">
          <NavbarItem
            item={item}
            isScrolled={isScrolled}
            isHovered={activeSubmenu === item.id}
            isActive={activeMenuItem === item.id}
            onMouseEnter={() => onMouseEnter(item.id)}
            onMouseLeave={onMouseLeave}
          />
        </div>
      ))}
    </div>
  );
}

// Component for the CTA section
function CTASection({ isScrolled }: { isScrolled: boolean }) {
  return (
    <AnimatePresence mode="wait">
      {!isScrolled && (
        <motion.div
          key="cta"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <NavbarCTA isScrolled={isScrolled} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Component for the submenu panel
function SubmenuSection({ 
  hasActiveSubmenu, 
  activeSubmenuData, 
  activeSubmenuItem, 
  onSubmenuMouseEnter, 
  onSubmenuMouseLeave 
}: { 
  hasActiveSubmenu: boolean; 
  activeSubmenuData: ServiceCategory[] | null; 
  activeSubmenuItem: string | null; 
  onSubmenuMouseEnter: () => void; 
  onSubmenuMouseLeave: () => void; 
}) {
  return (
    <AnimatePresence>
      {hasActiveSubmenu && (
        <motion.div
          className="mt-0"
          onMouseEnter={onSubmenuMouseEnter}
          onMouseLeave={onSubmenuMouseLeave}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <SubmenuPanel 
            categories={activeSubmenuData!} 
            activeSubmenuItem={activeSubmenuItem}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Main DesktopNavbar component
export default function DesktopNavbar() {
  const isScrolled = useScrollDetection();
  const { activeMenuItem, activeSubmenuItem } = useActiveMenu();
  const {
    activeSubmenu,
    handleMouseEnter,
    handleMouseLeave,
    handleSubmenuMouseEnter,
    handleSubmenuMouseLeave,
  } = useSubmenuManagement();

  const activeSubmenuData = activeSubmenu 
    ? navigation.find(item => item.id === activeSubmenu)?.submenu || null
    : null;

  const hasActiveSubmenu = Boolean(activeSubmenu && activeSubmenuData);

  return (
    <>
      <NavbarWrapper isScrolled={isScrolled}>
        <NavbarContainer isScrolled={isScrolled} hasActiveSubmenu={hasActiveSubmenu}>
          <NavbarContent isScrolled={isScrolled}>
            <LogoSection isScrolled={isScrolled} />
            
            <NavigationItems
              isScrolled={isScrolled}
              activeSubmenu={activeSubmenu}
              activeMenuItem={activeMenuItem}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            
            <CTASection isScrolled={isScrolled} />
          </NavbarContent>

          <SubmenuSection
            hasActiveSubmenu={hasActiveSubmenu}
            activeSubmenuData={activeSubmenuData}
            activeSubmenuItem={activeSubmenuItem}
            onSubmenuMouseEnter={handleSubmenuMouseEnter}
            onSubmenuMouseLeave={handleSubmenuMouseLeave}
          />
        </NavbarContainer>
      </NavbarWrapper>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20" />
    </>
  );
} 