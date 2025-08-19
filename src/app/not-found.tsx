"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Compass, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
      {/* Meteor Background */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              404
            </h1>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Page Not Found
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Oops! It looks like you&rsquo;ve wandered into uncharted digital territory. 
            Don&rsquo;t worry, even the best explorers get lost sometimes.
          </motion.p>

          {/* Interactive Elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {/* Compass */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/60 to-primary/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Compass className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Find Your Way</h3>
                <p className="text-sm text-muted-foreground">
                  Use our navigation to explore our creative universe
                </p>
              </motion.div>

              {/* Map Pin */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/50 to-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Popular Pages</h3>
                <p className="text-sm text-muted-foreground">
                  Check out our most visited destinations
                </p>
              </motion.div>

              {/* Search */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/40 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Search</h3>
                <p className="text-sm text-muted-foreground">
                  Find what you&rsquo;re looking for with our search
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-6 py-3 bg-transparent text-primary border-2 border-primary/50 rounded-xl hover:border-primary hover:bg-primary/10 transition-all duration-300 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </motion.div>

          {/* Fun Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8"
          >
            <p className="text-sm text-muted-foreground italic">
              &ldquo;Not all those who wander are lost, but you might be! 😄&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
