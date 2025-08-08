"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Compass } from "lucide-react";
import ErrorPageLayout from "@/components/ui/ErrorPageLayout";
import ErrorPageActions from "@/components/ui/ErrorPageActions";

export default function NotFound() {
  return (
    <ErrorPageLayout>
      <div className="text-center">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
            404
          </h1>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
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
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Find Your Way</h3>
              <p className="text-sm text-gray-600">
                Use our navigation to explore our creative universe
              </p>
            </motion.div>

            {/* Map Pin */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Popular Pages</h3>
              <p className="text-sm text-gray-600">
                Check out our most visited destinations
              </p>
            </motion.div>

            {/* Search */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Search</h3>
              <p className="text-sm text-gray-600">
                Find what you&rsquo;re looking for with our search
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <ErrorPageActions 
          showBackButton={true}
          showHomeButton={true}
          showRefreshButton={false}
        />

        {/* Fun Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <p className="text-sm text-gray-500 italic">
            &ldquo;Not all those who wander are lost, but you might be! 😄&rdquo;
          </p>
        </motion.div>
      </div>
    </ErrorPageLayout>
  );
}
