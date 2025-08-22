// Export email service and utilities
export * from './service';
export * from './transporter';
export * from './templates';

// Export the main email service instance
export { emailService } from './service';

// Export test utility
export { testEmailService } from './test-connection';
