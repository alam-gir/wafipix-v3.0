"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Target, Zap, Heart } from "lucide-react";

interface AboutStoryProps {
  className?: string;
}

export function AboutStory({ className }: AboutStoryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className={`py-20 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            ref={ref}
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-6">
              <BookOpen className="w-4 h-4" />
              Our Story
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              From Vision to Reality
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every great journey begins with a simple idea. Ours was to create digital experiences 
              that not only look beautiful but also drive real business results.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-px bg-gradient-to-b from-primary/20 via-primary to-primary/20 hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-16">
              {/* 2020 - Founded */}
              <motion.div
                variants={timelineVariants}
                className="relative flex flex-col md:flex-row items-center gap-8"
              >
                <div className="flex-1 md:text-right md:pr-12">
                  <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-6 md:p-8 hover:bg-card/80 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4 md:justify-end">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-primary">2020</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      The Beginning
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Founded with a vision to bridge the gap between creativity and technology. 
                      We started as a small team of passionate designers and developers, 
                      determined to create digital magic.
                    </p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" />
                
                <div className="flex-1 md:pl-12 md:hidden">
                  <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-6 md:p-8 hover:bg-card/80 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-primary">2020</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      The Beginning
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Founded with a vision to bridge the gap between creativity and technology. 
                      We started as a small team of passionate designers and developers, 
                      determined to create digital magic.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 2022 - Growth */}
              <motion.div
                variants={timelineVariants}
                className="relative flex flex-col md:flex-row items-center gap-8"
              >
                <div className="flex-1 md:pl-12">
                  <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-6 md:p-8 hover:bg-card/80 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
                        <Target className="w-5 h-5 text-green-500" />
                      </div>
                      <span className="text-sm font-medium text-green-500">2022</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      Rapid Growth
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our reputation for quality and innovation spread quickly. We expanded our team, 
                      refined our processes, and began working with clients across multiple continents.
                    </p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-background shadow-lg hidden md:block" />
              </motion.div>

              {/* 2024 - Today */}
              <motion.div
                variants={timelineVariants}
                className="relative flex flex-col md:flex-row items-center gap-8"
              >
                <div className="flex-1 md:text-right md:pr-12">
                  <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-6 md:p-8 hover:bg-card/80 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4 md:justify-end">
                      <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center">
                        <Heart className="w-5 h-5 text-purple-500" />
                      </div>
                      <span className="text-sm font-medium text-purple-500">2024</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      Global Impact
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Today, we&apos;re proud to be a trusted partner for businesses worldwide. 
                      Our commitment to excellence, innovation, and client success remains 
                      at the heart of everything we do.
                    </p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-background shadow-lg hidden md:block" />
                
                <div className="flex-1 md:pl-12 md:hidden">
                  <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-6 md:p-8 hover:bg-card/80 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center">
                        <Heart className="w-5 h-5 text-purple-500" />
                      </div>
                      <span className="text-sm font-medium text-purple-500">2024</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      Global Impact
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Today, we&apos;re proud to be a trusted partner for businesses worldwide. 
                      Our commitment to excellence, innovation, and client success remains 
                      at the heart of everything we do.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 