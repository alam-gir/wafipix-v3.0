// ============================================================================
// COMMON API HOOKS - SWR hooks for common application data
// ============================================================================

import useSWR from 'swr';
import { apiClient } from '@/lib/api';
import type { SocialMediaLink, ApiResponse, ReviewResponsePublic, ContactFormRequest, ContactFormResponse } from '@/types/common';

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

// Hero Video Hook
export function useHeroVideo() {
  return useSWR<ApiResponse<string>>(
    '/public/advertisement-videos',
    () => apiClient.get('/public/advertisement-videos'),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 600000, // 10 minutes (hero video doesn't change often)
    }
  );
}

// Reviews Hook
export function useReviews() {
  return useSWR<ApiResponse<ReviewResponsePublic[]>>(
    '/public/reviews',
    () => apiClient.get('/public/reviews'),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 300000, // 5 minutes (reviews don't change often)
    }
  );
}

// Contact Form Hook
export function useContactForm() {
  const submitContactForm = async (data: ContactFormRequest): Promise<ApiResponse<ContactFormResponse>> => {
    return apiClient.post('/public/contacts', data, { timeout: 45000 }); // 45 seconds
  };

  return {
    submitContactForm,
  };
}

