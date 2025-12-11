import { body, validationResult } from 'express-validator';

/**
 * Validation rules for contact form
 */
export const contactValidationRules = [
  body('fullName')
    .trim()
    .notEmpty().withMessage('Full name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s'-]+$/).withMessage('Name can only contain letters, spaces, hyphens, and apostrophes'),

  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Must be a valid email address')
    .normalizeEmail(),

  body('phone')
    .optional({ checkFalsy: true })
    .trim()
    .matches(/^[\d\s()+-]+$/).withMessage('Phone number contains invalid characters')
    .custom((value) => {
      const digitCount = value.replace(/\D/g, '').length;
      if (digitCount < 10 || digitCount > 15) {
        throw new Error('Phone number must contain 10-15 digits');
      }
      return true;
    }),

  body('companyName')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 200 }).withMessage('Company name must not exceed 200 characters'),

  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10, max: 1000 }).withMessage('Message must be between 10 and 1000 characters'),

  body('recaptchaToken')
    .notEmpty().withMessage('reCAPTCHA token is required')
];

/**
 * Middleware to check validation results
 */
export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors.array().map(err => ({
        field: err.path,
        message: err.msg
      }))
    });
  }
  next();
};
