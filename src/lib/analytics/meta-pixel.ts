// Meta Pixel Analytics Library
// Comprehensive event tracking for Wafipix website

export interface MetaPixelConfig {
  pixelId: string;
  enableDebug?: boolean;
  enableAutomaticEvents?: boolean;
}

export interface BaseEventData {
  event_name: string;
  event_time?: number;
  action_source?: 'website' | 'email' | 'app' | 'phone_call' | 'chat' | 'physical_store' | 'system_generated' | 'other';
  event_source_url?: string;
  user_data?: UserData;
  custom_data?: Record<string, unknown>;
}

export interface UserData {
  em?: string; // Email (hashed)
  ph?: string; // Phone (hashed)
  external_id?: string;
  client_ip_address?: string;
  client_user_agent?: string;
  fbc?: string; // Facebook click ID
  fbp?: string; // Facebook browser ID
}

export interface ContactEventData extends BaseEventData {
  event_name: 'Lead' | 'Contact';
  custom_data: {
    content_name?: string;
    content_category?: string;
    content_type?: string;
    value?: number;
    currency?: string;
    content_id?: string;
    content?: string;
    status?: string;
  };
}

export interface PageViewEventData extends BaseEventData {
  event_name: 'PageView';
  custom_data: {
    page_title?: string;
    page_type?: string;
    page_category?: string;
    content_name?: string;
    content_category?: string;
  };
}

export interface PackageEventData extends BaseEventData {
  event_name: 'InitiateCheckout' | 'AddToCart' | 'ViewContent';
  custom_data: {
    content_name?: string;
    content_category?: string;
    content_type?: string;
    content_id?: string;
    value?: number;
    currency?: string;
    package_name?: string;
    package_price?: number;
    package_features?: string[];
    service_type?: string;
  };
}

export interface ServiceEventData extends BaseEventData {
  event_name: 'ViewContent' | 'Lead';
  custom_data: {
    content_name?: string;
    content_category?: string;
    content_type?: string;
    content_id?: string;
    value?: number;
    currency?: string;
    service_name?: string;
    service_category?: string;
    service_features?: string[];
  };
}

export interface WorkEventData extends BaseEventData {
  event_name: 'ViewContent' | 'Lead';
  custom_data: {
    content_name?: string;
    content_category?: string;
    content_type?: string;
    content_id?: string;
    value?: number;
    currency?: string;
    work_title?: string;
    work_category?: string;
    work_technologies?: string[];
    work_industry?: string;
  };
}

export interface NavigationEventData extends BaseEventData {
  event_name: 'ViewContent' | 'Lead';
  custom_data: {
    content_name?: string;
    content_category?: string;
    content_type?: string;
    content_id?: string;
    navigation_item?: string;
    navigation_category?: string;
    navigation_action?: string;
  };
}

export interface FormEventData extends BaseEventData {
  event_name: 'Lead' | 'CompleteRegistration';
  custom_data: {
    content_name?: string;
    content_category?: string;
    content_type?: string;
    content_id?: string;
    value?: number;
    currency?: string;
    form_name?: string;
    form_type?: string;
    form_fields?: string[];
    status?: string;
  };
}

export type MetaPixelEventData = 
  | ContactEventData 
  | PageViewEventData 
  | PackageEventData 
  | ServiceEventData 
  | WorkEventData 
  | NavigationEventData 
  | FormEventData;

class MetaPixelAnalytics {
  private pixelId: string;
  private isInitialized: boolean = false;
  private enableDebug: boolean;
  private enableAutomaticEvents: boolean;
  private queue: MetaPixelEventData[] = [];
  private isProcessing: boolean = false;
  private mockMode: boolean = false;

  constructor(config: MetaPixelConfig) {
    this.pixelId = config.pixelId;
    this.enableDebug = config.enableDebug || false;
    this.enableAutomaticEvents = config.enableAutomaticEvents || true;
  }

  /**
   * Initialize Meta Pixel
   */
  public init(): void {
    if (this.isInitialized) {
      this.log('Meta Pixel already initialized');
      return;
    }

    try {
      // Load Meta Pixel script
      this.loadMetaPixelScript();
      
            // Wait for script to load before proceeding
      this.waitForScriptLoad().then(() => {
        // Check if we're in mock mode (script blocked in development)
        if (typeof window.fbq !== 'function' && process.env.NODE_ENV === 'development') {
          this.mockMode = true;
          this.log('Meta Pixel running in mock mode for development');
        } else {
          // Initialize with pixel ID
          this.callPixel('init', this.pixelId);
        }
        
        // Track initial page view
        this.trackPageView();
        
        // Enable automatic events if configured
        if (this.enableAutomaticEvents) {
          this.enableAutomaticEventTracking();
        }

        this.isInitialized = true;
        this.log('Meta Pixel initialized successfully');
        
        // Process any queued events
        this.processQueue();
      }).catch((error: unknown) => {
        this.log('Failed to wait for script load:', error);
      });
    } catch (error) {
      this.log('Failed to initialize Meta Pixel:', error);
    }
  }

  /**
   * Load Meta Pixel script dynamically
   */
  private loadMetaPixelScript(): void {
    if (typeof window === 'undefined') return;

    // Check if script already exists
    if (typeof window.fbq === 'function') return;

    // Create script element
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    
    // Create noscript fallback
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = `https://www.facebook.com/tr?id=${this.pixelId}&ev=PageView&noscript=1`;
    
    noscript.appendChild(img);
    
    // Append to document
    document.head.appendChild(script);
    document.head.appendChild(noscript);
  }

  /**
   * Wait for Meta Pixel script to load
   */
  private waitForScriptLoad(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined') {
        reject(new Error('Window not available'));
        return;
      }

      // If already loaded, resolve immediately
      if (typeof window.fbq === 'function') {
        resolve();
        return;
      }

      // In development, if script is blocked, resolve after a shorter timeout
      const isDevelopment = process.env.NODE_ENV === 'development';
      const timeout = isDevelopment ? 3000 : 10000;

      // Wait for script to load
      const checkScript = () => {
        if (typeof window.fbq === 'function') {
          this.log('Meta Pixel script loaded');
          resolve();
        } else {
          // Check again in 100ms
          setTimeout(checkScript, 100);
        }
      };

      // Start checking
      checkScript();

      // Timeout after specified time
      setTimeout(() => {
        if (isDevelopment) {
          this.log('Meta Pixel script blocked in development - continuing with mock mode');
          // In development, continue without the script
          resolve();
        } else {
          reject(new Error('Meta Pixel script load timeout'));
        }
      }, timeout);
    });
  }

  /**
   * Call Meta Pixel function
   */
  private callPixel(command: 'init' | 'track' | 'trackCustom', ...args: unknown[]): void {
    if (typeof window === 'undefined') return;
    
    if (this.mockMode) {
      // In mock mode, just log the call
      this.log('Mock Mode - Meta Pixel call:', command, args);
      return;
    }
    
    if (typeof window.fbq === 'function') {
      // Type assertion for fbq call
      (window.fbq as (...args: unknown[]) => void)(command, ...args);
    } else {
      this.log('Meta Pixel not loaded, queuing call:', command, args);
      this.queue.push({ event_name: 'PageView' } as MetaPixelEventData);
    }
  }

  /**
   * Track page view
   */
  public trackPageView(pageData?: Partial<PageViewEventData>): void {
    // Don't track if not initialized
    if (!this.isInitialized) {
      this.log('Meta Pixel not initialized, skipping page view tracking');
      return;
    }

    const eventData: PageViewEventData = {
      event_name: 'PageView',
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: typeof window !== 'undefined' ? window.location.href : undefined,
      custom_data: {
        page_title: typeof document !== 'undefined' ? document.title : undefined,
        page_type: 'website',
        page_category: 'business',
        content_name: 'Wafipix Website',
        content_category: 'Digital Agency',
        ...pageData?.custom_data
      }
    };

    this.trackEvent(eventData);
  }

  /**
   * Track contact form submission
   */
  public trackContactSubmission(_formData: Partial<ContactFormData>): void {
    // Don't track if not initialized
    if (!this.isInitialized) {
      this.log('Meta Pixel not initialized, skipping contact submission tracking');
      return;
    }

    const eventData: ContactEventData = {
      event_name: 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: typeof window !== 'undefined' ? window.location.href : undefined,
      custom_data: {
        content_name: 'Contact Form Submission',
        content_category: 'Lead Generation',
        content_type: 'form',
        value: 0,
        currency: 'USD',
        content_id: 'contact_form',
        content: 'Contact form submitted',
        status: 'submitted'
      }
    };

    this.trackEvent(eventData);
  }

  /**
   * Track package selection
   */
  public trackPackageSelection(packageData: PackageData): void {
    // Don't track if not initialized
    if (!this.isInitialized) {
      this.log('Meta Pixel not initialized, skipping package selection tracking');
      return;
    }

    const eventData: PackageEventData = {
      event_name: 'InitiateCheckout',
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: typeof window !== 'undefined' ? window.location.href : undefined,
      custom_data: {
        content_name: `Package: ${packageData.name}`,
        content_category: 'Service Package',
        content_type: 'product',
        content_id: packageData.id,
        value: packageData.price || 0,
        currency: 'USD',
        package_name: packageData.name,
        package_price: packageData.price || 0,
        package_features: packageData.features || [],
        service_type: packageData.serviceType || 'web_development'
      }
    };

    this.trackEvent(eventData);
  }

  /**
   * Track service view
   */
  public trackServiceView(serviceData: ServiceData): void {
    const eventData: ServiceEventData = {
      event_name: 'ViewContent',
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: typeof window !== 'undefined' ? window.location.href : undefined,
      custom_data: {
        content_name: serviceData.name,
        content_category: 'Service',
        content_type: 'service',
        content_id: serviceData.id,
        value: 0,
        currency: 'USD',
        service_name: serviceData.name,
        service_category: serviceData.category,
        service_features: serviceData.features || []
      }
    };

    this.trackEvent(eventData);
  }

  /**
   * Track work/portfolio view
   */
  public trackWorkView(workData: WorkData): void {
    const eventData: WorkEventData = {
      event_name: 'ViewContent',
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: typeof window !== 'undefined' ? window.location.href : undefined,
      custom_data: {
        content_name: workData.title,
        content_category: 'Portfolio',
        content_type: 'work',
        content_id: workData.id,
        value: 0,
        currency: 'USD',
        work_title: workData.title,
        work_category: workData.category,
        work_technologies: workData.technologies || [],
        work_industry: workData.industry
      }
    };

    this.trackEvent(eventData);
  }

  /**
   * Track navigation interaction
   */
  public trackNavigation(navigationData: NavigationData): void {
    // Don't track if not initialized
    if (!this.isInitialized) {
      this.log('Meta Pixel not initialized, skipping navigation tracking');
      return;
    }

    const eventData: NavigationEventData = {
      event_name: 'ViewContent',
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: typeof window !== 'undefined' ? window.location.href : undefined,
      custom_data: {
        content_name: navigationData.item,
        content_category: 'Navigation',
        content_type: 'navigation',
        content_id: navigationData.id,
        navigation_item: navigationData.item,
        navigation_category: navigationData.category,
        navigation_action: navigationData.action
      }
    };

    this.trackEvent(eventData);
  }

  /**
   * Track form interaction
   */
  public trackFormInteraction(formData: FormInteractionData): void {
    // Don't track if not initialized
    if (!this.isInitialized) {
      this.log('Meta Pixel not initialized, skipping form interaction tracking');
      return;
    }

    const eventData: FormEventData = {
      event_name: formData.completed ? 'CompleteRegistration' : 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: typeof window !== 'undefined' ? window.location.href : undefined,
      custom_data: {
        content_name: formData.name,
        content_category: 'Form Interaction',
        content_type: 'form',
        content_id: formData.id,
        value: 0,
        currency: 'USD',
        form_name: formData.name,
        form_type: formData.type,
        form_fields: formData.fields || [],
        status: formData.completed ? 'completed' : 'started'
      }
    };

    this.trackEvent(eventData);
  }

  /**
   * Track custom event
   */
  public trackCustomEvent(eventData: MetaPixelEventData): void {
    this.trackEvent(eventData);
  }

  /**
   * Internal event tracking method
   */
  private trackEvent(eventData: MetaPixelEventData): void {
    if (!this.isInitialized) {
      this.queue.push(eventData);
      return;
    }

    try {
      this.callPixel('track', eventData.event_name, eventData.custom_data);
      this.log('Event tracked:', eventData);
    } catch (error) {
      this.log('Failed to track event:', error);
    }
  }

  /**
   * Process queued events
   */
  private async processQueue(): Promise<void> {
    if (this.isProcessing || this.queue.length === 0) return;

    this.isProcessing = true;
    
    while (this.queue.length > 0) {
      const event = this.queue.shift();
      if (event) {
        await new Promise(resolve => setTimeout(resolve, 100)); // Small delay between events
        this.trackEvent(event);
      }
    }
    
    this.isProcessing = false;
  }

  /**
   * Enable automatic event tracking
   */
  private enableAutomaticEventTracking(): void {
    if (typeof window === 'undefined') return;

    // Track form submissions
    this.setupFormTracking();
    
    // Track navigation clicks
    this.setupNavigationTracking();
    
    // Track package interactions
    this.setupPackageTracking();
    
    // Track service interactions
    this.setupServiceTracking();
    
    // Track work/portfolio interactions
    this.setupWorkTracking();
  }

  /**
   * Setup automatic form tracking
   */
  private setupFormTracking(): void {
    if (typeof document === 'undefined') return;

    document.addEventListener('submit', (event) => {
      // Only track if Meta Pixel is initialized
      if (!this.isInitialized) return;
      
      const target = event.target as HTMLFormElement;
      if (target && target.id) {
        this.trackFormInteraction({
          id: target.id,
          name: target.id,
          type: 'contact',
          completed: true,
          fields: Array.from(target.elements).map(el => (el as HTMLInputElement).name).filter(Boolean)
        });
      }
    });
  }

  /**
   * Setup automatic navigation tracking
   */
  private setupNavigationTracking(): void {
    if (typeof document === 'undefined') return;

    document.addEventListener('click', (event) => {
      // Only track if Meta Pixel is initialized
      if (!this.isInitialized) return;
      
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href) {
        const href = link.href;
        const text = link.textContent?.trim();
        
        if (href.includes('/contact')) {
          this.trackNavigation({
            id: 'contact_link',
            item: text || 'Contact',
            category: 'main_navigation',
            action: 'click'
          });
        } else if (href.includes('/services')) {
          this.trackNavigation({
            id: 'services_link',
            item: text || 'Services',
            category: 'main_navigation',
            action: 'click'
          });
        } else if (href.includes('/works')) {
          this.trackNavigation({
            id: 'works_link',
            item: text || 'Works',
            category: 'main_navigation',
            action: 'click'
          });
        } else if (href.includes('/start-project')) {
          this.trackNavigation({
            id: 'start_project_link',
            item: text || 'Start Project',
            category: 'main_navigation',
            action: 'click'
          });
        }
      }
    });
  }

  /**
   * Setup automatic package tracking
   */
  private setupPackageTracking(): void {
    if (typeof document === 'undefined') return;

    document.addEventListener('click', (event) => {
      // Only track if Meta Pixel is initialized
      if (!this.isInitialized) return;
      
      const target = event.target as HTMLElement;
      const button = target.closest('button');
      
      if (button && button.textContent?.includes('Get Started')) {
        const packageCard = button.closest('[data-package]');
        if (packageCard) {
          const packageData = packageCard.getAttribute('data-package');
          if (packageData) {
            try {
              const parsed = JSON.parse(packageData);
              this.trackPackageSelection(parsed);
            } catch (error) {
              this.log('Failed to parse package data:', error);
            }
          }
        }
      }
    });
  }

  /**
   * Setup automatic service tracking
   */
  private setupServiceTracking(): void {
    if (typeof document === 'undefined') return;

    // Track service page views
    if (window.location.pathname.includes('/services')) {
      const serviceName = window.location.pathname.split('/').pop();
      if (serviceName) {
        this.trackServiceView({
          id: serviceName,
          name: serviceName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          category: 'web_development',
          features: []
        });
      }
    }
  }

  /**
   * Setup automatic work tracking
   */
  private setupWorkTracking(): void {
    if (typeof document === 'undefined') return;

    // Track work page views
    if (window.location.pathname.includes('/works/')) {
      const workSlug = window.location.pathname.split('/').pop();
      if (workSlug) {
        this.trackWorkView({
          id: workSlug,
          title: workSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          category: 'portfolio',
          technologies: [],
          industry: 'digital_agency'
        });
      }
    }
  }

  /**
   * Log messages (only in debug mode)
   */
  private log(...args: unknown[]): void {
    if (this.enableDebug) {
      console.log('[Meta Pixel]', ...args);
    }
  }

  /**
   * Get pixel ID
   */
  public getPixelId(): string {
    return this.pixelId;
  }

  /**
   * Check if initialized
   */
  public getInitialized(): boolean {
    return this.isInitialized;
  }

  /**
   * Check if in mock mode
   */
  public getMockMode(): boolean {
    return this.mockMode;
  }
}

// Type definitions for data structures
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface PackageData {
  id: string;
  name: string;
  price?: number;
  features?: string[];
  serviceType?: string;
}

export interface ServiceData {
  id: string;
  name: string;
  category: string;
  features?: string[];
}

export interface WorkData {
  id: string;
  title: string;
  category: string;
  technologies?: string[];
  industry?: string;
}

export interface NavigationData {
  id: string;
  item: string;
  category: string;
  action: string;
}

export interface FormInteractionData {
  id: string;
  name: string;
  type: string;
  completed: boolean;
  fields?: string[];
}

// Global Meta Pixel instance
let metaPixelInstance: MetaPixelAnalytics | null = null;

/**
 * Initialize Meta Pixel
 */
export function initMetaPixel(config: MetaPixelConfig): MetaPixelAnalytics {
  if (!metaPixelInstance) {
    metaPixelInstance = new MetaPixelAnalytics(config);
    metaPixelInstance.init();
  }
  return metaPixelInstance;
}

/**
 * Get Meta Pixel instance
 */
export function getMetaPixel(): MetaPixelAnalytics | null {
  return metaPixelInstance;
}

/**
 * Check if Meta Pixel is in mock mode
 */
export function isMetaPixelMockMode(): boolean {
  const instance = getMetaPixel();
  return instance?.getMockMode() || false;
}

/**
 * Track page view
 */
export function trackPageView(pageData?: Partial<PageViewEventData>): void {
  const instance = getMetaPixel();
  if (instance) {
    instance.trackPageView(pageData);
  }
}

/**
 * Track contact submission
 */
export function trackContactSubmission(formData: Partial<ContactFormData>): void {
  const instance = getMetaPixel();
  if (instance) {
    instance.trackContactSubmission(formData);
  }
}

/**
 * Track package selection
 */
export function trackPackageSelection(packageData: PackageData): void {
  const instance = getMetaPixel();
  if (instance) {
    instance.trackPackageSelection(packageData);
  }
}

/**
 * Track service view
 */
export function trackServiceView(serviceData: ServiceData): void {
  const instance = getMetaPixel();
  if (instance) {
    instance.trackServiceView(serviceData);
  }
}

/**
 * Track work view
 */
export function trackWorkView(workData: WorkData): void {
  const instance = getMetaPixel();
  if (instance) {
    instance.trackWorkView(workData);
  }
}

/**
 * Track navigation
 */
export function trackNavigation(navigationData: NavigationData): void {
  const instance = getMetaPixel();
  if (instance) {
    instance.trackNavigation(navigationData);
  }
}

/**
 * Track form interaction
 */
export function trackFormInteraction(formData: FormInteractionData): void {
  const instance = getMetaPixel();
  if (instance) {
    instance.trackFormInteraction(formData);
  }
}

/**
 * Track custom event
 */
export function trackCustomEvent(eventData: MetaPixelEventData): void {
  const instance = getMetaPixel();
  if (instance) {
    instance.trackCustomEvent(eventData);
  }
}

export default MetaPixelAnalytics;
