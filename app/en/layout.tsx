import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simplifika - Enterprise Digital Transformation',
  description: 'Intelligent automation solutions and digital transformation for businesses.',
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar locale="en" />
      {children}
    </>
  )
} 