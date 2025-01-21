'use client'
import React from 'react'
import { Twitter, Linkedin, Instagram } from 'lucide-react'

interface FooterProps {
  locale?: string
}

const content = {
  en: {
    rights: "All rights reserved."
  },
  es: {
    rights: "Todos los derechos reservados."
  }
}

export default function Footer({ locale = 'es' }: FooterProps) {
  const t = content[locale as keyof typeof content]
  
  return (
    <footer className="bg-background py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a 
            href="https://twitter.com/simplifika" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors duration-300"
          >
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/company/simplifika" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors duration-300"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://instagram.com/simplifika" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors duration-300"
          >
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </a>
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} Simplifika. {t.rights}
        </p>
      </div>
    </footer>
  )
} 