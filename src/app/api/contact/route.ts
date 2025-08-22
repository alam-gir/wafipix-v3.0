import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/app/contact/_components/contactSchema';
import { sendContactEmails } from '@/lib/email/service';

export async function POST(request: NextRequest) {
  try {
    // Parse and validate the request body
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Check if required environment variables are set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing email configuration environment variables');
      return NextResponse.json(
        { success: false, message: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Send both admin notification and customer confirmation emails
    const emailResults = await sendContactEmails(validatedData);

    if (emailResults.adminNotification && emailResults.customerConfirmation) {
      // Log successful submission
      console.log(`✅ Contact form submitted successfully from ${validatedData.email}`);
      
      return NextResponse.json({
        success: true,
        message: 'Message sent successfully!',
      });
    } else {
      console.error('❌ Failed to send one or more emails:', emailResults);
      return NextResponse.json(
        { success: false, message: 'Message received but email delivery failed. We will contact you soon.' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('❌ Error processing contact form submission:', error);

    // Handle validation errors
    if (error instanceof Error && error.message.includes('ZodError')) {
      return NextResponse.json(
        { success: false, message: 'Invalid form data' },
        { status: 400 }
      );
    }

    // Handle email service errors
    if (error instanceof Error && error.message.includes('Missing email configuration')) {
      console.error('Email service not properly configured');
      return NextResponse.json(
        { success: false, message: 'Email service temporarily unavailable' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again later.' },
      { status: 500 }
      );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
}
