"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONSTANTS } from "@/lib/constants";
import { AnimatedBackgroundWrapper } from "@/components/ui/AnimatedBackgroundWrapper";
import { GradualSpacing } from "@/components/ui/GradualSpacing";

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatedBackgroundWrapper
      variant="geometric"
      intensity="medium"
      enableShapes={true}
      enableGradient={true}
      enableParticles={false}
      className={className}
    >
      <div className="flex items-center justify-center h-screen w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/50 backdrop-blur-sm border border-border/20 mb-8 md:mb-12"
            >
              <Circle className="h-2 w-2 fill-primary" />
              <span className="text-sm text-muted-foreground tracking-wide">
                {SITE_CONSTANTS.COMPANY.NAME}
              </span>
            </motion.div>

            {/* Main Tagline with Gradual Spacing Effect */}
            <div className="mb-6 md:mb-8">
              <GradualSpacing
                text={SITE_CONSTANTS.HERO.TAGLINE}
                duration={1.2}
                delayMultiple={0.08}
                className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground"
              />
            </div>

            {/* Subtagline with Animation */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.9 }}
            >
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
                {SITE_CONSTANTS.HERO.SUBTAGLINE}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                Get Started
              </button>
              <button className="px-8 py-3 bg-transparent text-foreground border border-border rounded-lg hover:bg-muted/50 transition-colors font-medium">
                View Portfolio
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedBackgroundWrapper>
  );
} 