'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export function CtaSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-r from-edwar-blue via-blue-600 to-edwar-blue">
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

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
        <p className="text-blue-100/80 mb-8 max-w-xl mx-auto text-lg">
          Contáctanos ahora y recibe un diagnóstico gratuito. Estamos listos para ayudarte.
        </p>
        <motion.a
          href={`https://wa.me/${SITE_CONFIG.phoneRaw}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-edwar-blue px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <MessageCircle className="w-6 h-6" />
          Contáctanos por WhatsApp
        </motion.a>
      </motion.div>
    </section>
  )
}
