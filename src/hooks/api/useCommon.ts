// ============================================================================
// COMMON API HOOKS - SWR hooks for common application data
// ============================================================================

import useSWR from 'swr';
import { apiClient } from '@/lib/api';
import type { SocialMediaLink, ApiResponse } from '@/types/common';

// ============================================================================
// COMMON HOOKS
// ============================================================================

export function useTrustedCustomers() {
  return useSWR<ApiResponse<string[]>>(
    '/public/clients/logos',
    () => apiClient.get('/public/clients/logos'),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 300000, // 5 minutes (trusted customers don't change often)
    }
  );
}

export function useSocialMedia() {
  return useSWR<ApiResponse<SocialMediaLink[]>>(
    '/public/social-media',
    () => apiClient.get('/public/social-media'),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 300000, // 5 minutes (social media links don't change often)
    }
  );
}

