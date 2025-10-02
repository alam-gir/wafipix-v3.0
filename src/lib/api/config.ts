// ============================================================================
// API CONFIGURATION - Single source of truth for API settings
// ============================================================================

// Environment-based configuration
export const API_CONFIG = {
  // Base URLs
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080',
  API_PATH: '/v3',
  
  // Timeouts
  TIMEOUT: 30000, // 30 seconds
  REQUEST_TIMEOUT: 45000, // 45 seconds for long requests
  
  // Retry settings
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
  
  // Cache settings
  CACHE_TTL: {
    WORKS: 5 * 60 * 1000,      // 5 minutes
    SERVICES: 10 * 60 * 1000,  // 10 minutes
    COMMON: 15 * 60 * 1000,    // 15 minutes
    STATIC: 60 * 60 * 1000,    // 1 hour
  },
  
  // Pagination defaults
  PAGINATION: {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 12,
    MAX_LIMIT: 100,
  },
} as const;

// Helper functions
export const getApiUrl = (endpoint: string) => `${API_CONFIG.BASE_URL}${API_CONFIG.API_PATH}${endpoint}`;

// Configuration loaded successfully
