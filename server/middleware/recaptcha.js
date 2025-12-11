import axios from 'axios';

/**
 * Verify Google reCAPTCHA v3 token
 */
export const verifyRecaptcha = async (req, res, next) => {
  const { recaptchaToken } = req.body;

  if (!recaptchaToken) {
    return res.status(400).json({
      error: 'reCAPTCHA token is missing'
    });
  }

  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      console.error('❌ RECAPTCHA_SECRET_KEY not configured');
      return res.status(500).json({
        error: 'reCAPTCHA verification not configured'
      });
    }

    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify`;

    const response = await axios.post(verificationUrl, null, {
      params: {
        secret: secretKey,
        response: recaptchaToken
      }
    });

    const { success, score, action } = response.data;

    // Log the reCAPTCHA response for monitoring
    console.log('reCAPTCHA verification:', {
      success,
      score,
      action,
      timestamp: new Date().toISOString()
    });

    // For reCAPTCHA v3, check the score (0.0 to 1.0)
    // Lower scores indicate likely bot behavior
    if (!success) {
      return res.status(400).json({
        error: 'reCAPTCHA verification failed. Please try again.'
      });
    }

    if (score < 0.5) {
      console.warn(`⚠️ Low reCAPTCHA score: ${score}`);
      return res.status(400).json({
        error: 'reCAPTCHA verification failed. Please try again.'
      });
    }

    // Verification successful, proceed to next middleware
    req.recaptchaScore = score;
    next();

  } catch (error) {
    console.error('❌ reCAPTCHA verification error:', error.message);
    return res.status(500).json({
      error: 'Failed to verify reCAPTCHA. Please try again.'
    });
  }
};
