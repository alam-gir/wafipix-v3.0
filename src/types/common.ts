// ============================================================================
// COMMON TYPES
// ============================================================================

export interface TrustedCustomer {
  logo: string;
}

export interface SocialMediaLink {
  name: string;
  url: string;
}

// API Base Response Wrapper
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
  timestamp: string;
}

// Pagination Types
export interface PaginationParams {
  page: number;
  limit: number;
  total?: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Error Types
export interface ApiError {
  message: string;
  code: string;
  status: number;
  details?: Record<string, unknown>;
}

export interface ApiErrorResponse {
  error: ApiError;
  success: false;
  timestamp: string;
}

// Loading States
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
  isRefreshing?: boolean;
}

// Filter Types
export interface BaseFilter {
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// Media Types
export interface MediaAsset {
  id: string;
  url: string;
  type: 'image' | 'video';
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
  size?: number;
  format?: string;
}

// SEO Types
export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
}

// Contact Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
  phone?: string;
  website?: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  formId?: string;
}

