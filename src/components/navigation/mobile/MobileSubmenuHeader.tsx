import { X } from 'lucide-react';

interface MobileSubmenuHeaderProps {
  onClose: () => void;
}

export function MobileSubmenuHeader({ onClose }: MobileSubmenuHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="text-center flex-1">
        <h2 className="text-base font-bold text-foreground">
          Our Services
        </h2>
        <p className="text-xs text-muted-foreground">
          Discover our creative solutions
        </p>
      </div>
      <button
        onClick={onClose}
        className="p-2 rounded-lg hover:bg-accent/40 transition-colors"
      >
        <X className="w-4 h-4 text-muted-foreground" />
      </button>
    </div>
  );
} 