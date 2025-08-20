"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { ScrollingLogosCarousel } from "@/components/ui/ScrollingLogosCarousel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useTrustedCustomers } from "@/hooks/api/useCommon";

interface TrustedCustomersSectionProps {
  className?: string;
}

export function TrustedCustomersSection({ className }: TrustedCustomersSectionProps) {
  const { data: trustedCustomersData, isLoading, error } = useTrustedCustomers();
  
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Show loading state
  if (isLoading) {
    return (
      <section className={`py-16 md:py-20 relative overflow-hidden ${className}`}>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeader
            badgeIcon={Building2}
            badgeText="Trusted by Global Brands"
            title="Trusted by Industry Leaders"
            description="We've had the privilege of working with some of the world's most innovative companies, helping them create digital experiences that drive results and inspire audiences."
            className="mb-16"
          />
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error || !trustedCustomersData?.data) {
    return (
      <section className={`py-16 md:py-20 relative overflow-hidden ${className}`}>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeader
            badgeIcon={Building2}
            badgeText="Trusted by Global Brands"
            title="Trusted by Industry Leaders"
            description="We've had the privilege of working with some of the world's most innovative companies, helping them create digital experiences that drive results and inspire audiences."
            className="mb-16"
          />
          <div className="text-center py-20">
            <p className="text-muted-foreground">Failed to load trusted customers</p>
            <p className="text-sm text-muted-foreground">Please try again later</p>
          </div>
        </div>
      </section>
    );
  }

  const trustedCustomers = trustedCustomersData.data;

  return (
    <section className={`py-16 md:py-20 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader
          badgeIcon={Building2}
          badgeText="Trusted by Global Brands"
          title="Trusted by Industry Leaders"
          description="We've had the privilege of working with some of the world's most innovative companies, helping them create digital experiences that drive results and inspire audiences."
          className="mb-16"
        />

        {/* Three scrolling rows with different directions and speeds */}
        <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-8">
          <ScrollingLogosCarousel logos={trustedCustomers.slice(0, 8)} speed={0.5} />
        </motion.div>

        <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-8">
          <ScrollingLogosCarousel logos={trustedCustomers.slice(4, 12)} speed={-0.7} />
        </motion.div>

        <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <ScrollingLogosCarousel logos={trustedCustomers.slice(8, 16)} speed={0.9} />
        </motion.div>
      </div>
    </section>
  );
} 