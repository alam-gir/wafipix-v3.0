"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ServiceCategory, SubMenuItem } from "@/lib/navigation";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Lenis from "lenis";

interface SubmenuPanelProps {
  categories: ServiceCategory[];
  activeSubmenuItem?: string | null;
}

// Sub-component for Category Header
function CategoryHeader({ title }: { title: string }) {
  return (
    <div className="mb-4 pb-3 border-b border-border/20">
      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <div className="w-8 h-0.5 bg-primary mt-2 transform origin-left transition-transform group-hover:scale-x-150" />
    </div>
  );
}

// Sub-component for Service Item
function ServiceItem({
  subItem,
  categoryIndex,
  itemIndex,
  activeSubmenuItem,
}: {
  subItem: SubMenuItem;
  categoryIndex: number;
  itemIndex: number;
  activeSubmenuItem?: string | null;
}) {
  const isActive = activeSubmenuItem === subItem.id;
  return (
    <motion.a
      key={subItem.id}
      href={subItem.href}
      className={cn(
        "group/item flex items-center space-x-3 p-3 rounded-xl hover:bg-accent/40 transition-all duration-200 border hover:shadow-sm",
        isActive
          ? "border-primary/50"
          : "border-transparent hover:border-border/40"
      )}
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
        <span className="text-sm group-hover/item:scale-110 transition-transform duration-200">
          {subItem.icon}
        </span>
      </div>

      {/* Item Content */}
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-foreground group-hover/item:text-primary transition-colors text-sm leading-tight">
          {subItem.title}
        </div>
        <div
          className="text-xs text-muted-foreground mt-1 leading-relaxed overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
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
    </motion.a>
  );
}

// Sub-component for Category Section
function CategorySection({
  category,
  categoryIndex,
  activeSubmenuItem,
}: {
  category: ServiceCategory;
  categoryIndex: number;
  activeSubmenuItem?: string | null;
}) {
  return (
    <motion.div
      key={category.id}
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: categoryIndex * 0.1 }}
    >
      <CategoryHeader title={category.title} />
      <div className="space-y-2">
        {category.items.map((subItem, itemIndex) => (
          <ServiceItem
            key={subItem.id}
            subItem={subItem}
            categoryIndex={categoryIndex}
            itemIndex={itemIndex}
            activeSubmenuItem={activeSubmenuItem}
          />
        ))}
      </div>
    </motion.div>
  );
}

// Sub-component for CTA Section
function CTASection() {
  return (
    <div className="hidden lg:block col-span-3 relative overflow-hidden h-full">
      {/* BackgroundGradientAnimation */}
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(108, 0, 162)"
        gradientBackgroundEnd="rgb(0, 17, 82)"
        firstColor="18, 113, 255"
        secondColor="221, 74, 255"
        thirdColor="100, 220, 255"
        fourthColor="200, 50, 50"
        fifthColor="180, 180, 50"
        pointerColor="140, 100, 255"
        size="60%"
        blendingValue="hard-light"
        interactive={true}
        height="h-full"
        width="w-full"
        containerClassName="absolute inset-0"
      >
        {/* Content Overlay */}
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center p-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Enhanced Icon */}
            <motion.div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto bg-primary/20 shadow-md backdrop-blur-md"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </motion.div>

            {/* Enhanced Text Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Ready to Start?
              </h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto">
                Let&apos;s create something amazing together with cutting-edge
                design and technology
              </p>
            </div>

            {/* Enhanced CTA Button with Magnetic Wrapper */}
            <MagneticWrapper strength={0.3} attractArea={100}>
              <motion.button
                className="px-10 py-4 bg-white/95 backdrop-blur-sm text-primary font-semibold rounded-xl hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/20"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Start Project
              </motion.button>
            </MagneticWrapper>
          </motion.div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}

// Main SubmenuPanel Component
export default function SubmenuPanel({
  categories,
  activeSubmenuItem,
}: SubmenuPanelProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      lenisRef.current = new Lenis({
        wrapper: scrollContainerRef.current,
        content: scrollContainerRef.current,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
      });

      function raf(time: number) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenisRef.current?.destroy();
      };
    }
  }, []);

  return (
    <div className="border-t border-border/20 bg-background backdrop-blur-xl -mt-px overflow-hidden">
      <div className="grid grid-cols-12 min-h-96">
        {/* First Section - Category Submenus with Lenis Smooth Scroll */}
        <div className="col-span-12 lg:col-span-9 p-6 lg:p-8">
          <div
            ref={scrollContainerRef}
            className="max-h-96 overflow-y-auto pr-4 custom-scrollbar"
            onWheel={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, categoryIndex) => (
                <CategorySection
                  key={category.id}
                  category={category}
                  categoryIndex={categoryIndex}
                  activeSubmenuItem={activeSubmenuItem}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Second Section - CTA with BackgroundGradientAnimation */}
        <CTASection />
      </div>
    </div>
  );
}
