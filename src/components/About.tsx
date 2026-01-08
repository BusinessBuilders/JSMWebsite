import { CurrencyDollarIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline'
import jenniferPhoto from '../assets/jennifer.jpg'

const About = () => {
  const differentiators = [
    {
      title: "Affordable",
      description: "Affordable Expertise Without the Law Firm Price Tag\n\nWhy pay over $1,000 per hour for compliance work at big law firms when you can access senior-level expertise for a fraction of the cost? At JSM Compliance Consulting, we combine deep regulatory knowledge with hands-on operational insight—delivering practical solutions, not just advice. Our boutique model means no bloated overhead, no unnecessary fees—just results that move your business forward.",
      icon: CurrencyDollarIcon,
      color: "#6B2D8F" // Purple
    },
    {
      title: "Flexible",
      description: "Flexible Support Without the Strings Attached\n\nNo overhead. No benefits. No long-term commitment. Perfect for companies that need compliance expertise on demand—whether you're a startup building your first program, a high-growth organization preparing for due diligence, or a business scaling toward commercialization. Our model adapts to your needs, providing fractional leadership and targeted support that grows with you.",
      icon: ClockIcon,
      color: "#4CAF50" // Green
    },
    {
      title: "Specialized",
      description: "Specialized Compliance Expertise—Tailored for Your Needs\n\nUnlike large compliance vendors, we deliver high-touch, customized solutions from a seasoned professional who has sat in the compliance leader's seat. Our experience spans the full spectrum of healthcare compliance—from life sciences and pharmaceutical manufacturing to healthcare technology, digital health, and Medicare Advantage plans.\n\nWe understand the realities of tight timelines, regulatory complexity, and operational pressure—whether you're a startup building your first compliance program, a company preparing for due diligence, or an established organization scaling for growth. Our deep knowledge of industry culture and regulatory nuance means we don't just advise—we help you execute with confidence and precision.",
      icon: StarIcon,
      color: "#6B2D8F" // Purple
    }
  ]

  return (
    <section className="bg-[#212121] py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">About JSM Compliance</h2>
          <div className="w-24 h-1 bg-[#4CAF50] mb-8"></div>

          {/* Professional Copy - Asymmetric Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Your Compliance Advantage</h3>

              <p className="text-gray-300 leading-relaxed text-lg">
                Why pay over $1,000 per hour to big law firms for compliance advice when you can get senior-level expertise at a fraction of the cost? At JSM Compliance Consulting, we deliver real-world solutions—not just theory—designed to keep your business moving forward. Our boutique model means no bloated overhead, no unnecessary fees, and no long-term commitments. Just expert guidance, hands-on execution, and measurable results.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                Founded by a seasoned healthcare compliance executive with over 20 years of experience, we specialize in helping life sciences companies, healthcare tech innovators, and Medicare Advantage plan sponsors navigate the toughest regulatory challenges with confidence and agility.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-[#4CAF50] mb-4">Why Choose JSM Compliance Consulting?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#4CAF50] mr-3 text-xl">✓</span>
                    <span className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Affordable Expertise</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4CAF50] mr-3 text-xl">✓</span>
                    <span className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Hands-On Execution</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4CAF50] mr-3 text-xl">✓</span>
                    <span className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Agility & Flexibility</strong>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-[#4CAF50] mb-4">What We Deliver</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  From GxP compliance and clinical trial oversight to FDA/EMA inspection readiness, Medicare Advantage audits, privacy and security risk management, and M&A due diligence, we turn compliance from a burden into a strategic advantage.
                </p>
              </div>

              {/* Key Services Highlight */}
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold text-[#4CAF50] mb-4">Core Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#4CAF50] mr-3 text-xl">✓</span>
                    <span className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Fractional Compliance Leadership:</strong> Acting Head of Compliance, board and executive reporting, policy and SOP development, inspection readiness and mock audits
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4CAF50] mr-3 text-xl">✓</span>
                    <span className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Targeted Compliance Solutions:</strong> GxP compliance (GCP, GMP, GLP), clinical trial oversight and monitoring, vendor qualification and due diligence, CAPA and deviation management, compliance issue management and investigations, Medicare Advantage program compliance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4CAF50] mr-3 text-xl">✓</span>
                    <span className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Privacy & Security Expertise:</strong> HIPAA compliance, data privacy assessments, cybersecurity risk management, incident response planning, technology vendor risk reviews
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4CAF50] mr-3 text-xl">✓</span>
                    <span className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Strategy & Infrastructure:</strong> Compliance program design, risk assessments and mitigation planning, training programs (live and virtual), compliance technology evaluation and implementation
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <p className="text-gray-300 leading-relaxed text-lg font-semibold">
                  Ready to stop overpaying for compliance and start getting results?
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Let's talk about how JSM Compliance Consulting can help you stay compliant, reduce risk, and accelerate growth—without breaking the bank.
                </p>
              </div>
            </div>

            {/* Right Side - Stats/Features Grid */}
            <div className="space-y-6">
              {/* Jennifer's Profile */}
              <div className="bg-[#1a1a1a] p-6 rounded-lg border-2 border-[#6B2D8F]/30 hover:border-[#6B2D8F] transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#4CAF50] mb-4">
                    <img
                      src={jenniferPhoto}
                      alt="Jennifer Scalise-Mullett"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Jennifer Scalise-Mullett</h4>
                  <p className="text-[#4CAF50] text-sm font-semibold mb-4">Founder & CEO</p>

                  <div className="text-left space-y-3">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Jennifer Scalise-Mullett is the Founder and CEO of JSM Compliance Consulting LLC, a boutique consulting firm focused on helping healthcare and life sciences organizations achieve and sustain compliance excellence. With more than two decades of experience in corporate compliance, privacy, and risk management, Jennifer brings deep expertise in designing and implementing tailored compliance programs aligned with complex regulatory requirements.
                    </p>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      Throughout her career, Jennifer has led compliance strategies for global pharmaceutical, biotech, and healthcare organizations, including Boston Pharmaceuticals, Innoviva Specialty Therapeutics, McKesson Corporation, Biogen Idec, Fresenius Medical Care, and Orion Health. She has built compliance programs from the ground up, managed complex and high-profile investigations, and advised executive leadership on mitigating risk and fostering a culture of integrity.
                    </p>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      At JSM Compliance Consulting, Jennifer applies her extensive industry experience to deliver practical, scalable compliance solutions. Her approach combines strategic insight with hands-on execution, enabling organizations to navigate regulatory challenges with confidence while supporting sustainable business growth.
                    </p>

                    <div className="mt-4">
                      <h5 className="text-[#4CAF50] font-semibold text-sm mb-2">Areas of Expertise</h5>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• Healthcare & Life Sciences Compliance</li>
                        <li>• Enterprise Risk Management</li>
                        <li>• Investigations & Audits</li>
                        <li>• Regulatory Affairs & Transparency Reporting</li>
                        <li>• Compliance Program Development & Training</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg border-2 border-[#4CAF50]/30 hover:border-[#4CAF50] transition-all duration-300">
                <div className="text-[#6B2D8F] text-4xl font-bold mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Global Support Availability</div>
              </div>
            </div>
          </div>
        </div>

        {/* Differentiators Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Why Choose JSM Compliance</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => {
              const IconComponent = item.icon

              return (
                <div
                  key={index}
                  className="bg-[#1a1a1a] p-8 rounded-lg border-2 border-transparent hover:border-[#6B2D8F] transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
                  style={{
                    boxShadow: `0 4px 20px ${item.color}10`
                  }}
                >
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center w-16 h-16 mb-6 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      backgroundColor: `${item.color}20`
                    }}
                  >
                    <IconComponent
                      className="w-8 h-8"
                      style={{ color: item.color }}
                    />
                  </div>

                  {/* Title */}
                  <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>

                  {/* Description */}
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    {item.description.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-[#6B2D8F]/20 to-[#4CAF50]/20 p-8 rounded-lg border-l-4 border-[#4CAF50]">
          <p className="text-xl text-white italic leading-relaxed">
            "Our mission is to deliver agile, expert-driven compliance solutions that empower life sciences companies to navigate regulatory complexity with confidence, integrity, and efficiency."
          </p>
          <p className="text-gray-400 mt-4 text-right">— JSM Compliance Solutions Leadership Team</p>
        </div>
      </div>
    </section>
  )
}

export default About
