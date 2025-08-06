import { Resend } from 'resend';

const resendClient = new Resend(process.env.RESEND_API_KEY || 're_6ApdTWuw_CmtZM88iB5vuhEehRjN5PNsP');

// Wrapper with timeout for Resend calls
export const resend = {
  emails: {
    send: async (emailData: any) => {
      const emailPromise = resendClient.emails.send(emailData);
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Email timeout after 8 seconds')), 8000)
      );
      return Promise.race([emailPromise, timeoutPromise]);
    }
  }
};

export const EMAIL_FROM = 'onboarding@resend.dev';
export const EMAIL_REPLY_TO = 'treasure@freebeer.com.au';