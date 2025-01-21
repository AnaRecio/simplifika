'use client'
import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('Supabase URL:', supabaseUrl?.substring(0, 10) + '...')
console.log('Anon Key exists:', !!supabaseAnonKey)

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

const content = {
  en: {
    title: "Get in Touch",
    subtitle: "Contact us today and let's discuss how we can help transform your business.",
    name: "Full Name",
    company: "Company",
    email: "Email",
    phone: "Phone",
    message: "Message",
    submit: "Send Message",
    success: "Message sent successfully!",
    error: "There was an error sending your message. Please try again."
  },
  es: {
    title: "Contáctenos",
    subtitle: "Contáctenos hoy y conversemos sobre cómo podemos ayudar a transformar su negocio.",
    name: "Nombre Completo",
    company: "Empresa",
    email: "Correo Electrónico",
    phone: "Teléfono",
    message: "Mensaje",
    submit: "Enviar Mensaje",
    success: "¡Mensaje enviado exitosamente!",
    error: "Hubo un error al enviar tu mensaje. Por favor intenta nuevamente."
  }
}

interface ContactFormProps {
  locale?: string
}

export default function ContactForm({ locale = 'es' }: ContactFormProps) {
  const t = content[locale as keyof typeof content]
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const formPayload = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      language: locale.toUpperCase(),
      created_at: new Date().toISOString()
    }

    console.log('Sending data:', formPayload)

    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([formPayload])
        .select()

      if (error) {
        console.error('Insert error:', error)
        setErrorMessage('Error al guardar: ' + error.message)
        setStatus('error')
        return
      }

      console.log('Insert successful:', data)
      setStatus('success')
      setFormData({ name: '', company: '', email: '', phone: '', message: '' })
    } catch (error: any) {
      console.error('Unexpected error:', error)
      setErrorMessage(error?.message || 'Error inesperado')
      setStatus('error')
    }
  }

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-background mb-6">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-background mb-2">
                {t.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-50 text-gray-900 border-2 border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-background mb-2">
                {t.company}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-50 text-gray-900 border-2 border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-background mb-2">
                {t.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-50 text-gray-900 border-2 border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-background mb-2">
                {t.phone}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-50 text-gray-900 border-2 border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-background mb-2">
                {t.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-50 text-gray-900 border-2 border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50"
              >
                {status === 'loading' ? '...' : t.submit}
              </button>
            </div>

            {status === 'success' && (
              <p className="text-green-600 text-center">{t.success}</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center">
                {errorMessage || t.error}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
} 