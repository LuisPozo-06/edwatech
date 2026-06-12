'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'

export function CtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-r from-edwar-blue to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1)_0%,transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          ¿Listo para reparar tu equipo?
        </h2>
        <p className="text-blue-100/80 mb-8 max-w-xl mx-auto">
          Contáctanos ahora y recibe un diagnóstico gratuito. Estamos listos para ayudarte.
        </p>
        <Button
          href={`https://wa.me/${SITE_CONFIG.phoneRaw}`}
          variant="secondary"
          size="lg"
          className="bg-white text-edwar-blue hover:bg-blue-50 shadow-xl"
        >
          <MessageCircle className="w-5 h-5" />
          Contáctanos por WhatsApp
        </Button>
      </motion.div>
    </section>
  )
}
