'use client'

import { motion } from 'framer-motion';
import { Check, Star, Clock, CreditCard } from 'lucide-react';
import type { ServicePackage } from '@/types';
import { Meteors } from './meteors';
import { useEffect, useState } from 'react';
import MagneticWrapper from './MagneticWrapper';
import { useRouter } from 'next/navigation';
import { useMetaPixelTracking } from '@/hooks/useMetaPixelTracking';

interface PackageCardProps {
  package: ServicePackage;
  index: number;
}

export default function PackageCard({ package: pkg, index }: PackageCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const { trackPackageSelection } = useMetaPixelTracking();

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
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg shadow-primary/25">
            <Star className="w-3 h-3 fill-current" />
            Most Popular
          </div>
        </div>
      )}
      
      <motion.div
        key={`${pkg.id}-${index}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className={`relative bg-gradient-to-br from-card/90 via-card/70 to-card/50 backdrop-blur-sm border rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02] h-auto overflow-hidden ${
          pkg.popular 
            ? 'border-primary/60 shadow-lg shadow-primary/15' 
            : 'border-border/40 hover:border-primary/40'
        }`}
      >
      {/* Meteor Background for Popular Package */}
      {pkg.popular && (
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          <Meteors number={8} />
        </div>
      )}

      {/* Top Content - Natural height */}
      <div className="relative z-10">
                          {/* Package Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2 tracking-wide">
                      {pkg.name}
                    </h3>
                    <p className="text-primary/90 text-sm font-medium tracking-wide">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Pricing - Compact Design */}
                  <div className="text-center mb-6">
                    <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/30 shadow-inner">
                      <div className="flex items-center justify-center gap-3">
                        <div className="text-center">
                          <span className="text-2xl font-bold text-white">${pkg.pricing.usd}</span>
                          <span className="text-primary/80 text-xs ml-1 font-medium">USD</span>
                        </div>
                        <div className="text-primary/40 text-lg">|</div>
                        <div className="text-center">
                          <span className="text-2xl font-bold text-white">{pkg.pricing.bdt}</span>
                          <span className="text-primary/80 text-xs ml-1 font-medium">BDT</span>
                        </div>
                      </div>
                    </div>
                  </div>

        {/* Features List - Compact */}
        <div className="mb-6">
          <ul className="space-y-3">
            {pkg.features.map((feature) => (
              <li key={feature.id} className="flex items-start gap-3">
                <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                  feature.highlight 
                    ? 'bg-primary/25 text-primary shadow-md shadow-primary/20' 
                    : 'bg-primary/15 text-primary/80'
                }`}>
                  <Check className="w-3 h-3" />
                </div>
                <span className={`text-sm leading-relaxed ${
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

        {/* Package Info - Compact */}
        <div className="space-y-2 text-xs text-primary/80 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary/70" />
            <span className="font-medium">Delivery: {pkg.deliveryTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-primary/70" />
            <span className="font-medium">{pkg.paymentTerms}</span>
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10">
                 {/* CTA Button */}
         <MagneticWrapper strength={0.2} attractArea={80} className="w-full">
           <button
             onClick={() => {
               // Track package selection before navigation
               trackPackageSelection({
                 id: pkg.id,
                 name: pkg.name,
                 price: pkg.pricing.usd,
                 features: pkg.features.map(feature => feature.text),
                 serviceType: 'web_development'
               });
               router.push('/start-project');
             }}
             className={`w-full py-3 px-6 rounded-xl font-semibold text-base transition-all duration-300 ${
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
