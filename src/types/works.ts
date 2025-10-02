// ============================================================================
// WORKS TYPES - Based on API Response Structure
// ============================================================================

// Service Filter Types
export interface ServiceFilter {
  id: string;
  title: string;
}

export interface ServiceFiltersResponse {
  data: ServiceFilter[];
}

// Work Types
export interface WorkListPublicResponse {
  id: string;
  title: string;
  slug: string;
  serviceTitle: string;
  coverVideo: string | null;
  coverImage: string | null;
  profileVideo: string | null;
  profileImage: string | null;
}

// Pagination Types (Spring Boot Page structure)
export interface Page<T> {
  content: T[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

// API Response Types
export interface WorksResponse {
  data: Page<WorkListPublicResponse>;
}

// Frontend Work Card Type (processed for display)
export interface WorkCard {
  id: string;
  title: string;
  slug: string;
  serviceTitle: string;
  coverMedia: {
    url: string;
    type: 'video' | 'image';
  } | null;
  profileMedia: {
    url: string;
    type: 'video' | 'image';
  } | null;
}

// Filter State
export interface WorksFilterState {
  serviceId: string | null; // null means "All"
  page: number;
  size: number;
}

// Hook Return Types
export interface UseWorksReturn {
  works: WorkCard[];
  isLoading: boolean;
  error: Error | null;
  hasMore: boolean;
  loadMore: () => void;
  filterByService: (serviceId: string | null) => void;
  currentFilter: WorksFilterState;
}

export interface UseServiceFiltersReturn {
  services: ServiceFilter[];
  isLoading: boolean;
  error: Error | null;
}

