// ============================================================================
// WORKS API HOOKS
// ============================================================================

import { useState, useCallback, useEffect } from 'react';
import { apiClient } from '@/lib/api';
import type { 
  ServiceFiltersResponse, 
  WorksResponse, 
  WorkListPublicResponse, 
  WorkCard, 
  ServiceFilter,
  WorksFilterState,
  UseWorksReturn,
  UseServiceFiltersReturn
} from '@/types/works';

// ============================================================================
// SERVICE FILTERS HOOK
// ============================================================================

export function useServiceFilters(): UseServiceFiltersReturn {
  const [services, setServices] = useState<ServiceFilter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchServices = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response: ServiceFiltersResponse = await apiClient.get('/public/services/filter');
      setServices(response.data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch services'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch on mount
  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  return {
    services,
    isLoading,
    error,
  };
}

// ============================================================================
// WORKS HOOK WITH PAGINATION AND FILTERING
// ============================================================================

export function useWorks(): UseWorksReturn {
  const [works, setWorks] = useState<WorkCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [currentFilter, setCurrentFilter] = useState<WorksFilterState>({
    serviceId: null,
    page: 0,
    size: 6,
  });

  // Transform API response to WorkCard format
  const transformWorkData = useCallback((work: WorkListPublicResponse): WorkCard => {
    // Prioritize video over image for cover media
    const coverMedia = work.coverVideo 
      ? { url: work.coverVideo, type: 'video' as const }
      : work.coverImage 
      ? { url: work.coverImage, type: 'image' as const }
      : null;

    // Prioritize video over image for profile media
    const profileMedia = work.profileVideo 
      ? { url: work.profileVideo, type: 'video' as const }
      : work.profileImage 
      ? { url: work.profileImage, type: 'image' as const }
      : null;

    return {
      id: work.id,
      title: work.title,
      slug: work.slug,
      serviceTitle: work.serviceTitle,
      coverMedia,
      profileMedia,
    };
  }, []);

  // Fetch works with current filter
  const fetchWorks = useCallback(async (filter: WorksFilterState, append = false) => {
    try {
      setIsLoading(true);
      setError(null);

      // Build query parameters
      const params = new URLSearchParams({
        page: filter.page.toString(),
        size: filter.size.toString(),
      });

      if (filter.serviceId) {
        params.append('serviceId', filter.serviceId);
      }

      const response: WorksResponse = await apiClient.get(`/public/works?${params.toString()}`);
      const transformedWorks = response.data.content.map(transformWorkData);

      if (append) {
        setWorks(prev => [...prev, ...transformedWorks]);
      } else {
        setWorks(transformedWorks);
      }

      setHasMore(!response.data.last);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch works'));
    } finally {
      setIsLoading(false);
    }
  }, [transformWorkData]);

  // Load more works (pagination)
  const loadMore = useCallback(() => {
    if (!isLoading && hasMore) {
      const nextPage = {
        ...currentFilter,
        page: currentFilter.page + 1,
      };
      setCurrentFilter(nextPage);
      fetchWorks(nextPage, true);
    }
  }, [isLoading, hasMore, currentFilter, fetchWorks]);

  // Filter by service
  const filterByService = useCallback((serviceId: string | null) => {
    const newFilter = {
      serviceId,
      page: 0,
      size: 6,
    };
    setCurrentFilter(newFilter);
    setWorks([]); // Clear existing works
    fetchWorks(newFilter, false);
  }, [fetchWorks]);

  // Initial load only
  useEffect(() => {
    const initialFilter = {
      serviceId: null,
      page: 0,
      size: 6,
    };
    fetchWorks(initialFilter, false);
  }, [fetchWorks]); // Only run once on mount

  return {
    works,
    isLoading,
    error,
    hasMore,
    loadMore,
    filterByService,
    currentFilter,
  };
}
