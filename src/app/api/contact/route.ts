import { NextRequest, NextResponse } from 'next/server';
import { resend, EMAIL_FROM, EMAIL_REPLY_TO } from '@/lib/resend';
import { createContactNotificationEmailTemplate } from '@/lib/email-templates';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email notification using Resend
    const emailTemplate = createContactNotificationEmailTemplate(name, email, message);

    try {
      if (!resend) {
        throw new Error('Email service not configured');
      }
      
      await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_REPLY_TO,
        replyTo: email,
        subject: emailTemplate.subject,
        html: emailTemplate.html,
        text: emailTemplate.text,
      });
      
      return NextResponse.json({
        message: 'Thank you for your message! We\'ll get back to you soon.',
      });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      
      // Log the contact form submission as backup
      console.log('Contact form submission (email failed):', {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      });
      
      return NextResponse.json({
        message: 'Thank you for your message! We\'ll get back to you soon.',
      });
    }

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}