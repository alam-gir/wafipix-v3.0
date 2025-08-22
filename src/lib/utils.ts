import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import * as LucideIcons from 'lucide-react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to safely render Lucide React icons
export function getLucideIcon(iconName: string | undefined): React.ComponentType<{ className?: string }> | null {
  if (!iconName) return null;
  
  // Check if the icon exists in Lucide Icons
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[iconName];
  
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in Lucide React icons`);
    return null;
  }
  
  return IconComponent;
} 