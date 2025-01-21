'use client'
import { useEffect } from 'react'

export default function ChatBot() {
  useEffect(() => {
    // Cargar el script de inyección de Botpress
    const injectScript = document.createElement('script')
    injectScript.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js'
    document.body.appendChild(injectScript)

    // Cargar el script de configuración específico
    const configScript = document.createElement('script')
    configScript.src = 'https://files.bpcontent.cloud/2024/12/26/02/20241226022029-7MCX0SD2.js'
    document.body.appendChild(configScript)

    // Cleanup al desmontar el componente
    return () => {
      document.body.removeChild(injectScript)
      document.body.removeChild(configScript)
    }
  }, [])

  return null // Este componente no renderiza nada visualmente
} 