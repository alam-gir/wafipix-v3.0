import React from "react";
import { cn } from "@/lib/utils";
import { Meteors } from "./meteors";

interface MeteorBackgroundWrapperProps {
  children: React.ReactNode;
  className?: string;
  meteorCount?: number;
  enableMeteors?: boolean;
  meteorIntensity?: "low" | "medium" | "high";
}

export function MeteorBackgroundWrapper({
  children,
  className,
  meteorCount = 20,
  enableMeteors = true,
  meteorIntensity = "medium",
}: MeteorBackgroundWrapperProps) {
  const getMeteorCount = () => {
    switch (meteorIntensity) {
      case "low":
        return Math.floor(meteorCount * 0.5);
      case "high":
        return Math.floor(meteorCount * 1.5);
      default:
        return meteorCount;
    }
  };

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Meteor effect */}
      {enableMeteors && (
        <div className="absolute inset-0 pointer-events-none">
          <Meteors number={getMeteorCount()} />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
