import express from 'express';
import { contactValidationRules, validate } from '../middleware/validation.js';
import { verifyRecaptcha } from '../middleware/recaptcha.js';
import { sendContactEmail } from '../config/email.js';

const router = express.Router();

/**
 * POST /api/contact
 * Handle contact form submission
 */
router.post('/',
  contactValidationRules,
  validate,
  verifyRecaptcha,
  async (req, res) => {
    try {
      const { fullName, email, phone, companyName, message } = req.body;

      // Log submission (without sensitive data in production)
      console.log('📬 New contact form submission:', {
        from: email,
        name: fullName,
        timestamp: new Date().toISOString(),
        recaptchaScore: req.recaptchaScore
      });

      // Prepare form data
      const formData = {
        fullName,
        email,
        phone: phone || '',
        companyName: companyName || '',
        message
      };

      // Send email
      await sendContactEmail(formData);

      // Success response
      res.status(200).json({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      });

    } catch (error) {
      console.error('❌ Contact form error:', error);

      // Check if it's an email sending error
      if (error.message === 'Failed to send email') {
        return res.status(500).json({
          error: 'Failed to send your message. Please try again or contact us directly at info@jsmcompliance.com'
        });
      }

      // Generic error response
      res.status(500).json({
        error: 'An error occurred processing your request. Please try again later.'
      });
    }
  }
);

export default router;
