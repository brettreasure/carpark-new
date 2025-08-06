export const createVerificationEmailTemplate = (name: string, verificationUrl: string) => ({
  subject: 'Click here to download "Not bad for a carpark"',
  html: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verify Your Email</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
          }
          .container {
            background: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .title {
            color: #2d5a27;
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .subtitle {
            color: #666;
            font-size: 16px;
          }
          .content {
            margin-bottom: 30px;
          }
          .button {
            display: inline-block;
            background-color: #2d5a27;
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            text-align: center;
            margin: 20px 0;
          }
          .button:hover {
            background-color: #1e3a1a;
          }
          .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 14px;
          }
          .link {
            color: #2d5a27;
            word-break: break-all;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">Almost There!</h1>
            <p class="subtitle">Just one more step to get your book</p>
          </div>
          
          <div class="content">
            <p>Hi ${name},</p>
            
            <p>Thanks for your interest in downloading "Not bad for a carpark"! To complete your request and get access to the download, please verify your email address by clicking the button below:</p>
            
            <div style="text-align: center;">
              <a href="${verificationUrl}" class="button">Click here to download "Not bad for a carpark"</a>
            </div>
            
            <p>If the button doesn't work, you can copy and paste this link into your browser:</p>
            <p><a href="${verificationUrl}" class="link">${verificationUrl}</a></p>
            
            <p>This verification link will expire in 24 hours for security reasons.</p>
            
            <p>If you didn't request this download, you can safely ignore this email.</p>
          </div>
          
          <div class="footer">
            <p>Thanks for your interest!<br>
            If you have any questions, feel free to reach out.</p>
          </div>
        </div>
      </body>
    </html>
  `,
  text: `
Hi ${name},

Thanks for your interest in downloading "Not bad for a carpark"! To complete your request and get access to the download, please verify your email address by visiting this link:

${verificationUrl}

This verification link will expire in 24 hours for security reasons.

If you didn't request this download, you can safely ignore this email.

Thanks for your interest!
If you have any questions, feel free to reach out.
  `.trim()
});

export const createContactNotificationEmailTemplate = (name: string, email: string, message: string) => ({
  subject: `New contact form submission from ${name}`,
  html: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
          }
          .container {
            background: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #2d5a27;
          }
          .title {
            color: #2d5a27;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .info-box {
            background-color: #f8f9fa;
            border-left: 4px solid #2d5a27;
            padding: 20px;
            margin: 20px 0;
          }
          .label {
            font-weight: bold;
            color: #2d5a27;
            margin-bottom: 5px;
          }
          .value {
            margin-bottom: 15px;
          }
          .message-content {
            background-color: #fff;
            border: 1px solid #e9ecef;
            border-radius: 6px;
            padding: 15px;
            white-space: pre-wrap;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">New Contact Form Submission</h1>
          </div>
          
          <div class="info-box">
            <div class="label">From:</div>
            <div class="value">${name}</div>
            
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${email}">${email}</a></div>
            
            <div class="label">Message:</div>
            <div class="message-content">${message}</div>
          </div>
          
          <div class="footer">
            <p>Submitted on ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </body>
    </html>
  `,
  text: `
New Contact Form Submission

From: ${name}
Email: ${email}

Message:
${message}

Submitted on ${new Date().toLocaleString()}
  `.trim()
});

export const createContributionNotificationEmailTemplate = (name: string, email: string, reviewLink: string, comment: string, wantsCredit: boolean) => ({
  subject: `New review contribution from ${name}`,
  html: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Review Contribution</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
          }
          .container {
            background: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #5d7a8a;
          }
          .title {
            color: #5d7a8a;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .info-box {
            background-color: #f8f9fa;
            border-left: 4px solid #5d7a8a;
            padding: 20px;
            margin: 20px 0;
          }
          .label {
            font-weight: bold;
            color: #5d7a8a;
            margin-bottom: 5px;
          }
          .value {
            margin-bottom: 15px;
          }
          .link {
            color: #5d7a8a;
            word-break: break-all;
          }
          .comment-content {
            background-color: #fff;
            border: 1px solid #e9ecef;
            border-radius: 6px;
            padding: 15px;
            white-space: pre-wrap;
          }
          .credit-badge {
            display: inline-block;
            background-color: ${wantsCredit ? '#e67e22' : '#6c757d'};
            color: white;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: bold;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">New Review Contribution</h1>
          </div>
          
          <div class="info-box">
            <div class="label">From:</div>
            <div class="value">${name} <span class="credit-badge">${wantsCredit ? 'Wants Credit' : 'No Credit'}</span></div>
            
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${email}">${email}</a></div>
            
            <div class="label">Google Review Link:</div>
            <div class="value"><a href="${reviewLink}" class="link">${reviewLink}</a></div>
            
            ${comment ? `
            <div class="label">Comment:</div>
            <div class="comment-content">${comment}</div>
            ` : ''}
          </div>
          
          <div class="footer">
            <p>Submitted on ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </body>
    </html>
  `,
  text: `
New Review Contribution

From: ${name}
Email: ${email}
Credit Requested: ${wantsCredit ? 'Yes' : 'No'}

Google Review Link:
${reviewLink}

${comment ? `Comment:\n${comment}\n` : ''}
Submitted on ${new Date().toLocaleString()}
  `.trim()
});

export const createDownloadRequestNotificationTemplate = (name: string, email: string, isExistingUser: boolean) => ({
  subject: `New download request from ${name}`,
  html: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Download Request</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
          }
          .container {
            background: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #2d5a27;
          }
          .title {
            color: #2d5a27;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .info-box {
            background-color: #f8f9fa;
            border-left: 4px solid #2d5a27;
            padding: 20px;
            margin: 20px 0;
          }
          .label {
            font-weight: bold;
            color: #2d5a27;
            margin-bottom: 5px;
          }
          .value {
            margin-bottom: 15px;
          }
          .status-badge {
            display: inline-block;
            background-color: ${isExistingUser ? '#e67e22' : '#28a745'};
            color: white;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: bold;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">New Download Request</h1>
          </div>
          
          <div class="info-box">
            <div class="label">From:</div>
            <div class="value">${name} <span class="status-badge">${isExistingUser ? 'Existing User' : 'New User'}</span></div>
            
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${email}">${email}</a></div>
            
            <div class="label">Status:</div>
            <div class="value">${isExistingUser ? 'Resent verification email to existing user' : 'Sent verification email to new user'}</div>
          </div>
          
          <div class="footer">
            <p>Requested on ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </body>
    </html>
  `,
  text: `
New Download Request

From: ${name}
Email: ${email}
Status: ${isExistingUser ? 'Existing User - Resent verification' : 'New User - Sent verification'}

Requested on ${new Date().toLocaleString()}
  `.trim()
});