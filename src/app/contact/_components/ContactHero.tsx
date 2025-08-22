"use client";

import { motion } from "framer-motion";
import { Calendar, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Let&apos;s Create
            <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? We&apos;re here to turn your vision into reality. 
            Let&apos;s start the conversation that will change everything.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
            >
              <a 
                href="https://calendly.com/wafipix1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book a Meeting
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary/50 text-white hover:bg-primary/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
            >
              <a href="#contact-form" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Send Message
              </a>
            </Button>
          </motion.div>

          {/* Quick contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="flex flex-col items-center text-primary/80">
              <Phone className="w-8 h-8 mb-3 text-primary" />
              <p className="font-semibold text-white">Call Us</p>
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center text-primary/80">
              <Mail className="w-8 h-8 mb-3 text-primary" />
              <p className="font-semibold text-white">Email Us</p>
              <p className="text-sm">hello@wafipix.com</p>
            </div>
            <div className="flex flex-col items-center text-primary/80">
              <MapPin className="w-8 h-8 mb-3 text-primary" />
              <p className="font-semibold text-white">Visit Us</p>
              <p className="text-sm">San Francisco, CA</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 