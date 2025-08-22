"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, Rocket, Sparkles } from "lucide-react";
import ErrorPageLayout from "./ErrorPageLayout";
import ErrorPageActions from "./ErrorPageActions";

interface ComingSoonPageProps {
  pageName?: string;
  description?: string;
  estimatedDate?: string;
}

export default function ComingSoonPage({ 
  pageName = "This Page",
  description = "We&apos;re crafting something amazing for you",
  estimatedDate = "Coming Soon"
}: ComingSoonPageProps) {
  return (
    <ErrorPageLayout>
      <div className="text-center">
        {/* Coming Soon Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            Coming Soon
          </h1>
        </motion.div>

        {/* Page Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          {pageName}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        {/* Estimated Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-200 shadow-lg">
            <Calendar className="w-6 h-6 text-purple-600" />
            <span className="text-lg font-semibold text-gray-900">{estimatedDate}</span>
          </div>
        </motion.div>

        {/* Interactive Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {/* Development */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">In Development</h3>
              <p className="text-sm text-gray-600">
                Our team is working hard to bring this to life
              </p>
            </motion.div>

            {/* Innovation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">
                We&apos;re pushing the boundaries of what&apos;s possible
              </p>
            </motion.div>

            {/* Quality */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality First</h3>
              <p className="text-sm text-gray-600">
                We won&apos;t launch until it&apos;s perfect for you
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
            &ldquo;Great things take time, but they&rsquo;re worth the wait! 🚀✨&rdquo;
          </p>
        </motion.div>
      </div>
    </ErrorPageLayout>
  );
}
