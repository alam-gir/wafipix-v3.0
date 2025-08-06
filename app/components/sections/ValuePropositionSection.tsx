"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Star, CheckCircle, ArrowRight, Globe, Rocket, Shield } from "lucide-react";
import { AnimatedBackgroundWrapper } from "@/components/ui/AnimatedBackgroundWrapper";

interface ValuePropositionSectionProps {
  className?: string;
}

export function ValuePropositionSection({ className }: ValuePropositionSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const benefits = [
    {
      icon: Star,
      title: "Award-Winning Design",
      description: "Recognized by industry leaders for creative excellence",
      highlight: "15+ Awards",
    },
    {
      icon: Rocket,
      title: "Lightning Speed",
      description: "Deliver projects 3x faster than industry average",
      highlight: "3x Faster",
    },
    {
      icon: Shield,
      title: "100% Satisfaction",
      description: "Guaranteed results or we'll work until you're happy",
      highlight: "100% Guarantee",
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description: "Experience across diverse markets and cultures",
      highlight: "50+ Countries",
    },
  ];

  return (
    <section ref={containerRef} className={`py-20 md:py-28 relative overflow-hidden ${className}`}>
      <AnimatedBackgroundWrapper
        variant="gradient"
        intensity="medium"
        enableShapes={true}
        enableGradient={true}
        enableParticles={false}
        className="absolute inset-0"
      >
        <div />
      </AnimatedBackgroundWrapper>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main Value Proposition */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/30 mb-6"
          >
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Why Choose Wafipix?</span>
          </motion.div>

          <motion.h2
            variants={fadeInVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent">
              Where Creativity Meets
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-primary bg-clip-text text-transparent">
              Business Results
            </span>
          </motion.h2>

          <motion.div
            variants={fadeInVariants}
            className="relative max-w-6xl mx-auto mb-12 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <blockquote className="text-2xl md:text-3xl lg:text-4xl text-black dark:text-white leading-relaxed font-bold text-center">
              &ldquo;We don&apos;t just create beautiful designs – we craft strategic digital experiences that 
              <span className="text-primary font-bold"> drive real business growth</span>. 
              Every pixel, every interaction, every moment is designed to convert visitors into customers.&rdquo;
            </blockquote>
            
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-base font-bold text-primary">Our Promise</span>
              <div className="w-2 h-2 bg-primary rounded-full" />
            </div>
          </motion.div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="p-8 rounded-3xl bg-card/60 backdrop-blur-sm border border-border/30 hover:border-primary/40 transition-all duration-500 h-full relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-primary/10">
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-purple-500 p-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                        {benefit.highlight}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div
            variants={fadeInVariants}
            className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 md:p-12 border border-primary/20"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-muted-foreground text-lg">
                Join hundreds of successful companies that have transformed their digital presence
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "98%", label: "Client Retention" },
                { number: "4.9/5", label: "Average Rating" },
                { number: "24/7", label: "Support Available" },
                { number: "15+", label: "Years Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInVariants}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.div
            variants={fadeInVariants}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Something Extraordinary?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's discuss how we can transform your vision into a digital masterpiece that drives results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group px-10 py-4 bg-gradient-to-r from-primary to-purple-500 text-white rounded-2xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 font-semibold text-lg hover:scale-105 flex items-center gap-3">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-10 py-4 bg-transparent text-foreground border-2 border-border rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 font-semibold text-lg">
                View Our Work
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Free consultation • No commitment required</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 