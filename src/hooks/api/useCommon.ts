// ============================================================================
// COMMON API HOOKS - SWR hooks for common application data
// ============================================================================

import useSWR from 'swr';
import { apiClient } from '@/lib/api';
import type { TrustedCustomer, SocialMediaLink, ApiResponse } from '@/types/common';
import type { CompanyInfo } from '@/lib/data/common';

// ============================================================================
// COMMON HOOKS
// ============================================================================

export function useTrustedCustomers() {
  return useSWR<ApiResponse<TrustedCustomer[]>>(
    '/common/trusted-customers',
    () => apiClient.get('/common/trusted-customers'),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 300000, // 5 minutes (trusted customers don't change often)
    }
  );
}

export function useSocialMedia() {
  return useSWR<ApiResponse<SocialMediaLink[]>>(
    '/common/social-media',
    () => apiClient.get('/common/social-media'),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 300000, // 5 minutes (social media links don't change often)
    }
  );
}

export function useCompanyInfo() {
  return useSWR<ApiResponse<CompanyInfo>>(
    '/common/company-info',
    () => apiClient.get('/common/company-info'),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 600000, // 10 minutes (company info doesn't change often)
    }
  );
}

