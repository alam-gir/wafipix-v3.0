"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function StartProjectFeatures() {

  return (
    <section className="py-20 lg:py-36 bg-gradient-to-b from-transparent to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What&apos;s Coming
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A streamlined project initiation platform that will make starting your digital projects 
            as simple as filling out a form.
          </p>
        </motion.div>

        {/* Simple Progress Indicator */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-card/30 rounded-2xl p-8 border border-border/50 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              🚧 Under Development
            </h3>
            <p className="text-muted-foreground mb-6">
              We&apos;re building something amazing for you. This feature will launch soon!
            </p>
            
            <div className="w-full bg-muted rounded-full h-3 mb-4">
              <motion.div
                className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "25%" }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
              />
            </div>
            
            <p className="text-sm text-muted-foreground">
              25% Complete
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
