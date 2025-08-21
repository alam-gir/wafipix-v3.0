"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MessageSquare, 
  ArrowRight, 
  Bell,
  ExternalLink,
  Phone
} from 'lucide-react';
import Link from 'next/link';

export default function StartProjectCTA() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Simple Coming Soon Message */}
          <motion.div
            className="mb-12"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              🚀 Coming Soon
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              We&apos;re working hard to bring you the most intuitive project initiation experience.
            </p>
          </motion.div>

          {/* Simple CTA */}
          <motion.div
            className="mb-12"
            variants={itemVariants}
          >
            <div className="bg-card/30 rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Get Notified When We Launch
              </h3>
              <p className="text-muted-foreground mb-6">
                Join our waitlist and be the first to know when this feature goes live.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                />
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2">
                  <Bell className="w-4 h-4" />
                  Join Waitlist
                </button>
              </div>
            </div>
          </motion.div>

          {/* Simple Alternative */}
          <motion.div
            className="text-center"
            variants={itemVariants}
          >
            <p className="text-lg text-muted-foreground mb-6">
              Need to start a project now?
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-card text-foreground rounded-lg font-medium hover:bg-card/80 border border-border transition-all duration-200 hover:border-primary/30"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
