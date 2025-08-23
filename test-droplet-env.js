// Test script for droplet environment and email service
// Run this on your droplet: node test-droplet-env.js

import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config({ path: '.env.production' });

console.log('🔍 Testing Droplet Environment...\n');

// Check environment variables
console.log('📧 Email Configuration:');
console.log('GMAIL_USER:', process.env.GMAIL_USER ? '✅ Set' : '❌ Missing');
console.log('GMAIL_APP_PASSWORD:', process.env.GMAIL_APP_PASSWORD ? '✅ Set' : '❌ Missing');
console.log('CONTACT_EMAIL:', process.env.CONTACT_EMAIL ? '✅ Set' : '❌ Missing');
console.log('NODE_ENV:', process.env.NODE_ENV || '❌ Not set');
console.log('NEXT_PUBLIC_APP_URL:', process.env.NEXT_PUBLIC_APP_URL || '❌ Not set');

console.log('\n🌐 Network Configuration:');
console.log('Current working directory:', process.cwd());
console.log('Environment file loaded:', process.env.GMAIL_USER ? 'Yes' : 'No');

// Test if we can import nodemailer
try {
  console.log('✅ Nodemailer loaded successfully');
  
  // Test transporter creation
  if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
    console.log('\n🧪 Testing Email Transporter...');
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      secure: true,
      tls: { rejectUnauthorized: true },
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000,
    });

    console.log('✅ Transporter created successfully');
    
    // Test connection
    transporter.verify()
      .then(() => {
        console.log('✅ Connection verified successfully');
      })
      .catch((error) => {
        console.log('❌ Connection failed:', error.message);
      });
    
  } else {
    console.log('❌ Cannot test email - missing credentials');
  }
  
} catch (error) {
  console.log('❌ Failed to load nodemailer:', error.message);
}

console.log('\n📋 Summary:');
if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
  console.log('✅ Environment looks good for email service');
} else {
  console.log('❌ Environment missing required email variables');
  console.log('💡 Check your .env.production file on the droplet');
}
