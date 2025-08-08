"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, Award, Globe } from "lucide-react";
import { AnimatedBackgroundWrapper } from "@/components/ui/AnimatedBackgroundWrapper";
import { GradualSpacing } from "@/components/ui/GradualSpacing";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import { StatsSection } from "@/components/sections/StatsSection";

interface AboutHeroProps {
  className?: string;
}

export function AboutHero({ className }: AboutHeroProps) {
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
      <div className="flex items-center justify-center min-h-screen w-full py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-4 ">
            {/* Main Content */}
            <div className="text-center flex flex-col gap-2">
              {/* Badge */}
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                  <Sparkles className="w-4 h-4" />
                  Digital Magic Creators
                </div>
              </motion.div>

              {/* Main Heading */}
              <div className="mb-8">
                <GradualSpacing
                  text="Crafting Digital Excellence Since 2020"
                  duration={1.5}
                  delayMultiple={0.1}
                  className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground"
                />
              </div>

              {/* Subtitle */}
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 0.8 }}
                className="mb-12"
              >
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-light tracking-wide max-w-4xl mx-auto">
                  We are a passionate team of designers, developers, and strategists 
                  dedicated to transforming ideas into extraordinary digital experiences 
                  that inspire, engage, and drive results.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center w-full sm:w-auto"
              >
                <MagneticWrapper className="w-full sm:w-auto">
                  <a 
                    href="/contact"
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-purple-500 text-white rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 font-semibold inline-block text-center"
                  >
                    Start Your Project
                  </a>
                </MagneticWrapper>
                <MagneticWrapper className="w-full sm:w-auto">
                  <a 
                    href="/portfolio"
                    className="w-full sm:w-auto px-8 py-4 bg-transparent text-foreground border-2 border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 font-semibold inline-block text-center"
                  >
                    View Our Work
                  </a>
                </MagneticWrapper>
              </motion.div>
            </div>
            <StatsSection />
          </div>
        </div>
      </div>
    </AnimatedBackgroundWrapper>
  );
} 