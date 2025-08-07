"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Heart, 
  Zap, 
  Target, 
  Users, 
  Lightbulb, 
  Shield,
  ArrowRight,
  Sparkles
} from "lucide-react";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

interface AboutValuesProps {
  className?: string;
}

interface ValueCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const ValueCard = ({ icon: Icon, title, description, color, delay }: ValueCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className="group relative"
    >
      <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-8 hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
        {/* Icon */}
        <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        {/* Hover Arrow */}
        <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-sm font-medium">Learn more</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>

        {/* Background Glow */}
        <div className={`absolute inset-0 rounded-2xl ${color.replace('bg-', 'bg-').replace('/10', '/5')} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`} />
      </div>
    </motion.div>
  );
};

export function AboutValues({ className }: AboutValuesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "We pour our hearts into every project, treating your vision as our own. Our passion for design and technology drives us to exceed expectations.",
      color: "bg-red-500/10",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We stay ahead of the curve, embracing cutting-edge technologies and creative solutions that set your brand apart from the competition.",
      color: "bg-yellow-500/10",
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "Every design decision is made with your business goals in mind. We create experiences that not only look great but drive measurable results.",
      color: "bg-green-500/10",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "We believe the best results come from true partnership. We work closely with you throughout the entire process, ensuring your vision comes to life.",
      color: "bg-blue-500/10",
    },
    {
      icon: Lightbulb,
      title: "Creative Excellence",
      description: "We push creative boundaries while maintaining strategic focus. Our designs are both beautiful and purposeful, delivering impact that lasts.",
      color: "bg-purple-500/10",
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Your success is our success. We build lasting relationships based on trust, transparency, and consistent delivery of exceptional work.",
      color: "bg-indigo-500/10",
    },
  ];

  return (
    <section className={`py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background ${className}`}>
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
              Our Values
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These core values guide every decision we make and every project we undertake. 
              They're not just words on a page—they're the foundation of our culture and success.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                color={value.color}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl p-8 md:p-12 border border-primary/20">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Work with a Values-Driven Team?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's create something extraordinary together. Our values aren't just promises—they're our commitment to your success.
              </p>
              <MagneticWrapper>
                <a 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-purple-500 text-white rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 font-semibold"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </MagneticWrapper>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 