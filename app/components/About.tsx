'use client'
import React from 'react'
import { Lightbulb, Target, Users, Zap } from 'lucide-react'

interface AboutProps {
  locale?: string
}

const content = {
  en: {
    subtitle: "ABOUT US",
    title: "Digital Transformation Experts",
    description: "At Simplifika, we are pioneers in enterprise digital transformation, combining technological innovation with practical solutions to drive your business growth.",
    features: [
      {
        title: "Continuous Innovation",
        description: "We implement the latest technologies and agile methodologies to keep your company at the digital forefront.",
        Icon: Lightbulb
      },
      {
        title: "Custom Solutions",
        description: "We develop unique strategies adapted to your company's specific objectives and challenges.",
        Icon: Target
      },
      {
        title: "Specialized Team",
        description: "Our technology and process experts are certified in the latest automation tools.",
        Icon: Users
      },
      {
        title: "Measurable Results",
        description: "We guarantee clear ROI with precise metrics and tangible results in your operation.",
        Icon: Zap
      }
    ]
  },
  es: {
    subtitle: "SOBRE NOSOTROS",
    title: "Expertos en Transformación Digital",
    description: "En Simplifika, somos pioneros en la transformación digital empresarial, combinando innovación tecnológica con soluciones prácticas para impulsar el crecimiento de su negocio.",
    features: [
      {
        title: "Innovación Continua",
        description: "Implementamos las últimas tecnologías y metodologías ágiles para mantener su empresa a la vanguardia digital.",
        Icon: Lightbulb
      },
      {
        title: "Soluciones Personalizadas",
        description: "Desarrollamos estrategias únicas adaptadas a los objetivos específicos y desafíos de su empresa.",
        Icon: Target
      },
      {
        title: "Equipo Especializado",
        description: "Nuestros expertos en tecnología y procesos están certificados en las últimas herramientas de automatización.",
        Icon: Users
      },
      {
        title: "Resultados Medibles",
        description: "Garantizamos un ROI claro con métricas precisas y resultados tangibles en su operación.",
        Icon: Zap
      }
    ]
  }
}

export default function About({ locale = 'es' }: AboutProps) {
  const t = content[locale as keyof typeof content]

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">
            {t.subtitle}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-background mb-6">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.features.map((feature, index) => (
            <div 
              key={index}
              className="flex gap-4 p-6 rounded-lg bg-gray-50"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                  <feature.Icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-background mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 