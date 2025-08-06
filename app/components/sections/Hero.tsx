"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { SITE_CONSTANTS } from "@/lib/constants";
import { AnimatedBackgroundWrapper } from "@/components/ui/AnimatedBackgroundWrapper";
import { GradualSpacing } from "@/components/ui/GradualSpacing";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import { Badge } from "@/components/ui/Badge";

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
            <div className="mb-8 md:mb-12">
              <Badge
                icon={Circle}
                text={SITE_CONSTANTS.COMPANY.NAME}
                variant="gradient"
                size="md"
                animationDelay={0.5}
                animationDuration={1}
              />
            </div>

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
              className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center w-full sm:w-auto"
            >
              <MagneticWrapper className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-purple-500 text-white rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 font-semibold">
                  Let&apos;s Build Your Brand
                </button>
              </MagneticWrapper>
              <MagneticWrapper className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 font-semibold">
                  View Portfolio
                </button>
              </MagneticWrapper>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedBackgroundWrapper>
  );
} 