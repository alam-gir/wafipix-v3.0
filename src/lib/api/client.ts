// ============================================================================
// API CLIENT - Clean HTTP client for making API requests
// ============================================================================

import { API_CONFIG, getApiUrl } from './config';

// ============================================================================
// API CLIENT INTERFACE
// ============================================================================

export interface ApiClient {
  get<T>(endpoint: string): Promise<T>;
  post<T>(endpoint: string, data?: unknown): Promise<T>;
  put<T>(endpoint: string, data?: unknown): Promise<T>;
  patch<T>(endpoint: string, data?: unknown): Promise<T>;
  delete<T>(endpoint: string): Promise<T>;
}

// ============================================================================
// REAL API CLIENT
// ============================================================================

class RealApiClient implements ApiClient {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = getApiUrl(endpoint);
    const controller = new AbortController();
    
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);
    
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
  
  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }
  
  async post<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }
  
  async put<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }
  
  async patch<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }
  
  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

// ============================================================================
// MOCK API CLIENT
// ============================================================================

class MockApiClient implements ApiClient {
  private async simulateDelay(): Promise<void> {
    const delay = Math.random() * 600 + 200; // 200-800ms
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  
  private async simulateError(): Promise<never> {
    if (Math.random() < 0.05) { // 5% chance of error
      throw new Error('Simulated API error');
    }
    throw new Error('Mock API not implemented for this endpoint');
  }
  
  async get<T>(endpoint: string): Promise<T> {
    await this.simulateDelay();
    
    // Route to appropriate mock data based on endpoint
    if (endpoint === '/works') {
      return this.getMockWorks() as T;
    }
    
    if (endpoint === '/works/cards') {
      return this.getMockWorksAsCards() as T;
    }
    
    if (endpoint.startsWith('/works/') && !endpoint.includes('/gallery')) {
      const slug = endpoint.split('/')[2];
      return this.getMockWork(slug) as T;
    }
    
    if (endpoint === '/services') {
      return this.getMockServices() as T;
    }
    
    if (endpoint.startsWith('/services/')) {
      const slug = endpoint.split('/')[2];
      return this.getMockServicePage(slug) as T;
    }
    
    if (endpoint === '/services/packages') {
      return this.getMockServicePackages() as T;
    }
    
    if (endpoint === '/services/categories') {
      return this.getMockServiceCategories() as T;
    }
    
    if (endpoint === '/services/navigation') {
      return this.getMockServicesNavigation() as T;
    }
    
    if (endpoint === '/common/trusted-customers') {
      return this.getMockTrustedCustomers() as T;
    }
    
    if (endpoint === '/common/social-media') {
      return this.getMockSocialMedia() as T;
    }
    
    return this.simulateError();
  }
  
  async post<T>(endpoint: string, data?: unknown): Promise<T> {
    await this.simulateDelay();
    return { success: true, data } as T;
  }
  
  async put<T>(endpoint: string, data?: unknown): Promise<T> {
    await this.simulateDelay();
    return { success: true, data } as T;
  }
  
  async patch<T>(endpoint: string, data?: unknown): Promise<T> {
    await this.simulateDelay();
    return { success: true, data } as T;
  }
  
  async delete<T>(endpoint: string): Promise<T> {
    await this.simulateDelay();
    return { success: true } as T;
  }
  
  // Mock data methods
  private async getMockWorks() {
    const { works } = await import('../data/works');
    return {
      data: works,
      message: 'Success',
      success: true,
      timestamp: new Date().toISOString(),
    };
  }
  
  private async getMockWorksAsCards() {
    const { works } = await import('../data/works');
    const worksAsCards = works.map(work => ({
      id: work.id,
      slug: work.slug,
      name: work.name,
      service: work.service,
      coverVideoUrl: work.coverVideoUrl,
      coverImageUrl: work.coverImageUrl,
      profileVideoUrl: work.profileVideoUrl,
      profileImageUrl: work.profileImageUrl,
    }));
    
    return {
      data: worksAsCards,
      message: 'Success',
      success: true,
      timestamp: new Date().toISOString(),
    };
  }
  
  private async getMockWork(slug: string) {
    const { findWorkBySlug } = await import('../data/works');
    const work = findWorkBySlug(slug);
    
    if (!work) {
      throw new Error('Work not found');
    }
    
    return {
      data: work,
      message: 'Success',
      success: true,
      timestamp: new Date().toISOString(),
    };
  }
  
  private async getMockServices() {
    const { getAllServices } = await import('../data/services');
    return {
      data: getAllServices(),
      message: 'Success',
      success: true,
      timestamp: new Date().toISOString(),
    };
  }
  
  private async getMockServicePage(slug: string) {
    const { getServicePageData } = await import('../data/services');
    return {
      data: getServicePageData(slug),
      message: 'Success',
      success: true,
      timestamp: new Date().toISOString(),
    };
  }
  
  private async getMockServicePackages() {
    const { servicePackages } = await import('../data/services');
    return {
      data: servicePackages,
      message: 'Success',
      success: true,
      timestamp: new Date().toISOString(),
    };
  }
  
  private async getMockServiceCategories() {
    const { serviceCategories } = await import('../data/services');
    return {
      data: serviceCategories,
      message: 'Success',
      success: true,
      timestamp: new Date().toISOString(),
    };
  }
  
  private async getMockServicesNavigation() {
    const { servicesNavigation } = await import('../data/services');
    return {
      data: servicesNavigation,
      message: 'Success',
      success: true,
      timestamp: new Date().toISOString(),
    };
  }
  
  private async getMockTrustedCustomers() {
    const { trustedCustomers } = await import('../data/common');
    return {
      data: trustedCustomers,
      message: 'Success',
      success: true,
      timestamp: new Date().toISOString(),
    };
  }
  
  private async getMockSocialMedia() {
    const { socialMediaLinks } = await import('../data/common');
    return {
      data: socialMediaLinks,
      message: 'Success',
      success: true,
      timestamp: new Date().toISOString(),
    };
  }
}

// ============================================================================
// EXPORT ACTIVE CLIENT
// ============================================================================

import { isUsingMockApi } from './config';

export const apiClient: ApiClient = isUsingMockApi ? new MockApiClient() : new RealApiClient();

// Export individual clients for testing
export const realApiClient = new RealApiClient();
export const mockApiClient = new MockApiClient();
