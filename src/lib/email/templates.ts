import { ContactFormData } from '@/app/contact/_components/contactSchema';

// Base email template styles
const getBaseStyles = () => `
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #1f2937;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f0f9ff;
    }
    .container {
      background-color: #ffffff;
      border-radius: 12px;
      padding: 28px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      border: 1px solid #e0f2fe;
    }
    .header {
      text-align: center;
      margin-bottom: 28px;
      padding-bottom: 20px;
      border-bottom: 2px solid #e0f2fe;
    }
    .logo {
      font-size: 28px;
      font-weight: 700;
      background: linear-gradient(135deg, #059669 0%, #10b981 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 6px;
    }
    .subtitle {
      color: #64748b;
      font-size: 15px;
      font-weight: 500;
    }
    .field {
      margin-bottom: 20px;
    }
    .field-label {
      font-weight: 600;
      color: #374151;
      margin-bottom: 6px;
      display: block;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .field-value {
      background-color: #f0f9ff;
      padding: 12px 16px;
      border-radius: 8px;
      border-left: 3px solid #059669;
      font-size: 14px;
      word-wrap: break-word;
      color: #1f2937;
      font-weight: 500;
    }
    .message-field {
      background-color: #f0f9ff;
      padding: 16px;
      border-radius: 8px;
      border-left: 3px solid #059669;
      white-space: pre-wrap;
      font-size: 14px;
      line-height: 1.6;
      color: #1f2937;
      font-weight: 400;
    }
    .footer {
      margin-top: 28px;
      padding-top: 20px;
      border-top: 1px solid #e0f2fe;
      text-align: center;
      color: #64748b;
      font-size: 13px;
    }
    .timestamp {
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
      padding: 12px;
      border-radius: 8px;
      text-align: center;
      margin-top: 20px;
      font-size: 12px;
      color: #475569;
      font-weight: 500;
    }
    .priority-badge {
      display: inline-block;
      background: linear-gradient(135deg, #059669 0%, #10b981 100%);
      color: white;
      padding: 4px 10px;
      border-radius: 16px;
      font-size: 11px;
      font-weight: 600;
      margin-bottom: 12px;
    }
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #059669 0%, #10b981 100%);
      color: white;
      padding: 10px 20px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      margin-top: 12px;
      transition: all 0.2s ease;
      font-size: 14px;
    }
    .cta-button:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
    }
  </style>
`;

// Create contact form email template
export const createContactEmailTemplate = (data: ContactFormData): string => {
  const { name, email, phone, message } = data;
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission - Wafipix</title>
      ${getBaseStyles()}
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">Wafipix</div>
          <div class="subtitle">Digital Magic Creators</div>
        </div>
        
        <div class="priority-badge">New Contact Form Submission</div>
        
        <h2 style="color: #1f2937; margin-bottom: 28px; font-size: 24px; font-weight: 700;">
          New Contact Form Submission
        </h2>
        
        <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
          A new contact form has been submitted through the website. Please review the details below and respond accordingly.
        </p>
        
        <div class="field">
          <span class="field-label">Full Name</span>
          <div class="field-value">${name}</div>
        </div>
        
        <div class="field">
          <span class="field-label">Email Address</span>
          <div class="field-value">${email}</div>
        </div>
        
        ${phone ? `
        <div class="field">
          <span class="field-label">Phone Number</span>
          <div class="field-value">${phone}</div>
        </div>
        ` : ''}
        
        <div class="field">
          <span class="field-label">Message</span>
          <div class="message-field">${message}</div>
        </div>
        
        <div class="timestamp">
          Submitted on: ${timestamp} UTC
        </div>
        
        <div class="footer">
          <p style="margin-bottom: 16px; color: #64748b;">
            <strong>Action Required:</strong> Please respond to this customer within 24 hours to maintain our high service standards.
          </p>
          <a href="mailto:${email}?subject=Re: Your inquiry to Wafipix" class="cta-button">
            Reply to Customer
          </a>
          <p style="margin-top: 16px; font-size: 12px; color: #94a3b8;">
            This message was automatically generated from the Wafipix website contact form.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Create plain text version for email clients that don't support HTML
export const createContactEmailText = (data: ContactFormData): string => {
  const { name, email, phone, message } = data;
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

  return `
NEW CONTACT FORM SUBMISSION - WAFIPIX
=====================================

Digital Magic Creators

A new contact form has been submitted through the website. Please review the details below and respond accordingly.

Full Name: ${name}
Email Address: ${email}
${phone ? `Phone Number: ${phone}` : ''}

Message:
${message}

Submitted on: ${timestamp} UTC

---
ACTION REQUIRED: Please respond to this customer within 24 hours to maintain our high service standards.

Reply to: ${email}

This message was automatically generated from the Wafipix website contact form.
  `.trim();
};

// Create customer confirmation email template
export const createCustomerConfirmationTemplate = (data: ContactFormData): string => {
  const { name } = data;
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank you for contacting Wafipix</title>
      ${getBaseStyles()}
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">Wafipix</div>
          <div class="subtitle">Digital Magic Creators</div>
        </div>
        
        <h2 style="color: #1f2937; margin-bottom: 28px; font-size: 24px; font-weight: 700;">
          Thank you for contacting us, ${name}
        </h2>
        
        <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
          We have successfully received your message and appreciate you taking the time to reach out to us.
        </p>
        
        <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #059669; margin-bottom: 12px; font-size: 16px; font-weight: 600;">
            Next Steps
          </h3>
          <ul style="color: #065f46; margin: 0; padding-left: 18px;">
            <li style="margin-bottom: 6px;">Our team will review your requirements within 24 hours</li>
            <li style="margin-bottom: 6px;">We will schedule a consultation call to discuss your project in detail</li>
            <li style="margin-bottom: 6px;">You will receive a comprehensive proposal tailored to your specific needs</li>
          </ul>
        </div>
        
        <div class="timestamp">
          Message received on: ${timestamp} UTC
        </div>
        
        <div class="footer">
          <p style="margin-bottom: 16px; color: #64748b;">
            If you have any questions or need immediate assistance, please do not hesitate to reply to this email.
          </p>
          <p style="font-size: 12px; color: #94a3b8;">
            Best regards,<br>
            The Wafipix Team<br>
            <span style="color: #cbd5e1; font-size: 11px;">Digital Magic Creators</span>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};
