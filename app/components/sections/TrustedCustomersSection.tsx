"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Building2 } from "lucide-react";
import { ScrollingLogosCarousel } from "@/components/ui/ScrollingLogosCarousel";
import { trustedCustomersData } from "@/lib/demo-data";

interface TrustedCustomersSectionProps {
  className?: string;
}

export function TrustedCustomersSection({ className }: TrustedCustomersSectionProps) {
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <Badge
            icon={Building2}
            text="Trusted by Global Brands"
            variant="gradient"
            size="md"
            className="mb-8"
          />

          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight"
          >
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            We&apos;ve had the privilege of working with some of the world&apos;s most innovative companies, 
            helping them create digital experiences that drive results and inspire audiences.
          </motion.p>
        </motion.div>

        {/* Three scrolling rows with different directions and speeds */}
        <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-8">
          <ScrollingLogosCarousel logos={trustedCustomersData.slice(0, 8)} speed={0.5} />
        </motion.div>

        <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-8">
          <ScrollingLogosCarousel logos={trustedCustomersData.slice(4, 12)} speed={-0.7} />
        </motion.div>

        <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <ScrollingLogosCarousel logos={trustedCustomersData.slice(8, 16)} speed={0.9} />
        </motion.div>
      </div>
    </section>
  );
} 