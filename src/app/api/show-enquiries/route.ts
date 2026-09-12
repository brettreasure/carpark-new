import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { resend, EMAIL_FROM, EMAIL_REPLY_TO } from '@/lib/resend';
import { createShowEnquiryNotificationEmailTemplate } from '@/lib/email-templates';

const ENQUIRY_TYPES = ['Programming', 'Media', 'Corporate booking', 'Something else'];

export async function POST(request: NextRequest) {
  try {
    const { name, email, enquiryType, message } = await request.json();

    if (!name || !email || !enquiryType || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (!ENQUIRY_TYPES.includes(enquiryType)) {
      return NextResponse.json(
        { error: 'Invalid enquiry type' },
        { status: 400 }
      );
    }

    const { error: insertError } = await supabaseAdmin
      .from('show_enquiries')
      .insert({
        name,
        email,
        enquiry_type: enquiryType,
        message,
      });

    if (insertError) {
      console.error('Insert error:', insertError);
      return NextResponse.json(
        { error: 'Failed to submit enquiry' },
        { status: 500 }
      );
    }

    try {
      const emailTemplate = createShowEnquiryNotificationEmailTemplate(name, email, enquiryType, message);

      const emailPromise = resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_REPLY_TO,
        subject: emailTemplate.subject,
        html: emailTemplate.html,
        text: emailTemplate.text,
        reply_to: email,
      });

      const emailTimeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Email timeout after 8 seconds')), 8000)
      );

      await Promise.race([emailPromise, emailTimeoutPromise]);
    } catch (emailError) {
      console.error('Email failed but database insert succeeded:', emailError);
    }

    return NextResponse.json({
      message: "Thanks — I'll be in touch soon.",
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
