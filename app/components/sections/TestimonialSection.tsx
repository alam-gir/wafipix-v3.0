"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote, Star, ArrowRight, ArrowLeft } from "lucide-react";
import { AnimatedBackgroundWrapper } from "@/components/ui/AnimatedBackgroundWrapper";

interface TestimonialSectionProps {
  className?: string;
}

export function TestimonialSection({ className }: TestimonialSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const fadeInVariants = {
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
    },
    {
      quote: "Working with Wafipix was like having a creative partner who truly understood our business. They didn't just design a website – they crafted an experience that our customers love.",
      author: "Michael Chen",
      position: "Founder, GreenEats",
      company: "GreenEats",
      rating: 5,
      avatar: "MC",
    },
    {
      quote: "The team at Wafipix delivered beyond our wildest dreams. Their strategic approach to design and development resulted in a digital presence that perfectly represents our brand values.",
      author: "Emma Rodriguez",
      position: "Marketing Director, LuxeStyle",
      company: "LuxeStyle",
      rating: 5,
      avatar: "ER",
    },
  ];

  return (
    <section ref={containerRef} className={`py-20 md:py-28 relative overflow-hidden ${className}`}>
      <AnimatedBackgroundWrapper
        variant="minimal"
        intensity="subtle"
        enableShapes={true}
        enableGradient={true}
        enableParticles={false}
        className="absolute inset-0"
      >
        <div />
      </AnimatedBackgroundWrapper>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6"
          >
            <Star className="h-4 w-4 text-green-500" />
            <span className="text-sm font-semibold text-green-600">Client Success Stories</span>
          </motion.div>

          <motion.h2
            variants={fadeInVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              What Our Clients
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Say About Us
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInVariants}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
          >
            "Don't just take our word for it – hear from the amazing businesses we've helped transform their digital presence."
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="p-8 rounded-3xl bg-card/60 backdrop-blur-sm border border-border/30 hover:border-primary/40 transition-all duration-500 h-full relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-primary/10">
                {/* Background quote icon */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Quote className="w-24 h-24 text-primary" />
                </div>

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-muted-foreground leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </div>
                      <div className="text-sm font-medium text-primary">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div
            variants={fadeInVariants}
            className="bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5 rounded-3xl p-8 md:p-12 border border-primary/20"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-muted-foreground text-lg">
                We've helped companies of all sizes achieve their digital goals
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "500+", label: "Happy Clients", icon: "😊" },
                { number: "1000+", label: "Projects Completed", icon: "🎯" },
                { number: "99%", label: "Satisfaction Rate", icon: "⭐" },
                { number: "24/7", label: "Support Available", icon: "🛡️" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInVariants}
                  className="text-center group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.div
            variants={fadeInVariants}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's create something amazing together. Your success story starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group px-10 py-4 bg-gradient-to-r from-primary to-purple-500 text-white rounded-2xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 font-semibold text-lg hover:scale-105 flex items-center gap-3">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-10 py-4 bg-transparent text-foreground border-2 border-border rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 font-semibold text-lg flex items-center gap-3">
                <ArrowLeft className="w-5 h-5" />
                View Portfolio
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>4.9/5 Average Rating</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <div className="flex items-center gap-2">
                <span>500+ Success Stories</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 