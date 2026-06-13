'use client'

import { motion } from 'framer-motion'

export function LocationMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-2xl overflow-hidden border border-gray-700/50 h-[300px] lg:h-[400px] shadow-xl">
        <iframe
          title="Ubicación Edwar Tech - Mercado Bambú, Lurín"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2!2d-76.8756029!3d-12.2749935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bce1e8d38ab5%3A0x378f696e6a2ce34f!2sEdwar!5e0!3m2!1ses!2spe!4v1"
        />
      </div>
    </motion.div>
  )
}
