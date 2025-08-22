import nodemailer from 'nodemailer';

// Email transporter configuration - simplified for reliability
export const createTransporter = () => {
  // Validate required environment variables
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error('Missing required email configuration environment variables (GMAIL_USER and GMAIL_APP_PASSWORD)');
  }

  // Check if using Gmail or custom domain email
  const isGmail = process.env.GMAIL_USER.includes('@gmail.com');
  
  if (isGmail) {
    // Simple Gmail configuration
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      // Basic settings for reliability
      secure: true,
      tls: {
        rejectUnauthorized: false, // More permissive for development
      },
    });
  } else {
    // Simple custom domain configuration
    return nodemailer.createTransport({
      host: 'mail.privateemail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      // Basic TLS settings
      tls: {
        rejectUnauthorized: false, // More permissive for development
      },
    });
  }
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
