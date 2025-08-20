'use client'

import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Maximize2, 
  FileType, 
  Lightbulb, 
  Layers, 
  Headphones,
  MessageSquare,
  Award,
  Smartphone
} from 'lucide-react';
import { ServicePageData } from '@/types';

interface ServiceFeaturesProps {
  service: ServicePageData;
}

export default function ServiceFeatures({ service }: ServiceFeaturesProps) {
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
      Sparkles,
      Maximize2,
      FileType,
      Lightbulb,
      Layers,
      Headphones,
      MessageSquare,
      Award,
      Smartphone
    };
    return iconMap[iconName] || Sparkles;
  };

  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            Why Choose Us?
          </h2>
          <p className="text-xl text-primary/90 max-w-4xl mx-auto leading-relaxed">
            We combine creativity with expertise to deliver exceptional results that help your brand stand out
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {service.features.map((feature, index) => {
            const IconComponent = getIconComponent(feature.icon);
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-sm border border-border/30 rounded-3xl p-10 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500 hover:scale-105 group-hover:border-primary/40 relative overflow-hidden h-full flex flex-col">
                  {/* Feature Icon */}
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/25 flex-shrink-0">
                    <IconComponent className="w-10 h-10 text-primary-foreground" />
                  </div>

                  {/* Feature Content - Flex grow to fill available space */}
                  <div className="flex-1 flex flex-col">
                    {/* Feature Title */}
                    <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-primary/90 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Feature Description */}
                    <p className="text-lg text-primary/90 leading-relaxed flex-1">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
