"use client";

import { motion } from "framer-motion";
import { Calendar, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Let's Create
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? We're here to turn your vision into reality. 
            Let's start the conversation that will change everything.
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
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
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
            <div className="flex flex-col items-center text-white/80">
              <Phone className="w-8 h-8 mb-3 text-purple-400" />
              <p className="font-semibold">Call Us</p>
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center text-white/80">
              <Mail className="w-8 h-8 mb-3 text-purple-400" />
              <p className="font-semibold">Email Us</p>
              <p className="text-sm">hello@wafipix.com</p>
            </div>
            <div className="flex flex-col items-center text-white/80">
              <MapPin className="w-8 h-8 mb-3 text-purple-400" />
              <p className="font-semibold">Visit Us</p>
              <p className="text-sm">San Francisco, CA</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 