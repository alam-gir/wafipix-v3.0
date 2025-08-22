import { getTransporter } from './transporter';
import { 
  createContactEmailTemplate, 
  createContactEmailText,
  createCustomerConfirmationTemplate 
} from './templates';
import { ContactFormData } from '@/app/contact/_components/contactSchema';
import type { Transporter } from 'nodemailer';

// Email service configuration - with HTML and text versions
interface EmailConfig {
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
  headers?: Record<string, string>;
  priority?: 'normal' | 'high' | 'low';
}

// Email service class
export class EmailService {
  private transporter: Transporter;

  constructor() {
    try {
      this.transporter = getTransporter();
    } catch (error) {
      console.error('Failed to initialize email service:', error);
      throw error;
    }
  }

  // Validate email format
  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Create minimal email headers to reduce spam
  private createEmailHeaders(_data: ContactFormData): Record<string, string> {
    return {
      'X-Mailer': 'Wafipix Contact Form',
      'X-Priority': '3',
      'Importance': 'Normal',
      'Message-ID': `<${Date.now()}.${Math.random().toString(36).substr(2, 9)}@wafipix.com>`,
      'Date': new Date().toUTCString(),
      'MIME-Version': '1.0',
    };
  }

  // Send contact form notification to admin
  async sendContactNotification(data: ContactFormData): Promise<boolean> {
    try {
      const { name, email } = data;
      
      // Validate required environment variables
      if (!process.env.GMAIL_USER || !process.env.CONTACT_EMAIL) {
        throw new Error('Missing email configuration environment variables');
      }

      // Validate email format
      if (!this.validateEmail(email)) {
        throw new Error('Invalid email format provided');
      }

      const mailOptions: EmailConfig = {
        from: `"Wafipix Digital Agency" <${process.env.GMAIL_USER}>`,
        to: process.env.CONTACT_EMAIL,
        replyTo: email,
        subject: `New Project Inquiry from ${name} - Wafipix`,
        html: createContactEmailTemplate(data),
        text: createContactEmailText(data),
        headers: this.createEmailHeaders(data),
        priority: 'normal',
      };

      await this.transporter.sendMail(mailOptions);
      
      console.log(`✅ Contact notification sent successfully to admin from ${email}`);
      return true;
    } catch (error) {
      console.error('❌ Failed to send contact notification:', error);
      throw error;
    }
  }

  // Send confirmation email to customer
  async sendCustomerConfirmation(data: ContactFormData): Promise<boolean> {
    try {
      const { name, email } = data;
      
      if (!process.env.GMAIL_USER) {
        throw new Error('Missing email configuration environment variables');
      }

      // Validate email format
      if (!this.validateEmail(email)) {
        throw new Error('Invalid email format provided');
      }

      const mailOptions: EmailConfig = {
        from: `"Wafipix Digital Agency" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `We've received your message, ${name}!`,
        html: createCustomerConfirmationTemplate(data),
        text: `Hi ${name},\n\nThank you for reaching out to Wafipix! We've received your message and our team will review it carefully.\n\nWhat happens next?\n- Our team will review your requirements within 24 hours\n- We will schedule a consultation call to discuss your project\n- You will receive a comprehensive proposal tailored to your needs\n\nMessage received: ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })}\n\nIf you have any questions or need immediate assistance, please reply to this email.\n\nBest regards,\nThe Wafipix Team\nDigital Magic Creators\ninfo@wafipix.com`,
        headers: this.createEmailHeaders(data),
        priority: 'normal',
      };

      await this.transporter.sendMail(mailOptions);
      
      console.log(`✅ Customer confirmation sent successfully to ${email}`);
      return true;
    } catch (error) {
      console.error('❌ Failed to send customer confirmation:', error);
      throw error;
    }
  }

  // Send both notification and confirmation emails
  async sendContactEmails(data: ContactFormData): Promise<{
    adminNotification: boolean;
    customerConfirmation: boolean;
  }> {
    try {
      // Send admin notification first
      const adminNotification = await this.sendContactNotification(data);
      
      // Send customer confirmation
      const customerConfirmation = await this.sendCustomerConfirmation(data);
      
      return {
        adminNotification,
        customerConfirmation,
      };
    } catch (error) {
      console.error('❌ Failed to send contact emails:', error);
      throw error;
    }
  }

  // Verify email service connection
  async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      console.log('✅ Email service connection verified successfully');
      return true;
    } catch (error) {
      console.error('❌ Email service connection verification failed:', error);
      return false;
    }
  }

  // Get email service status
  async getStatus(): Promise<{
    isConnected: boolean;
    canSendEmails: boolean;
    lastError?: string;
  }> {
    try {
      const isConnected = await this.verifyConnection();
      return {
        isConnected,
        canSendEmails: isConnected,
      };
    } catch (error) {
      return {
        isConnected: false,
        canSendEmails: false,
        lastError: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }
}

// Create singleton instance
export const emailService = new EmailService();

// Export individual functions for convenience
export const sendContactNotification = (data: ContactFormData) => 
  emailService.sendContactNotification(data);

export const sendCustomerConfirmation = (data: ContactFormData) => 
  emailService.sendCustomerConfirmation(data);

export const sendContactEmails = (data: ContactFormData) => 
  emailService.sendContactEmails(data);

export const verifyEmailConnection = () => 
  emailService.verifyConnection();

export const getEmailStatus = () => 
  emailService.getStatus();
