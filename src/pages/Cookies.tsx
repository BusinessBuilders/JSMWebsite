const Cookies = () => {
  return (
    <div className="min-h-screen bg-jsm-darker text-gray-300">
      <div className="pt-20 pb-12 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-200 text-center">
            Last Updated: November 1, 2025
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your device when you visit a website.
              They are widely used to make websites work more efficiently and provide information
              to website owners.
            </p>
            <p className="mb-4">
              JSM Compliance Solutions uses cookies and similar technologies to enhance your browsing
              experience, analyze site traffic, and understand where our visitors are coming from.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Types of Cookies We Use</h2>

            <h3 className="text-xl font-semibold text-white mb-3">2.1 Essential Cookies</h3>
            <p className="mb-4">
              These cookies are necessary for the website to function properly. They enable basic
              functions like page navigation, secure access, and form submissions.
            </p>
            <div className="bg-jsm-dark p-4 rounded-lg mb-4 border border-gray-700">
              <p className="mb-2"><strong className="text-white">Examples:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Session management cookies</li>
                <li>Security cookies</li>
                <li>Load balancing cookies</li>
              </ul>
              <p className="mt-3 text-sm"><strong className="text-white">Duration:</strong> Session or up to 24 hours</p>
              <p className="text-sm"><strong className="text-white">Can be disabled:</strong> No (required for site functionality)</p>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Analytics Cookies</h3>
            <p className="mb-4">
              These cookies help us understand how visitors interact with our website by collecting
              and reporting information anonymously.
            </p>
            <div className="bg-jsm-dark p-4 rounded-lg mb-4 border border-gray-700">
              <p className="mb-2"><strong className="text-white">Examples:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Google Analytics (_ga, _gid, _gat)</li>
                <li>Page view tracking</li>
                <li>User behavior analysis</li>
              </ul>
              <p className="mt-3 text-sm"><strong className="text-white">Duration:</strong> Up to 2 years</p>
              <p className="text-sm"><strong className="text-white">Can be disabled:</strong> Yes (via browser settings or opt-out)</p>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.3 Functional Cookies</h3>
            <p className="mb-4">
              These cookies enable enhanced functionality and personalization, such as remembering
              your preferences and settings.
            </p>
            <div className="bg-jsm-dark p-4 rounded-lg mb-4 border border-gray-700">
              <p className="mb-2"><strong className="text-white">Examples:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Language preferences</li>
                <li>Region selection</li>
                <li>Form auto-fill data</li>
              </ul>
              <p className="mt-3 text-sm"><strong className="text-white">Duration:</strong> Up to 1 year</p>
              <p className="text-sm"><strong className="text-white">Can be disabled:</strong> Yes (may affect user experience)</p>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.4 Marketing/Targeting Cookies</h3>
            <p className="mb-4">
              These cookies track your browsing activity to display relevant advertisements and
              measure the effectiveness of marketing campaigns.
            </p>
            <div className="bg-jsm-dark p-4 rounded-lg mb-4 border border-gray-700">
              <p className="mb-2"><strong className="text-white">Examples:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Google Ads remarketing</li>
                <li>LinkedIn Insight Tag</li>
                <li>Facebook Pixel (if applicable)</li>
              </ul>
              <p className="mt-3 text-sm"><strong className="text-white">Duration:</strong> Up to 1 year</p>
              <p className="text-sm"><strong className="text-white">Can be disabled:</strong> Yes (via browser settings or opt-out)</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Cookies</h2>
            <p className="mb-4">
              We use services from trusted third-party providers that may set cookies on your device:
            </p>
            <div className="space-y-4">
              <div className="bg-jsm-dark p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-white mb-2">Google Analytics</h4>
                <p className="text-sm mb-2">
                  Helps us understand how visitors use our website. Data collected is anonymous
                  and aggregated.
                </p>
                <p className="text-sm">
                  <strong className="text-white">Opt-out:</strong>{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-jsm-purple hover:text-purple-400 underline"
                  >
                    Google Analytics Opt-out
                  </a>
                </p>
              </div>

              <div className="bg-jsm-dark p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-white mb-2">Google reCAPTCHA</h4>
                <p className="text-sm mb-2">
                  Protects our contact forms from spam and abuse. Analyzes user behavior to
                  distinguish humans from bots.
                </p>
                <p className="text-sm">
                  <strong className="text-white">Privacy Policy:</strong>{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-jsm-purple hover:text-purple-400 underline"
                  >
                    Google Privacy Policy
                  </a>
                </p>
              </div>

              <div className="bg-jsm-dark p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-white mb-2">Google Fonts</h4>
                <p className="text-sm mb-2">
                  Provides web fonts for better typography. May collect basic usage data.
                </p>
                <p className="text-sm">
                  <strong className="text-white">Learn more:</strong>{' '}
                  <a
                    href="https://developers.google.com/fonts/faq/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-jsm-purple hover:text-purple-400 underline"
                  >
                    Google Fonts Privacy
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. How to Control Cookies</h2>

            <h3 className="text-xl font-semibold text-white mb-3">4.1 Browser Settings</h3>
            <p className="mb-4">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Block all cookies</li>
              <li>Accept only first-party cookies</li>
              <li>Delete cookies when you close your browser</li>
              <li>View and delete specific cookies</li>
            </ul>

            <div className="bg-jsm-dark p-4 rounded-lg mb-4 border border-gray-700">
              <p className="mb-2"><strong className="text-white">Browser-specific guides:</strong></p>
              <ul className="space-y-2 ml-4">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-jsm-purple hover:text-purple-400 underline"
                  >
                    Chrome Cookie Settings
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-jsm-purple hover:text-purple-400 underline"
                  >
                    Firefox Cookie Settings
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-jsm-purple hover:text-purple-400 underline"
                  >
                    Safari Cookie Settings
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-jsm-purple hover:text-purple-400 underline"
                  >
                    Edge Cookie Settings
                  </a>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.2 Opt-Out Tools</h3>
            <p className="mb-4">
              You can opt out of specific types of cookies using industry opt-out tools:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>
                <a
                  href="http://optout.networkadvertising.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jsm-purple hover:text-purple-400 underline"
                >
                  Network Advertising Initiative (NAI) Opt-Out
                </a>
              </li>
              <li>
                <a
                  href="http://optout.aboutads.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jsm-purple hover:text-purple-400 underline"
                >
                  Digital Advertising Alliance (DAA) Opt-Out
                </a>
              </li>
              <li>
                <a
                  href="http://www.youronlinechoices.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jsm-purple hover:text-purple-400 underline"
                >
                  European Interactive Digital Advertising Alliance (EDAA) Opt-Out
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.3 Do Not Track</h3>
            <p className="mb-4">
              Some browsers support a "Do Not Track" signal. However, there is no universal standard
              for how websites should respond to this signal. We honor Do Not Track preferences where
              technically feasible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Impact of Disabling Cookies</h2>
            <p className="mb-4">
              Blocking or deleting cookies may impact your experience on our website:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Some features may not function properly</li>
              <li>You may need to re-enter information</li>
              <li>Personalization features may be lost</li>
              <li>Form submissions may not work correctly</li>
            </ul>
            <p className="mb-4">
              Essential cookies cannot be disabled as they are necessary for basic website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. Mobile Devices</h2>
            <p className="mb-4">
              Mobile devices may use different technologies than cookies. You can control tracking
              through your device settings:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li><strong className="text-white">iOS:</strong> Settings → Privacy → Tracking → Limit Ad Tracking</li>
              <li><strong className="text-white">Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">7. Updates to This Policy</h2>
            <p className="mb-4">
              We may update this Cookie Policy from time to time to reflect changes in technology,
              legislation, or our practices. We encourage you to review this page periodically.
            </p>
            <p className="mb-4">
              The "Last Updated" date at the top of this page indicates when this policy was last revised.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="bg-jsm-dark p-6 rounded-lg border border-gray-700">
              <p className="mb-2"><strong className="text-white">JSM Compliance Solutions</strong></p>
              <p className="mb-2">Email: privacy@jsmcompliance.com</p>
              <p className="mb-2">Phone: +1 (555) 123-4567</p>
              <p className="mb-2">Address: 123 Pharma Lane, Suite 100</p>
              <p>Boston, MA 02101, United States</p>
            </div>
          </section>

          <section className="mt-12 p-6 bg-orange-600 bg-opacity-10 border-l-4 border-orange-600 rounded">
            <p className="text-sm">
              <strong className="text-white">Your Privacy Matters:</strong> We are committed to
              transparency about our data collection practices. This Cookie Policy works together
              with our <a href="/privacy" className="text-jsm-purple hover:text-purple-400 underline">Privacy Policy</a> to
              help you understand how we handle your information.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Cookies
