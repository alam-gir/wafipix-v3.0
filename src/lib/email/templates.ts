import { ContactFormData } from '@/app/contact/_components/contactSchema';

// Create clean, simple HTML admin notification email template
export const createContactEmailTemplate = (data: ContactFormData): string => {
  const { name, email, phone, message } = data;
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f5f5f5;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px; border: 1px solid #ddd;">
    <h1 style="color: #2563eb; margin: 0 0 20px 0; font-size: 24px;">New Contact Form Submission</h1>
    <p style="color: #666; margin: 0 0 20px 0;">Wafipix - Digital Magic Creators</p>
    
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0;">
      <h2 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">Contact Details</h2>
      <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
      <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
      ${phone ? `<p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
      <p style="margin: 5px 0;"><strong>Date:</strong> ${timestamp}</p>
    </div>
    
    <div style="background-color: #fff3cd; padding: 20px; border-radius: 6px; margin: 20px 0;">
      <h3 style="color: #856404; margin: 0 0 10px 0; font-size: 16px;">Message</h3>
      <p style="margin: 0; white-space: pre-wrap;">${message}</p>
    </div>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="mailto:${email}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Reply to Customer</a>
    </div>
    
    <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; text-align: center; color: #666; font-size: 14px;">
      <p style="margin: 0;">This message was sent from the Wafipix website contact form.</p>
    </div>
  </div>
</body>
</html>`;
};

// Create simple plain text version (same as HTML for consistency)
export const createContactEmailText = (data: ContactFormData): string => {
  const { name, email, phone, message } = data;
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

  return `NEW CONTACT FORM SUBMISSION - WAFIPIX

Digital Magic Creators

A new contact form has been submitted through the website.

CONTACT DETAILS:
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
Date: ${timestamp}

MESSAGE:
${message}

---
Please respond to this customer within 24 hours.

Reply to: ${email}

This message was sent from the Wafipix website contact form.`.trim();
};

// Create clean, simple HTML customer confirmation email template
export const createCustomerConfirmationTemplate = (data: ContactFormData): string => {
  const { name } = data;
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Thank you for contacting Wafipix</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f5f5f5;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px; border: 1px solid #ddd;">
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #2563eb; margin: 0 0 10px 0; font-size: 28px;">Wafipix</h1>
      <p style="color: #666; margin: 0; font-size: 16px;">Digital Magic Creators</p>
    </div>
    
    <h2 style="color: #059669; margin: 0 0 20px 0; font-size: 22px;">Thank you for contacting us, ${name}!</h2>
    
    <p style="margin: 0 0 20px 0; font-size: 16px;">We have successfully received your message and appreciate you taking the time to reach out to us.</p>
    
    <div style="background-color: #f0f9ff; padding: 20px; border-radius: 6px; margin: 20px 0;">
      <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">What happens next?</h3>
      <ul style="margin: 0; padding-left: 20px; color: #374151;">
        <li style="margin-bottom: 8px;">Our team will review your requirements within 24 hours</li>
        <li style="margin-bottom: 8px;">We will schedule a consultation call to discuss your project</li>
        <li style="margin-bottom: 8px;">You will receive a comprehensive proposal tailored to your needs</li>
      </ul>
    </div>
    
    <div style="background-color: #fff3cd; padding: 15px; border-radius: 6px; margin: 20px 0; text-align: center;">
      <p style="margin: 0; color: #856404; font-size: 14px;"><strong>Message received:</strong> ${timestamp}</p>
    </div>
    
    <p style="margin: 20px 0; font-size: 16px;">If you have any questions or need immediate assistance, please reply to this email.</p>
    
    <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; text-align: center;">
      <p style="margin: 0 0 10px 0; color: #666;">Best regards,</p>
      <p style="margin: 0 0 5px 0; font-weight: bold; color: #333;">The Wafipix Team</p>
      <p style="margin: 0 0 5px 0; color: #666; font-size: 14px;">Digital Magic Creators</p>
      <p style="margin: 0; color: #2563eb; font-size: 14px;"><a href="mailto:info@wafipix.com" style="color: #2563eb; text-decoration: none;">info@wafipix.com</a></p>
    </div>
  </div>
</body>
</html>`;
};
