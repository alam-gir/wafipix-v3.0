"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  ArrowRight, 
  Sparkles, 
  Phone, 
  Mail,
  Calendar
} from "lucide-react";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

interface AboutCTAProps {
  className?: string;
}

export function AboutCTA({ className }: AboutCTAProps) {
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
        staggerChildren: 0.2,
      },
    },
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      action: "+88 01705-097013",
      href: "tel:+8801705097013",
      color: "bg-green-500/10",
      iconColor: "text-green-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      action: "info@wafipix.com",
      href: "mailto:info@wafipix.com",
      color: "bg-blue-500/10",
      iconColor: "text-blue-500",
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a consultation meeting",
      action: "Book Now",
      href: "https://calendly.com/wafipix1",
      color: "bg-purple-500/10",
      iconColor: "text-purple-500",
    },
  ];

  return (
    <section className={`py-20 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA */}
          <motion.div
            ref={ref}
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl p-8 md:p-16 border border-primary/20">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4" />
                Ready to Start?
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                {"Let's Create Something"}
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"> Extraordinary</span>
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                {"Ready to transform your digital presence? We're here to help you bring your vision to life. Let's discuss your project and explore how we can create something amazing together."}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center w-full sm:w-auto mb-12">
                <MagneticWrapper className="w-full sm:w-auto">
                  <a 
                    href="/contact"
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-purple-500 text-white rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2"
                  >
                    Start Your Project
                    <ArrowRight className="w-4 h-4" />
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
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>No Commitment Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Response within 24h</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                className="group relative"
              >
                <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-8 hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className={`w-8 h-8 ${method.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {method.description}
                  </p>

                  {/* Action */}
                  <a
                    href={method.href}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors duration-300"
                  >
                    {method.action}
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  {/* Background Glow */}
                  <div className={`absolute inset-0 rounded-2xl ${method.color.replace('bg-', 'bg-').replace('/10', '/5')} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 