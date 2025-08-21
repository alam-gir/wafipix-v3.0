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
  // Tech Companies
  { logo: 'https://cdn.worldvectorlogo.com/logos/google-2015.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/facebook-2019.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/netflix-2015.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/samsung-2015.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/apple-black.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-2012.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/tesla-motors.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/wikipedia.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/steam.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/discord.svg' },
  
  // E-commerce & Retail
  { logo: 'https://cdn.worldvectorlogo.com/logos/amazon-2.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/walmart.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/nike-6.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/adidas-9.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/starbucks.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/mcdonalds-15.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/burger-king-5.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/coca-cola-2016.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/pepsi-2014.svg' },
  
  // Finance & Banking
  { logo: 'https://cdn.worldvectorlogo.com/logos/google-pay.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/paypal-3.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/visa-5.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/mastercard-2.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/stripe-2.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/square-2.svg' },
  
  // Media & Entertainment
  { logo: 'https://cdn.worldvectorlogo.com/logos/youtube-2017.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/spotify-2015.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/twitch-6.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/telegram-2019.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/whatsapp-3.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/instagram-2016.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/twitter-6.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg' },
  
  // Automotive & Transportation
  { logo: 'https://cdn.worldvectorlogo.com/logos/uber-14.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/lyft-2.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/bmw-5.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/volkswagen-5.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/toyota-6.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/honda-4.svg' },
  
  // Software & Development
  { logo: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/html5-2.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/javascript.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/linux-tux.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/github-icon.svg' },
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
