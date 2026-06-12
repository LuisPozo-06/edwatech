'use client'

import { motion } from 'framer-motion'
import { Clock, MapPin, Phone, MessageCircle, Facebook, Instagram, Music2, Youtube, MessageSquare } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'

const contactCards = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Horarios',
    content: (
      <div>
        <p className="text-lg font-semibold text-white">{SITE_CONFIG.hours.days}</p>
        <p className="text-edwar-silver/60">{SITE_CONFIG.hours.hours}</p>
        <p className="text-sm text-edwar-blue mt-2 font-medium">¡Atención todos los días!</p>
      </div>
    ),
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'Dirección',
    content: (
      <div>
        <p className="text-edwar-silver/80">{SITE_CONFIG.address.street}</p>
        <p className="text-edwar-silver/60">{SITE_CONFIG.address.district}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.country}</p>
      </div>
    ),
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: 'Teléfono',
    content: (
      <div>
        <p className="text-lg font-semibold text-white mb-3">{SITE_CONFIG.phone}</p>
        <a
          href={`https://wa.me/${SITE_CONFIG.phoneRaw}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-all duration-200"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
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
          <p className="text-edwar-silver/60 max-w-2xl mx-auto mb-6">
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
            >
              <Card className="h-full">
                <div className="text-edwar-blue mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                {card.content}
              </Card>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full">
              <div className="text-edwar-blue mb-4">
                <Facebook className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">Redes Sociales</h3>
              <div className="flex gap-3">
                {[
                  { icon: <Facebook className="w-5 h-5" />, href: SITE_CONFIG.social.facebook, label: 'Facebook', color: 'hover:bg-blue-600' },
                  { icon: <Instagram className="w-5 h-5" />, href: SITE_CONFIG.social.instagram, label: 'Instagram', color: 'hover:bg-pink-600' },
                  { icon: <Music2 className="w-5 h-5" />, href: SITE_CONFIG.social.tiktok, label: 'TikTok', color: 'hover:bg-gray-800' },
                  { icon: <Youtube className="w-5 h-5" />, href: SITE_CONFIG.social.youtube, label: 'YouTube', color: 'hover:bg-red-600' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl bg-white/5 ${social.color} text-edwar-silver hover:text-white transition-all duration-200`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <Card className="h-full">
              <div className="text-edwar-blue mb-4">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Quejas y Reclamos</h3>
              <p className="text-sm text-edwar-silver/60 mb-4">
                Tu opinión es importante para nosotros. Comparte tu experiencia y te ayudaremos a resolverla.
              </p>
              <Button
                href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent('Hola Edwar Tech, tengo una queja o reclamo sobre...')}`}
                variant="outline"
                size="sm"
              >
                Ir a PQRS
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
