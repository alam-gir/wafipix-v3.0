'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Palette, 
  Brush, 
  Package, 
  Video, 
  Smartphone, 
  Zap, 
  Play,
  ArrowRight,
  Star,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { useNavigation } from '@/hooks/useNavigation';
import { navigation, ServiceCategory, SubMenuItem } from '@/lib/navigation';
import PageViewTracker from "@/components/analytics/PageViewTracker";

export default function ServicesPageClient() {
  const { activeSubmenuData } = useNavigation();
  // Use the navigation data directly since we need all services, not just active ones
  const services = navigation.find(item => item.id === 'services')?.submenu || [];

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {
      Palette,
      Brush,
      Package,
      Video,
      Smartphone,
      Zap,
      Play
    };
    return iconMap[iconName] || Sparkles;
  };

  return (
    <div className="min-h-screen bg-background">
      <PageViewTracker 
        pageTitle="Our Services - Wafipix"
        pageType="services"
        contentName="Services Page"
        contentCategory="Service Listings"
      />
      
      {/* Services Grid */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {services.map((category: ServiceCategory, categoryIndex: number) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-20 last:mb-0"
            >
              {/* Category Header */}
              <div className="text-center mb-16">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Sparkles className="w-10 h-10 text-primary" />
                </motion.div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  {category.title}
                </h2>
                <p className="text-xl text-primary/80 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((service: SubMenuItem, serviceIndex: number) => {
                  const IconComponent = getIconComponent(service.icon || 'Sparkles');
                  
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <Link href={service.href}>
                        <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 group-hover:border-primary/30 relative">
                          {/* Service Icon */}
                          <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-8 h-8 text-primary-foreground" />
                          </div>
                          
                          {/* Service Title */}
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                            {service.title}
                          </h3>
                          
                          {/* Service Description */}
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {service.description}
                          </p>
                          
                          {/* Arrow Icon */}
                          <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform duration-300">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto">
              We combine creativity with strategy to deliver exceptional results that exceed expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Creative Excellence",
                description: "Award-winning designs that stand out in today's competitive market"
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                description: "Rigorous quality checks ensure every project meets our high standards"
              },
              {
                icon: Sparkles,
                title: "Innovation First",
                description: "Cutting-edge techniques and trends to keep your brand ahead of the curve"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-primary/80">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-xl text-primary/80 mb-8 leading-relaxed">
              Let&apos;s discuss your project and create something amazing together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold rounded-xl hover:from-primary/90 hover:to-primary/70 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
