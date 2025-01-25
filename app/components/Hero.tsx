'use client'
import React from 'react'
import { Check } from 'lucide-react'

interface HeroProps {
  locale?: string
}

const content = {
  es: {
    title1: 'Transforme su Negocio con',
    title2: 'Automatización Inteligente',
    subtitle: 'Optimice sus procesos empresariales y aumente la eficiencia con nuestras soluciones de automatización personalizadas.',
    cta: 'Consulta Gratuita',
    features: [
      'Reducción de costos operativos hasta un 40%',
      'Automatización de tareas repetitivas',
      'Análisis de datos en tiempo real',
      'Soporte técnico especializado 24/7'
    ]
  },
  en: {
    title1: 'Transform your Business with',
    title2: 'Intelligent Automation',
    subtitle: 'Optimize your business processes and increase efficiency with our customized automation solutions.',
    cta: 'Free Consultation',
    features: [
      'Reduce operational costs by up to 40%',
      'Automation of repetitive tasks',
      'Real-time data analysis',
      'Specialized technical support 24/7'
    ]
  }
}

const Hero = ({ locale = 'es' }: HeroProps) => {
  const t = content[locale as keyof typeof content]
  const isEnglish = locale === 'en'

  return (
    <section className="bg-background">
      <div className="bg-background min-h-[85vh] flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8">
              <span className="text-primary">{t.title1}</span>
              {' '}
              <span className="text-white">{t.title2}</span>
              <br />
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-10 sm:mb-12 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
            
            <a
              href={isEnglish ? '/en/contact' : '/contact'}
              className="inline-block w-full sm:w-auto bg-primary text-white px-6 sm:px-8 py-3 rounded-md text-base sm:text-lg font-medium 
                hover:bg-primary/90 transition-colors duration-300 mb-10 sm:mb-14"
            >
              {t.cta}
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {t.features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 bg-[#0B0F13]/40 backdrop-blur-sm rounded-lg p-6 text-left"
                >
                  <div className="text-primary mt-1">
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M20 6L9 17L4 12" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-medium">
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 