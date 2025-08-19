"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote, Star, Heart } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface TestimonialSectionProps {
  className?: string;
}

export function TestimonialSection({ className }: TestimonialSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

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

  const testimonials = [
    {
      quote: "Wafipix transformed our brand identity completely. Their creative vision and attention to detail exceeded all our expectations. Our conversion rates increased by 300% within the first month!",
      author: "Sarah Johnson",
      position: "CEO, TechFlow Solutions",
      company: "TechFlow",
      rating: 5,
      avatar: "SJ",
      color: "from-primary to-primary/80",
    },
    {
      quote: "Working with Wafipix was like having a creative partner who truly understood our business. They didn't just design a website – they crafted an experience that our customers love.",
      author: "Michael Chen",
      position: "Founder, GreenEats",
      company: "GreenEats",
      rating: 5,
      avatar: "MC",
      color: "from-primary/80 to-primary/60",
    },
    {
      quote: "The team at Wafipix delivered beyond our wildest dreams. Their strategic approach to design and development resulted in a digital presence that perfectly represents our brand values.",
      author: "Emma Rodriguez",
      position: "Marketing Director, LuxeStyle",
      company: "LuxeStyle",
      rating: 5,
      avatar: "ER",
      color: "from-primary/60 to-primary/40",
    },
    {
      quote: "Incredible attention to detail and innovative solutions. Wafipix didn't just meet our requirements – they anticipated our needs and delivered a solution that exceeded expectations.",
      author: "David Kim",
      position: "CTO, InnovateTech",
      company: "InnovateTech",
      rating: 5,
      avatar: "DK",
      color: "from-primary/40 to-primary/20",
    },
    {
      quote: "The transformation was remarkable. From concept to launch, Wafipix guided us through every step with professionalism and creativity. Our customers can't stop raving about the new experience.",
      author: "Lisa Thompson",
      position: "VP Marketing, GrowthCo",
      company: "GrowthCo",
      rating: 5,
      avatar: "LT",
      color: "from-primary/20 to-primary/10",
    },
  ];

  return (
    <section ref={containerRef} className={`py-20 md:py-28 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <SectionHeader
          badgeIcon={Heart}
          badgeText="Client Success Stories"
          title="What Our Clients"
          subtitle="Say About Us"
          description="Don't just take our word for it – hear from the amazing businesses we've helped transform their digital presence."
          className="mb-20"
        />

        {/* Sticky Testimonials Container */}
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-to-r from-primary/5 to-primary/5 rounded-full blur-3xl" />
          </div>

          {/* Testimonials Stack */}
          <div className="relative space-y-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="sticky top-20 md:top-32"
              >
                <motion.div
                  style={{
                    transformOrigin: "center",
                  }}
                  className="max-w-4xl mx-auto"
                >
                  <motion.div
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative"
                  >
                    {/* Professional Card Design */}
                    <div className="relative p-8 md:p-10 rounded-3xl bg-card/95 backdrop-blur-xl border border-border/50 shadow-2xl shadow-black/10 dark:shadow-black/30 overflow-hidden">
                      
                      {/* Subtle Background Pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-card/30" />
                      
                      {/* Professional Border Accent */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.color} opacity-80`} />

                      {/* Decorative Quote Icon */}
                      <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                        <Quote className="w-16 h-16 text-primary" />
                      </div>

                      <div className="relative z-10">
                        {/* Rating with Professional Styling */}
                        <motion.div 
                          className="flex items-center gap-1 mb-8"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="ml-2 text-sm font-medium text-primary/80">
                            {testimonial.rating}.0 Rating
                          </span>
                        </motion.div>

                        {/* Professional Quote Styling */}
                        <motion.blockquote 
                          className="text-lg md:text-xl text-white leading-relaxed mb-8 font-medium"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          <span className="text-3xl text-primary/60 mr-2">&ldquo;</span>
                          {testimonial.quote}
                          <span className="text-3xl text-primary/60 ml-2">&rdquo;</span>
                        </motion.blockquote>

                        {/* Professional Author Section */}
                        <motion.div 
                          className="flex items-center gap-4 pt-6 border-t border-border/50"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.4 }}
                        >
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg ring-2 ring-white/20 dark:ring-gray-800/20`}>
                            {testimonial.avatar}
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-white text-lg">
                              {testimonial.author}
                            </div>
                            <div className="text-sm text-primary/80 font-medium">
                              {testimonial.position}
                            </div>
                            <div className="text-xs font-semibold text-primary uppercase tracking-wide">
                              {testimonial.company}
                            </div>
                          </div>
                          {/* Professional Verification Badge */}
                          <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 