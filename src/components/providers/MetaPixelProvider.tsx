'use client';

import { useEffect, createContext, useContext, ReactNode } from 'react';
import { initMetaPixel, getMetaPixel, type MetaPixelConfig } from '@/lib/analytics/meta-pixel';

interface MetaPixelContextType {
  isInitialized: boolean;
  pixelId: string | null;
  isMockMode: boolean;
}

const MetaPixelContext = createContext<MetaPixelContextType>({
  isInitialized: false,
  pixelId: null,
  isMockMode: false,
});

interface MetaPixelProviderProps {
  children: ReactNode;
  config: MetaPixelConfig;
}

export function MetaPixelProvider({ children, config }: MetaPixelProviderProps) {
  useEffect(() => {
    // Initialize Meta Pixel on component mount
    try {
      initMetaPixel(config);
    } catch (error) {
      console.error('Failed to initialize Meta Pixel:', error);
    }
  }, [config]);

  const instance = getMetaPixel();
  const contextValue: MetaPixelContextType = {
    isInitialized: instance?.getInitialized() || false,
    pixelId: instance?.getPixelId() || null,
    isMockMode: instance?.getMockMode() || false,
  };

  return (
    <MetaPixelContext.Provider value={contextValue}>
      {children}
    </MetaPixelContext.Provider>
  );
}

export function useMetaPixel() {
  const context = useContext(MetaPixelContext);
  if (context === undefined) {
    throw new Error('useMetaPixel must be used within a MetaPixelProvider');
  }
  return context;
}

export default MetaPixelProvider;
