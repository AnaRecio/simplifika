'use client'
import React from 'react'
import { Settings, Users, MessageSquare, BarChart } from 'lucide-react'

const content = {
  en: {
    subtitle: "OUR SERVICES",
    title: "Innovative Technology Solutions",
    description: "At Simplifika, we develop advanced technological solutions that transform your company's operation, optimize processes and maximize your growth potential.",
    services: [
      {
        icon: Settings,
        title: "Process Automation",
        description: "We transform your operations through intelligent automation solutions, reducing costs and eliminating repetitive tasks."
      },
      {
        icon: Users,
        title: "Virtual Assistants",
        description: "We enhance your team's productivity with intelligent virtual assistants that optimize daily management."
      },
      {
        icon: MessageSquare,
        title: "Custom Chatbots",
        description: "We revolutionize your customer service with intelligent chatbots that provide accurate responses 24/7."
      },
      {
        icon: BarChart,
        title: "Data Analysis",
        description: "We drive strategic decisions with advanced data analysis that reveals growth opportunities."
      }
    ]
  },
  es: {
    subtitle: "NUESTROS SERVICIOS",
    title: "Soluciones Tecnológicas Innovadoras",
    description: "En Simplifika, desarrollamos soluciones tecnológicas avanzadas que transforman la operación de su empresa, optimizan procesos y maximizan su potencial de crecimiento.",
    services: [
      {
        icon: Settings,
        title: "Automatización de Procesos",
        description: "Transformamos sus operaciones mediante soluciones de automatización inteligente, reduciendo costos y eliminando tareas repetitivas."
      },
      {
        icon: Users,
        title: "Asistentes Virtuales",
        description: "Potenciamos la productividad de su equipo con asistentes virtuales inteligentes que optimizan la gestión diaria."
      },
      {
        icon: MessageSquare,
        title: "Chatbots Personalizados",
        description: "Revolucionamos su atención al cliente con chatbots inteligentes que brindan respuestas precisas 24/7."
      },
      {
        icon: BarChart,
        title: "Análisis de Datos",
        description: "Impulsamos decisiones estratégicas con análisis de datos avanzados que revelan oportunidades de crecimiento."
      }
    ]
  }
}

interface ServicesProps {
  locale?: string
}

export default function Services({ locale = 'es' }: ServicesProps) {
  const t = content[locale as keyof typeof content]

  return (
    <section id="servicios" className="bg-white py-16 sm:py-24">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-gray-50 cursor-pointer"
            >
              <div className="bg-primary p-3 rounded-lg mb-4 transition-transform duration-300 hover:scale-110 flex items-center justify-center">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-background mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 