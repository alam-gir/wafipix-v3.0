import { getTransporter } from './transporter';
import { 
  createContactEmailTemplate, 
  createContactEmailText,
  createCustomerConfirmationTemplate 
} from './templates';
import { ContactFormData } from '@/app/contact/_components/contactSchema';

// Email service configuration
interface EmailConfig {
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
}

// Email service class
export class EmailService {
  private transporter: any;

  constructor() {
    try {
      this.transporter = getTransporter();
    } catch (error) {
      console.error('Failed to initialize email service:', error);
      throw error;
    }
  }

  // Send contact form notification to admin
  async sendContactNotification(data: ContactFormData): Promise<boolean> {
    try {
      const { name, email, phone, message } = data;
      
      // Validate required environment variables
      if (!process.env.GMAIL_USER || !process.env.CONTACT_EMAIL) {
        throw new Error('Missing email configuration environment variables');
      }

      const mailOptions: EmailConfig = {
        from: `"Wafipix Contact Form" <${process.env.GMAIL_USER}>`,
        to: process.env.CONTACT_EMAIL,
        replyTo: email,
        subject: `New Contact Form Submission from ${name} - Wafipix`,
        html: createContactEmailTemplate(data),
        text: createContactEmailText(data),
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

      const mailOptions: EmailConfig = {
        from: `"Wafipix Team" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `Thank you for contacting Wafipix, ${name}! 🎉`,
        html: createCustomerConfirmationTemplate(data),
        text: `Thank you for contacting Wafipix, ${name}! We've received your message and will get back to you within 24 hours.`,
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
