'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { HERO_STATS, SITE_CONFIG } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/foto-header.png')",
          filter: 'blur(10px)',
          transform: 'scale(1.1)',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />

      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <img
              src="/logo-edwartech.png"
              alt="Edwar Tech"
              className="h-12 lg:h-14 w-auto"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Servicio Técnico{' '}
            <span className="text-gradient">Especializado Apple</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base sm:text-lg lg:text-xl text-edwar-silver/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Reparación profesional de iPhone, MacBook, iPad y Apple Watch con garantía y repuestos originales en Lurín
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="/reparaciones" size="lg" className="w-full sm:w-auto shadow-xl shadow-edwar-blue/20">
              Ver Servicios
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              href={`https://wa.me/${SITE_CONFIG.phoneRaw}`}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Ahora
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 lg:pb-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="backdrop-blur-md bg-white/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 text-center border border-white/10"
              >
                <div className="text-base sm:text-xl lg:text-2xl font-bold text-edwar-blue mb-0.5">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-edwar-silver/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
