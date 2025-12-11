import { useState } from 'react';
import type { FormEvent } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  message: string;
}

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

interface ValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

// Validation utility functions
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  if (!phone) return true; // Phone is optional
  const phoneRegex = /^[\d\s()+-]+$/;
  const digitCount = phone.replace(/\D/g, '').length;
  return phoneRegex.test(phone) && digitCount >= 10 && digitCount <= 15;
};

const validateFullName = (name: string): boolean => {
  return name.trim().length >= 2 && /^[a-zA-Z\s'-]+$/.test(name);
};

const validateMessage = (message: string): boolean => {
  return message.trim().length >= 10 && message.trim().length <= 1000;
};

const Contact = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    type: null,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (!validateFullName(value)) return 'Please enter a valid name (letters, spaces, hyphens, and apostrophes only)';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        break;
      case 'email':
        if (!value.trim()) return 'Email address is required';
        if (!validateEmail(value)) return 'Please enter a valid email address';
        break;
      case 'phone':
        if (value && !validatePhone(value)) return 'Please enter a valid phone number (10-15 digits)';
        break;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (!validateMessage(value)) {
          if (value.trim().length < 10) return 'Message must be at least 10 characters';
          if (value.trim().length > 1000) return 'Message must not exceed 1000 characters';
        }
        break;
    }
    return undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    // Validate all required fields
    const fullNameError = validateField('fullName', formData.fullName);
    if (fullNameError) {
      newErrors.fullName = fullNameError;
      isValid = false;
    }

    const emailError = validateField('email', formData.email);
    if (emailError) {
      newErrors.email = emailError;
      isValid = false;
    }

    const phoneError = validateField('phone', formData.phone);
    if (phoneError) {
      newErrors.phone = phoneError;
      isValid = false;
    }

    const messageError = validateField('message', formData.message);
    if (messageError) {
      newErrors.message = messageError;
      isValid = false;
    }

    setErrors(newErrors);
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      message: true
    });

    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      setStatus({
        type: 'error',
        message: 'Please fix the errors below before submitting.'
      });
      return;
    }

    if (!executeRecaptcha) {
      setStatus({
        type: 'error',
        message: 'reCAPTCHA not available. Please try again later.'
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      // Execute reCAPTCHA
      const token = await executeRecaptcha('contact_form');

      const submissionData = {
        ...formData,
        recaptchaToken: token
      };

      // TODO: POST to /api/contact endpoint
      console.log('Form data:', submissionData);

      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1000));

      setStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        message: ''
      });
      setErrors({});
      setTouched({});
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with our team to discuss your compliance needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:info@jsmcompliance.com"
                    className="text-[#4CAF50] hover:text-[#45a049] transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@jsmcompliance.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+15551234567"
                    className="text-[#4CAF50] hover:text-[#45a049] transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (555) 123-4567
                  </a>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Business Hours
                  </h3>
                  <p className="text-gray-300">
                    Monday - Friday<br />
                    9:00 AM - 5:00 PM EST
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-3">
                Why Choose JSM Compliance?
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#4CAF50] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Expert compliance professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#4CAF50] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>24/7 support available</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#4CAF50] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Customized solutions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send us a message
              </h2>

              {status.message && (
                <div className={`mb-6 p-4 rounded-lg ${
                  status.type === 'success'
                    ? 'bg-green-900/20 border border-green-500 text-green-300'
                    : 'bg-red-900/20 border border-red-500 text-red-300'
                }`}>
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      aria-invalid={touched.fullName && !!errors.fullName}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      className={`w-full bg-[#212121] border-2 ${
                        touched.fullName && errors.fullName
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-700 focus:border-[#6B2D8F]'
                      } text-white rounded px-4 py-2 outline-none transition-colors`}
                      placeholder="John Doe"
                    />
                    {touched.fullName && errors.fullName && (
                      <p id="fullName-error" className="mt-1 text-sm text-red-400 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      aria-invalid={touched.email && !!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full bg-[#212121] border-2 ${
                        touched.email && errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-700 focus:border-[#6B2D8F]'
                      } text-white rounded px-4 py-2 outline-none transition-colors`}
                      placeholder="john@example.com"
                    />
                    {touched.email && errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-400 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={touched.phone && !!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={`w-full bg-[#212121] border-2 ${
                        touched.phone && errors.phone
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-700 focus:border-[#6B2D8F]'
                      } text-white rounded px-4 py-2 outline-none transition-colors`}
                      placeholder="(555) 123-4567"
                    />
                    {touched.phone && errors.phone && (
                      <p id="phone-error" className="mt-1 text-sm text-red-400 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full bg-[#212121] border-2 border-gray-700 focus:border-[#6B2D8F] text-white rounded px-4 py-2 outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    rows={6}
                    aria-invalid={touched.message && !!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full bg-[#212121] border-2 ${
                      touched.message && errors.message
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-700 focus:border-[#6B2D8F]'
                    } text-white rounded px-4 py-2 outline-none transition-colors resize-none`}
                    placeholder="Tell us about your compliance needs..."
                  />
                  <div className="flex justify-between items-center mt-1">
                    {touched.message && errors.message ? (
                      <p id="message-error" className="text-sm text-red-400 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        {errors.message}
                      </p>
                    ) : (
                      <span></span>
                    )}
                    <span className={`text-sm ${
                      formData.message.length > 1000 ? 'text-red-400' : 'text-gray-400'
                    }`}>
                      {formData.message.length}/1000
                    </span>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-3 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

                <p className="text-sm text-gray-400 text-center">
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a href="https://policies.google.com/privacy" className="text-[#4CAF50] hover:underline" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="https://policies.google.com/terms" className="text-[#4CAF50] hover:underline" target="_blank" rel="noopener noreferrer">
                    Terms of Service
                  </a>{' '}
                  apply.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
