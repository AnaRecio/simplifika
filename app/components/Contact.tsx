'use client'
import React from 'react'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import type { ReactNode } from 'react'

interface ContactInfo {
  icon: typeof MapPinIcon | typeof PhoneIcon | typeof EnvelopeIcon
  content: string
  href?: string
}

const content = {
  en: {
    title: "Ready to simplify your business?",
    subtitle: "Contact",
    description: "Contact us today and discover how we can help you optimize your processes and increase your productivity.",
    contactInfo: "Contact Information",
    contactDetails: [
      {
        icon: MapPinIcon,
        content: "San José, Costa Rica"
      },
      {
        icon: PhoneIcon,
        content: "WhatsApp: +1 231-681-8969",
        href: "https://wa.me/12316818969"
      },
      {
        icon: EnvelopeIcon,
        content: "ventas@simplifika.tech",
        href: "mailto:sales@simplifika.tech"
      }
    ] as ContactInfo[]
  },
  es: {
    title: "¿Listo para simplificar tu negocio?",
    subtitle: "Contacto",
    description: "Contáctanos hoy y descubre cómo podemos ayudarte a optimizar tus procesos y aumentar tu productividad.",
    contactInfo: "Información de Contacto",
    contactDetails: [
      {
        icon: MapPinIcon,
        content: "San José, Costa Rica"
      },
      {
        icon: PhoneIcon,
        content: "WhatsApp: +1 231-681-8969",
        href: "https://wa.me/12316818969"
      },
      {
        icon: EnvelopeIcon,
        content: "ventas@simplifika.tech",
        href: "mailto:ventas@simplifika.tech"
      }
    ] as ContactInfo[]
  }
}

interface ContactProps {
  locale?: 'en' | 'es'
}

export default function Contact({ locale = 'es' }: ContactProps) {
  const t = content[locale]

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
            {t.contactInfo}
          </h3>

          <div className="space-y-6">
            {t.contactDetails.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                {item.href ? (
                  <a 
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 