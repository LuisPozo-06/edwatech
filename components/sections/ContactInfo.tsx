'use client'

import { motion } from 'framer-motion'
import { Clock, MapPin, Phone, MessageCircle, Facebook, Instagram, Music2, Youtube, MessageSquare, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'

const contactCards = [
  {
    icon: <Clock className="w-10 h-10" />,
    title: 'Horarios',
    content: (
      <div>
        <p className="text-lg font-semibold text-white">{SITE_CONFIG.hours.days}</p>
        <p className="text-gray-400">{SITE_CONFIG.hours.hours}</p>
        <p className="text-sm text-edwar-blue mt-2 font-medium">¡Atención todos los días!</p>
      </div>
    ),
  },
  {
    icon: <MapPin className="w-10 h-10" />,
    title: 'Dirección',
    content: (
      <div>
        <p className="text-gray-300">{SITE_CONFIG.address.street}</p>
        <p className="text-gray-400">{SITE_CONFIG.address.district}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.country}</p>
      </div>
    ),
  },
  {
    icon: <Phone className="w-10 h-10" />,
    title: 'Teléfono',
    content: (
      <div>
        <p className="text-lg font-semibold text-white mb-4">{SITE_CONFIG.phone}</p>
        <motion.a
          href={`https://wa.me/${SITE_CONFIG.phoneRaw}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </motion.a>
      </div>
    ),
  },
]

export function ContactInfo() {
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Nuestra Ubicación
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Visítanos en el Mercado Bambú, Lurín
          </p>
          <Button
            href={`https://wa.me/${SITE_CONFIG.phoneRaw}`}
            variant="primary"
            size="lg"
          >
            <MessageCircle className="w-5 h-5" />
            Escríbenos Ahora
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-edwar-blue/50 rounded-2xl p-6 hover:shadow-xl hover:shadow-edwar-blue/10 transition-all duration-300">
                <div className="text-edwar-blue mb-3">{card.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                {card.content}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="h-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-edwar-blue/50 rounded-2xl p-6 hover:shadow-xl hover:shadow-edwar-blue/10 transition-all duration-300">
              <div className="text-edwar-blue mb-3">
                <Facebook className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">Redes Sociales</h3>
              <div className="flex gap-3">
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-600 text-gray-400 hover:text-white transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href={SITE_CONFIG.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-black hover:border-gray-700 text-gray-400 hover:text-white transition-all duration-200 border border-transparent"
                  aria-label="TikTok"
                >
                  <Music2 className="w-6 h-6" />
                </a>
                <a
                  href={SITE_CONFIG.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-red-600 text-gray-400 hover:text-white transition-all duration-200"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            whileHover={{ y: -5 }}
          >
            <div className="h-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-edwar-blue/50 rounded-2xl p-6 hover:shadow-xl hover:shadow-edwar-blue/10 transition-all duration-300">
              <div className="text-edwar-blue mb-3">
                <Navigation className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Cómo llegar</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-edwar-blue" />
                  Frente a la Plaza de Armas de Lurín
                </p>
                <p className="flex items-start gap-2">
                  <Navigation className="w-4 h-4 mt-0.5 shrink-0 text-edwar-blue" />
                  A 5 min del Metropolitano (Estación Lurín)
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-edwar-blue" />
                  Estacionamiento disponible en el mercado
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="h-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-edwar-blue/50 rounded-2xl p-6 hover:shadow-xl hover:shadow-edwar-blue/10 transition-all duration-300">
              <div className="text-edwar-blue mb-3">
                <MessageSquare className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Quejas y Reclamos</h3>
              <p className="text-sm text-gray-400 mb-4">
                Tu opinión es importante para nosotros. Comparte tu experiencia y te ayudaremos a resolverla.
              </p>
              <Button
                href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent('Hola Edwar Tech, tengo una queja o reclamo sobre...')}`}
                variant="outline"
                size="md"
                className="w-full"
              >
                Ir a PQRS
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
