import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  console.warn('RESEND_API_KEY not found, email functionality will be disabled');
}

export const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export const EMAIL_FROM = process.env.EMAIL_FROM || 'onboarding@resend.dev';
export const EMAIL_REPLY_TO = process.env.EMAIL_REPLY_TO || 'hello@example.com';