// ============================================================================
// TYPES INDEX - Re-exports all type definitions
// ============================================================================

// API Response types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  timestamp: string;
}

// Re-export domain-specific types
export * from './services';
export * from './works';

