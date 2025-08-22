// Meta Pixel TypeScript Declarations
// Extends the global window object with Facebook Pixel functionality

declare global {
  interface Window {
    fbq: (
      command: 'init' | 'track' | 'trackCustom',
      pixelId?: string,
      eventName?: string,
      parameters?: Record<string, unknown>
    ) => void;
    _fbq: unknown;
  }
}

export {};
