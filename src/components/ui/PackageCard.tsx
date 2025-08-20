'use client'

import { motion } from 'framer-motion';
import { Check, Star, Clock, CreditCard } from 'lucide-react';
import type { ServicePackage } from '@/types';
import { Meteors } from './meteors';
import { useEffect, useState } from 'react';
import MagneticWrapper from './MagneticWrapper';

interface PackageCardProps {
  package: ServicePackage;
  index: number;
}

export default function PackageCard({ package: pkg, index }: PackageCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ensure visibility after component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Popular Badge - Outside the card to avoid clipping */}
      {pkg.popular && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary/25">
            <Star className="w-4 h-4 fill-current" />
            Most Popular
          </div>
        </div>
      )}
      
      <motion.div
        key={`${pkg.id}-${index}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className={`relative bg-gradient-to-br from-card/90 via-card/70 to-card/50 backdrop-blur-sm border rounded-3xl p-10 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105 h-auto overflow-hidden ${
          pkg.popular 
            ? 'border-primary/60 shadow-xl shadow-primary/15' 
            : 'border-border/40 hover:border-primary/40'
        }`}
      >
      {/* Meteor Background for Popular Package */}
      {pkg.popular && (
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <Meteors number={8} />
        </div>
      )}

      {/* Top Content - Natural height */}
      <div className="relative z-10">
                          {/* Package Header */}
                  <div className="text-center mb-10">
                    <h3 className="text-3xl font-bold text-white mb-3 tracking-wide" style={{ opacity: 1 }}>
                      {pkg.name}
                    </h3>
                    <p className="text-primary/90 text-lg font-medium tracking-wide" style={{ opacity: 1 }}>
                      {pkg.subtitle}
                    </p>
                  </div>

                          {/* Pricing - Redesigned to match reference image */}
                  <div className="text-center mb-10">
                    <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-inner">
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center justify-center gap-4">
                          <div className="text-center">
                            <span className="text-3xl font-bold text-white" style={{ opacity: 1 }}>${pkg.pricing.usd}</span>
                            <span className="text-primary/80 text-sm ml-2 font-medium" style={{ opacity: 1 }}>USD</span>
                          </div>
                          <div className="text-primary/40 text-xl" style={{ opacity: 1 }}>|</div>
                          <div className="text-center">
                            <span className="text-3xl font-bold text-white" style={{ opacity: 1 }}>{pkg.pricing.bdt}</span>
                            <span className="text-primary/80 text-sm ml-2 font-medium" style={{ opacity: 1 }}>BDT</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

        {/* Features List */}
        <div className="mb-10">
          <ul className="space-y-4">
            {pkg.features.map((feature) => (
              <li key={feature.id} className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 ${
                  feature.highlight 
                    ? 'bg-primary/25 text-primary shadow-lg shadow-primary/20' 
                    : 'bg-primary/15 text-primary/80'
                }`}>
                  <Check className="w-4 h-4" />
                </div>
                <span className={`text-base leading-relaxed ${
                  feature.highlight 
                    ? 'text-white font-semibold' 
                    : 'text-primary/90'
                }`}>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Package Info */}
        <div className="space-y-4 text-sm text-primary/80 mb-8">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary/70" />
            <span className="font-medium">Delivery: {pkg.deliveryTime}</span>
          </div>
          <div className="flex items-center gap-3">
            <CreditCard className="w-5 h-5 text-primary/70" />
            <span className="font-medium">{pkg.paymentTerms}</span>
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10">
                 {/* CTA Button */}
         <MagneticWrapper strength={0.2} attractArea={80} className="w-full">
           <button
             className={`w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 ${
               pkg.popular
                 ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground'
                 : 'bg-primary/20 text-primary border-2 border-primary/40'
             }`}
           >
             Get Started
           </button>
         </MagneticWrapper>
      </div>
      </motion.div>
    </div>
  );
}
