'use client'

import { motion } from 'framer-motion';
import PackageCard from '@/components/ui/PackageCard';
import type { ServicePageData } from '@/types';
import { MagneticWrapper } from '@/components/ui';

interface ServiceHeroProps {
  service: ServicePageData;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Service Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <span className="inline-block bg-gradient-to-r from-primary/20 to-primary/10 text-primary px-6 py-3 rounded-full text-base font-semibold mb-6 border border-primary/30">
              Professional Service
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight"
          >
            {service.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl sm:text-3xl text-primary/90 mb-10 leading-relaxed max-w-4xl mx-auto font-medium"
          >
            {service.subtitle}
          </motion.p>
        </motion.div>

        {/* Packages Section - Main Focus */}
        <motion.div
          key={service.slug} // Force re-render on service change
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-24"
        >
          {/* Packages Grid */}
          <div className="flex flex-col md:flex-row lg:flex-row gap-10 lg:gap-12 items-end">
            {service.packages.map((pkg, index) => (
              <div key={`${service.slug}-${pkg.id}`} className="flex-1">
                <PackageCard package={pkg} index={index} />
              </div>
            ))}
          </div>

          {/* Custom Solution CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-card/40 to-card/20 backdrop-blur-sm border border-border/30 rounded-3xl p-10 max-w-5xl mx-auto shadow-xl shadow-primary/10">
              <h3 className="text-3xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h3>
              <p className="text-lg text-primary/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                We understand that every project is unique. Contact us to discuss your specific requirements and get a custom quote tailored to your needs.
              </p>
                             <MagneticWrapper strength={0.2} attractArea={80}>
                 <button
                   className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300"
                 >
                   Get Custom Quote
                 </button>
               </MagneticWrapper>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
}
