"use client";

import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

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
          {/* Error Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/30">
              <AlertTriangle className="w-12 h-12 text-primary" />
            </div>
          </motion.div>

          {/* Error Number */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6"
          >
            Oops!
          </motion.h1>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-4"
          >
            Something Went Wrong
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Don&rsquo;t worry, our team has been notified and is working to fix this issue.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <button
              onClick={reset}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
            
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-3 bg-transparent text-primary border-2 border-primary/50 rounded-xl hover:border-primary hover:bg-primary/10 transition-all duration-300 font-semibold"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </motion.div>

          {/* Development Error Details */}
          {process.env.NODE_ENV === 'development' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8"
            >
              <details className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border max-w-lg mx-auto">
                <summary className="cursor-pointer font-medium text-foreground text-sm">
                  Error Details (Development)
                </summary>
                <div className="text-left mt-3 text-xs text-muted-foreground">
                  <p className="mb-2"><strong>Message:</strong> {error.message}</p>
                  {error.digest && (
                    <p className="mb-2"><strong>Digest:</strong> {error.digest}</p>
                  )}
                </div>
              </details>
            </motion.div>
          )}

          {/* Fun Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8"
          >
            <p className="text-sm text-muted-foreground italic">
              &ldquo;Even the best code has bugs, but we&rsquo;re on it! 🐛✨&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
