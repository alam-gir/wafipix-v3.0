"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Bug, Zap, Shield } from "lucide-react";
import ErrorPageLayout from "@/components/ui/ErrorPageLayout";
import ErrorPageActions from "@/components/ui/ErrorPageActions";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <ErrorPageLayout>
      <div className="text-center">
        {/* Error Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Oops!
          </h1>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Something Went Wrong
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Don&rsquo;t worry, our team of digital wizards has been notified and is working 
          their magic to fix this issue. In the meantime, let&rsquo;s get you back on track.
        </motion.p>

        {/* Error Details */}
        {process.env.NODE_ENV === 'development' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8"
          >
            <details className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg max-w-2xl mx-auto">
              <summary className="cursor-pointer font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Bug className="w-5 h-5 text-red-500" />
                Error Details (Development)
              </summary>
              <div className="text-left">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Message:</strong> {error.message}
                </p>
                {error.digest && (
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Digest:</strong> {error.digest}
                  </p>
                )}
                <p className="text-sm text-gray-700">
                  <strong>Stack:</strong>
                </p>
                <pre className="text-xs text-gray-600 bg-gray-100 p-3 rounded-lg overflow-x-auto mt-2">
                  {error.stack}
                </pre>
              </div>
            </details>
          </motion.div>
        )}

        {/* Interactive Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {/* Refresh */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Try Again</h3>
              <p className="text-sm text-gray-600">
                Sometimes a fresh start is all you need
              </p>
            </motion.div>

            {/* Support */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Get Support</h3>
              <p className="text-sm text-gray-600">
                Our team is here to help you succeed
              </p>
            </motion.div>

            {/* Bug Report */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bug className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Report Issue</h3>
              <p className="text-sm text-gray-600">
                Help us improve by reporting this bug
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <ErrorPageActions 
          showBackButton={true}
          showHomeButton={true}
          showRefreshButton={true}
          onRefresh={reset}
        />

        {/* Fun Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <p className="text-sm text-gray-500 italic">
            &ldquo;Even the best code has bugs, but we&rsquo;re on it! 🐛✨&rdquo;
          </p>
        </motion.div>
      </div>
    </ErrorPageLayout>
  );
}
