// Simple email test script for production debugging
// Run with: node test-email.js

require('dotenv').config({ path: '.env.local' });

const nodemailer = require('nodemailer');

async function testEmail() {
  console.log('Testing email configuration...');
  console.log('GMAIL_USER:', process.env.GMAIL_USER ? 'Set' : 'Not set');
  console.log('GMAIL_APP_PASSWORD:', process.env.GMAIL_APP_PASSWORD ? 'Set' : 'Not set');
  console.log('CONTACT_EMAIL:', process.env.CONTACT_EMAIL ? 'Set' : 'Not set');
  console.log('NODE_ENV:', process.env.NODE_ENV || 'Not set');
  
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error('❌ Missing required environment variables');
    return;
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      secure: true,
      tls: {
        rejectUnauthorized: true,
      },
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000,
    });

    console.log('✅ Transporter created successfully');

    // Test connection
    await transporter.verify();
    console.log('✅ Connection verified successfully');

    // Test sending email
    const mailOptions = {
      from: `"Wafipix Test" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
      subject: 'Email Test - Wafipix',
      text: 'This is a test email to verify the email service is working correctly.',
      html: '<h1>Email Test</h1><p>This is a test email to verify the email service is working correctly.</p>',
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully');
    console.log('Message ID:', result.messageId);
    
  } catch (error) {
    console.error('❌ Email test failed:', error.message);
    
    if (error.code === 'EAUTH') {
      console.error('Authentication failed. Check your GMAIL_USER and GMAIL_APP_PASSWORD');
    } else if (error.code === 'ECONNECTION') {
      console.error('Connection failed. Check your network and firewall settings');
    } else if (error.code === 'ETIMEDOUT') {
      console.error('Connection timed out. Check your network settings');
    }
  }
}

testEmail();
