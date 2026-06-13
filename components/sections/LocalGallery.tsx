'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone } from 'lucide-react'

export function LocalGallery() {
  return (
    <section className="py-20 bg-edwar-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-edwar-blue/10 text-edwar-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
            LOCAL FÍSICO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Visítanos en el Mercado Bambú
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Dos puestos para atenderte mejor en Lurín
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group overflow-hidden rounded-2xl border border-gray-700"
          >
            <img
              src="/imagen-servcio-tecnico-accesorios.png"
              alt="Edwar Tech - Fachada principal con letreros luminosos en Mercado Bambú, Lurín"
              className="w-full h-[280px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-edwar-blue" />
                <span className="text-edwar-blue font-semibold text-sm uppercase tracking-wider">
                  Fachada Principal
                </span>
              </div>
              <h3 className="text-white text-xl font-bold">
                Puestos C37 y D55
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                Mercado Bambú, Lurín
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group overflow-hidden rounded-2xl border border-gray-700"
          >
            <img
              src="/imagen-servciotecnico.png"
              alt="Edwar Tech - Vista nocturna del local con iluminación LED en Mercado Bambú"
              className="w-full h-[280px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-edwar-blue" />
                <span className="text-edwar-blue font-semibold text-sm uppercase tracking-wider">
                  Horario Extendido
                </span>
              </div>
              <h3 className="text-white text-xl font-bold">
                Abierto hasta las 9:00 pm
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                Todos los días, sin excepción
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: MapPin, text: 'Puestos C37 y D55, Mercado Bambú' },
            { icon: Clock, text: 'Lunes a Domingo: 8am - 9pm' },
            { icon: Phone, text: '+51 902 663 983' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-4 flex items-center gap-3"
            >
              <item.icon className="w-6 h-6 text-edwar-blue flex-shrink-0" />
              <span className="text-gray-200 font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
