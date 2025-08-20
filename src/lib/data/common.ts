// ============================================================================
// COMMON DATA - Trusted customers, social media, company info
// ============================================================================

// ============================================================================
// TRUSTED CUSTOMERS DATA
// ============================================================================

export interface TrustedCustomer {
  logo: string;
}

export const trustedCustomers: TrustedCustomer[] = [
  { logo: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=200&auto=format&fit=crop' },
  { logo: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=200&auto=format&fit=crop' },
  { logo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=200&auto=format&fit=crop' },
  { logo: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=200&auto=format&fit=crop' },
  { logo: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=200&auto=format&fit=crop' },
  { logo: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=200&auto=format&fit=crop' },
];

export const getTrustedCustomerByIndex = (index: number) => {
  return trustedCustomers[index];
};

// ============================================================================
// SOCIAL MEDIA LINKS DATA
// ============================================================================

export interface SocialMediaLink {
  name: string;
  url: string;
}

export const socialMediaLinks: SocialMediaLink[] = [
  { name: 'Facebook', url: 'https://facebook.com/wafipix' },
  { name: 'Instagram', url: 'https://instagram.com/wafipix' },
  { name: 'Twitter', url: 'https://twitter.com/wafipix' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/wafipix' },
  { name: 'YouTube', url: 'https://youtube.com/@wafipix' },
  { name: 'Behance', url: 'https://behance.net/wafipix' },
];

export const getSocialMediaByName = (name: string) => {
  return socialMediaLinks.find(link => link.name.toLowerCase() === name.toLowerCase());
};

export const getActiveSocialMedia = () => {
  return socialMediaLinks;
};

// ============================================================================
// COMPANY INFORMATION DATA
// ============================================================================

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  founded: number;
  employees: string;
  location: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
}

export const companyInfo: CompanyInfo = {
  name: 'Wafipix',
  tagline: 'Digital Magic Creators',
  description: 'We transform ideas into digital experiences that captivate, inspire, and drive results.',
  founded: 2020,
  employees: '10-50',
  location: 'Dhaka, Bangladesh',
  contact: {
    email: 'hello@wafipix.com',
    phone: '+880 1234-567890',
    address: 'Dhaka, Bangladesh'
  }
};

// ============================================================================
// BACKEND API ENDPOINTS (for reference)
// ============================================================================

/*
GET /api/common/trusted-customers
- Returns: Array of TrustedCustomer objects
- Purpose: Fetch trusted customer logos for display

GET /api/common/social-media
- Returns: Array of SocialMediaLink objects  
- Purpose: Fetch social media links for footer/contact

GET /api/common/company-info
- Returns: CompanyInfo object
- Purpose: Fetch company information for about/contact pages
*/
