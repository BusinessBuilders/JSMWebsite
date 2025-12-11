import { CurrencyDollarIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline'

const About = () => {
  const differentiators = [
    {
      title: "Affordable",
      description: "Law firms often charge $600–$1,200/hour for compliance-related work. Our model offers senior-level expertise at a fraction of the cost, with greater operational insight and hands-on execution.",
      icon: CurrencyDollarIcon,
      color: "#6B2D8F" // Purple
    },
    {
      title: "Flexible",
      description: "No overhead, benefits, or long-term commitment. Ideal for companies in clinical or pre-commercial stages that need scalable support.",
      icon: ClockIcon,
      color: "#4CAF50" // Green
    },
    {
      title: "Specialized",
      description: "Unlike large compliance vendors, we offer tailored, high-touch service from a professional who has sat in the seat of a compliance leader. Deep understanding of biotech culture, timelines, and regulatory nuance.",
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
              <p className="text-gray-300 leading-relaxed text-lg">
                JSM Compliance Consulting is a boutique consulting firm founded by a seasoned healthcare compliance executive with over 20 years of experience in the life sciences industry. We provide fractional compliance leadership, targeted regulatory support, and strategic compliance planning to biotech and pharmaceutical companies navigating the complex regulatory landscape. Our mission is to deliver agile, expert-driven compliance solutions that empower life sciences companies to navigate regulatory complexity with confidence, integrity, and efficiency.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                Unlike large consulting firms or law firms that charge premium rates, we offer senior-level expertise with greater operational insight and hands-on execution at a fraction of the cost. Our boutique model provides the flexibility that growing life sciences companies need—no overhead, no benefits, and no long-term commitment. We understand the unique challenges faced by clinical-stage biotech companies, venture-backed startups, and emerging medtech firms, having sat in the seat of a compliance leader and experienced firsthand the pressure of regulatory timelines, inspection readiness, and resource constraints.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                From GxP compliance and clinical trial oversight to FDA/EMA inspection preparation and M&A due diligence, JSM Compliance Consulting delivers tailored, high-touch service that transforms regulatory challenges into strategic advantages. We bring deep understanding of biotech culture, regulatory nuance, and the practical realities of building compliant operations in fast-paced, resource-conscious environments. Whether you need fractional compliance leadership, targeted project support, or comprehensive compliance infrastructure development, we provide the expertise and flexibility to help you succeed.
              </p>

              {/* Key Services Highlight */}
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold text-[#4CAF50] mb-4">Core Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#4CAF50] mr-3 text-xl">✓</span>
                    <span className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Fractional Compliance:</strong> Acting Head of Compliance, board and executive reporting, policy and SOP development, inspection readiness and mock audits
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4CAF50] mr-3 text-xl">✓</span>
                    <span className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Targeted Compliance:</strong> GxP compliance (GCP, GMP, GLP), clinical trial oversight and monitoring, vendor qualification and due diligence, CAPA and deviation management
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
            </div>

            {/* Right Side - Stats/Features Grid */}
            <div className="space-y-6">
              <div className="bg-[#1a1a1a] p-6 rounded-lg border-2 border-[#6B2D8F]/30 hover:border-[#6B2D8F] transition-all duration-300">
                <div className="text-[#4CAF50] text-4xl font-bold mb-2">500+</div>
                <div className="text-gray-400 text-sm">Successful Projects Completed</div>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg border-2 border-[#4CAF50]/30 hover:border-[#4CAF50] transition-all duration-300">
                <div className="text-[#6B2D8F] text-4xl font-bold mb-2">100%</div>
                <div className="text-gray-400 text-sm">Regulatory Inspection Success Rate</div>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg border-2 border-[#6B2D8F]/30 hover:border-[#6B2D8F] transition-all duration-300">
                <div className="text-[#4CAF50] text-4xl font-bold mb-2">50+</div>
                <div className="text-gray-400 text-sm">Countries with Client Presence</div>
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
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
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
