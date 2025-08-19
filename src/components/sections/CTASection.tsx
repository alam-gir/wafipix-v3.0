"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

interface CTASectionProps {
  className?: string;
}

export function CTASection({ className }: CTASectionProps) {
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
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className={`py-16 md:py-20 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.div
            variants={fadeUpVariants}
            className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border shadow-lg"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight">
              Ready to Transform Your Brand?
            </h3>
            <p className="text-primary/80 mb-8 max-w-2xl mx-auto text-base leading-relaxed">
              Join hundreds of successful businesses that have elevated their digital presence with our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticWrapper>
                <a 
                  href="/start-project"
                  className="px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 font-semibold inline-block text-center hover:from-primary/90 hover:to-primary/70"
                >
                  Start Your Project
                </a>
              </MagneticWrapper>
              <MagneticWrapper>
                <a 
                  href="https://calendly.com/wafipix1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-transparent text-white border-2 border-primary/50 rounded-xl hover:border-primary hover:bg-primary/10 transition-all duration-300 font-semibold inline-block text-center"
                >
                  Schedule a Call
                </a>
              </MagneticWrapper>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 