// ============================================================================
// SERVICES API HOOKS - SWR hooks for services-related data
// ============================================================================

import useSWR from 'swr';
import { apiClient } from '@/lib/api';
import type { ServicePageData, ServicePackage, ServiceCategory, ApiResponse, NavigationServicesResponse, NavigationCategory, ApiNavigationCategory } from '@/types';

// ============================================================================
// SERVICES HOOKS
// ============================================================================

export function useAllServices() {
  return useSWR<ApiResponse<Array<{
    id: string;
    slug: string;
    title: string;
    subtitle: string;
  }>>>(
    '/services',
    () => apiClient.get('/services'),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute
    }
  );
}

export function useServicePage(slug: string) {
  return useSWR<ApiResponse<ServicePageData>>(
    slug ? `/services/${slug}` : null,
    () => apiClient.get(`/services/${slug}`),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute
    }
  );
}

export function useServicePackages() {
  return useSWR<ApiResponse<ServicePackage[]>>(
    '/services/packages',
    () => apiClient.get('/services/packages'),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute
    }
  );
}

export function useServiceCategories() {
  return useSWR<ApiResponse<ServiceCategory[]>>(
    '/services/categories',
    () => apiClient.get('/services/categories'),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute
    }
  );
}

// ============================================================================
// SERVICES NAVIGATION HOOK (for navigation submenu)
// ============================================================================

// Helper function to transform API data
function transformNavigationData(apiData: ApiNavigationCategory[]): NavigationCategory[] {
  return apiData.map((category) => ({
    id: category.id,
    title: category.title,
    items: category.items.map((service) => ({
      id: service.id,
      title: service.title,
      href: `/services/${service.slug}`, // Convert slug to href
    })),
  }));
}

export function useServicesNavigation() {
  const { data, error, isLoading, mutate } = useSWR<NavigationServicesResponse>(
    '/public/services/navigation',
    () => apiClient.get('/public/services/navigation'),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 300000, // 5 minutes (navigation doesn't change often)
    }
  );

  return {
    data: data?.data ? transformNavigationData(data.data) : [],
    error,
    isLoading,
    mutate,
  };
}

