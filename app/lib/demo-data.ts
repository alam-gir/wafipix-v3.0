// Simplified interface for API data structure
export interface TrustedCustomer {
  logo: string;
}

// Social media data interface
export interface SocialMediaLink {
  name: string;
  url: string;
}

// Demo data for trusted customers - replace with API call in production
export const trustedCustomersData: TrustedCustomer[] = [
  {
    logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1558981806-ec527fa84a39?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=80&fit=crop&crop=center",
  },
];

// Demo social media data - replace with actual data in production
export const socialMediaData: SocialMediaLink[] = [
  {
    name: "Instagram",
    url: "https://instagram.com/wafipix",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/wafipix",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/wafipix",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@wafipix",
  },
  {
    name: "Behance",
    url: "https://behance.net/wafipix",
  },
];

// Function to fetch trusted customers from API (for future use)
export async function fetchTrustedCustomers(): Promise<TrustedCustomer[]> {
  // TODO: Replace with actual API call
  // Example API call:
  // const response = await fetch('/api/trusted-customers');
  // const data = await response.json();
  // return data; // Expected format: [{logo: "url"}, {logo: "url"}, ...]
  
  // For now, return demo data
  return trustedCustomersData;
}

// Function to fetch social media links from API (for future use)
export async function fetchSocialMediaLinks(): Promise<SocialMediaLink[]> {
  // TODO: Replace with actual API call
  // Example API call:
  // const response = await fetch('/api/social-media');
  // const data = await response.json();
  // return data;
  
  // For now, return demo data
  return socialMediaData;
} 