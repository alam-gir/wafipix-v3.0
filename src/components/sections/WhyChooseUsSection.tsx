"use client";

import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { 
  Award, 
  Users, 
  Zap, 
  Shield, 
  Clock, 
  Heart,
  Sparkles,
} from 'lucide-react';

interface WhyChooseUsSectionProps {
  className?: string;
}

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const FeatureCard = ({ icon: Icon, title, description, color, delay }: FeatureCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Map colors to specific background colors
  const getIconBgColor = (color: string) => {
    if (color.includes('primary')) return 'bg-primary/60';
    if (color.includes('green')) return 'bg-green-500/60';
    if (color.includes('yellow')) return 'bg-yellow-500/60';
    if (color.includes('blue')) return 'bg-blue-500/60';
    if (color.includes('purple')) return 'bg-purple-500/60';
    if (color.includes('red')) return 'bg-red-500/60';
    return 'bg-primary/60';
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className="group relative"
    >
      <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-6 hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
        {/* Icon */}
        <div className={`w-12 h-12 ${getIconBgColor(color)} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {description}
        </p>

        {/* Background Glow */}
        <div className={`absolute inset-0 rounded-2xl ${color.replace('bg-', 'bg-').replace('/20', '/10')} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`} />
      </div>
    </motion.div>
  );
};

function WhyChooseUsSection({ className }: WhyChooseUsSectionProps) {
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
        staggerChildren: 0.1,
      },
    },
  };

  const features = [
    {
      icon: Award,
      title: "Proven Excellence",
      description: "4+ years of delivering exceptional results with 500+ successful projects completed.",
      color: "bg-primary/20",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated professionals with diverse skills in design, development, and strategy.",
      color: "bg-green-500/20",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Cutting-edge technologies and creative solutions that set your brand apart.",
      color: "bg-yellow-500/20",
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "100% client satisfaction rate with transparent processes and ongoing support.",
      color: "bg-blue-500/20",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Consistent project delivery within agreed timelines and budget constraints.",
      color: "bg-purple-500/20",
    },
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "We treat every project with care and dedication, ensuring exceptional quality.",
      color: "bg-red-500/20",
    },
  ];

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
              <Sparkles className="w-4 h-4" />
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              The Wafipix Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                             We don&apos;t just build websites—we create digital experiences that drive results. 
              Our unique approach combines creativity, technology, and strategy to deliver 
              exceptional outcomes for our clients.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;