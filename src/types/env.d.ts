declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Email Configuration
      GMAIL_USER: string;
      GMAIL_APP_PASSWORD: string;
      CONTACT_EMAIL?: string;
      
      // Other environment variables can be added here
      NODE_ENV: 'development' | 'production' | 'test';
      NEXT_PUBLIC_APP_URL?: string;
    }
  }
}

export {};
