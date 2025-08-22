// ============================================================================
// API CONFIGURATION - Single source of truth for API settings
// ============================================================================

// Environment-based configuration
export const API_CONFIG = {
  // Base URLs
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080',
  API_PATH: '/api',
  
  // Timeouts
  TIMEOUT: 10000, // 10 seconds
  REQUEST_TIMEOUT: 15000, // 15 seconds for long requests
  
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

// API client selection - Use mock APIs in both development and production for now
// When backend is ready, set NEXT_PUBLIC_USE_REAL_API=true to switch to real APIs
export const isUsingMockApi = !process.env.NEXT_PUBLIC_USE_REAL_API;

// Helper functions
export const getApiUrl = (endpoint: string) => `${API_CONFIG.BASE_URL}${API_CONFIG.API_PATH}${endpoint}`;
export const getMockApiUrl = (endpoint: string) => `mock://${endpoint}`;

// Debug logging
if (process.env.NODE_ENV === 'development') {
  console.log(`🚀 API Mode: ${isUsingMockApi ? 'Mock API' : 'Real API'}`);
  console.log(`🌐 Base URL: ${API_CONFIG.BASE_URL}`);
  console.log(`📡 API Path: ${API_CONFIG.API_PATH}`);
  console.log(`🔧 Use Real API: ${process.env.NEXT_PUBLIC_USE_REAL_API || 'false'}`);
}
