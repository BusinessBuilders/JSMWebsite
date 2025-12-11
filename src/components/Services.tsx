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
      title: "Fractional Compliance Officer Services",
      description: "Flexible compliance leadership tailored to your needs. Get senior-level expertise without the overhead of a full-time hire.",
      icon: UserCircleIcon,
      details: [
        "Acting Head of Compliance (10–40 hours/month)",
        "Board and executive reporting",
        "Policy and SOP development",
        "Inspection readiness and mock audits"
      ],
      color: "#6B2D8F"
    },
    {
      title: "Targeted Compliance Services",
      description: "Specialized regulatory support for critical compliance needs. Expert guidance for GxP operations and clinical oversight.",
      icon: BeakerIcon,
      details: [
        "GxP compliance (GCP, GMP, GLP)",
        "Clinical trial oversight and monitoring",
        "Vendor qualification and due diligence",
        "CAPA and deviation management"
      ],
      color: "#8B3FA8"
    },
    {
      title: "Compliance Strategy & Infrastructure",
      description: "Build a robust compliance foundation. From program design to implementation, we help you establish sustainable compliance systems.",
      icon: ChartBarIcon,
      details: [
        "Compliance program design",
        "Risk assessments and mitigation planning",
        "Training programs (live and virtual)",
        "Compliance technology evaluation and implementation"
      ],
      color: "#9B4FC1"
    },
    {
      title: "Special Projects",
      description: "Expert support for critical compliance challenges. Navigate inspections, audits, and strategic initiatives with confidence.",
      icon: RocketLaunchIcon,
      details: [
        "FDA/EMA inspection prep",
        "483 response strategy",
        "M&A compliance due diligence",
        "Post-market surveillance compliance"
      ],
      color: "#AB5FDB"
    }
  ]

  return (
    <section className="bg-[#1a1a1a] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions for pharmaceutical, biotech, and medical device industries
          </p>
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
