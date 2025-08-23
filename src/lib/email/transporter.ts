import nodemailer from 'nodemailer';

// Production-ready email transporter configuration
export const createTransporter = () => {
  // Validate required environment variables
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error('Missing required email configuration environment variables (GMAIL_USER and GMAIL_APP_PASSWORD)');
  }

  // Check if using Gmail or custom domain email
  const isGmail = process.env.GMAIL_USER.includes('@gmail.com');
  
  if (isGmail) {
    // Production Gmail configuration
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      // Production settings for reliability
      secure: true,
      tls: {
        rejectUnauthorized: true, // Secure for production
      },
      // Add timeouts for production reliability
      connectionTimeout: 60000, // 60 seconds
      greetingTimeout: 30000,   // 30 seconds
      socketTimeout: 60000,     // 60 seconds
    });
  } else {
    // Production custom domain configuration
    return nodemailer.createTransport({
      host: 'mail.privateemail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      // Production TLS settings
      tls: {
        rejectUnauthorized: true, // Secure for production
        ciphers: 'SSLv3',
      },
      // Add timeouts for production reliability
      connectionTimeout: 60000, // 60 seconds
      greetingTimeout: 30000,   // 30 seconds
      socketTimeout: 60000,     // 60 seconds
    });
  }
};

// Verify transporter connection
export const verifyTransporter = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    return true;
  } catch (error) {
    return false;
  }
};

// Get transporter instance
export const getTransporter = () => {
  try {
    return createTransporter();
  } catch (error) {
    throw error;
  }
};
