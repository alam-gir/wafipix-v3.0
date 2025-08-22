import nodemailer from 'nodemailer';

// Email transporter configuration
export const createTransporter = () => {
  // Validate required environment variables
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error('Missing required email configuration environment variables');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
    // Additional configuration for better reliability
    pool: true, // Use pooled connections
    maxConnections: 5, // Maximum number of connections to pool
    maxMessages: 100, // Maximum number of messages per connection
    rateLimit: 14, // Maximum number of messages per second
    // Connection timeout settings
    connectionTimeout: 60000, // 60 seconds
    greetingTimeout: 30000, // 30 seconds
    socketTimeout: 60000, // 60 seconds
  });
};

// Verify transporter connection
export const verifyTransporter = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('✅ Email transporter verified successfully');
    return true;
  } catch (error) {
    console.error('❌ Email transporter verification failed:', error);
    return false;
  }
};

// Get transporter instance
export const getTransporter = () => {
  try {
    return createTransporter();
  } catch (error) {
    console.error('Failed to create email transporter:', error);
    throw error;
  }
};
