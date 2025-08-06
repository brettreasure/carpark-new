import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { resend, EMAIL_FROM, EMAIL_REPLY_TO } from '@/lib/resend';
import { createDownloadRequestNotificationTemplate } from '@/lib/email-templates';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();

    // Validate input
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
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

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');
    console.log('Processing download request for:', { name, email });

    // Check if email already exists
    const { data: existingUser, error: checkError } = await supabaseAdmin
      .from('downloaders')
      .select('email, email_verified')
      .eq('email', email)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Database error:', checkError);
      return NextResponse.json(
        { error: 'Database error' },
        { status: 500 }
      );
    }

    if (existingUser) {
      if (existingUser.email_verified) {
        return NextResponse.json(
          { message: 'You already have access to download the book!' },
          { status: 200 }
        );
      } else {
        // Update existing record with new verification token
        const { error: updateError } = await supabaseAdmin
          .from('downloaders')
          .update({ 
            name,
            verification_token: verificationToken,
            created_at: new Date().toISOString()
          })
          .eq('email', email);

        if (updateError) {
          console.error('Update error:', updateError);
          return NextResponse.json(
            { error: 'Failed to update verification' },
            { status: 500 }
          );
        }
      }
    } else {
      // Insert new downloader record
      const { error: insertError } = await supabaseAdmin
        .from('downloaders')
        .insert({
          name,
          email,
          verification_token: verificationToken,
        });

      if (insertError) {
        console.error('Insert error:', insertError);
        return NextResponse.json(
          { error: 'Failed to create download request' },
          { status: 500 }
        );
      }
    }

    // Send notification email to admin (no verification email to user needed)
    try {
      console.log('Sending download request notification...');
      const notificationTemplate = createDownloadRequestNotificationTemplate(name, email, !!existingUser);
      
      await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_REPLY_TO,
        subject: notificationTemplate.subject,
        html: notificationTemplate.html,
        text: notificationTemplate.text,
        reply_to: email,
      });
      console.log('Download notification email sent successfully!');
    } catch (notificationError) {
      console.error('Notification email failed:', notificationError);
      // Don't fail the request if notification fails
    }

    return NextResponse.json({
      message: 'Great! Your download is ready below.',
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}