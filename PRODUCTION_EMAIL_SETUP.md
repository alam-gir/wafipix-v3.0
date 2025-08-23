# Production Email Setup Guide

## Issues Fixed

✅ **Performance Issues:**
- Removed unnecessary console.log statements
- Simplified email service architecture
- Added concurrent email sending with Promise.allSettled
- Optimized transporter configuration

✅ **Production Issues:**
- Fixed TLS settings for production security
- Added proper timeouts for reliability
- Removed development-only configurations
- Added proper error handling

## Production Deployment Steps

### 1. Environment Variables Setup

Create a `.env.local` file on your VPS with these values:

```bash
# Email Configuration - REQUIRED
GMAIL_USER=your_actual_gmail@gmail.com
GMAIL_APP_PASSWORD=your_actual_gmail_app_password
CONTACT_EMAIL=contact@wafipix.com

# Production Settings
NODE_ENV=production
```

### 2. Gmail App Password Setup

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to Security → 2-Step Verification → App passwords
3. Generate a new app password for "Mail"
4. Use this password as `GMAIL_APP_PASSWORD`

### 3. Test Email Configuration

Run the test script on your VPS:

```bash
node test-email.js
```

This will verify:
- Environment variables are set correctly
- Email authentication works
- Connection can be established
- Emails can be sent

### 4. Common Production Issues & Solutions

#### Issue: Authentication Failed (EAUTH)
**Solution:** 
- Verify GMAIL_USER is correct
- Ensure GMAIL_APP_PASSWORD is an App Password, not your regular password
- Check if 2FA is enabled on your Google account

#### Issue: Connection Failed (ECONNECTION)
**Solution:**
- Check if port 587/465 is open on your VPS firewall
- Verify your VPS provider allows SMTP connections
- Some VPS providers block SMTP by default

#### Issue: Connection Timeout (ETIMEDOUT)
**Solution:**
- Check your VPS network configuration
- Verify DNS resolution works correctly
- Some VPS providers have network restrictions

### 5. VPS Firewall Configuration

If using UFW:
```bash
sudo ufw allow 587
sudo ufw allow 465
```

If using iptables:
```bash
sudo iptables -A OUTPUT -p tcp --dport 587 -j ACCEPT
sudo iptables -A OUTPUT -p tcp --dport 465 -j ACCEPT
```

### 6. Alternative Email Providers

If Gmail continues to have issues, consider:

#### Option 1: SendGrid
```bash
npm install @sendgrid/mail
```

#### Option 2: Resend
```bash
npm install resend
```

#### Option 3: AWS SES
```bash
npm install @aws-sdk/client-ses
```

### 7. Monitoring & Debugging

#### Check Email Service Status
```bash
# Check if the service is running
pm2 status

# Check logs for errors
pm2 logs

# Restart the service if needed
pm2 restart all
```

#### Test Email API Endpoint
```bash
curl -X POST http://yourdomain.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","phone":"1234567890","message":"Test message"}'
```

### 8. Performance Optimizations Applied

✅ **Concurrent Email Sending:** Admin and customer emails are sent simultaneously
✅ **Removed Console Logs:** Eliminated performance overhead from logging
✅ **Simplified Architecture:** Removed unnecessary class abstractions
✅ **Production TLS:** Secure configuration for production environments
✅ **Proper Timeouts:** Added connection timeouts for reliability

### 9. Security Considerations

- TLS is now properly configured for production
- Environment variables are properly validated
- No sensitive information is logged
- Proper error handling without information leakage

## Support

If you continue to experience issues:

1. Run `node test-email.js` and share the output
2. Check your VPS provider's SMTP restrictions
3. Verify your Gmail account settings
4. Consider using an alternative email service provider

## Quick Fix Commands

```bash
# Restart the application
pm2 restart all

# Check environment variables
cat .env.local

# Test email configuration
node test-email.js

# Check application logs
pm2 logs --lines 100
```
