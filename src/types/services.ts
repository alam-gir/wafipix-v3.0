// ============================================================================
// SERVICES TYPES
// ============================================================================

export interface PackagePricing {
  usd: number;
  bdt: number;
}

export interface PackageFeature {
  id: string;
  text: string;
  highlight?: boolean; // For premium features
}

export interface ServicePackage {
  id: string;
  name: string;
  subtitle: string;
  pricing: PackagePricing;
  features: PackageFeature[];
  status: 'active' | 'featured' | 'coming-soon';
  deliveryTime: string;
  paymentTerms: string;
  popular?: boolean; // For featured packages
}

export interface ServicePageData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  packages: ServicePackage[];
  features: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

// API Response Types
export interface ServicePageResponse {
  data: ServicePageData;
}

export interface ServicePackagesResponse {
  data: ServicePackage[];
}

export interface AllServicesResponse {
  data: Array<{
    id: string;
    slug: string;
    title: string;
    subtitle: string;
  }>;
}

// Service Categories
export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface ServiceCategoriesResponse {
  data: ServiceCategory[];
}
