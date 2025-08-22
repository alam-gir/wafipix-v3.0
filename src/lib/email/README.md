# Email Service Configuration

This service handles contact form submissions and sends notifications to both admin and customers.

## Features

- ✅ Contact form notifications to admin
- ✅ Customer confirmation emails
- ✅ Spam prevention measures
- ✅ Support for Gmail and custom domain emails
- ✅ Email validation and formatting

## Environment Variables

```bash
# Required
GMAIL_USER=your-email@domain.com
GMAIL_APP_PASSWORD=your-app-password
CONTACT_EMAIL=admin@domain.com

# Optional
NODE_ENV=development
```

## Email Providers Supported

### Gmail
- Uses Gmail SMTP service
- Requires App Password (not regular password)
- Better deliverability than custom domains

### Custom Domain (Namecheap, etc.)
- Uses SMTP server configuration
- Requires proper DNS setup for best deliverability
- More control over email reputation

## 🚨 SPAM PREVENTION SETUP (CRITICAL)

### 1. DNS Records Setup

To prevent emails from going to spam, you MUST set up these DNS records:

#### SPF Record (TXT)
```
Type: TXT
Name: @ (or domain root)
Value: v=spf1 include:_spf.google.com ~all
```

#### DKIM Record (TXT)
```
Type: TXT
Name: default._domainkey
Value: v=DKIM1; k=rsa; p=YOUR_PUBLIC_KEY
```

#### DMARC Record (TXT)
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:dmarc@yourdomain.com; ruf=mailto:dmarc@yourdomain.com; sp=quarantine; adkim=r; aspf=r;
```

### 2. Where to Add DNS Records

#### Namecheap
1. Go to Domain List → Manage
2. Click "Advanced DNS"
3. Add the TXT records above

#### Gmail (if using Gmail for Business)
1. Go to Google Admin Console
2. Apps → Google Workspace → Gmail
3. Authentication → Configure authentication

#### Other Providers
- Look for "DNS Management" or "DNS Records"
- Add TXT records as shown above

### 3. Email Content Best Practices

#### Subject Lines
- ✅ "New Project Inquiry from John - Wafipix"
- ❌ "URGENT: Contact Form Submission"

#### From Names
- ✅ "Wafipix Digital Agency"
- ❌ "Contact Form" or "No Reply"

#### Content
- ✅ Professional, business-like language
- ❌ Excessive emojis, ALL CAPS, or spam keywords

### 4. Technical Improvements Made

- ✅ Proper email headers (X-Mailer, Message-ID, etc.)
- ✅ Email validation before sending
- ✅ Reduced connection pooling for better reputation
- ✅ Proper TLS/SSL configuration
- ✅ Rate limiting to prevent spam triggers

## Testing

### Test Email Configuration
```bash
node test-email.js
```

### Test Email Delivery
1. Submit contact form
2. Check admin inbox
3. Check customer inbox (and spam folder)
4. Verify headers and formatting

## Troubleshooting

### Emails Still Going to Spam?

1. **Check DNS Records** - Verify SPF, DKIM, DMARC are set correctly
2. **Wait 24-48 Hours** - DNS changes take time to propagate
3. **Check Email Provider** - Some providers have stricter filters
4. **Review Content** - Avoid spam trigger words
5. **Test with Different Providers** - Gmail, Outlook, Yahoo

### Common Issues

#### "Authentication Failed"
- Check GMAIL_APP_PASSWORD (not regular password)
- Verify 2FA is enabled for Gmail
- Check if using correct email address

#### "Connection Timeout"
- Check firewall settings
- Verify SMTP port (587 for TLS, 465 for SSL)
- Check if email provider blocks connections

#### "Rate Limit Exceeded"
- Reduce email frequency
- Implement proper delays between emails
- Check provider's sending limits

## Production Checklist

- [ ] DNS records (SPF, DKIM, DMARC) configured
- [ ] Environment variables set
- [ ] Email templates reviewed for spam triggers
- [ ] Rate limiting implemented
- [ ] Monitoring and logging enabled
- [ ] Backup email service configured

## Support

For email delivery issues:
1. Check DNS records first
2. Test with different email providers
3. Review email content and formatting
4. Contact email provider support if needed
