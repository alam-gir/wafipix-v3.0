import { getTransporter } from './transporter';
import { 
  createContactEmailTemplate, 
  createContactEmailText,
  createCustomerConfirmationTemplate 
} from './templates';
import { ContactFormData } from '@/app/contact/_components/contactSchema';

// Simplified email service - optimized for performance and production
export async function sendContactEmails(data: ContactFormData): Promise<{
  adminNotification: boolean;
  customerConfirmation: boolean;
}> {
  try {
    const transporter = getTransporter();
    
    // Send admin notification
    const adminMailOptions = {
      from: `"Wafipix Digital Agency" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: data.email,
      subject: `New Project Inquiry from ${data.name} - Wafipix`,
      html: createContactEmailTemplate(data),
      text: createContactEmailText(data),
    };

    // Send customer confirmation
    const customerMailOptions = {
      from: `"Wafipix Digital Agency" <${process.env.GMAIL_USER}>`,
      to: data.email,
      subject: `We've received your message, ${data.name}!`,
      html: createCustomerConfirmationTemplate(data),
      text: `Hi ${data.name},\n\nThank you for reaching out to Wafipix! We've received your message and our team will review it carefully.\n\nWhat happens next?\n- Our team will review your requirements within 24 hours\n- We will schedule a consultation call to discuss your project\n- You will receive a comprehensive proposal tailored to your needs\n\nMessage received: ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })}\n\nIf you have any questions or need immediate assistance, please reply to this email.\n\nBest regards,\nThe Wafipix Team\nDigital Magic Creators\ninfo@wafipix.com`,
    };

    // Send both emails concurrently for better performance
    const [adminResult, customerResult] = await Promise.allSettled([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(customerMailOptions)
    ]);

    return {
      adminNotification: adminResult.status === 'fulfilled',
      customerConfirmation: customerResult.status === 'fulfilled',
    };
  } catch (error) {
    throw error;
  }
}

// Export individual functions for backward compatibility
export const sendContactNotification = async (data: ContactFormData) => {
  const transporter = getTransporter();
  const mailOptions = {
    from: `"Wafipix Digital Agency" <${process.env.GMAIL_USER}>`,
    to: process.env.CONTACT_EMAIL,
    replyTo: data.email,
    subject: `New Project Inquiry from ${data.name} - Wafipix`,
    html: createContactEmailTemplate(data),
    text: createContactEmailText(data),
  };
  return transporter.sendMail(mailOptions);
};

export const sendCustomerConfirmation = async (data: ContactFormData) => {
  const transporter = getTransporter();
  const mailOptions = {
    from: `"Wafipix Digital Agency" <${process.env.GMAIL_USER}>`,
    to: data.email,
    subject: `We've received your message, ${data.name}!`,
    html: createCustomerConfirmationTemplate(data),
    text: `Hi ${data.name},\n\nThank you for reaching out to Wafipix! We've received your message and our team will review it carefully.\n\nWhat happens next?\n- Our team will review your requirements within 24 hours\n- We will schedule a consultation call to discuss your project\n- You will receive a comprehensive proposal tailored to your needs\n\nMessage received: ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })}\n\nIf you have any questions or need immediate assistance, please reply to this email.\n\nBest regards,\nThe Wafipix Team\nDigital Magic Creators\ninfo@wafipix.com`,
  };
  return transporter.sendMail(mailOptions);
};
