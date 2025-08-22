// ============================================================================
// WORKS API HOOKS - SWR hooks for works-related data
// ============================================================================

import useSWR from 'swr';
import { apiClient } from '@/lib/api';
import type { Work, WorkAsCard, WorksFilters, ApiResponse, GalleryBlock } from '@/types';

// ============================================================================
// WORKS HOOKS
// ============================================================================

export function useWorks(filters?: WorksFilters) {
  const queryString = filters ? buildQueryString(filters) : '';
  const endpoint = queryString ? `/works?${queryString}` : '/works';
  
  return useSWR<ApiResponse<Work[]>>(
    endpoint,
    () => apiClient.get(endpoint),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute
    }
  );
}

export function useWorksAsCards(filters?: WorksFilters) {
  const queryString = filters ? buildQueryString(filters) : '';
  const endpoint = queryString ? `/works/cards?${queryString}` : '/works/cards';
  
  return useSWR<ApiResponse<WorkAsCard[]>>(
    endpoint,
    () => apiClient.get(endpoint),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute
    }
  );
}

export function useWork(slug: string) {
  return useSWR<ApiResponse<Work>>(
    slug ? `/works/${slug}` : null,
    () => apiClient.get(`/works/${slug}`),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute
    }
  );
}

export function useWorkGallery(workId: string) {
  return useSWR<ApiResponse<GalleryBlock[]>>(
    workId ? `/works/${workId}/gallery` : null,
    () => apiClient.get(`/works/${workId}/gallery`),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute
    }
  );
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function buildQueryString(filters: WorksFilters): string {
  const params = new URLSearchParams();
  
  if (filters.service) params.append('service', filters.service);
  if (filters.client) params.append('client', filters.client);
  if (filters.year) params.append('year', filters.year.toString());
  if (filters.search) params.append('search', filters.search);
  
  if (filters.tags && filters.tags.length > 0) {
    filters.tags.forEach(tag => params.append('tags', tag));
  }
  
  return params.toString();
}

