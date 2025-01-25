'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const navigation = [
  { name: 'Servicios', href: '#servicios', nameEn: 'Services' },
  { 
    name: 'Contacto', 
    href: '/contact', 
    nameEn: 'Contact', 
    isPage: true,
    hrefEn: '/en/contact'
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Tienda', href: '/tienda', nameEn: 'Store' }
]

interface NavbarProps {
  locale?: string
}

export default function Navbar({ locale = 'es' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isEnglish = locale === 'en'
  const isContactPage = pathname.includes('/contact')
  
  const getLanguageTogglePath = () => {
    if (isEnglish) {
      // Si estamos en inglés, removemos '/en' del path
      return pathname.replace('/en', '') || '/'
    } else {
      // Si estamos en español, agregamos '/en' al path
      const path = pathname === '/' ? '' : pathname
      return `/en${path}`
    }
  }

  return (
    <nav className="bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href={isEnglish ? '/en' : '/'}
              className="text-white text-xl font-bold hover:text-primary transition-colors duration-300"
            >
              Simplifika
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {!isContactPage && navigation.map((item) => (
              <Link
                key={item.name}
                href={isEnglish && item.hrefEn ? item.hrefEn : item.href}
                className="text-gray-300 hover:text-primary transition-colors duration-300 text-base font-medium tracking-wide"
              >
                {isEnglish ? item.nameEn || item.name : item.name}
              </Link>
            ))}
            <Link
              href={getLanguageTogglePath()}
              className="text-gray-300 hover:text-primary transition-colors duration-300"
            >
              {isEnglish ? 'ES' : 'EN'}
            </Link>
          </div>

          {/* Mobile Menu Button - Solo mostrar si no estamos en la página de contacto */}
          {!isContactPage && (
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>
          )}

          {/* Mobile Language Toggle - Mostrar cuando estamos en la página de contacto */}
          {isContactPage && (
            <div className="md:hidden">
              <button
                onClick={() => {
                  window.location.href = isEnglish ? '/' : '/en'
                }}
                className="text-[#40B7C7] hover:text-white transition-colors duration-300 text-base font-semibold tracking-wide"
              >
                {isEnglish ? 'ES' : 'EN'}
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu - Solo mostrar si no estamos en la página de contacto */}
        {!isContactPage && isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={isEnglish && item.hrefEn ? item.hrefEn : item.href}
                  className="text-gray-300 hover:text-[#40B7C7] block px-3 py-2 text-lg font-medium tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {isEnglish ? item.nameEn || item.name : item.name}
                </Link>
              ))}
              <Link
                href={getLanguageTogglePath()}
                className="text-[#40B7C7] hover:text-white block px-3 py-2 text-lg font-semibold tracking-wide w-full text-left"
                onClick={() => setIsOpen(false)}
              >
                {isEnglish ? 'ES' : 'EN'}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}