# Email Service Setup Guide

This guide explains how to set up and use the Nodemailer email service for the Wafipix contact form.

## 🚀 Quick Setup

### 1. Install Dependencies
```bash
pnpm add nodemailer @types/nodemailer
```

### 2. Configure Environment Variables
Create a `.env.local` file in your project root with the following variables:

```env
# Your Gmail address
GMAIL_USER=your-email@gmail.com

# Gmail App Password (NOT your regular Gmail password)
GMAIL_APP_PASSWORD=your-16-character-app-password

# Email address where you want to receive contact form submissions
CONTACT_EMAIL=your-business-email@gmail.com
```

### 3. Generate Gmail App Password
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to Security → 2-Step Verification
3. Click on "App passwords"
4. Generate a new app password for "Mail"
5. Use the 16-character password in your `.env.local` file

## 📧 How It Works

### Contact Form Flow
1. **Customer submits form** → Form data is validated
2. **Admin notification** → Email sent to your business email
3. **Customer confirmation** → Thank you email sent to customer
4. **Response tracking** → Reply-to field set to customer's email

### Email Templates
- **Admin Notification**: Professional template with all form data
- **Customer Confirmation**: Beautiful thank you message with next steps
- **Responsive Design**: Works on all email clients
- **Fallback Support**: Plain text versions for compatibility

## 🛠️ API Usage

### Send Contact Form Emails
```typescript
import { sendContactEmails } from '@/lib/email/service';

// Send both admin notification and customer confirmation
const results = await sendContactEmails(formData);

if (results.adminNotification && results.customerConfirmation) {
  console.log('✅ All emails sent successfully');
}
```

### Individual Email Functions
```typescript
import { 
  sendContactNotification, 
  sendCustomerConfirmation 
} from '@/lib/email/service';

// Send only admin notification
await sendContactNotification(formData);

// Send only customer confirmation
await sendCustomerConfirmation(formData);
```

### Check Email Service Status
```typescript
import { getEmailStatus } from '@/lib/email/service';

const status = await getEmailStatus();
console.log('Email service status:', status);
```

## 🔧 Configuration Options

### Transporter Settings
- **Connection Pooling**: Enabled for better performance
- **Rate Limiting**: 14 messages per second (Gmail limit)
- **Timeout Settings**: Optimized for reliability
- **Error Handling**: Comprehensive error catching and logging

### Customization
- **Email Templates**: Modify `src/lib/email/templates.ts`
- **Styling**: Update CSS in template functions
- **Subject Lines**: Customize in `src/lib/email/service.ts`
- **Reply-to Addresses**: Automatically set to customer email

## 🚨 Troubleshooting

### Common Issues

#### "Invalid login" Error
- Verify your Gmail App Password is correct
- Ensure 2-Factor Authentication is enabled
- Check that `GMAIL_USER` matches your Gmail address exactly

#### "Missing email configuration" Error
- Ensure all required environment variables are set
- Check that `.env.local` file exists and is loaded
- Restart your development server after adding environment variables

#### Emails Not Sending
- Check console logs for detailed error messages
- Verify Gmail App Password hasn't expired
- Ensure your Gmail account allows "less secure app access"

### Debug Mode
```typescript
import { verifyEmailConnection } from '@/lib/email/service';

// Test email service connection
const isConnected = await verifyEmailConnection();
console.log('Email service connected:', isConnected);
```

## 📱 Email Client Compatibility

### Supported Features
- ✅ HTML emails with responsive design
- ✅ Plain text fallbacks
- ✅ Modern CSS (with fallbacks)
- ✅ Emoji support
- ✅ Mobile-responsive layouts

### Tested Clients
- Gmail (Web & Mobile)
- Outlook (Web & Desktop)
- Apple Mail
- Thunderbird
- Mobile email apps

## 🔒 Security Features

### Data Protection
- **Input Validation**: Zod schema validation
- **XSS Prevention**: Sanitized HTML output
- **Rate Limiting**: Built-in Gmail rate limits
- **Error Handling**: No sensitive data in error messages

### Best Practices
- Use environment variables for credentials
- Never commit `.env.local` to version control
- Regular app password rotation
- Monitor email service logs

## 📊 Monitoring & Logging

### Console Logs
- ✅ Successful email deliveries
- ❌ Failed email attempts
- 🔍 Connection verification results
- 📧 Email service status updates

### Error Tracking
- Detailed error messages with context
- Stack traces for debugging
- User-friendly error responses
- Fallback error handling

## 🚀 Production Deployment

### Environment Setup
1. Set production environment variables
2. Use production Gmail account
3. Configure proper logging
4. Set up monitoring alerts

### Performance Optimization
- Connection pooling enabled
- Rate limiting configured
- Timeout settings optimized
- Error handling robust

## 📚 Additional Resources

- [Nodemailer Documentation](https://nodemailer.com/)
- [Gmail App Passwords Guide](https://support.google.com/accounts/answer/185833)
- [Email Template Best Practices](https://www.emailjs.com/blog/email-template-best-practices/)
- [Gmail SMTP Settings](https://support.google.com/mail/answer/7126229)

## 🤝 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review console logs for error details
3. Verify environment variable configuration
4. Test email service connection
5. Check Gmail account settings

---

**Note**: This email service is designed for production use with proper error handling, logging, and security measures. Always test thoroughly in development before deploying to production.
