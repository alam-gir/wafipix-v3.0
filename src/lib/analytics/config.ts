import { MetaPixelConfig } from './meta-pixel';

/**
 * Meta Pixel Configuration
 * Configure your Meta Pixel ID and settings here
 */
export const metaPixelConfig: MetaPixelConfig = {
  pixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || '',
  enableDebug: process.env.NODE_ENV === 'development',
  enableAutomaticEvents: true,
};

/**
 * Validate Meta Pixel configuration
 */
export function validateMetaPixelConfig(): boolean {
  if (!metaPixelConfig.pixelId) {
    console.warn('Meta Pixel ID not configured. Set NEXT_PUBLIC_META_PIXEL_ID environment variable.');
    return false;
  }
  return true;
}

/**
 * Get Meta Pixel configuration for current environment
 */
export function getMetaPixelConfig(): MetaPixelConfig {
  return {
    ...metaPixelConfig,
    enableDebug: process.env.NODE_ENV === 'development',
  };
}

/**
 * Environment-specific configurations
 */
export const analyticsConfig = {
  development: {
    enableDebug: true,
    enableAutomaticEvents: true,
  },
  production: {
    enableDebug: false,
    enableAutomaticEvents: true,
  },
  test: {
    enableDebug: false,
    enableAutomaticEvents: false,
  },
};

export default metaPixelConfig;
