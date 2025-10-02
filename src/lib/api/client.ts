// ============================================================================
// API CLIENT - Clean HTTP client for making API requests
// ============================================================================

import { API_CONFIG, getApiUrl } from './config';

// ============================================================================
// API CLIENT INTERFACE
// ============================================================================

export interface ApiClientInterface {
  get<T>(endpoint: string, options?: { timeout?: number }): Promise<T>;
  post<T>(endpoint: string, data?: unknown, options?: { timeout?: number }): Promise<T>;
  put<T>(endpoint: string, data?: unknown, options?: { timeout?: number }): Promise<T>;
  patch<T>(endpoint: string, data?: unknown, options?: { timeout?: number }): Promise<T>;
  delete<T>(endpoint: string, options?: { timeout?: number }): Promise<T>;
}

// ============================================================================
// API CLIENT
// ============================================================================

class ApiClient implements ApiClientInterface {
  private async request<T>(
    endpoint: string,
    options: RequestInit & { timeout?: number } = {}
  ): Promise<T> {
    const url = getApiUrl(endpoint);
    const controller = new AbortController();
    const timeout = options.timeout || API_CONFIG.TIMEOUT;
    
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error('Request timeout');
      }
      
      throw error;
    }
  }
  
  async get<T>(endpoint: string, options?: { timeout?: number }): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET', ...options });
  }
  
  async post<T>(endpoint: string, data?: unknown, options?: { timeout?: number }): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
  }
  
  async put<T>(endpoint: string, data?: unknown, options?: { timeout?: number }): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
  }
  
  async patch<T>(endpoint: string, data?: unknown, options?: { timeout?: number }): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
  }
  
  async delete<T>(endpoint: string, options?: { timeout?: number }): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE', ...options });
  }
}

export const apiClient = new ApiClient();
