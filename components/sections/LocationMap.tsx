'use client'

import { motion } from 'framer-motion'
import { SITE_CONFIG } from '@/lib/constants'

export function LocationMap() {
  const src = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${SITE_CONFIG.coordinates.lat},${SITE_CONFIG.coordinates.lng}&center=${SITE_CONFIG.coordinates.lat},${SITE_CONFIG.coordinates.lng}&zoom=17&language=es`

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-2xl overflow-hidden border border-white/10 h-[300px] lg:h-[400px]">
        <iframe
          title="Ubicación Edwar Tech"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={src}
        />
      </div>
    </motion.div>
  )
}
