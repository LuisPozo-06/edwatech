'use client'

import { motion } from 'framer-motion'
import { DeviceCard } from './DeviceCard'
import { REPAIR_SERVICES } from '@/lib/constants'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'

export function RepairList() {
  const entries = Object.entries(REPAIR_SERVICES)

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Servicio de Reparación
          </h2>
          <p className="text-edwar-silver/60 max-w-2xl mx-auto mb-4">
            Nos especializamos en reparar equipos Apple
          </p>
          <p className="text-sm text-edwar-silver/40 italic">
            Los precios de diagnóstico y reparación varían según la moneda local
          </p>
        </motion.div>

        <div className="space-y-8">
          {entries.map(([key, device], index) => (
            <DeviceCard
              key={key}
              device={device}
              index={index}
              id={key}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            href={`https://wa.me/${SITE_CONFIG.phoneRaw}`}
            variant="primary"
            size="lg"
          >
            <MessageCircle className="w-5 h-5" />
            Consulta por WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
