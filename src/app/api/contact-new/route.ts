import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { resend, EMAIL_FROM, EMAIL_REPLY_TO } from '@/lib/resend';
import { createContactNotificationEmailTemplate } from '@/lib/email-templates';

export async function POST(request: NextRequest) {
  console.log('Contact API called!');
  try {
    const { name, email, message } = await request.json();
    console.log('Received data:', { name, email, message });

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

    console.log('About to insert into database...');
    
    // Insert into contact_messages table with timeout
    const insertPromise = supabaseAdmin
      .from('contact_messages')
      .insert({
        name,
        email,
        message,
      });

    // Add 8-second timeout (well under Vercel's 10s limit)
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Database timeout after 8 seconds')), 8000)
    );

    let insertError;
    try {
      const result = await Promise.race([insertPromise, timeoutPromise]);
      insertError = (result as any)?.error;
    } catch (timeoutError) {
      console.error('Database operation timed out:', timeoutError);
      return NextResponse.json(
        { error: 'Database request timed out' },
        { status: 408 }
      );
    }

    if (insertError) {
      console.error('Insert error:', insertError);
      return NextResponse.json(
        { error: 'Failed to save message' },
        { status: 500 }
      );
    }

    console.log('Database insert completed successfully!');

    // Send notification email
    try {
      console.log('About to send email notification...');
      console.log('Email config:', { from: EMAIL_FROM, to: EMAIL_REPLY_TO });
      const emailTemplate = createContactNotificationEmailTemplate(name, email, message);
      console.log('Email template created, subject:', emailTemplate.subject);
      
      const emailData = {
        from: EMAIL_FROM,
        to: EMAIL_REPLY_TO,
        subject: emailTemplate.subject,
        html: emailTemplate.html,
        text: emailTemplate.text,
        reply_to: email,
      };
      console.log('Sending email with data:', JSON.stringify(emailData, null, 2));
      
      const emailPromise = resend.emails.send(emailData);

      const emailTimeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Email timeout after 8 seconds')), 8000)
      );

      await Promise.race([emailPromise, emailTimeoutPromise]);
      console.log('Email sent successfully!');
    } catch (emailError) {
      console.error('Email failed but database insert succeeded:', emailError);
      // Continue - don't fail the request if email fails
    }

    return NextResponse.json({
      message: 'Thank you for your message! We\'ll get back to you soon.',
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}