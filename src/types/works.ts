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
  gallery: WorkImage[];
  tags: string[];
  client: string;
  projectDate: string;
  duration: string;
  tools: string[];
  challenge: string;
  solution: string;
  result: string;
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

export interface WorkImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  type: 'image' | 'video';
  thumbnail?: string;
}

export interface WorkGallery {
  workId: string;
  images: WorkImage[];
  totalImages: number;
  categories: string[];
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

export interface WorkGalleryResponse {
  data: WorkGallery;
}
