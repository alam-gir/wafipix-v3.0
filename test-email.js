// Test Email Configuration
// Run this with: node test-email.js

import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

console.log('🔍 Checking Email Configuration...\n');

// Check environment variables
const emailUser = process.env.GMAIL_USER;
const emailPassword = process.env.GMAIL_APP_PASSWORD;
const contactEmail = process.env.CONTACT_EMAIL;
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

console.log('📧 Email Configuration:');
console.log(`GMAIL_USER: ${emailUser ? '✅ Set' : '❌ Missing'}`);
console.log(`GMAIL_APP_PASSWORD: ${emailPassword ? '✅ Set' : '❌ Missing'}`);
console.log(`CONTACT_EMAIL: ${contactEmail ? '✅ Set' : '❌ Missing'}`);
console.log(`NEXT_PUBLIC_META_PIXEL_ID: ${metaPixelId ? '✅ Set' : '❌ Missing'}`);

console.log('\n🔧 Validation:');

if (!emailUser) {
  console.log('❌ GMAIL_USER is missing');
} else if (emailUser.includes('@gmail.com')) {
  console.log('✅ GMAIL_USER is a Gmail address (will use Gmail SMTP)');
} else {
  console.log('✅ GMAIL_USER is a custom domain (will use Namecheap/Private Email SMTP)');
}

if (!emailPassword) {
  console.log('❌ GMAIL_APP_PASSWORD is missing');
} else {
  console.log('✅ GMAIL_APP_PASSWORD is set');
}

if (!contactEmail) {
  console.log('❌ CONTACT_EMAIL is missing (will default to GMAIL_USER)');
} else {
  console.log('✅ CONTACT_EMAIL is set');
}

if (!metaPixelId) {
  console.log('❌ NEXT_PUBLIC_META_PIXEL_ID is missing');
} else {
  console.log('✅ NEXT_PUBLIC_META_PIXEL_ID is set');
}

console.log('\n📝 Next Steps:');
if (!emailUser || !emailPassword) {
  console.log('1. Set up your email credentials in .env.local');
  console.log('2. For Gmail: Get App Password from: https://myaccount.google.com/apppasswords');
  console.log('3. For Namecheap: Use your email password');
  console.log('4. Restart your development server');
} else {
  console.log('1. ✅ Email configuration looks good!');
  console.log('2. Restart your development server');
  console.log('3. Test the contact form');
}

console.log('\n💡 Tip: Make sure .env.local is in your project root (same folder as package.json)');
