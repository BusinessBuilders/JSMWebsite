const Accessibility = () => {
  return (
    <div className="min-h-screen bg-jsm-darker text-gray-300">
      <div className="pt-20 pb-12 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Accessibility Statement
          </h1>
          <p className="text-xl text-gray-200 text-center">
            Last Updated: November 1, 2025
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Commitment to Accessibility</h2>
            <p className="mb-4">
              JSM Compliance Solutions is committed to ensuring digital accessibility for people
              with disabilities. We are continually improving the user experience for everyone and
              applying the relevant accessibility standards.
            </p>
            <p className="mb-4">
              We believe that everyone should be able to access our services and information,
              regardless of ability. This commitment extends to all aspects of our website and
              digital presence.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Conformance Standards</h2>
            <p className="mb-4">
              Our website strives to conform to the following accessibility standards:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-jsm-dark p-4 rounded-lg border border-gray-700">
                <h3 className="font-semibold text-white mb-2">WCAG 2.1 Level AA</h3>
                <p className="text-sm">
                  Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA conformance.
                  This ensures our website is perceivable, operable, understandable, and robust
                  for all users.
                </p>
              </div>
              <div className="bg-jsm-dark p-4 rounded-lg border border-gray-700">
                <h3 className="font-semibold text-white mb-2">Section 508</h3>
                <p className="text-sm">
                  Compliance with Section 508 of the Rehabilitation Act, which requires federal
                  agencies to make electronic and information technology accessible.
                </p>
              </div>
              <div className="bg-jsm-dark p-4 rounded-lg border border-gray-700">
                <h3 className="font-semibold text-white mb-2">ADA Title III</h3>
                <p className="text-sm">
                  Adherence to the Americans with Disabilities Act (ADA) Title III requirements
                  for places of public accommodation.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Accessibility Features</h2>
            <p className="mb-4">
              Our website includes the following accessibility features:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Visual Accessibility</h3>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>High color contrast ratios (4.5:1 minimum for normal text)</li>
              <li>Resizable text up to 200% without loss of content or functionality</li>
              <li>Clear, readable fonts (Inter font family)</li>
              <li>Consistent and predictable layout</li>
              <li>Visual focus indicators for keyboard navigation</li>
              <li>No information conveyed by color alone</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Keyboard Navigation</h3>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>All interactive elements accessible via keyboard</li>
              <li>Logical tab order throughout the site</li>
              <li>Skip navigation links to main content</li>
              <li>No keyboard traps</li>
              <li>Visible focus indicators</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Screen Reader Support</h3>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Semantic HTML5 markup</li>
              <li>ARIA labels and landmarks</li>
              <li>Alternative text for all images</li>
              <li>Descriptive link text</li>
              <li>Proper heading hierarchy (H1-H6)</li>
              <li>Form labels and instructions</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Content Structure</h3>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Clear page titles</li>
              <li>Descriptive headings and labels</li>
              <li>Organized content sections</li>
              <li>Consistent navigation</li>
              <li>Breadcrumb navigation where applicable</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Forms and Input</h3>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Clear form labels</li>
              <li>Error messages that are specific and helpful</li>
              <li>Input validation with descriptive feedback</li>
              <li>Required fields clearly marked</li>
              <li>Sufficient time to complete forms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Assistive Technologies</h2>
            <p className="mb-4">
              Our website is designed to work with the following assistive technologies:
            </p>
            <div className="bg-jsm-dark p-4 rounded-lg border border-gray-700 mb-4">
              <ul className="space-y-2">
                <li><strong className="text-white">Screen readers:</strong> JAWS, NVDA, VoiceOver, TalkBack</li>
                <li><strong className="text-white">Screen magnification:</strong> ZoomText, MAGic, browser zoom</li>
                <li><strong className="text-white">Speech recognition:</strong> Dragon NaturallySpeaking, Voice Control</li>
                <li><strong className="text-white">Alternative input devices:</strong> Switch control, eye tracking, head mouse</li>
              </ul>
            </div>
            <p className="mb-4">
              We test our website regularly with popular screen readers and assistive technologies
              to ensure compatibility.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Browser Compatibility</h2>
            <p className="mb-4">
              Our website is compatible with the following browsers and their accessibility features:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Google Chrome (latest version)</li>
              <li>Mozilla Firefox (latest version)</li>
              <li>Apple Safari (latest version)</li>
              <li>Microsoft Edge (latest version)</li>
            </ul>
            <p className="mb-4">
              For the best experience, we recommend using the latest version of your preferred browser.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Known Limitations</h2>
            <p className="mb-4">
              Despite our best efforts, some limitations may exist. We are aware of the following
              areas where we continue to make improvements:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Some third-party embedded content may not be fully accessible</li>
              <li>PDF documents are being updated to meet accessibility standards</li>
              <li>Legacy content is being reviewed and updated systematically</li>
            </ul>
            <p className="mb-4">
              We are actively working to address these limitations and welcome feedback on any
              accessibility barriers you encounter.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Alternative Formats</h2>
            <p className="mb-4">
              If you require content in an alternative format, we are happy to provide it.
              Available formats may include:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Large print</li>
              <li>Braille</li>
              <li>Audio format</li>
              <li>Plain text</li>
              <li>Accessible PDFs</li>
            </ul>
            <p className="mb-4">
              Please contact us to request content in an alternative format. We will make every
              effort to provide the requested format within a reasonable timeframe.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Testing and Evaluation</h2>
            <p className="mb-4">
              We regularly evaluate our website's accessibility through:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Automated accessibility testing tools</li>
              <li>Manual testing with assistive technologies</li>
              <li>User testing with individuals with disabilities</li>
              <li>Third-party accessibility audits</li>
              <li>Code reviews for accessibility compliance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Training and Awareness</h2>
            <p className="mb-4">
              All JSM Compliance Solutions team members involved in website content creation and
              maintenance receive training on:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Web accessibility principles and standards</li>
              <li>Creating accessible content</li>
              <li>Using accessibility testing tools</li>
              <li>Understanding diverse user needs</li>
              <li>Best practices for inclusive design</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Continuous Improvement</h2>
            <p className="mb-4">
              Accessibility is an ongoing effort. We are committed to:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Regular accessibility audits and updates</li>
              <li>Incorporating user feedback</li>
              <li>Staying current with accessibility standards</li>
              <li>Implementing new accessibility features</li>
              <li>Monitoring emerging assistive technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Feedback and Contact</h2>
            <p className="mb-4">
              We welcome your feedback on the accessibility of our website. If you encounter
              accessibility barriers, please let us know:
            </p>
            <div className="bg-jsm-dark p-6 rounded-lg border border-gray-700 mb-4">
              <p className="mb-2"><strong className="text-white">JSM Compliance Solutions</strong></p>
              <p className="mb-2">Accessibility Coordinator</p>
              <p className="mb-2">Email: accessibility@jsmcompliance.com</p>
              <p className="mb-2">Phone: +1 (555) 123-4567</p>
              <p className="mb-2">TTY: +1 (555) 123-4568</p>
              <p className="mb-2">Address: 123 Pharma Lane, Suite 100</p>
              <p>Boston, MA 02101, United States</p>
            </div>
            <p className="mb-4">
              When contacting us, please provide:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>The web page URL where you encountered the issue</li>
              <li>A description of the accessibility barrier</li>
              <li>Your contact information</li>
              <li>The assistive technology you were using (if applicable)</li>
            </ul>
            <p className="mb-4">
              We aim to respond to accessibility feedback within 3 business days and will work
              with you to resolve the issue promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Formal Complaints</h2>
            <p className="mb-4">
              If you are not satisfied with our response to your accessibility concern, you may file
              a formal complaint with:
            </p>
            <div className="bg-jsm-dark p-4 rounded-lg border border-gray-700">
              <p className="mb-2"><strong className="text-white">U.S. Department of Justice</strong></p>
              <p className="mb-2">Civil Rights Division</p>
              <p className="mb-2">950 Pennsylvania Avenue, NW</p>
              <p className="mb-2">Washington, DC 20530</p>
              <p>Website: <a href="https://www.ada.gov" target="_blank" rel="noopener noreferrer" className="text-jsm-purple hover:text-purple-400 underline">www.ada.gov</a></p>
            </div>
          </section>

          <section className="mt-12 p-6 bg-blue-600 bg-opacity-10 border-l-4 border-blue-600 rounded">
            <p className="text-sm">
              <strong className="text-white">Our Promise:</strong> Accessibility is not just about
              compliance—it's about ensuring everyone can access the information and services they
              need. We are dedicated to making our website accessible to all users and continuously
              improving the experience for everyone.
            </p>
          </section>

          <section className="mt-8 p-6 bg-jsm-purple bg-opacity-10 border border-jsm-purple rounded">
            <h3 className="font-semibold text-white mb-3">Technical Specifications</h3>
            <p className="text-sm mb-2">
              This website relies on the following technologies for accessibility conformance:
            </p>
            <ul className="text-sm list-disc list-inside space-y-1 ml-4">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (React)</li>
              <li>WAI-ARIA (Accessible Rich Internet Applications)</li>
            </ul>
            <p className="text-sm mt-3">
              These technologies are relied upon for conformance with WCAG 2.1 Level AA standards.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Accessibility
