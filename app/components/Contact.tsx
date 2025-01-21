'use client'
import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

interface ContactProps {
  locale?: string
}

const content = {
  en: {
    subtitle: "CONTACT",
    title: "Ready to simplify your business?",
    description: "Contact us today and discover how we can help you optimize your processes and increase your productivity.",
    contactTitle: "Contact Information",
    contactInfo: [
      {
        icon: MapPin,
        content: "San José, Costa Rica"
      },
      {
        icon: Phone,
        content: "WhatsApp: +1 231-681-8969",
        isLink: true,
        href: "https://wa.me/12316818969"
      },
      {
        icon: Mail,
        content: "ventas@simplifika.tech",
        isLink: true,
        href: "mailto:ventas@simplifika.tech"
      }
    ]
  },
  es: {
    subtitle: "CONTACTO",
    title: "¿Está listo para simplificar su negocio?",
    description: "Contáctenos hoy y descubra cómo podemos ayudarle a optimizar sus procesos y aumentar su productividad.",
    contactTitle: "Información de contacto",
    contactInfo: [
      {
        icon: MapPin,
        content: "San José, Costa Rica"
      },
      {
        icon: Phone,
        content: "WhatsApp: +1 231-681-8969",
        isLink: true,
        href: "https://wa.me/12316818969"
      },
      {
        icon: Mail,
        content: "ventas@simplifika.tech",
        isLink: true,
        href: "mailto:ventas@simplifika.tech"
      }
    ]
  }
}

export default function Contact({ locale = 'es' }: ContactProps) {
  const t = content[locale as keyof typeof content]

  return (
    <section className="bg-gray-100 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-wider mb-4">
            {t.subtitle}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Contact Information
          </h3>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <p className="text-gray-600">San José, Costa Rica</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <a 
                href="https://wa.me/12316818969" 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                WhatsApp: +1 231-681-8969
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <a 
                href="mailto:ventas@simplifika.tech" 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                ventas@simplifika.tech
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 