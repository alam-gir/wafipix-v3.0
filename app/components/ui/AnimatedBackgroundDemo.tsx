"use client";

import { AnimatedBackgroundWrapper } from "./AnimatedBackgroundWrapper";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedBackgroundDemoProps {
  badge?: string;
  title1?: string;
  title2?: string;
  description?: string;
  variant?: "geometric" | "gradient" | "minimal";
  intensity?: "subtle" | "medium" | "intense";
  enableShapes?: boolean;
  enableGradient?: boolean;
  enableParticles?: boolean;
}

export function AnimatedBackgroundDemo({
  badge = "Digital Magic Creators",
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
  description = "Crafting exceptional digital experiences through innovative design and cutting-edge technology.",
  variant = "geometric",
  intensity = "medium",
  enableShapes = true,
  enableGradient = true,
  enableParticles = false,
}: AnimatedBackgroundDemoProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatedBackgroundWrapper
      variant={variant}
      intensity={intensity}
      enableShapes={enableShapes}
      enableGradient={enableGradient}
      enableParticles={enableParticles}
    >
      <div className="flex items-center justify-center min-h-screen w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
                         <motion.div
               variants={fadeUpVariants}
               initial="hidden"
               animate="visible"
               transition={{ duration: 1, delay: 0.5 }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/50 backdrop-blur-sm border border-border/20 mb-8 md:mb-12"
             >
              <Circle className="h-2 w-2 fill-primary" />
              <span className="text-sm text-muted-foreground tracking-wide">
                {badge}
              </span>
            </motion.div>

                         <motion.div
               variants={fadeUpVariants}
               initial="hidden"
               animate="visible"
               transition={{ duration: 1, delay: 0.7 }}
             >
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">
                  {title1}
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-secondary">
                  {title2}
                </span>
              </h1>
            </motion.div>

                         <motion.div
               variants={fadeUpVariants}
               initial="hidden"
               animate="visible"
               transition={{ duration: 1, delay: 0.9 }}
             >
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                {description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedBackgroundWrapper>
  );
} 