import { emailService } from './service';

/**
 * Test email service connection and functionality
 * Run this script to verify your email setup is working correctly
 */
export async function testEmailService() {
  console.log('🧪 Testing Email Service...\n');

  try {
    // Test 1: Verify connection
    console.log('1️⃣ Testing email service connection...');
    const isConnected = await emailService.verifyConnection();
    
    if (isConnected) {
      console.log('✅ Email service connection successful!\n');
    } else {
      console.log('❌ Email service connection failed!\n');
      return false;
    }

    // Test 2: Get service status
    console.log('2️⃣ Getting email service status...');
    const status = await emailService.getStatus();
    console.log('📊 Service Status:', status, '\n');

    // Test 3: Test with sample data (optional - uncomment to test actual email sending)
    /*
    console.log('3️⃣ Testing email sending with sample data...');
    const sampleData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      message: 'This is a test message from the email service test utility.',
    };

    const results = await emailService.sendContactEmails(sampleData);
    console.log('📧 Email Test Results:', results, '\n');
    */

    console.log('🎉 All tests completed successfully!');
    console.log('📧 Your email service is ready to use.');
    
    return true;

  } catch (error) {
    console.error('❌ Email service test failed:', error);
    console.log('\n🔧 Troubleshooting tips:');
    console.log('1. Check your .env.local file has GMAIL_USER and GMAIL_APP_PASSWORD');
    console.log('2. Verify your Gmail App Password is correct');
    console.log('3. Ensure 2-Factor Authentication is enabled on your Gmail account');
    console.log('4. Check that your Gmail account allows app access');
    
    return false;
  }
}

// Run test if this file is executed directly
if (require.main === module) {
  testEmailService()
    .then((success) => {
      process.exit(success ? 0 : 1);
    })
    .catch((error) => {
      console.error('Unexpected error:', error);
      process.exit(1);
    });
}
