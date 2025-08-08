"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { ArrowLeft, Home, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";

interface ErrorPageActionsProps {
  showBackButton?: boolean;
  showHomeButton?: boolean;
  showRefreshButton?: boolean;
  onBack?: () => void;
  onRefresh?: () => void;
  className?: string;
}

export default function ErrorPageActions({
  showBackButton = true,
  showHomeButton = true,
  showRefreshButton = false,
  onBack,
  onRefresh,
  className = "",
}: ErrorPageActionsProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  const handleHome = () => {
    router.push("/");
  };

  const handleRefresh = () => {
    if (onRefresh) {
      onRefresh();
    } else {
      window.location.reload();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${className}`}
    >
      {showBackButton && (
        <Button
          onClick={handleBack}
          variant="outline"
          size="lg"
          className="group bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          Go Back
        </Button>
      )}

      {showHomeButton && (
        <Button
          onClick={handleHome}
          size="lg"
          className="bg-gradient-to-r from-primary to-purple-500 hover:shadow-lg hover:shadow-primary/25 text-white px-8 py-3 transition-all duration-300 transform hover:scale-105"
        >
          <Home className="w-4 h-4 mr-2" />
          Go Home
        </Button>
      )}

      {showRefreshButton && (
        <Button
          onClick={handleRefresh}
          variant="outline"
          size="lg"
          className="group bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300"
        >
          <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
          Refresh
        </Button>
      )}
    </motion.div>
  );
}
