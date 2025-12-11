import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Create HTML email template for contact form submissions
 */
export const createEmailTemplate = (formData) => {
  const { fullName, email, phone, companyName, message } = formData;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #6B2D8F 0%, #4CAF50 100%); padding: 30px; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
        <p style="color: #f0f0f0; margin: 10px 0 0 0;">JSM Compliance Solutions</p>
      </div>

      <div style="background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 10px 10px;">
        <h2 style="color: #6B2D8F; margin-top: 0;">Contact Details</h2>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px; background: white; border: 1px solid #ddd; font-weight: bold; width: 30%;">Full Name:</td>
            <td style="padding: 12px; background: white; border: 1px solid #ddd;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 12px; background: white; border: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 12px; background: white; border: 1px solid #ddd;">
              <a href="mailto:${email}" style="color: #4CAF50; text-decoration: none;">${email}</a>
            </td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 12px; background: white; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
            <td style="padding: 12px; background: white; border: 1px solid #ddd;">
              <a href="tel:${phone}" style="color: #4CAF50; text-decoration: none;">${phone}</a>
            </td>
          </tr>
          ` : ''}
          ${companyName ? `
          <tr>
            <td style="padding: 12px; background: white; border: 1px solid #ddd; font-weight: bold;">Company:</td>
            <td style="padding: 12px; background: white; border: 1px solid #ddd;">${companyName}</td>
          </tr>
          ` : ''}
        </table>

        <h2 style="color: #6B2D8F; margin-top: 30px;">Message</h2>
        <div style="background: white; padding: 20px; border: 1px solid #ddd; border-radius: 5px; white-space: pre-wrap;">${message}</div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #ddd; color: #666; font-size: 14px;">
          <p style="margin: 5px 0;"><strong>Submitted:</strong> ${new Date().toLocaleString('en-US', {
            timeZone: 'America/New_York',
            dateStyle: 'full',
            timeStyle: 'short'
          })} EST</p>
          <p style="margin: 5px 0;"><strong>IP Address:</strong> [Logged by server]</p>
        </div>

        <div style="margin-top: 20px; padding: 15px; background: #e8f5e9; border-left: 4px solid #4CAF50; border-radius: 4px;">
          <p style="margin: 0; color: #2e7d32;">
            <strong>💡 Quick Action:</strong> Click "Reply" to respond directly to ${fullName}
          </p>
        </div>
      </div>

      <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
        <p>This email was sent from the JSM Compliance contact form</p>
        <p style="margin-top: 10px;">
          <a href="https://jsmcompliance.com" style="color: #4CAF50; text-decoration: none;">jsmcompliance.com</a>
        </p>
      </div>
    </body>
    </html>
  `;
};

/**
 * Send contact form email
 */
export const sendContactEmail = async (formData) => {
  const emailTo = process.env.EMAIL_TO.split(',').map(e => e.trim());

  const msg = {
    to: emailTo,
    from: {
      email: process.env.EMAIL_FROM,
      name: 'JSM Compliance Contact Form'
    },
    replyTo: {
      email: formData.email,
      name: formData.fullName
    },
    subject: `New Contact Form Submission from ${formData.fullName}`,
    text: `
New Contact Form Submission

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.companyName || 'Not provided'}

Message:
${formData.message}

Submitted: ${new Date().toISOString()}
    `.trim(),
    html: createEmailTemplate(formData),
  };

  try {
    await sgMail.send(msg);
    console.log(`✅ Email sent successfully to: ${emailTo.join(', ')}`);
    return { success: true };
  } catch (error) {
    console.error('❌ SendGrid Error:', error.response?.body || error.message);
    throw new Error('Failed to send email');
  }
};
