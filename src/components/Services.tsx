import { useState } from 'react'
import {
  UserCircleIcon,
  BeakerIcon,
  ChartBarIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services = [
    {
      title: "Fractional Compliance Leadership",
      description: "Acting Head of Compliance, board and executive reporting, policy and SOP development, inspection readiness and mock audits.",
      icon: UserCircleIcon,
      details: [
        "Acting Head of Compliance",
        "Board and executive reporting",
        "Policy and SOP development",
        "Inspection readiness and mock audits"
      ],
      color: "#6B2D8F"
    },
    {
      title: "Targeted Compliance Solutions",
      description: "GxP compliance, clinical trial oversight, vendor qualification, CAPA management, compliance investigations, and Medicare Advantage program compliance.",
      icon: BeakerIcon,
      details: [
        "GxP compliance (GCP, GMP, GLP)",
        "Clinical trial oversight and monitoring",
        "Vendor qualification and due diligence",
        "CAPA and deviation management",
        "Compliance issue management and investigations",
        "Medicare Advantage program compliance"
      ],
      color: "#8B3FA8"
    },
    {
      title: "Privacy & Security Expertise",
      description: "HIPAA compliance, data privacy assessments, cybersecurity risk management, incident response planning, technology vendor risk reviews.",
      icon: ChartBarIcon,
      details: [
        "HIPAA compliance",
        "Data privacy assessments",
        "Cybersecurity risk management",
        "Incident response planning",
        "Technology vendor risk reviews"
      ],
      color: "#9B4FC1"
    },
    {
      title: "Strategy & Infrastructure",
      description: "Compliance program design, risk assessments and mitigation planning, training programs (live and virtual), compliance technology evaluation and implementation.",
      icon: RocketLaunchIcon,
      details: [
        "Compliance program design",
        "Risk assessments and mitigation planning",
        "Training programs (live and virtual)",
        "Compliance technology evaluation and implementation"
      ],
      color: "#AB5FDB"
    }
  ]

  return (
    <section className="bg-[#1a1a1a] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Compliance Expertise That Works for You</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-gray-300 leading-relaxed text-lg">
              At JSM Compliance Consulting, we deliver senior-level compliance leadership and hands-on execution—without the law firm price tag. Our boutique model means no overhead, no benefits, and no long-term commitment. Just flexible, scalable solutions designed to meet your unique needs.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Whether you're a startup building your first compliance program, a company preparing for due diligence, or an established organization scaling for growth, we help you navigate regulatory complexity with confidence, integrity, and efficiency.
            </p>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-[#4CAF50] mb-4">Why Choose Us?</h3>
              <ul className="text-left max-w-3xl mx-auto space-y-3">
                <li className="flex items-start">
                  <span className="text-[#4CAF50] mr-3 text-xl">✓</span>
                  <span className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Affordable Expertise:</strong> Why pay over $1,000/hour to big law firms when you can access senior-level compliance leadership for a fraction of the cost?
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4CAF50] mr-3 text-xl">✓</span>
                  <span className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Hands-On Execution:</strong> We don't just advise—we roll up our sleeves and get it done.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4CAF50] mr-3 text-xl">✓</span>
                  <span className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Agility & Flexibility:</strong> Perfect for clinical-stage companies, venture-backed startups, healthcare tech innovators, and Medicare Advantage plan sponsors.
                  </span>
                </li>
              </ul>
            </div>

            {/* Visual Separator */}
            <div className="mt-16 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isHovered = hoveredIndex === index

            return (
              <div
                key={index}
                className="relative bg-[#212121] p-6 rounded-lg border-2 border-transparent hover:border-[#6B2D8F] hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transform: isHovered ? 'scale(1.05) translateY(-8px)' : 'scale(1)',
                  boxShadow: isHovered ? `0 20px 60px ${service.color}40` : 'none'
                }}
              >
                {/* Animated background gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}20, transparent)`
                  }}
                />

                {/* Icon container with animation */}
                <div
                  className="flex items-center justify-center w-16 h-16 mb-4 rounded-lg transition-all duration-300"
                  style={{
                    backgroundColor: isHovered ? `${service.color}30` : `${service.color}10`,
                    transform: isHovered ? 'rotate(8deg) scale(1.1)' : 'rotate(0) scale(1)'
                  }}
                >
                  <IconComponent
                    className="w-8 h-8 transition-colors duration-300"
                    style={{ color: service.color }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 relative z-10">
                  {service.title}
                </h3>

                {/* Base description */}
                <p className={`text-gray-400 leading-relaxed mb-4 relative z-10 transition-all duration-300 ${isHovered ? 'opacity-80' : 'opacity-100'}`}>
                  {service.description}
                </p>

                {/* Detailed information - reveals on hover */}
                <div
                  className="relative z-10 transition-all duration-300 overflow-hidden"
                  style={{
                    maxHeight: isHovered ? '300px' : '0',
                    opacity: isHovered ? 1 : 0
                  }}
                >
                  <div className="border-t border-gray-700 pt-4 mt-2">
                    <p className="text-sm font-semibold mb-2" style={{ color: service.color }}>
                      Key Offerings:
                    </p>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-300 flex items-start"
                          style={{
                            animation: isHovered ? `slideIn 0.3s ease-out ${idx * 0.1}s forwards` : 'none',
                            opacity: isHovered ? 1 : 0,
                            transform: isHovered ? 'translateX(0)' : 'translateX(-10px)'
                          }}
                        >
                          <span className="mr-2" style={{ color: service.color }}>▸</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover indicator */}
                <div
                  className="absolute bottom-4 right-4 text-xs font-medium transition-all duration-300"
                  style={{
                    color: service.color,
                    opacity: isHovered ? 0 : 0.6
                  }}
                >
                  Hover for details
                </div>
              </div>
            )
          })}
        </div>

        {/* Industries We Serve */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Industries We Serve</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="text-[#4CAF50] mr-3 text-xl">▸</span>
              <span className="text-gray-300 leading-relaxed">Life Sciences & Pharmaceutical Manufacturing</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4CAF50] mr-3 text-xl">▸</span>
              <span className="text-gray-300 leading-relaxed">Healthcare Technology & Digital Health</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4CAF50] mr-3 text-xl">▸</span>
              <span className="text-gray-300 leading-relaxed">Medicare Advantage & Health Plans</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4CAF50] mr-3 text-xl">▸</span>
              <span className="text-gray-300 leading-relaxed">Startups & Companies Under Due Diligence</span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-[#6B2D8F]/20 to-[#4CAF50]/20 p-8 rounded-lg border-l-4 border-[#4CAF50]">
          <p className="text-2xl text-white font-semibold mb-4 text-center">
            Ready to stop overpaying for compliance and start getting results?
          </p>
          <p className="text-xl text-gray-300 leading-relaxed text-center">
            Contact us today to learn how JSM Compliance Consulting can help you stay compliant, reduce risk, and accelerate growth—without breaking the bank.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}

export default Services
