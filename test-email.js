#!/usr/bin/env node

/**
 * Simple Email Service Test Script
 * 
 * Usage:
 * 1. Make sure you have set up your .env.local file
 * 2. Run: node test-email.js
 * 
 * This will test your email service connection without sending actual emails
 */

const { testEmailService } = require('./src/lib/email/test-connection');

console.log('🚀 Wafipix Email Service Test\n');

testEmailService()
  .then((success) => {
    if (success) {
      console.log('\n🎉 Email service is working correctly!');
      console.log('📝 You can now use the contact form on your website.');
    } else {
      console.log('\n❌ Email service test failed.');
      console.log('🔧 Please check the error messages above and fix the issues.');
    }
  })
  .catch((error) => {
    console.error('\n💥 Unexpected error occurred:', error);
    process.exit(1);
  });
