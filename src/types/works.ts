// ============================================================================
// WORKS TYPES
// ============================================================================

export interface Work {
  id: string;
  slug: string;
  name: string;
  service: string;
  description: string;
  coverVideoUrl: string;
  coverImageUrl: string;
  profileVideoUrl: string;
  profileImageUrl: string;
  gallery: GalleryBlock[];
  tags: string[];
}

export interface WorkAsCard {
  id: string;
  slug: string;
  name: string;
  service: string;
  coverVideoUrl: string;
  coverImageUrl: string;
  profileVideoUrl: string;
  profileImageUrl: string;
}

export type GalleryBlock = {
  workId: string;
  isMobileGrid: boolean;
  items: {
    url: string;
    type: 'image' | 'video'
  }[]
}

export interface WorksFilters {
  service?: string;
  tags?: string[];
  client?: string;
  year?: number;
  search?: string;
}

// API Response Types
export interface WorksResponse {
  data: Work[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface WorkCardsResponse {
  data: WorkAsCard[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface SingleWorkResponse {
  data: Work;
}
