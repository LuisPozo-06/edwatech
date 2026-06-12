'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { SITE_CONFIG } from '@/lib/constants'

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  )
}
